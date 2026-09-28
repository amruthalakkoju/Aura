import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'story', 'menu', 'chefs', 'specials', 'gallery', 'location', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Chefs', href: '#chefs' },
    { label: 'Specials', href: '#specials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-[#c5a059]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'bg-gradient-to-b from-[#0c0d0e]/95 via-[#0c0d0e]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#f8f5ee] hover:text-[#c5a059] transition-colors uppercase font-medium flex items-center gap-1.5"
            >
              <span>AURA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] inline-block mb-1" />
            </a>

            {/* Zone 2: Clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-xs tracking-[0.16em] uppercase font-medium transition-colors py-1 ${
                      isActive
                        ? 'text-[#c5a059]'
                        : 'text-[#ede8df]/80 hover:text-[#f8f5ee]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c5a059] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary CTA action */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 shadow-[0_2px_14px_rgba(197,160,89,0.3)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="lg:hidden p-2 text-[#ede8df] hover:text-[#c5a059] hover:bg-white/5 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-30 lg:hidden bg-[#0c0d0e]/95 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col gap-5 max-w-sm mx-auto w-full">
            <div className="text-center pb-4 border-b border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">Upscale Indian Dining</p>
              <h2 className="text-2xl font-serif text-[#f8f5ee] tracking-[0.18em] mt-1">AURA</h2>
            </div>
            
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 px-3 text-sm tracking-[0.16em] uppercase text-[#ede8df] hover:text-[#c5a059] hover:bg-white/5 rounded transition-colors text-center font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 max-w-sm mx-auto w-full text-center">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold tracking-[0.16em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] rounded shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <p className="text-[11px] text-[#9e978a] mt-4 tracking-wider">
              Beach Road, Visakhapatnam · +91 90000 12345
            </p>
          </div>
        </div>
      )}
    </>
  );
}
