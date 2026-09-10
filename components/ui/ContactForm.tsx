"use client";

import { ArrowUpRight, Check } from "lucide-react";
import type {FormEvent} from "react";
import { useState } from "react";

import { Field } from "./Field";

export function ContactForm() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-surface p-5 sm:p-7 lg:col-span-7"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <Field
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    required
                />
                <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                />
            </div>
            <label className="mt-5 block">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Project type
                </span>
                <select
                    name="projectType"
                    defaultValue="Full-stack web application"
                    className="mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                >
                    <option>Full-stack web application</option>
                    <option>Frontend development</option>
                    <option>Backend / API development</option>
                    <option>E-commerce application</option>
                    <option>Something else</option>
                </select>
            </label>
            <label className="mt-5 block">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Project details
                </span>
                <textarea
                    name="details"
                    rows={5}
                    required
                    placeholder="Tell me a bit about what you're building…"
                    className="mt-2 w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
            </label>
            <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-foreground"
            >
                {sent ? (
                    <>
                        <Check size={16} />
                        Message noted — thank you
                    </>
                ) : (
                    <>
                        Send message <ArrowUpRight size={16} />
                    </>
                )}
            </button>
            {sent ? (
                <p className="mt-3 text-center text-xs text-muted">
                    This demo form is ready to connect to your preferred email
                    or form service.
                </p>
            ) : null}
        </form>
    );
}
