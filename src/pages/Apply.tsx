import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl">
            <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-8">
              <Check className="text-gold" size={32} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl mb-6">Application Received</h1>
            <div className="gold-line mb-8"></div>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Thank you for your interest in The Enclave. Our membership committee will review your 
              application within 2-4 weeks. You'll receive a confidential response via email.
            </p>
          </div>
        </ScrollReveal>
      </main>
    );
  }

  const inputClasses = "w-full bg-card border border-border px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors";
  const labelClasses = "text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-2 block";

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm tracking-[0.4em] uppercase text-gold mb-6 font-body">Apply</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl leading-tight mb-8">
              Request Your <span className="gradient-gold-text">Invitation</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              Membership in The Enclave is highly selective. We review every application personally 
              to ensure the highest caliber of our community is maintained.
            </p>
            <p className="text-sm text-muted-foreground font-body">
              All information submitted is protected under our NDA protocol and handled with absolute discretion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Apply", desc: "Submit your application" },
                { step: "02", title: "Review", desc: "Committee evaluation" },
                { step: "03", title: "Interview", desc: "Brief confidential call" },
                { step: "04", title: "Welcome", desc: "Receive your invitation" },
              ].map((s, i) => (
                <div key={s.step} className="text-center">
                  <p className="font-display text-3xl text-gold mb-2">{s.step}</p>
                  <h4 className="font-display text-lg mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground font-body">{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeading subtitle="Application" title="Tell Us About You" description="Complete the form below. Fields marked with * are required." />
          <form onSubmit={handleSubmit} className="space-y-6">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>First Name *</label>
                  <input type="text" required placeholder="John" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Last Name *</label>
                  <input type="text" required placeholder="Doe" className={inputClasses} />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <label className={labelClasses}>Email *</label>
                <input type="email" required placeholder="john@company.com" className={inputClasses} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <label className={labelClasses}>Company Name *</label>
                <input type="text" required placeholder="Acme Corp" className={inputClasses} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Your Title *</label>
                  <input type="text" required placeholder="CEO & Founder" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Company Valuation *</label>
                  <select required className={inputClasses}>
                    <option value="">Select range</option>
                    <option>$10M – $50M</option>
                    <option>$50M – $100M</option>
                    <option>$100M – $500M</option>
                    <option>$500M+</option>
                  </select>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <label className={labelClasses}>LinkedIn Profile</label>
                <input type="url" placeholder="https://linkedin.com/in/..." className={inputClasses} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <label className={labelClasses}>What do you hope to gain from The Enclave? *</label>
                <textarea required rows={4} placeholder="Tell us about your goals and what you'd bring to our community..." className={inputClasses + " resize-none"} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <label className={labelClasses}>Referral Code (if applicable)</label>
                <input type="text" placeholder="Enter code" className={inputClasses} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm tracking-[0.2em] uppercase font-body hover:opacity-90 transition-opacity"
                >
                  Submit Application <ArrowRight size={16} />
                </button>
                <p className="text-xs text-muted-foreground font-body text-center mt-4">
                  By submitting, you agree to our Terms of Membership and NDA Protocol.
                </p>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Apply;
