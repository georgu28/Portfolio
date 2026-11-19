import { cn } from "@/lib/utils";

interface Metric {
  value: string;
  label: string;
}

export function ImpactMetrics({
  metrics,
  size = "lg",
  divided = false,
  className,
}: {
  metrics: readonly Metric[];
  size?: "md" | "lg";
  divided?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-6 gap-y-2", className)}>
      {metrics.map((m) => (
        <div
          key={m.label}
          className={cn(
            "flex items-baseline gap-2",
            divided && "border-l border-border pl-6 first:border-l-0 first:pl-0"
          )}
        >
          <span
            className={cn(
              "font-bold tracking-tight text-accent-blue tabular-nums",
              size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
            )}
          >
            {m.value}
          </span>
          <span className="text-sm text-muted-foreground">{m.label}</span>
        </div>
      ))}
    </div>
  );
}
