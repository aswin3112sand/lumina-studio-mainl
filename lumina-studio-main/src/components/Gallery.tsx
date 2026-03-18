import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Weddings", "Portraits", "Candid", "Baby & Family", "Studio"];

const images = [
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    cat: "Weddings",
    label: "The Grand Celebration",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    cat: "Portraits",
    label: "Timeless Portrait",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    cat: "Candid",
    label: "Stolen Glances",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    cat: "Portraits",
    label: "Light & Grace",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=80",
    cat: "Weddings",
    label: "Sacred Rituals",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
    cat: "Baby & Family",
    label: "Little Wonders",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    cat: "Studio",
    label: "Studio Elegance",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    cat: "Weddings",
    label: "Forever Begins",
    aspect: "landscape",
  },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? images : images.filter((image) => image.cat === active);

  return (
    <section id="gallery" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-medium text-foreground">
            Curated <em className="italic font-normal">Moments</em>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-[11px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                active === cat
                  ? "border-primary text-primary bg-primary/5"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.label}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  img.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div>
                  <p className="font-display text-sm text-foreground">{img.label}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mt-1">
                    {img.cat}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="font-body text-xs tracking-[0.15em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors duration-300"
          >
            Explore Full Portfolio {"->"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
