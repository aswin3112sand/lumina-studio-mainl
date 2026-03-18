import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you cover weddings and events across India?",
    a: "Yes - we cover weddings, receptions, and luxury events across India. We also accept international bookings for destination celebrations.",
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend booking 2-4 months in advance for weddings and events. For portrait and studio sessions, 1-2 weeks is usually sufficient.",
  },
  {
    q: "Do you travel for destination shoots?",
    a: "Absolutely. Destination shoots are one of our specialities. Travel logistics are handled seamlessly as part of your package.",
  },
  {
    q: "When will we receive the final photographs?",
    a: "Curated preview highlights are delivered within 72 hours. Full edited galleries are typically ready within 3-4 weeks.",
  },
  {
    q: "Do you offer both candid and traditional coverage?",
    a: "Yes. Our approach blends cinematic candid storytelling with elegant traditional portraits, ensuring comprehensive coverage.",
  },
  {
    q: "Can packages be customized?",
    a: "Every package is tailored to your needs. We discuss your vision, timeline, and budget before proposing anything - no rigid templates.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Questions
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-medium text-foreground">
            Frequently <em className="italic font-normal">Asked</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-body text-sm text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
