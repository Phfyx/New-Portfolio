import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Formation</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Un parcours atypique, une force singulière.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Mon chemin vers le développement web n'est pas linéaire — et c'est
          précisément ce qui le rend intéressant. D'une licence d'Histoire à
          une spécialisation Frontend, chaque étape a contribué à façonner
          ma manière de penser, d'analyser et de concevoir des solutions.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Mes formations en développement m'ont donné les outils techniques.
          Mon parcours universitaire m'a appris à m'en servir avec du recul
          et de la rigueur. Les deux ensemble, c'est ce qui définit ma façon
          d'aborder un projet.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};

export default EducationPage;