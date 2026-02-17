
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Utensils, PartyPopper, Users, Briefcase } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

const services = [
    {
        icon: Utensils,
        title: "Fine Dining",
        description: "Experience culinary excellence with our carefully curated menu featuring authentic flavors and innovative dishes.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        features: ["Authentic Cuisine", "Elegant Ambiance", "Expert Chefs", "Premium Service"]
    },
    {
        icon: Utensils,
        title: "Catering Services",
        description: "Bring the exquisite taste of Cibo to your special events. We offer comprehensive catering solutions for any occasion.",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
        features: ["Customized Menus", "Live Counters", "Professional Staff", "Event Planning Support"]
    },
    {
        icon: PartyPopper,
        title: "Birthday Parties",
        description: "Make your birthday celebration unforgettable. We provide the perfect venue, delicious food, and festive atmosphere.",
        image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=2070&auto=format&fit=crop",
        features: ["Themed Decorations", "Custom Cakes", "Private Area", "Entertainment Options"]
    },
    {
        icon: Users,
        title: "Get Togethers",
        description: "Reconnect with friends and family in a warm, welcoming environment. Perfect for reunions and casual gatherings.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        features: ["Flexible Seating", "Group Packages", "Relaxed Atmosphere", "Dedicated Service"]
    },
    {
        icon: Briefcase,
        title: "Corporate Events",
        description: "Host professional meetings and corporate dinners with style. We offer the ideal setting for business discussions.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
        features: ["Audio/Visual Equipment", "Private Rooms", "Business Lunch Menus", "High-Speed Wi-Fi"]
    }
];

const ServicesSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [api]);

    return (
        <section id="services" className="section-padding bg-background overflow-hidden">
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
                        Exceptional Experiences
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                        Our Services
                    </h2>
                    <div className="gold-divider-wide mx-auto mb-8" />
                    <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                        From intimate dinners to grand celebrations, we offer a range of services designed to create memorable moments.
                    </p>
                </motion.div>

                {/* Services Carousel */}
                <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                        {services.map((service, index) => (
                            <CarouselItem key={service.title} className="pl-4">
                                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-4">
                                    {/* Image Side - Always Left in Carousel for consistency */}
                                    <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-xl group">
                                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                        </div>
                                    </div>

                                    {/* Content Side - Always Right */}
                                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                                        <div className={`flex items-center gap-4 justify-center lg:justify-start`}>
                                            <div className="p-3 bg-charcoal rounded-full border border-gold/30">
                                                <service.icon className="w-6 h-6 text-gold" />
                                            </div>
                                            <span className="font-body text-gold tracking-widest uppercase text-sm">
                                                Premium Service
                                            </span>
                                        </div>

                                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                                            {service.title}
                                        </h2>

                                        <p className="font-body text-lg text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>

                                        <ul className="grid grid-cols-2 gap-4 pt-4">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-foreground/80 font-body justify-center lg:justify-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <button className="mt-6 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-body uppercase tracking-wider text-sm">
                                            Inquire Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-4 lg:-left-12" />
                        <CarouselNext className="right-4 lg:-right-12" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default ServicesSection;
