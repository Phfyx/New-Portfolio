import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants/skills';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Compétences & Outils</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Des outils choisis, pas juste listés.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Je me spécialise dans l'écosystème Frontend — React, Next.js, 
          TypeScript — avec une vraie attention portée à la qualité du code 
          et à l'expérience utilisateur. Ces compétences, je ne les ai pas 
          juste survolées : je les ai pratiquées sur des projets réels, en 
          formation et en alternance.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Je m'intéresse également au Backend avec Node.js et Express, 
          ainsi qu'aux bonnes pratiques de conception (UML, Merise) et 
          aux outils du quotidien d'un développeur — Git, Docker, et 
          quelques notions de CI/CD avec Jenkins et Kubernetes.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}
      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: 'mr-2 size-4',
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};

export default SkillsToolsPage;