import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
              alt="Photographer at work behind the scenes"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              The Studio
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-medium text-foreground mb-8">
              About <em className="italic font-normal">Lumiere</em>
            </h2>
            <div className="space-y-5">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Lumiere Studios was born from a belief that photography should do
                more than document - it should make you <em>feel</em> something.
                We approach every shoot as a storytelling collaboration, blending
                cinematic vision with intimate attention to detail.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Based in India and available worldwide, our team brings calm
                professionalism, artistic discipline, and a genuine love for
                human connection to every frame. Whether it&apos;s a grand wedding,
                a quiet family portrait, or a solo editorial session - we treat
                each story with the same reverence.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Our promise is simple: photographs that honor the truth of your
                moments, elevated with artistry that stands the test of time.
              </p>
            </div>
            <div className="mt-8 w-12 h-px bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
