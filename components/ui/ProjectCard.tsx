import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import type { Project } from "@/lib/data/projectsData";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-200 hover:border-accent/50">
            <div className="relative overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.alt}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute left-3 top-3 rounded bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {project.category}
                </span>
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold tracking-tight">
                        {project.name}
                    </h3>

                    <span className="font-mono text-[11px] text-muted">
                        {project.number}
                    </span>
                </div>

                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                        <span
                            key={item}
                            className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center gap-4 font-mono text-xs">
                    {project.href ? (
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground transition-colors hover:text-accent"
                        >
                            View project{" "}
                            <ArrowUpRight
                                size={13}
                                className="inline"
                            />
                        </a>
                    ) : (
                        <span className="text-muted">
                            In Development
                        </span>
                    )}

                    {project.source && (
                        <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                        >
                            <FaGithub size={13} />
                            Source
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}