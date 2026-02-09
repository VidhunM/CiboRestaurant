import { motion } from "framer-motion";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const menuItems = [
  {
    image: dish1,
    name: "Paneer Saunfiya",
    description: "Cottage cheese delicately spiced with fennel and saffron cream",
    price: "₹420",
  },
  {
    image: dish2,
    name: "Hyderabadi Biryani",
    description: "Fragrant basmati rice layered with aromatic spices and vegetables",
    price: "₹380",
  },
  {
    image: dish3,
    name: "Gulab Jamun Royale",
    description: "Golden milk dumplings in rose-cardamom syrup with pistachio dust",
    price: "₹280",
  },
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm letter-spacing-widest uppercase text-primary mb-4">
            Curated Selections
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Our Signature Dishes
          </h2>
          <div className="gold-divider-wide mx-auto" />
        </motion.div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <p className="font-body text-xs letter-spacing-widest uppercase text-primary">
                    Signature
                  </p>
                  <div className="h-px w-8 bg-primary/40" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3 max-w-xs mx-auto">
                  {item.description}
                </p>
                <p className="font-display text-lg text-primary">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
