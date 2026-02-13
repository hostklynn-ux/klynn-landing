import Image from "next/image";

const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Valores", href: "#values" },
  { label: "Contacto", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              priority
              width={60}
              height={80}
              src="/assets/logos/logo-vertical-white.png"
              alt="KLYNN vertical Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Minimalist Icon / Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <Image
              priority
              width={60}
              height={80}
              src="/assets/logos/logo-social-square.png"
              alt="Social logo Icon"
              className="h-6 w-6 rounded-md object-contain opacity-80"
            />
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} KLYNN. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
