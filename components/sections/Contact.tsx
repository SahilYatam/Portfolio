import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ContactForm } from "../ui/ContactForm";
import { SectionLabel } from "../ui/SectionLabel";
import { ContactLink } from "./ContactLink";
import { contactLinks } from "@/lib/data/contactData";

export function Contact() {
    return (
        <section id="contact" className="border-t border-border py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionLabel>(d) — Get in touch</SectionLabel>

                    <h2 className="mt-3 max-w-[12ch] font-display text-5xl leading-[0.95] tracking-tight">
                        Have a project in mind? Let&apos;s talk.
                    </h2>

                    <p className="mt-6 max-w-md leading-relaxed text-muted">
                        Have an idea for a web application, need help with an
                        existing project, or just want to discuss an idea? Feel
                        free to reach out.
                    </p>

                    <div className="mt-8 space-y-3 text-sm">
                        {contactLinks.map((link) => (
                            <ContactLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                icon={link.icon}
                                external={link.external}
                            />
                        ))}
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}
