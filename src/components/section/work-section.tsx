import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { DATA } from "@/data/resume";
import { TechTag } from "@/components/tech-tag";
import { ZoomableImage } from "@/components/zoomable-image";

export default function WorkSection() {
  return (
    <div className="grid gap-4">
      {DATA.work.map((work) => {
        const logoUrl: string = work.logoUrl;
        return (
        <article
          key={work.company}
          className="rounded-xl border border-border bg-card p-5 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              {logoUrl ? (
                <span className="flex size-10 flex-none items-center justify-center overflow-hidden rounded-lg border border-border bg-background">
                  <Image
                    src={logoUrl}
                    alt={`${work.company} logo`}
                    width={40}
                    height={40}
                    className="size-8 object-contain"
                  />
                </span>
              ) : (
                <span className="flex size-10 flex-none items-center justify-center rounded-lg border border-border bg-background text-xs font-semibold text-muted-foreground">
                  {work.company.slice(0, 2).toUpperCase()}
                </span>
              )}
              <div className="min-w-0">
                <h3 className="font-semibold leading-tight">{work.company}</h3>
                <p className="text-sm text-muted-foreground">{work.title}</p>
              </div>
            </div>
            <p className="flex-none text-xs tabular-nums text-muted-foreground sm:text-sm">
              {work.start} – {work.end}
            </p>
          </div>

          {/* Impact metric, surfaced first */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-accent-blue tabular-nums sm:text-4xl">
              {work.impact.value}
            </span>
            <span className="text-sm text-muted-foreground">
              {work.impact.label}
            </span>
          </div>

          <ul className="mt-3 space-y-1.5">
            {work.highlights.map((point) => (
              <li
                key={point}
                className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2.5 before:size-1 before:rounded-full before:bg-muted-foreground/60"
              >
                {point}
              </li>
            ))}
          </ul>

          {work.image ? (
            <div className="mt-4 overflow-hidden rounded-lg border border-border">
              <ZoomableImage
                src={work.image}
                alt={`${work.company} platform screenshot`}
                width={1200}
                height={620}
                imgClassName="h-44 w-full object-cover object-top sm:h-52"
              />
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {work.tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>

          {work.links.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {work.links.map((link) => (
                <Link
                  key={link.type}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-foreground/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Globe className="size-3.5" />
                  Live Demo
                </Link>
              ))}
            </div>
          ) : null}
        </article>
        );
      })}
    </div>
  );
}
