import ciboLogo from "@/assets/cibo-logo.png";
import { Instagram, Facebook } from "lucide-react";

const ZomatoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 7.5h-5.8l3.8-3.2c.2-.2.1-.5-.2-.5H8.5c-.3 0-.5.2-.5.5s.2.5.5.5h5.5l-3.8 3.2c-.2.2-.1.5.2.5h6.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM12 18c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
  </svg>
);

const SwiggyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.034 2C8.046 2 4.636 4.876 3.818 8.734c-.136.65.076 1.322.57 1.808l6.478 6.37c.63.62 1.652.62 2.282 0l6.478-6.37c.494-.486.706-1.158.57-1.808C19.378 4.876 15.968 2 12.034 2zm0 3.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM7.5 19.5c0 1.38 1.12 2.5 2.5 2.5h4c1.38 0 2.5-1.12 2.5-2.5v-1H7.5v1z" />
  </svg>
);

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/cibo_salem?igsh=MTB1NmNiazZoMnE5aw==",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    icon: ZomatoIcon,
    label: "Zomato",
    href: "https://www.zomato.com/",
  },
  {
    icon: SwiggyIcon,
    label: "Swiggy",
    href: "https://www.swiggy.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="text-center mb-12">
          <img src={ciboLogo} alt="Cibo Restaurant Logo" className="h-20 md:h-24 w-auto mx-auto mb-2" />
          <p className="font-body text-sm letter-spacing-widest uppercase text-primary mb-6">
            Premium Fine Dining · Salem
          </p>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-body text-[10px] letter-spacing-widest uppercase">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center border-t border-border pt-8">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cibo Restaurant, Salem. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
