import { Globe, Mail } from "lucide-react";
import { DATA } from "@/data/resume";
import { SkillIcon } from "@/components/skill-icon";
import { ZoomableImage } from "@/components/zoomable-image";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import WorkSection from "@/components/section/work-section";
import ProjectsSection from "@/components/section/projects-section";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
      {children}
    </h2>
  );
}

const skillPill =
  "inline-flex h-8 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-medium text-foreground ring-2 ring-border/20";

export default function Page() {
  const { publication: pub, contact } = DATA;

  return (
    <main className="flex flex-col gap-14">
      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {DATA.greeting}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {DATA.bio}
          </p>
        </div>

        <ZoomableImage
          src={DATA.headshotUrl}
          alt={DATA.name}
          width={224}
          height={224}
          priority
          className="size-24 flex-none sm:size-32"
          imgClassName="size-full rounded-2xl border border-border object-cover shadow-sm"
        />
      </section>

      {/* About */}
      <section id="about">
        <SectionLabel>About</SectionLabel>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {DATA.about}
        </p>
      </section>

      {/* Experience — strongest content, first */}
      <section id="work">
        <SectionLabel>Experience</SectionLabel>
        <p className="mb-5 mt-2 text-sm text-muted-foreground">
          {DATA.intro.experience}
        </p>
        <WorkSection />
      </section>

      {/* Projects */}
      <section id="projects">
        <SectionLabel>Projects</SectionLabel>
        <p className="mb-5 mt-2 text-sm text-muted-foreground">
          {DATA.intro.projects}
        </p>
        <ProjectsSection />
      </section>

      {/* Skills */}
      <section id="skills">
        <SectionLabel>Skills</SectionLabel>
        <div className="mt-5 flex flex-col gap-4">
          {DATA.skills.map((group) => (
            <div
              key={group.group}
              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
            >
              <span className="w-36 flex-none pt-1.5 text-sm font-medium text-muted-foreground">
                {group.group}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={skillPill}>
                    <SkillIcon name={item} className="size-4" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <SectionLabel>Education</SectionLabel>
        <div className="mt-5 flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 sm:p-6">
          <div>
            <h3 className="font-semibold leading-tight">
              {DATA.education.school}
            </h3>
            <p className="text-sm text-muted-foreground">
              {DATA.education.degree}
            </p>
            <p className="text-sm text-muted-foreground">
              {DATA.education.detail}
            </p>
          </div>
          <p className="flex-none text-xs tabular-nums text-muted-foreground sm:text-sm">
            {DATA.education.start} – {DATA.education.end}
          </p>
        </div>
      </section>

      {/* Research */}
      <section id="research">
        <SectionLabel>Research</SectionLabel>
        <article className="mt-5 rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-semibold leading-snug">
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm transition-colors hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                “{pub.title}”
              </a>
            </h3>
            <span className="flex-none rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {pub.role}
            </span>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {pub.authors} · <span className="italic">{pub.venue}</span>,{" "}
            {pub.year}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {pub.context}
          </p>
          <a
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-foreground/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Globe className="size-3.5" />
            View publication (DOI)
          </a>
        </article>
      </section>

      {/* Contact / footer */}
      <footer
        id="contact"
        className="relative isolate overflow-hidden rounded-2xl border border-border bg-card p-8 text-center sm:p-10"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid
            className="h-full w-full [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
            squareSize={2}
            gridGap={4}
            flickerChance={0.45}
            maxOpacity={0.32}
            color="rgb(120,120,120)"
          />
        </div>

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s talk
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Open to Summer 2027 internships in ML and software engineering. The
          fastest way to reach me is email.
        </p>

        <div className="mt-5 flex justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent-blue px-5 text-sm font-semibold text-accent-blue-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
          >
            <Mail className="size-4" />
            {contact.email}
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">© {DATA.name}</p>
      </footer>
    </main>
  );
}
