"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

const links = [
    ["#top", "Home"],
    ["#about", "About"],
    ["#skills", "Skills"],
    ["#work", "Projects"],
    ["#contact", "Contact"],
] as const;

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
                <a
                    href="#top"
                    className="flex items-center gap-3"
                    onClick={closeMenu}
                >
                    {/* <span className="font-mono text-[13px] tracking-[0.22em] text-accent">
                        VERTEX
                    </span>
                    <span className="h-4 w-px bg-border" /> */}
                    <span className="text-sm font-medium text-foreground">
                        Sahil Yatam
                    </span>
                </a>

                <nav
                    className="hidden items-center gap-7 text-[13px] text-muted md:flex"
                    aria-label="Main navigation"
                >
                    {links.map(([href, label]) => (
                        <NavLink key={href} href={href}>
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        className="hidden rounded-md bg-accent px-4 py-2.5 text-[13px] font-medium text-accent-foreground transition-colors hover:bg-foreground sm:inline-flex"
                    >
                        Let&apos;s work together
                    </a>
                    <button
                        type="button"
                        className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {menuOpen ? <MobileNav onClose={closeMenu} /> : null}
        </header>
    );
}
