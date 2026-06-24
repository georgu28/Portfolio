import Image from "next/image";
import { DATA } from "@/data/resume";
import { TechTag } from "@/components/tech-tag";

export default function WorkSection() {
  return (
    <div className="grid gap-4">
      {DATA.work.map((work) => (
        <article
          key={work.company}
          className="rounded-xl border border-border bg-card p-5 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              {work.logoUrl ? (
                <span className="flex size-10 flex-none items-center justify-center overflow-hidden rounded-lg border border-border bg-background">
                  <Image
                    src={work.logoUrl}
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
              <Image
                src={work.image}
                alt={`${work.company} platform screenshot`}
                width={1200}
                height={620}
                className="h-44 w-full object-cover object-top sm:h-52"
              />
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {work.tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
