export function SkillGroup({
    category,
    items,
}: {
    category: string;
    items: readonly string[];
}) {
    return (
        <div className="rounded-lg border border-border bg-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {category}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded border border-border px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/60 hover:text-foreground"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
