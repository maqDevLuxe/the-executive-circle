import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Globe, Zap, Lock, ArrowRight, MapPin, Crown, Eye, Briefcase, TrendingUp, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import lifestyleImg from "@/assets/lifestyle-wide.jpg";

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

// Section 1: Hero
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Elite networking event" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
    </div>
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-sm tracking-[0.4em] uppercase text-gold mb-8 font-body"
      >
        Invitation Only
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.7, duration: 1 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8"
      >
        Where Visionary
        <br />
        <span className="gradient-gold-text">Founders</span> Converge
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        An exclusive, invitation-only network for founders who have built companies
        valued at $10M+. Curated connections. Absolute discretion.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/apply"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:opacity-90 transition-opacity"
        >
          Request an Invitation <ArrowRight size={16} />
        </Link>
        <Link
          to="/members"
          className="inline-flex items-center gap-3 border border-gold/30 text-gold px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-primary/10 transition-colors"
        >
          Explore Membership
        </Link>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent"></div>
    </motion.div>
  </section>
);

// Section 2: Featured Companies
const companies = ["Stripe", "Notion", "Figma", "Vercel", "Linear", "Arc"];
const FeaturedCompanies = () => (
  <section className="py-24 border-b border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <ScrollReveal>
        <p className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12 font-body">
          Our Members Have Founded
        </p>
      </ScrollReveal>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        {companies.map((c, i) => (
          <ScrollReveal key={c} delay={i * 0.1}>
            <span className="text-2xl md:text-3xl font-display tracking-wider text-muted-foreground/40 hover:text-gold transition-colors duration-500 cursor-default">
              {c}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

// Section 3: Membership Benefits
const benefits = [
  { icon: Users, title: "Curated Introductions", desc: "Algorithmically matched connections with founders in complementary industries." },
  { icon: Shield, title: "Total Confidentiality", desc: "Chatham House Rules enforced. What's shared in The Enclave, stays in The Enclave." },
  { icon: Crown, title: "Deal Flow Access", desc: "Early access to investment rounds, acquisitions, and partnership opportunities." },
  { icon: Globe, title: "Global Chapters", desc: "Private lounges and events across 12 major cities worldwide." },
  { icon: Zap, title: "Rapid Scaling", desc: "Peer advisory from founders who've scaled past $100M+ valuations." },
  { icon: Briefcase, title: "Executive Retreats", desc: "Quarterly intimate retreats in world-class destinations for deep connection." },
];

const MembershipBenefits = () => (
  <section className="py-32 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading
        subtitle="Membership"
        title="Privileges Beyond Access"
        description="Every aspect of The Enclave is designed to create meaningful, high-value connections."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 0.1}>
            <div className="group p-8 bg-card border border-border hover:border-gold/30 transition-all duration-500">
              <b.icon className="text-gold mb-6" size={28} strokeWidth={1.5} />
              <h3 className="font-display text-xl mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

// Section 4: Matchmaking Tech
const MatchmakingTech = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <SectionHeading
          subtitle="Technology"
          title="AI-Powered Founder Matchmaking"
          description="Our proprietary algorithm analyzes 47 data points including industry, company stage, leadership style, and strategic goals to create perfect introductions."
          align="left"
        />
        <ScrollReveal delay={0.3}>
          <div className="space-y-4 mt-8">
            {["Industry & Market Alignment", "Complementary Skill Mapping", "Strategic Goal Matching", "Personality Compatibility"].map((item, i) => (
              <div key={item} className="flex items-center gap-4 text-sm font-body text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></div>
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal direction="right">
        <div className="relative aspect-square bg-navy-light border border-border overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {[120, 90, 60].map((size, i) => (
                <div
                  key={size}
                  className="absolute border border-gold/20 rounded-full animate-pulse"
                  style={{
                    width: `${size * 2}px`,
                    height: `${size * 2}px`,
                    top: `${-size}px`,
                    left: `${-size}px`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
              <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_30px_hsl(40_55%_65%/0.5)]"></div>
            </div>
            {/* Satellite nodes */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={deg}
                className="absolute w-2 h-2 rounded-full bg-gold/60"
                style={{
                  top: `${50 + 35 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 35 * Math.cos((deg * Math.PI) / 180)}%`,
                }}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Section 5: Net Worth Metrics
const metrics = [
  { label: "Combined Portfolio Value", value: "$47B+" },
  { label: "Average Member Net Worth", value: "$120M" },
  { label: "Successful Exits", value: "340+" },
  { label: "Countries Represented", value: "28" },
];

const NetWorthMetrics = () => (
  <section className="py-32 bg-secondary border-y border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading subtitle="Impact" title="The Network's Collective Power" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <ScrollReveal key={m.label} delay={i * 0.15}>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold mb-3">{m.value}</p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase font-body">{m.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

// Section 6: Private Events
const events = [
  { title: "The Aspen Summit", location: "Aspen, CO", date: "March 2026", type: "Mastermind Retreat" },
  { title: "Monaco Roundtable", location: "Monte Carlo", date: "May 2026", type: "Investor Dinner" },
  { title: "Tokyo Innovation Forum", location: "Tokyo, Japan", date: "July 2026", type: "Tech Summit" },
];

const PrivateEvents = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading
        subtitle="Events"
        title="Private Mastermind Gatherings"
        description="Intimate, invitation-only events designed for deep connection and strategic alignment."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((e, i) => (
          <ScrollReveal key={e.title} delay={i * 0.15}>
            <div className="group border border-border p-8 hover:border-gold/30 transition-all duration-500 bg-card">
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-body">{e.type}</p>
              <h3 className="font-display text-2xl mb-4">{e.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-2">
                <MapPin size={14} /> {e.location}
              </div>
              <p className="text-sm text-muted-foreground font-body">{e.date}</p>
              <div className="gold-line-left mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

// Section 7: Global Chapters Map
const chapters = [
  { city: "New York", x: 28, y: 35 },
  { city: "London", x: 48, y: 28 },
  { city: "Dubai", x: 60, y: 42 },
  { city: "Singapore", x: 75, y: 55 },
  { city: "Tokyo", x: 83, y: 35 },
  { city: "São Paulo", x: 32, y: 65 },
  { city: "Sydney", x: 85, y: 72 },
  { city: "San Francisco", x: 15, y: 38 },
  { city: "Zurich", x: 50, y: 30 },
  { city: "Hong Kong", x: 78, y: 45 },
  { city: "Mumbai", x: 68, y: 48 },
  { city: "Lagos", x: 49, y: 52 },
];

const GlobalChapters = () => (
  <section className="py-32 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading subtitle="Global" title="12 Chapters Worldwide" description="Exclusive clubhouses and event spaces across the world's most influential cities." />
      <ScrollReveal>
        <div className="relative aspect-[2/1] bg-card border border-border overflow-hidden">
          {/* Simplified world map with dots */}
          {chapters.map((ch, i) => (
            <div
              key={ch.city}
              className="absolute group cursor-pointer"
              style={{ left: `${ch.x}%`, top: `${ch.y}%` }}
            >
              <div className="w-3 h-3 rounded-full bg-gold/80 group-hover:bg-gold transition-colors relative">
                <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping"></div>
              </div>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xs font-body text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {ch.city}
              </span>
            </div>
          ))}
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(10)].map((_, i) => (
              <div key={`h${i}`} className="absolute w-full h-px bg-foreground" style={{ top: `${(i + 1) * 10}%` }} />
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={`v${i}`} className="absolute h-full w-px bg-foreground" style={{ left: `${(i + 1) * 10}%` }} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Section 8: Full-width lifestyle image
const LifestyleImage = () => (
  <section className="relative h-[60vh] overflow-hidden">
    <ScrollReveal className="h-full" blur={false}>
      <img src={lifestyleImg} alt="Elite lifestyle" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display text-3xl md:text-5xl text-center max-w-3xl px-6 leading-tight">
          "The quality of your network determines the <span className="gradient-gold-text">quality of your life</span>."
        </p>
      </div>
    </ScrollReveal>
  </section>
);

// Section 9: Membership Counters
const counters = [
  { label: "Active Members", end: 247, suffix: "" },
  { label: "Maximum Capacity", end: 300, suffix: "" },
  { label: "Spots Remaining", end: 53, suffix: "" },
  { label: "Acceptance Rate", end: 4, suffix: "%" },
];

const CounterItem = ({ label, end, suffix }: { label: string; end: number; suffix: string }) => {
  const { count, ref } = useCounter(end);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl md:text-6xl text-gold">{count}{suffix}</p>
      <p className="text-sm text-muted-foreground tracking-wider uppercase font-body mt-3">{label}</p>
    </div>
  );
};

const MembershipCounters = () => (
  <section className="py-32 border-y border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading subtitle="Exclusivity" title="Strictly Capped Membership" description="To maintain the highest quality of interactions, membership is permanently capped at 300." />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((c, i) => (
          <ScrollReveal key={c.label} delay={i * 0.1}>
            <CounterItem {...c} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

// Section 10: Blog / Leadership Insights
const insights = [
  { title: "The Art of Strategic Patience in Scaling", author: "J.R.", date: "Feb 2026", category: "Leadership" },
  { title: "Why the Best Founders Build in Silence", author: "M.K.", date: "Jan 2026", category: "Strategy" },
  { title: "Capital Allocation: A Founder's Masterclass", author: "A.S.", date: "Dec 2025", category: "Finance" },
];

const LeadershipInsights = () => (
  <section className="py-32 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading subtitle="Insights" title="Leadership Intelligence" description="Exclusive thought leadership from members who've shaped industries." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((ins, i) => (
          <ScrollReveal key={ins.title} delay={i * 0.12}>
            <article className="group cursor-pointer border border-border bg-card p-8 hover:border-gold/30 transition-all duration-500">
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-body">{ins.category}</p>
              <h3 className="font-display text-xl mb-6 group-hover:text-gold transition-colors duration-300">{ins.title}</h3>
              <div className="flex justify-between items-center text-xs text-muted-foreground font-body">
                <span>By {ins.author}</span>
                <span>{ins.date}</span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

// Section 11: Privacy Protocol
const PrivacyProtocol = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <ScrollReveal>
        <div className="space-y-8">
          <SectionHeading subtitle="Protocol" title="Discretion is Our Foundation" align="left" />
          {[
            { icon: Lock, title: "NDA-Protected", desc: "Every member signs a comprehensive non-disclosure agreement before entry." },
            { icon: Eye, title: "Anonymous Profiles", desc: "Share as much or as little as you choose. Initials-only mode available." },
            { icon: Shield, title: "Encrypted Communications", desc: "End-to-end encryption for all in-network messaging and file sharing." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.1}>
              <div className="flex gap-5">
                <item.icon className="text-gold flex-shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <div>
                  <h4 className="font-display text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal direction="right">
        <div className="aspect-square bg-secondary border border-border flex items-center justify-center relative overflow-hidden">
          <Shield className="text-gold/10" size={200} strokeWidth={0.5} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="text-gold" size={48} strokeWidth={1} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Section 12: Testimonials
const testimonials = [
  { quote: "The Enclave introduced me to my co-investor on our biggest deal. The ROI on membership is incalculable.", initials: "R.M.", title: "Founder & CEO, Series C Fintech" },
  { quote: "I've been in many networks. None come close to the caliber of people and depth of conversation here.", initials: "S.K.", title: "3x Exited Founder" },
  { quote: "The discretion is what sets this apart. I can be vulnerable about challenges without it appearing on TechCrunch.", initials: "A.L.", title: "Fortune 500 Board Member" },
];

const Testimonials = () => (
  <section className="py-32 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <SectionHeading subtitle="Voices" title="From Our Members" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.initials} delay={i * 0.15}>
            <div className="border border-border bg-card p-8 flex flex-col h-full">
              <Star className="text-gold mb-6" size={20} strokeWidth={1.5} />
              <blockquote className="font-display text-lg italic leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-gold font-display text-lg">{t.initials}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{t.title}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

// Section 13: CTA
const InvitationCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background"></div>
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <ScrollReveal>
        <p className="text-sm tracking-[0.4em] uppercase text-gold mb-8 font-body">Begin</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-6xl mb-8">Request Your Invitation</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="gold-line mb-8"></div>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="text-muted-foreground font-body text-lg mb-12 leading-relaxed">
          Membership is by invitation or application only. We review each application 
          personally to ensure alignment with our community's values and standards.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Link
          to="/apply"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 text-sm tracking-[0.2em] uppercase font-body hover:opacity-90 transition-opacity"
        >
          Apply for Membership <ArrowRight size={16} />
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

// Main Page
const Index = () => (
  <main>
    <Hero />
    <FeaturedCompanies />
    <MembershipBenefits />
    <MatchmakingTech />
    <NetWorthMetrics />
    <PrivateEvents />
    <GlobalChapters />
    <LifestyleImage />
    <MembershipCounters />
    <LeadershipInsights />
    <PrivacyProtocol />
    <Testimonials />
    <InvitationCTA />
  </main>
);

export default Index;
