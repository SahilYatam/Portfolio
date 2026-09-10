import { InfoTile } from "../ui/InfoTile";
import { SectionLabel } from "../ui/SectionLabel";

export function About() {
    return (
        <section
            id="about"
            className="grid gap-10 border-b border-border py-20 lg:grid-cols-12 lg:py-24"
        >
            <div className="lg:col-span-4">
                <SectionLabel>(a) — About</SectionLabel>

                <h2 className="mt-3 max-w-[12ch] font-display text-4xl leading-none tracking-tight">
                    The person behind the code.
                </h2>
            </div>

            <div className="lg:col-span-8">
                <p className="max-w-[62ch] text-lg leading-relaxed text-foreground">
                    I&apos;m Sahil, a self-taught full-stack software developer
                    who enjoys building applications from the frontend to the
                    backend.
                </p>

                <p className="mt-5 max-w-[62ch] leading-relaxed text-muted">
                    I&apos;m interested in understanding how software works as a
                    whole—from creating responsive user interfaces to building
                    APIs, working with databases, and connecting everything
                    together. I enjoy learning by building projects and solving
                    the practical problems that come with turning an idea into a
                    working application.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                    <InfoTile
                        title="Approach"
                        text="Learn deeply, build practically."
                    />

                    <InfoTile
                        title="Focus"
                        text="Modern full-stack web applications."
                    />

                    <InfoTile
                        title="Mindset"
                        text="Curious, practical, and always learning."
                    />
                </div>
            </div>
        </section>
    );
}
