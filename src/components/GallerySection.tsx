import { useState } from "react";
import { motion } from "framer-motion";

import dish4 from "@/assets/Icecream.jpg";
import dish1 from "@/assets/Non Veg Soup.jpg";
import dish5 from "@/assets/pad-thai-noodles.jpg";
import dish2 from "@/assets/malai nasi goreng.jpg";
import dish6 from "@/assets/korean kimichi salad.jpg";
import dish3 from "@/assets/panner-lababdar.jpg";
import desert from "@/assets/desert-delight.jpg";
import vegSoup from "@/assets/veg-soup.jpg";
import paneerLababdar from "@/assets/panner-lababdar.jpg";
import creamyChickenWings from "@/assets/creamy-chicken-wings.jpg";
import drumsOfHeaven from "@/assets/drums-of-heaven.jpg";
import padThaiNoodles from "@/assets/pad-thai-noodles.jpg";

const galleryImages = [
  // Existing 6 gallery images
  {
    src: dish4,
    alt: "Classic Ice Cream Delight",
  },
  {
    src: dish1,
    alt: "Hot & Flavorful Non-Veg Soup",
  },
  {
    src: dish5,
    alt: "Authentic Pad Thai Noodles",
  },
  {
    src: dish2,
    alt: "Malai Nasi Goreng – Creamy Fried Rice",
  },
  {
    src: dish6,
    alt: "Traditional Korean Kimchi Salad",
  },
  {
    src: dish3,
    alt: "Paneer Lababdar in Rich Tomato Gravy",
  },

  // New 6 special shots
  {
    src: desert,
    alt: "Decadent dessert plated with modern elegance",
  },
  {
    src: vegSoup,
    alt: "Warm vegetable soup in an artisanal bowl",
  },
  {
    src: paneerLababdar,
    alt: "Paneer Lababdar in rich tomato gravy",
  },
  {
    src: creamyChickenWings,
    alt: "Creamy chicken wings garnished with herbs",
  },
  {
    src: drumsOfHeaven,
    alt: "Crispy drums of heaven tossed in sauce",
  },
  {
    src: padThaiNoodles,
    alt: "Pad Thai noodles with fresh vegetables",
  },
];

const ITEMS_PER_PAGE = 6;

const GallerySection = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(galleryImages.length / ITEMS_PER_PAGE));
  const startIndex = page * ITEMS_PER_PAGE;
  const visibleImages = galleryImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm letter-spacing-widest uppercase text-primary mb-4">
            Visual Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            A Feast for the Eyes
          </h2>
          <div className="gold-divider-wide mx-auto" />
        </motion.div>

        {/* Gallery Slider Controls */}
        <div className="flex items-center justify-between mb-6">
          {/* <span className="font-body text-xs letter-spacing-widest uppercase text-muted-foreground">
            Slide {page + 1} of {totalPages}
          </span> */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              ›
            </button>
          </div>
        </div>

        {/* Gallery Grid (2 x 3) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {visibleImages.map((img, index) => (
            <motion.div
              key={`${img.alt}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end justify-center">
                <p className="font-body text-xs letter-spacing-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 pb-6 text-center px-4">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
