import Link from "next/link";

const links = [
    ["#top", "Home"],
    ["#about", "About"],
    ["#skills", "Skills"],
    ["#work", "Projects"],
    ["#contact", "Contact"],
] as const;

export function MobileNav({ onClose }: { onClose: () => void }) {
    return (
        <nav
            id="mobile-menu"
            className="border-t border-border bg-surface px-5 py-4 md:hidden"
            aria-label="Mobile navigation"
        >
            <div className="flex flex-col gap-1">
                {links.map(([href, label]) => (
                    <Link
                        key={href}
                        href={href}
                        onClick={onClose}
                        className="border-b border-border/70 py-3 text-sm text-foreground"
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
