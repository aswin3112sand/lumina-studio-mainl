import { motion } from "framer-motion";

const BrandStatement = () => {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1920&q=80"
          alt="Cinematic wedding moment"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8"
        >
          Our Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-3xl sm:text-4xl lg:text-6xl font-medium leading-[1.15] text-foreground text-gold-glow"
        >
          We don&apos;t just photograph moments -
          <br />
          <em className="italic font-normal">
            we craft the memory of how they felt.
          </em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-8 lg:gap-16"
        >
          {[
            "Emotion-first storytelling",
            "Cinematic color grading",
            "Artful, unobtrusive direction",
          ].map((point) => (
            <div key={point} className="flex items-center gap-3">
              <div className="w-6 h-px bg-primary" />
              <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                {point}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="#gallery"
            className="font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStatement;
