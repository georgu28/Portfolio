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
  SiJavascript,
  SiR,
  SiFastapi,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiSqlalchemy,
  SiSnowflake,
  SiJenkins,
  SiFlyway,
  SiVercel,
  SiClaude,
} from "react-icons/si";
import { FaJava, FaDatabase, FaAws } from "react-icons/fa";

// Maps a skill name (from DATA.skills) to its brand logo + a theme-safe color.
// `color` omitted → inherits currentColor so the mark adapts to light/dark
// (used for the generic SQL icon and marks that would be invisible in a theme).
const ICONS: Record<string, { Icon: IconType; color?: string }> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  "C/C++": { Icon: SiCplusplus, color: "#00599C" },
  Java: { Icon: FaJava, color: "#E76F00" },
  SQL: { Icon: FaDatabase }, // generic, no single brand
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#D4A72C" }, // darker than brand yellow for contrast
  R: { Icon: SiR, color: "#276DC3" },
  "HTML/CSS": { Icon: SiHtml5, color: "#E34F26" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  "scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
  React: { Icon: SiReact, color: "#149ECA" }, // darker than brand cyan for contrast
  Flask: { Icon: SiFlask }, // brand black, adapt via currentColor
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  "Next.js": { Icon: SiNextdotjs }, // brand black, adapt via currentColor
  NumPy: { Icon: SiNumpy, color: "#4D77CF" },
  Pandas: { Icon: SiPandas, color: "#7A5BD6" },
  SQLAlchemy: { Icon: SiSqlalchemy, color: "#D71F00" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  Snowflake: { Icon: SiSnowflake, color: "#29B5E8" },
  Jenkins: { Icon: SiJenkins, color: "#D24939" },
  Flyway: { Icon: SiFlyway, color: "#CC0200" },
  Vercel: { Icon: SiVercel }, // brand black, adapt via currentColor
  "Claude Code": { Icon: SiClaude, color: "#D97757" },
  Linux: { Icon: SiLinux }, // adapts via currentColor
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
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
