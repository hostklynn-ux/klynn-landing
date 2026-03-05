import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B2447] text-gray-400 py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Image
              priority
              width={60}
              height={80}
              src="/assets/logos/logo-vertical-dark.png"
              alt="KLYNN vertical Logo"
              className="hidden md:block h-12 w-auto object-contain"
            />
            <p className="text-sm text-gray-500">
              Automatización inteligente para operaciones premium.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">PRODUCTO</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#solucion" className="hover:text-cyan-400 transition-colors">Solución</Link></li>
              <li><Link href="#como-funciona" className="hover:text-cyan-400 transition-colors">Cómo Funciona</Link></li>
              <li><Link href="#calidad" className="hover:text-cyan-400 transition-colors">Calidad</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">EMPRESA</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Acerca de</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">LEGAL</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Términos</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 KLYNN. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
