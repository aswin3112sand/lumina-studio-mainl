import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Photography",
    desc: "Cinematic storytelling for your most sacred celebration.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    title: "Reception & Events",
    desc: "Every toast, every dance, every embrace - preserved forever.",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
  },
  {
    title: "Candid Moments",
    desc: "Unscripted emotions captured with artistic precision.",
    img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
  },
  {
    title: "Portrait Sessions",
    desc: "Editorial portraits that reveal your truest self.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
  },
  {
    title: "Baby & Family",
    desc: "Tender milestones and family bonds, beautifully framed.",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80",
  },
  {
    title: "Studio Photography",
    desc: "Controlled light, polished composition, timeless results.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-medium text-foreground">
            Signature <em className="italic font-normal">Experiences</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  Enquire {"->"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
