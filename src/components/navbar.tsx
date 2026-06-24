import { Briefcase, FileText, FolderGit2, Github, Linkedin, Wrench } from "lucide-react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

const sections = [
  { href: "#work", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#skills", label: "Skills", icon: Wrench },
];

const externals = [
  { href: DATA.contact.github, label: "GitHub", icon: Github },
  { href: DATA.contact.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: DATA.contact.resume, label: "Resume", icon: FileText },
];

const tooltipClass =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";
const iconClass =
  "rounded-3xl cursor-pointer size-full bg-background p-2 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="pointer-events-auto relative z-50 mx-auto flex h-14 w-fit gap-2 border bg-card/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl">
        {sections.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <a href={item.href} aria-label={item.label}>
                <DockIcon className={iconClass}>
                  <item.icon className="size-full" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
              <p>{item.label}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator orientation="vertical" className="m-auto h-2/3 w-px bg-border" />

        {externals.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <DockIcon className={iconClass}>
                  <item.icon className="size-full" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
              <p>{item.label}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator orientation="vertical" className="m-auto h-2/3 w-px bg-border" />

        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={iconClass}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
