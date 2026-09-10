import { skills } from "../../lib/data/skills";
import { SkillGroup } from "../ui/SkillGroup";
import { SectionLabel } from "../ui/SectionLabel";

export function Skills() {
    return (
        <section id="skills" className="border-b border-border py-20 lg:py-24">
            <SectionLabel>(b) — Toolkit</SectionLabel>

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <h2 className="mt-3 font-display text-4xl leading-none tracking-tight">
                    Skills &amp; technologies
                </h2>

                <p className="max-w-sm text-sm leading-relaxed text-muted">
                    Technologies I use to build modern web applications across
                    the frontend, backend, databases, and APIs.
                </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {Object.entries(skills).map(([category, items]) => (
                    <SkillGroup
                        key={category}
                        category={category}
                        items={items}
                    />
                ))}
            </div>
        </section>
    );
}
