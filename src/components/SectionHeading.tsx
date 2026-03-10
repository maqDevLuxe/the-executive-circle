import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const SectionHeading = ({ subtitle, title, description, align = "center" }: SectionHeadingProps) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    {subtitle && (
      <ScrollReveal>
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-body">{subtitle}</p>
      </ScrollReveal>
    )}
    <ScrollReveal delay={0.1}>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight">{title}</h2>
    </ScrollReveal>
    {align === "center" && (
      <ScrollReveal delay={0.15}>
        <div className="gold-line mt-6"></div>
      </ScrollReveal>
    )}
    {description && (
      <ScrollReveal delay={0.2}>
        <p className={`text-muted-foreground font-body mt-6 text-lg leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {description}
        </p>
      </ScrollReveal>
    )}
  </div>
);

export default SectionHeading;
