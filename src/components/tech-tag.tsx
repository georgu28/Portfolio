import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Single source of truth for tech-tag styling site-wide (experience, projects, skills).
export function TechTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-6 border-border px-2 text-[11px] font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </Badge>
  );
}
