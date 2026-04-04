'use server';
const nodemailer = require("nodemailer");

async function sendEmail(fullname: string, email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: parseInt(process.env.NODEMAILER_PORT!),
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.USER_MAILER,
      to: process.env.USER_TO,
      subject: `${fullname} vous a envoyé un message`,
      html: `
        <h1>Message de ${fullname}</h1>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return {
      success: "Message envoyé avec succès, je vous répondrai dans les plus brefs délais. 🙂",
    };
  } catch (error: any) {
    return {
      error: "Un problème est survenu avec le service d'envoi, veuillez réessayer plus tard.",
    };
  }
}

export async function sendMessageServerAction(
  _previousState: any,
  formData: FormData
) {
  const fullname = (formData.get('fullname') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  // Validation du nom
  if (!fullname || fullname.length <= 2) {
    return {
      fullnameError: 'Votre nom doit contenir au moins 3 caractères.',
    };
  }

  // Validation de l'email
  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      emailError: "L'adresse email saisie ne semble pas valide. Vérifiez le format (ex: nom@domaine.com).",
    };
  }

  // Validation du message
  if (!message || message.length <= 10) {
    return {
      messageError: 'Votre message est trop court. Dites-moi en un peu plus !',
    };
  }

  // Envoi de l'email
  try {
    const response = await sendEmail(fullname, email, message);

    if (response.success) {
      return {
        success: "Message envoyé avec succès, je vous répondrai dans les plus brefs délais. 🙂",
      };
    }

    return {
      error: "Une erreur est survenue lors de l'envoi, veuillez réessayer plus tard.",
    };
  } catch (error: any) {
    return {
      error: "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.",
    };
  }
}