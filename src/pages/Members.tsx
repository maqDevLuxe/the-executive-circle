import { Link } from "react-router-dom";
import { ArrowRight, Users, Crown, TrendingUp, Shield, Globe, Briefcase, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const tiers = [
  {
    name: "Fellow",
    tagline: "For emerging founders scaling rapidly",
    criteria: ["Company valued $10M–$50M", "Series A+ funded", "1 member referral required"],
    features: ["Curated introductions (5/month)", "Chapter events access", "Digital community", "Annual summit ticket"],
  },
  {
    name: "Principal",
    tagline: "For established founders shaping markets",
    criteria: ["Company valued $50M–$500M", "Proven track record", "2 member referrals required"],
    features: ["Unlimited introductions", "All events + retreats", "Deal flow access", "Private advisory circle", "Global chapter access"],
    featured: true,
  },
  {
    name: "Patron",
    tagline: "For legacy builders and serial founders",
    criteria: ["$500M+ portfolio value", "Multiple exits or board seats", "Board invitation"],
    features: ["Everything in Principal", "Advisory board seat", "Keynote speaker slots", "Direct LP introductions", "Personal concierge", "Legacy program access"],
  },
];

const memberProfiles = [
  { initials: "J.R.", industry: "Fintech", stage: "Series D", location: "New York" },
  { initials: "M.K.", industry: "AI/ML", stage: "Post-Exit", location: "San Francisco" },
  { initials: "A.S.", industry: "Healthcare", stage: "Series C", location: "London" },
  { initials: "L.P.", industry: "Climate Tech", stage: "Series B", location: "Singapore" },
  { initials: "D.W.", industry: "SaaS", stage: "Post-IPO", location: "Zurich" },
  { initials: "K.N.", industry: "E-commerce", stage: "Series C", location: "Dubai" },
];

const Members = () => (
  <main>
    {/* Hero */}
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-sm tracking-[0.4em] uppercase text-gold mb-6 font-body">Membership</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-8">
            A Network of <span className="gradient-gold-text">Extraordinary</span> Founders
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
            Our members represent the top 0.1% of founders globally. Each one personally vetted, 
            each connection thoughtfully curated.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Member Grid */}
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="Community" title="Anonymous Member Directory" description="Identities are protected. Here's a glimpse of who's in the room." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberProfiles.map((m, i) => (
            <ScrollReveal key={m.initials} delay={i * 0.08}>
              <div className="border border-border bg-card p-8 hover:border-gold/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-6">
                  <span className="font-display text-lg text-gold">{m.initials}</span>
                </div>
                <div className="space-y-2 text-sm font-body">
                  <div className="flex justify-between"><span className="text-muted-foreground">Industry</span><span className="text-foreground">{m.industry}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Stage</span><span className="text-foreground">{m.stage}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Chapter</span><span className="text-foreground">{m.location}</span></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Tiers */}
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="Tiers" title="Membership Levels" description="Three tiers of membership, each with escalating privileges and requirements." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12}>
              <div className={`border p-8 h-full flex flex-col ${tier.featured ? "border-gold/50 bg-card relative" : "border-border bg-card"}`}>
                {tier.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                )}
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2 font-body">Tier {i + 1}</p>
                <h3 className="font-display text-3xl mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground font-body mb-8">{tier.tagline}</p>
                <div className="mb-8">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 font-body">Requirements</p>
                  {tier.criteria.map((c) => (
                    <div key={c} className="flex items-start gap-3 text-sm font-body text-foreground mb-2">
                      <ChevronRight size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 font-body">Privileges</p>
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-sm font-body text-muted-foreground mb-2">
                      <div className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to Join?</h2>
          <div className="gold-line mb-8"></div>
          <p className="text-muted-foreground font-body text-lg mb-10">Begin your application. The vetting process takes 2-4 weeks.</p>
          <Link to="/apply" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:opacity-90 transition-opacity">
            Apply Now <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Members;
