interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-serif text-espresso-900 mb-3">{title}</h2>
      {subtitle && (
        <p
          style={{ color: "var(--color-muted)", maxWidth: "520px", margin: centered ? "0 auto" : undefined }}
          className="text-[0.95rem] leading-relaxed"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
