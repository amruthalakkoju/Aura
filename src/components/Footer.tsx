import { useState } from 'react';
import { Instagram, Facebook, Youtube, X } from 'lucide-react';

export default function Footer() {
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Chefs', href: '#chefs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#08090a] border-t border-white/10 pt-20 pb-12 text-[#ede8df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, '#home')}
                className="text-3xl font-serif tracking-[0.25em] text-[#f8f5ee] hover:text-[#c5a059] transition-colors uppercase inline-block font-light"
              >
                AURA
              </a>
              <p className="text-sm font-serif italic text-[#c5a059] tracking-wide">
                Where Indian Flavours Meet Modern Elegance.
              </p>
              <p className="text-xs text-[#9e978a] leading-relaxed max-w-sm font-light">
                An elevated Indian dining sanctuary on Beach Road, Visakhapatnam, celebrating timeless royal recipes, culinary alchemy, and authentic warmth.
              </p>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded bg-[#121417] border border-white/10 hover:border-[#c5a059] text-[#9e978a] hover:text-[#c5a059] flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded bg-[#121417] border border-white/10 hover:border-[#c5a059] text-[#9e978a] hover:text-[#c5a059] flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded bg-[#121417] border border-white/10 hover:border-[#c5a059] text-[#9e978a] hover:text-[#c5a059] flex items-center justify-center transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium">Navigation</p>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-xs text-[#ede8df]/75 hover:text-[#f8f5ee] hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium">Hours</p>
              <div className="space-y-3 text-xs text-[#ede8df]/75">
                <div>
                  <p className="text-[#9e978a]">Mon – Thu</p>
                  <p className="font-serif text-[#f8f5ee] mt-0.5">12:00 PM – 10:30 PM</p>
                </div>
                <div>
                  <p className="text-[#9e978a]">Fri – Sun</p>
                  <p className="font-serif text-[#d4af66] mt-0.5">12:00 PM – 11:30 PM</p>
                </div>
                <div>
                  <p className="text-[#9e978a]">Valet Service</p>
                  <p className="mt-0.5">Complimentary for guests</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium">Visit AURA</p>
              <div className="space-y-2 text-xs text-[#ede8df]/75">
                <p className="font-serif text-[#f8f5ee]">Beach Road, Visakhapatnam</p>
                <p>Andhra Pradesh — 530001, India</p>
                <p className="pt-2">
                  <a href="tel:+919000012345" className="hover:text-[#c5a059] transition-colors">
                    +91 90000 12345
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@aurarestaurant.in" className="hover:text-[#c5a059] transition-colors">
                    hello@aurarestaurant.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright & Legal Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9e978a]">
            <p>© 2026 AURA Indian Fine Dining. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPolicyModal('privacy')}
                className="hover:text-[#ede8df] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true" className="text-white/20">|</span>
              <button
                type="button"
                onClick={() => setPolicyModal('terms')}
                className="hover:text-[#ede8df] transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy / Terms Modal */}
      {policyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPolicyModal(null)}
        >
          <div
            className="bg-[#181b20] border border-white/10 rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h4 className="text-xl font-serif text-[#f8f5ee]">
                {policyModal === 'privacy' ? 'Privacy Policy' : 'Terms & Dining Guidelines'}
              </h4>
              <button
                type="button"
                onClick={() => setPolicyModal(null)}
                className="p-1.5 text-[#9e978a] hover:text-[#ede8df]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs text-[#ede8df]/80 leading-relaxed font-light">
              {policyModal === 'privacy' ? (
                <>
                  <p>
                    At AURA, we treat the confidentiality of our patrons with highest priority. Contact information submitted through our online booking concierge is used solely to confirm table reservations and accommodate dietary preferences.
                  </p>
                  <p>
                    We never sell, rent, or lease patron records to third parties. All transactional records are strictly encrypted.
                  </p>
                  <p>
                    For inquiries or record deletion requests, please contact hello@aurarestaurant.in.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Reservation Hold:</strong> Reserved tables are held for a maximum of 15 minutes past the confirmed schedule before releasing to walk-in patrons.
                  </p>
                  <p>
                    <strong>Dress Code:</strong> We kindly request our patrons to adhere to an elegant smart-casual aesthetic.
                  </p>
                  <p>
                    <strong>Chef&apos;s Table:</strong> Due to bespoke ingredient provisioning, cancellations for The Chef&apos;s Table require a minimum 24-hour advance notice.
                  </p>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setPolicyModal(null)}
              className="mt-6 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0c0d0e] bg-[#c5a059] rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
