import { motion } from "framer-motion";

const points = [
  {
    title: "Emotion-First Storytelling",
    desc: "We prioritize genuine feeling over posed perfection, capturing the quiet in-between moments that define your day.",
  },
  {
    title: "Premium Color Grading",
    desc: "Every image undergoes meticulous cinematic grading to achieve a timeless, editorial aesthetic unique to your story.",
  },
  {
    title: "Professional Direction",
    desc: "Subtle, confident guidance for natural poses - ensuring you look and feel your best without breaking the moment.",
  },
  {
    title: "Fast & Clear Delivery",
    desc: "Curated previews within 72 hours. Full galleries delivered with transparent timelines and no surprises.",
  },
  {
    title: "Tailored Packages",
    desc: "No rigid templates - every package is built around your vision, your event, and your budget.",
  },
  {
    title: "Calm Client Experience",
    desc: "From first inquiry to final delivery, expect a polished, stress-free process designed around your comfort.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            The Difference
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-medium text-foreground">
            Why <em className="italic font-normal">Lumiere</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 lg:gap-y-14">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div
                className="w-px bg-primary/40 shrink-0 mt-1"
                style={{ minHeight: "40px" }}
              />
              <div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
