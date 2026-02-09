import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

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
                India is not a single serving off a menu card — it's a melange
                of culture & curries!
              </span>
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              At Cibo, we have curated traditional mouthwatering dishes from
              different parts of India — from the royal kitchens of Rajasthan to
              the aromatic streets of Lucknow, from the spice-laden corridors
              of Old Delhi to the coconut-kissed shores of Tamil Nadu.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
              Our chefs keep authenticity intact by sourcing the finest
              ingredients from their origins across India, ensuring every dish
              tells a story of its homeland. Located in the heart of Salem, we
              bring you an unmatched culinary journey with world-class quality
              standards and a state-of-the-art kitchen.
            </p>
            <div className="gold-divider" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
