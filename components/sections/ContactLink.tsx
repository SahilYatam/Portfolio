import type { ReactNode } from "react";

type ContactLinkProps = {
    href?: string;
    label: string;
    icon: ReactNode;
    external?: boolean;
};

export function ContactLink({
    href,
    label,
    icon,
    external = false,
}: ContactLinkProps) {
    const content = (
        <>
            <span className="grid size-8 place-items-center rounded-md border border-border text-accent">
                {icon}
            </span>

            {label}
        </>
    );

    if (!href) {
        return (
            <div className="flex items-center gap-3 text-foreground">
                {content}
            </div>
        );
    }

    return (
        <a
            className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
            href={href}
            {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
            })}
        >
            {content}
        </a>
    );
}