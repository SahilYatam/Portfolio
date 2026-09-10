export function NavLink({
    href,
    children,
}: {
    href: string;
    children: string;
}) {
    return (
        <a
            href={href}
            className="transition-colors hover:text-foreground hover:text-accent"
        >
            {children}
        </a>
    );
}
