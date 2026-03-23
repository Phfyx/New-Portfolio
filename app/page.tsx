import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Benomar Mohamed</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Développeur Frontend — React · TypeScript · Next.js
        </PageHeaderHeading>
        <PageHeaderDescription>
          <span className="block">
            Je conçois des interfaces web accessibles et maintenables. Curieux,
            autonome et à l'aise en équipe, j'aime comprendre les besoins métier
            avant d'écrire la moindre ligne de code. Ma reconversion depuis les
            sciences humaines m'a appris une chose précieuse : écouter avant
            d'agir.
          </span>
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Mon CV
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              M'envoyer un mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="A propos de moi"
      />
    </>
  );
};
export default IntroductionPage;
