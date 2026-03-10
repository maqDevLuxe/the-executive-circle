import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, Users, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import eventsBg from "@/assets/events-bg.jpg";

const upcomingEvents = [
  { title: "The Aspen Summit 2026", location: "Aspen, Colorado", date: "March 14–17, 2026", type: "Mastermind Retreat", capacity: "30 Founders", desc: "Four days of deep strategic sessions, outdoor excursions, and intimate dinners with fellow visionaries." },
  { title: "Monaco Investor Roundtable", location: "Monte Carlo, Monaco", date: "May 8–9, 2026", type: "Investor Dinner", capacity: "20 Founders + LPs", desc: "An exclusive two-night gathering connecting founders with top-tier limited partners and family offices." },
  { title: "Tokyo Innovation Forum", location: "Tokyo, Japan", date: "July 21–23, 2026", type: "Tech Summit", capacity: "40 Founders", desc: "Exploring the intersection of Eastern and Western innovation with Japan's most influential technologists." },
  { title: "Zurich Private Banking Summit", location: "Zurich, Switzerland", date: "September 5–6, 2026", type: "Finance Forum", capacity: "25 Founders", desc: "Understanding wealth preservation, family office structures, and generational wealth strategies." },
  { title: "Napa Valley Founders' Weekend", location: "Napa Valley, CA", date: "October 17–19, 2026", type: "Social Retreat", capacity: "35 Founders + Partners", desc: "A relaxed weekend of vineyard tours, gourmet dinners, and organic relationship building." },
  { title: "Dubai Future Forum", location: "Dubai, UAE", date: "November 12–14, 2026", type: "Global Summit", capacity: "50 Founders", desc: "Our flagship annual event bringing together members from all 12 chapters for our most ambitious programming." },
];

const pastHighlights = [
  { title: "London Fintech Roundtable", attendees: 28, deals: 3 },
  { title: "Singapore AI Summit", attendees: 35, deals: 5 },
  { title: "New York Series D Dinner", attendees: 18, deals: 7 },
];

const Events = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={eventsBg} alt="Private mastermind dinner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[1px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-sm tracking-[0.4em] uppercase text-gold mb-6 font-body">Events</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            Private Gatherings for <span className="gradient-gold-text">Exceptional</span> Minds
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
            Intimate, curated events where transformative connections happen naturally.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="Upcoming" title="2026 Event Calendar" description="All events are members-only. Attendance requires separate RSVP and capacity is strictly limited." />
        <div className="space-y-6">
          {upcomingEvents.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.08}>
              <div className="group border border-border bg-card p-8 md:p-10 hover:border-gold/30 transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-6 items-start">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3 font-body">{event.type}</p>
                    <h3 className="font-display text-2xl mb-3">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-1">
                      <MapPin size={14} /> {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-1">
                      <Calendar size={14} /> {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                      <Users size={14} /> {event.capacity}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{event.desc}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs tracking-[0.15em] uppercase text-gold font-body group-hover:translate-x-1 transition-transform">
                      Members Only →
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Past Events Impact */}
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="Impact" title="Events That Move Markets" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastHighlights.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12}>
              <div className="border border-border bg-card p-8 text-center">
                <h4 className="font-display text-xl mb-6">{p.title}</h4>
                <div className="flex justify-center gap-8">
                  <div>
                    <p className="font-display text-3xl text-gold">{p.attendees}</p>
                    <p className="text-xs text-muted-foreground font-body mt-1">Attendees</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-gold">{p.deals}</p>
                    <p className="text-xs text-muted-foreground font-body mt-1">Deals Made</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Attend Our Next Event</h2>
          <div className="gold-line mb-8"></div>
          <p className="text-muted-foreground font-body text-lg mb-10">Membership required. Apply today and gain access to our full event calendar.</p>
          <Link to="/apply" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:opacity-90 transition-opacity">
            Apply for Access <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Events;
