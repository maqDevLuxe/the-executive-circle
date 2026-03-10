import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl tracking-[0.2em] text-gold uppercase mb-4">The Enclave</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md">
            An invitation-only network connecting the world's most exceptional founders. 
            Discretion. Excellence. Legacy.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-[0.15em] uppercase text-gold-light mb-6">Navigate</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Members", "Events", "Apply"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-[0.15em] uppercase text-gold-light mb-6">Protocol</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Membership</span>
            <span>NDA Agreement</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="gold-line mt-12 mb-8"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <span>© 2026 The Enclave. All rights reserved.</span>
        <span className="tracking-[0.2em] uppercase">Invitation Only</span>
      </div>
    </div>
  </footer>
);

export default Footer;
