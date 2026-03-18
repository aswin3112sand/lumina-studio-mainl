import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-display text-xl tracking-widest text-foreground mb-3">
              LUMIERE
            </p>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Crafting legacies, one frame at a time.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
              Quick Links
            </p>
            {["Portfolio", "Services", "About", "Reviews", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
              Connect
            </p>
            <p className="font-body text-xs text-muted-foreground">
              hello@lumierestudios.com
            </p>
            <p className="font-body text-xs text-muted-foreground">
              +91 98765 43210
            </p>
            <p className="font-body text-xs text-muted-foreground">Mumbai, India</p>
            <a
              href="https://instagram.com/lumierestudios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={14} />
              <span className="font-body text-xs">@lumierestudios</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            (c) {new Date().getFullYear()} Lumiere Studios. All rights reserved.
          </p>
          <a
            href="#contact"
            className="font-body text-[10px] tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors"
          >
            Book Your Shoot {"->"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
