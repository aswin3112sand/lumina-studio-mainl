import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-medium text-foreground mb-6">
              Let&apos;s Create Something
              <br />
              <em className="italic font-normal">Timeless</em>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 max-w-md">
              Ready to tell your story? Reach out and let&apos;s discuss how we can
              craft something extraordinary together.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                  <MessageCircle size={16} />
                </div>
                WhatsApp Us
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 font-body text-sm text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                  <Phone size={16} />
                </div>
                +91 98765 43210
              </a>
              <a
                href="https://instagram.com/lumierestudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                  <Instagram size={16} />
                </div>
                @lumierestudios
              </a>
            </div>

            <p className="font-body text-xs text-muted-foreground">
              Mumbai, India | Available Worldwide
            </p>
            <p className="font-body text-[10px] tracking-[0.15em] uppercase text-primary mt-2">
              Replies within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "phone", label: "Phone Number", type: "tel" },
                { name: "email", label: "Email Address", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={(form as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-300 appearance-none"
                >
                  <option value="" className="bg-card">
                    Select event type
                  </option>
                  <option value="wedding" className="bg-card">
                    Wedding
                  </option>
                  <option value="reception" className="bg-card">
                    Reception & Event
                  </option>
                  <option value="portrait" className="bg-card">
                    Portrait Session
                  </option>
                  <option value="baby" className="bg-card">
                    Baby & Family
                  </option>
                  <option value="studio" className="bg-card">
                    Studio Shoot
                  </option>
                  <option value="other" className="bg-card">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                  Preferred Date
                </label>
                <input
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                />
              </div>

              <div>
                <label className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full font-body text-xs tracking-[0.2em] uppercase py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 mt-2"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
