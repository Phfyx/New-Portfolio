import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>À propos de moi</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Un développeur frontend avec un parcours un peu atypique.
        </PageHeaderHeading>

        <PageHeaderDescription>
          Je m'appelle Mohamed Benomar, développeur Frontend basé en banlieue parisienne.
          Avant le code, j'étudiais l'Histoire — et cette formation m'a appris à analyser,
          synthétiser et surtout à écouter avant d'agir. Des qualités que je mets aujourd'hui
          au service de chaque projet web.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Je me spécialise sur l'écosystème React et TypeScript, avec une attention 
          particulière portée à l'accessibilité et à la qualité du code. 
          En alternance à l'ARS Île-de-France, j'ai contribué au développement 
          d'une application nationale utilisée par plusieurs milliers d'utilisateurs — 
          une expérience qui m'a appris à travailler sur des bases de code réelles, 
          en équipe et avec des contraintes métier concrètes.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Curieux et autonome, j'aime comprendre les besoins avant d'écrire la moindre
          ligne de code. Je suis également à l'aise côté backend avec Node.js et Express,
          et je continue d'approfondir mes connaissances pour devenir un développeur
          plus complet.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projets"
      />
    </>
  );
};

export default AboutMePage;