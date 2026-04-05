import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Expériences</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Chaque mission m'a appris quelque chose que les tutoriels ne peuvent pas enseigner.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Mon parcours professionnel a vraiment démarré en alternance à l'ARS 
          Île-de-France, où j'ai contribué au développement d'une application 
          React nationale utilisée par plusieurs milliers d'utilisateurs. 
          Une première expérience exigeante, loin des projets d'école — 
          avec de vraies contraintes métier, de vraies équipes, et de vrais 
          utilisateurs derrière chaque fonctionnalité livrée.
        </PageHeaderDescription>
        <PageHeaderDescription>
          C'est cette expérience qui m'a le plus formé : apprendre à lire 
          une base de code existante, comprendre les besoins avant de coder, 
          collaborer avec des équipes techniques et non-techniques, et livrer 
          des mises en production régulières. Des réflexes qu'on ne développe 
          qu'en conditions réelles.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Compétences"
        nextTitle="Formation"
      />
    </>
  );
};

export default ExperiencePage;