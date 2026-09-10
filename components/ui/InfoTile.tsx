export function InfoTile({ title, text }: { title: string; text: string }) {
    return (
        <div className="rounded-md border border-border bg-surface p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {title}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {text}
            </p>
        </div>
    );
}
