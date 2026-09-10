import { ArrowUpRight } from "lucide-react";

export function Hero() {
    return (
        <section className="grid grid-cols-1 items-center gap-12 border-b border-border py-20 lg:grid-cols-12 lg:gap-14 lg:py-28">
            <div className="animate-rise lg:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    FULL-STACK SOFTWARE DEVELOPER
                </p>
                <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.94] tracking-tight text-balance">
                    I build full-stack web applications from idea to production.
                </h1>
                <p className="mt-7 max-w-[52ch] text-[15px] leading-relaxed text-muted">
                    I&apos;m a self-taught full-stack software developer focused on building modern web applications. I work across the frontend, backend, databases, and APIs to turn ideas into practical, production-ready software.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
                    >
                        View my work <ArrowUpRight size={16} />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                        Let&apos;s work together
                    </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-muted">
                    <span>01 / Frontend</span>
                    <span>02 / Backend</span>
                    <span>03 / Database</span>
                    <span>04 / APIs</span>
                </div>
            </div>
            <div className="animate-rise-delayed lg:col-span-5">
                <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-panel">
                    <div className="flex items-center justify-between border-b border-border px-4 py-3">
                        <span className="font-mono text-[11px] text-muted">
                            ~/sahil --status
                        </span>
                        <span className="flex gap-1.5" aria-hidden="true">
                            <span className="size-2 rounded-full bg-border" />
                            <span className="size-2 rounded-full bg-border" />
                            <span className="size-2 rounded-full bg-accent/70" />
                        </span>
                    </div>
                    <div className="relative overflow-hidden px-4 py-5 font-mono text-[12.5px] leading-relaxed">
                        <div className="terminal-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3" />
                        <p className="text-muted">
                            <span className="text-accent">$</span> whoami
                        </p>
                        <p className="text-foreground">sahil.yatam</p>
                        <p className="mt-3 text-muted">
                            <span className="text-accent">$</span> role
                            --current
                        </p>
                        <p className="text-foreground">
                            frontend · backend · database
                        </p>
                        <p className="mt-3 text-foreground">
                            building{" "}
                            <span className="terminal-caret text-accent">
                                ▌
                            </span>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-px border-t border-border bg-border">
                        <div className="bg-surface px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                                Stack
                            </p>
                            <p className="mt-1 text-xs text-foreground">
                                TypeScript · Next.js · Node.js
                            </p>
                        </div>
                        <div className="bg-surface px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                                Focus
                            </p>
                            <p className="mt-1 text-xs text-foreground">
                                Web Apps · APIs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
