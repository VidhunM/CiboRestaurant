import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Use direct paths so we don't depend on TS/Vite image module resolution.
// Make sure these files exist at these paths in your project.
const images = [
  "/src/assets/hero1 (1).JPG",
  "/src/assets/hero1 (2).JPG",
  "/src/assets/hero1 (3).JPG",
  "/src/assets/hero1 (4).JPG",
  "/src/assets/hero1 (5).JPG",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Cibo Restaurant interior with elegant fine dining ambiance"
            className="w-full h-full object-cover absolute inset-0"
            loading={index === 0 ? "eager" : "lazy"}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-sm md:text-base letter-spacing-widest uppercase text-primary mb-4"
        >
          Premium Fine Dining · Salem
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight mb-8"
        >
          Exquisite Indian
          <br />
          <span className="italic text-primary">Cuisine</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("#menu")}
            className="font-body text-sm letter-spacing-widest uppercase px-10 py-4 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Our Menu
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="font-body text-sm letter-spacing-widest uppercase px-10 py-4 border border-foreground text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
