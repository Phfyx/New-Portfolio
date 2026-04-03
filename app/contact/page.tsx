import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Une idée, une opportunité, une question ? Je lis tout.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Que ce soit pour une opportunité professionnelle, une collaboration 
          ou simplement pour échanger — n'hésitez pas à m'écrire. Je réponds 
          sérieusement à chaque message.
        </PageHeaderDescription>
      </PageHeader>
      <div className="mt-4">
        <ContactForm />
      </div>
      <Pager
        prevHref="/education"
        nextHref="/"
        prevTitle="Education"
        nextTitle="Home"
      />
    </>
  );
};

export default ContactPage;