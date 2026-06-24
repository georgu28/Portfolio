import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {DATA.projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          dates={project.dates}
          impact={project.impact}
          tags={project.tags}
          image={project.image}
          imageFit={project.imageFit}
          imageLabel={project.imageLabel}
          links={project.links}
        />
      ))}
    </div>
  );
}
