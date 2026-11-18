import { cn } from "@/lib/utils";

interface Metric {
  value: string;
  label: string;
}

export function ImpactMetrics({
  metrics,
  size = "lg",
  className,
}: {
  metrics: readonly Metric[];
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-6 gap-y-2", className)}>
      {metrics.map((m) => (
        <div key={m.label} className="flex items-baseline gap-2">
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
