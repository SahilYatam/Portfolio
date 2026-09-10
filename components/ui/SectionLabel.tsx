export function SectionLabel({ children }: { children: string }) {
    return (
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            {children}
        </p>
    );
}
