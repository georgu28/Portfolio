import type { IconType } from "react-icons";
import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiHtml5,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiLinux,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

// Maps a skill name (from DATA.skills) to its brand logo + a theme-safe color.
// `color` omitted → inherits currentColor so the mark adapts to light/dark
// (used for the generic SQL icon and marks that would be invisible in a theme).
const ICONS: Record<string, { Icon: IconType; color?: string }> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  "C/C++": { Icon: SiCplusplus, color: "#00599C" },
  Java: { Icon: FaJava, color: "#E76F00" },
  SQL: { Icon: FaDatabase }, // generic — no single brand
  "TypeScript/JavaScript": { Icon: SiTypescript, color: "#3178C6" },
  "HTML/CSS": { Icon: SiHtml5, color: "#E34F26" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  "scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
  React: { Icon: SiReact, color: "#149ECA" }, // darker than brand cyan for contrast
  Flask: { Icon: SiFlask }, // brand black — adapt via currentColor
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Unix: { Icon: SiLinux }, // no dedicated Unix mark — closest brand icon, adapts via currentColor
};

export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const entry = ICONS[name];
  if (!entry) return null;
  const { Icon, color } = entry;
  return (
    <Icon
      className={className}
      style={color ? { color } : undefined}
      aria-hidden
    />
  );
}
