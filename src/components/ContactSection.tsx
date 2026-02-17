import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9626882220 / 9626442221",
    href: "tel:+919626882220",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "1st Floor, 312/2, Omalur Main Rd, Salem, Tamil Nadu 636007",
    href: "https://maps.google.com/?q=312/2+Omalur+Main+Rd+Salem+Tamil+Nadu+636007",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@cibosalem.com",
    href: "mailto:info@cibosalem.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "12:00 PM – 03:00 AM ·",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-charcoal">
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
            Reservations & Inquiries
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Get in Touch
          </h2>
          <div className="gold-divider-wide mx-auto mb-8" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us for reservations or to discover more about our
            exceptional cuisine and services.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 border border-border hover:border-primary/30 transition-colors duration-500 group"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-body text-xs letter-spacing-widest uppercase text-primary mb-3">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-sans text-sm text-muted-foreground">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 border border-border overflow-hidden"
        >
          <iframe
            title="Cibo Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.123!2d78.145!3d11.665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzEyLzIsIE9tYWx1ciBNYWluIFJkLCBTYWxlbSwgVGFtaWwgTmFkdSA2MzYwMDc!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
