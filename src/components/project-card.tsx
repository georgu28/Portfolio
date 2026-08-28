import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { TechTag } from "@/components/tech-tag";
import { ZoomableImage } from "@/components/zoomable-image";

interface ProjectLink {
  type: string;
  href: string;
}

interface Props {
  title: string;
  description: string;
  dates: string;
  impact: { value: string; label: string };
  tags: readonly string[];
  image?: string;
  imageFit?: "cover" | "contain";
  imageLabel?: string;
  links?: readonly ProjectLink[];
}

function isPlaceholder(href: string) {
  return !href || href.startsWith("REPLACE");
}

function LinkIcon({ type }: { type: string }) {
  if (type.toLowerCase() === "source") return <Github className="size-3.5" />;
  return <Globe className="size-3.5" />;
}

export function ProjectCard({
  title,
  description,
  dates,
  impact,
  tags,
  image,
  imageFit = "cover",
  imageLabel,
  links,
}: Props) {
  const realLinks = (links ?? []).filter((l) => !isPlaceholder(l.href));
  const placeholderLinks = (links ?? []).filter((l) => isPlaceholder(l.href));
  const primaryHref = realLinks[0]?.href;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:ring-2 hover:ring-muted">
      {image ? (
        <div
          className={cn(
            "relative border-b border-border",
            imageFit === "contain" && "bg-muted/40"
          )}
        >
          <ZoomableImage
            src={image}
            alt={`${title} ${imageLabel || "preview"}`}
            width={1200}
            height={620}
            imgClassName={cn(
              "h-48 w-full",
              imageFit === "contain"
                ? "object-contain p-3"
                : "object-cover object-top"
            )}
          />
          {imageLabel ? (
            <span className="absolute left-2 top-2 rounded-md border border-border bg-background/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
              {imageLabel}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-accent-blue tabular-nums sm:text-3xl">
            {impact.value}
          </span>
          <time className="flex-none text-xs tabular-nums text-muted-foreground">
            {dates}
          </time>
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{impact.label}</p>

        <h3 className="mt-3 font-semibold">
          {primaryHref ? (
            <Link
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm transition-colors hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {title}
              <ArrowUpRight
                className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>
        ) : null}

        {realLinks.length || placeholderLinks.length ? (
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {realLinks.map((link) => (
              <Link
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={
                  link.type === "Demo" && link.href.includes("streamlit.app")
                    ? "Hosted on Streamlit, may take a few seconds to wake if it's been idle"
                    : undefined
                }
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-foreground/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <LinkIcon type={link.type} />
                {link.type === "Source" ? "GitHub" : "Live Demo"}
              </Link>
            ))}
            {placeholderLinks.map((link) => (
              <span
                key={link.type}
                title="Live demo URL coming soon"
                className="inline-flex cursor-default items-center gap-1.5 rounded-md border border-dashed border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <Globe className="size-3.5" />
                Live demo, coming soon
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
