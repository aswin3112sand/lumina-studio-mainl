import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lumiere didn't just photograph our wedding - they captured the soul of it. Every frame feels like a scene from a film we'd watch forever.",
    name: "Priya & Arjun",
    event: "Wedding",
    rating: 5,
  },
  {
    quote:
      "The level of craft and care was extraordinary. Our baby's first portraits feel like gallery art. We're emotional every time we look at them.",
    name: "Sneha Kapoor",
    event: "Baby Shoot",
    rating: 5,
  },
  {
    quote:
      "Professional, calm, incredibly talented. They made our reception feel effortless to shoot and the results are beyond anything we imagined.",
    name: "Rahul & Meera",
    event: "Reception",
    rating: 5,
  },
  {
    quote:
      "Working with Lumiere is a masterclass in trust. They understood our vision before we could articulate it. Pure magic.",
    name: "Ananya Mehta",
    event: "Portrait Session",
    rating: 5,
  },
];

const proofStats = [
  { value: "4.9/5", label: "Google Rating" },
  { value: "25K+", label: "Instagram Followers" },
  { value: "85%", label: "Repeat & Referrals" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Kind Words
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-medium text-foreground">
            Client <em className="italic font-normal">Stories</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-7 lg:p-9 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display text-sm text-foreground">{testimonial.name}</p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mt-1">
                  {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center gap-10 lg:gap-20"
        >
          {proofStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-xl lg:text-2xl text-foreground">
                {stat.value}
              </p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
