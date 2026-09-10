type FieldProps = {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    required?: boolean;
};

export function Field({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
}: FieldProps) {
    return (
        <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {label}
            </span>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
        </label>
    );
}
