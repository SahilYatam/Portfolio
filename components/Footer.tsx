export function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-[42ch]">
                    <p className="font-display text-5xl leading-none tracking-tight">
                        Sahil Yatam
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                        Full-Stack Software Developer · Sahil Yatam.
                        Building reliable web applications, one project at a
                        time.
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
                    <a
                        href="#work"
                        className="transition-colors hover:text-accent"
                    >
                        Work
                    </a>
                    <a
                        href="#about"
                        className="transition-colors hover:text-accent"
                    >
                        About
                    </a>
                     <a
                        href="#skills"
                        className="transition-colors hover:text-accent"
                    >
                        Skils
                    </a> <a
                        href="#work"
                        className="transition-colors hover:text-accent"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="transition-colors hover:text-accent"
                    >
                        Contact
                    </a>
                </div>
            </div>
            <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-border px-5 py-6 font-mono text-[11px] text-muted sm:px-6">
                <span>© 2026 Sahil Yatam</span>
                <span className="hidden sm:inline">
                    designed &amp; built by hand
                </span>
            </div>
        </footer>
    );
}
