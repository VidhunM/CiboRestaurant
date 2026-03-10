import { useState } from "react";
import { motion } from "framer-motion";

import fe1_1 from "@/assets/fe1 (1).png";
import fe1_2 from "@/assets/fe1 (2).png";
import fe1_3 from "@/assets/fe1 (3).png";
import fe1_4 from "@/assets/fe1 (4).png";
import fe1_5 from "@/assets/fe1 (5).png";
import fe1_6 from "@/assets/fe1 (6).png";
import fe1_7 from "@/assets/fe1 (7).png";
import fe1_8 from "@/assets/fe1 (8).png";
import fe1_9 from "@/assets/fe1 (9).png";
import fe1_10 from "@/assets/fe1 (10).png";
import fe1_11 from "@/assets/fe1 (11).png";
import fe1_12 from "@/assets/fe1 (12).png";
import os1_1 from "@/assets/os1 (1).png";
import os1_2 from "@/assets/os1 (2).png";
import os1_3 from "@/assets/os1 (3).png";
import os1_4 from "@/assets/os1 (4).png";
import os1_5 from "@/assets/os1 (5).png";
import os1_6 from "@/assets/os1 (6).png";
import ds1_1 from "@/assets/ds1 (1).png";
import ds1_2 from "@/assets/ds1 (2).png";
import ds1_3 from "@/assets/ds1 (3).png";
import ds1_4 from "@/assets/ds1 (4).png";
import ds1_5 from "@/assets/ds1 (5).png";
import ds1_6 from "@/assets/ds1 (6).png";

const galleryImages = [
  {
    src: fe1_1,
    alt: "Feast for the eyes 1",
  },
  {
    src: fe1_2,
    alt: "Feast for the eyes 2",
  },
  {
    src: fe1_3,
    alt: "Feast for the eyes 3",
  },
  {
    src: fe1_4,
    alt: "Feast for the eyes 4",
  },
  {
    src: fe1_5,
    alt: "Feast for the eyes 5",
  },
  {
    src: fe1_6,
    alt: "Feast for the eyes 6",
  },
  {
    src: fe1_7,
    alt: "Feast for the eyes 7",
  },
  {
    src: fe1_8,
    alt: "Feast for the eyes 8",
  },
  {
    src: fe1_9,
    alt: "Feast for the eyes 9",
  },
  {
    src: fe1_10,
    alt: "Feast for the eyes 10",
  },
  {
    src: fe1_11,
    alt: "Feast for the eyes 11",
  },
  {
    src: fe1_12,
    alt: "Feast for the eyes 12",
  },
  {
    src: os1_1,
    alt: "Feast for the eyes 13",
  },
  {
    src: os1_2,
    alt: "Feast for the eyes 14",
  },
  {
    src: os1_3,
    alt: "Feast for the eyes 15",
  },
  {
    src: os1_4,
    alt: "Feast for the eyes 16",
  },
  {
    src: os1_5,
    alt: "Feast for the eyes 17",
  },
  {
    src: os1_6,
    alt: "Feast for the eyes 18",
  },
  {
    src: ds1_1,
    alt: "Feast for the eyes 19",
  },
  {
    src: ds1_2,
    alt: "Feast for the eyes 20",
  },
  {
    src: ds1_3,
    alt: "Feast for the eyes 21",
  },
  {
    src: ds1_4,
    alt: "Feast for the eyes 22",
  },
  {
    src: ds1_5,
    alt: "Feast for the eyes 23",
  },
  {
    src: ds1_6,
    alt: "Feast for the eyes 24",
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
    <section id="gallery" className="section-padding pt-10 md:pt-14 bg-background -mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-14"
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
              className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-black/10 shadow-sm hover:shadow-xl hover:shadow-black/20 transition-shadow duration-300"
            >
              <div className="aspect-square w-full p-3 md:p-4">
                <img
                  src={img.src}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  decoding="async"
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchPriority={index < 1 ? "high" : "auto"}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
