import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "500+", label: "Events Covered" },
  { value: "1200+", label: "Happy Clients" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Cinematic wedding photograph"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6"
          >
            Weddings / Events / Portraits / Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] text-foreground text-gold-glow mb-6"
          >
            Where Moments
            <br />
            <em className="italic font-normal">Become Legacy</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-sm lg:text-base text-muted-foreground max-w-lg leading-relaxed mb-10"
          >
            We craft cinematic stories for modern celebrations - with elegance,
            emotion, and artistic precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#gallery"
              className="font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Book Your Shoot
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 lg:mt-20 flex gap-8 lg:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-2xl lg:text-3xl font-semibold text-foreground">
                {stat.value}
              </span>
              <span className="font-body text-[10px] lg:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
