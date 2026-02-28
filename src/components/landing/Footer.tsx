import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold tracking-tight">
              KLYNN
            </div>
            <p className="text-sm text-secondary-foreground leading-relaxed max-w-xs">
              Transformando la forma en que los profesionales de limpieza generan ingresos constantes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Enlaces rápidos</h3>
            <ul className="space-y-4 text-sm text-secondary-foreground">
              <li><Link href="#inicio" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="#beneficios" className="hover:text-primary transition-colors">Beneficios</Link></li>
              <li><Link href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</Link></li>
              <li><Link href="#testimonios" className="hover:text-primary transition-colors">Testimonios</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-4 text-sm text-secondary-foreground">
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-primary transition-colors">Sobre KLYNN</a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-primary transition-colors">Blog</a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://www.klynn.com" className="hover:text-primary transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-secondary-foreground">
              <li className="flex items-center gap-2">
                <li><Link href="#" className="hover:text-primary transition-colors">Términos de servicio</Link></li>
              </li>
              <li className="flex items-center gap-2">
                <Link href="#" className="hover:text-primary transition-colors">Política de privacidad</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-8 border-t border-white/20 text-secondary-foreground">
          <p>© {new Date().getFullYear()} KLYNN. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;