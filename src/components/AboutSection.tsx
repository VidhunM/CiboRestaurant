import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";
import g1 from "@/assets/g1-1.jpeg";
import g2 from "@/assets/g1-2.jpeg";
import g3 from "@/assets/g1-3.jpeg";
import g4 from "@/assets/g1-4.jpeg";
import g5 from "@/assets/g1-5.jpeg";
import g6 from "@/assets/g1-6.jpeg";
import g7 from "@/assets/g1-7.jpeg";
import g8 from "@/assets/g1-8.jpeg";

const gutImages = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
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
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Cibo is Truly One of a Kind
          </h2>
          <div className="gold-divider-wide mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutBg}
              alt="Cibo Restaurant private dining area with luxurious interiors"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-lg md:text-xl leading-relaxed text-cream mb-6">
              <span className="italic">
                A great cuisine is more than food - it is a celebration of heritage, artistry, and bold flavors.
              </span>
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              At Cibo, we bring together iconic regional specialties inspired by regal traditions, vibrant marketplaces, and coastal influences. Every dish is thoughtfully crafted to honor its roots while delivering a refined dining experience.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
              Situated in Salem, Tamil Nadu, Cibo combines authenticity with modern excellence, offering impeccable quality, elegant ambience, and a cutting-edge culinary space.
            </p>
            <div className="gold-divider" />
          </motion.div>
        </div>

        {/* Go With Your Gut */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <p className="font-body text-sm letter-spacing-widest uppercase text-primary mb-3">
              Go With Your Gut
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              When your gut feels good, you feel amazing.
            </h3>
            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Learn more about our gut-friendly bowls, crafted with balanced
              ingredients, mindful cooking techniques, and flavors that nourish
              you from the inside out.
            </p>
          </div>

          {/* 2 x 4 Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {gutImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-primary/10 aspect-square"
              >
                <img
                  src={src}
                  alt="Gut-friendly bowl"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
