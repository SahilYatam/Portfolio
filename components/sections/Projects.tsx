import { projects } from "@/lib/data/projectsData";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionLabel } from "../ui/SectionLabel";

export function Projects() {
    return (
        <section id="work" className="py-20 lg:py-24">
            <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
                <div>
                    <SectionLabel>(c) — Selected work</SectionLabel>
                    <h2 className="mt-3 font-display text-4xl leading-none tracking-tight">
                        Projects
                    </h2>
                </div>
                <span className="hidden font-mono text-xs text-muted sm:inline">
                    0{`${projects.length}`} builds / 01 direction
                </span>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}
