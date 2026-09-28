import { MapPin, ChevronDown, Utensils, Calendar } from 'lucide-react';
import { restaurantImages } from '../data/assets';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0d0e]"
    >
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantImages.hero}
          alt="AURA Indian Fine Dining luxury banquet spread"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[12000ms] opacity-45"
        />
        {/* Gradients for legibility and luxury atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/60 to-[#0c0d0e]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle Region / Trust Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#c5a059]/30 text-[#e2c285] text-xs font-medium tracking-[0.18em] uppercase mb-8 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>Visakhapatnam, Andhra Pradesh</span>
        </div>

        {/* Brand Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-[0.22em] text-[#f8f5ee] uppercase leading-none drop-shadow-sm select-none">
          AURA
        </h1>

        {/* Tagline */}
        <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-serif italic text-[#d4af66] tracking-wide font-normal max-w-2xl mx-auto text-balance">
          Where Indian Flavours Meet Modern Elegance.
        </p>

        {/* Hairline gold accent bar */}
        <div className="w-16 h-[1.5px] bg-[#c5a059]/60 my-6 rounded-full" />

        {/* Supporting text */}
        <p className="text-sm sm:text-base md:text-lg text-[#ede8df]/85 font-light leading-relaxed max-w-2xl mx-auto text-balance">
          An elevated Indian dining experience where timeless recipes, contemporary techniques, and warm hospitality come together.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#ede8df] hover:text-[#f8f5ee] bg-[#1c2026]/90 hover:bg-[#272c35] border border-[#c5a059]/40 hover:border-[#c5a059] rounded transition-all duration-200 cursor-pointer shadow-md"
          >
            <Utensils className="w-4 h-4 text-[#c5a059]" />
            <span>Explore Menu</span>
          </button>

          <button
            type="button"
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 cursor-pointer shadow-[0_4px_22px_rgba(197,160,89,0.35)] hover:shadow-[0_6px_28px_rgba(197,160,89,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4 text-[#0c0d0e]" />
            <span>Reserve a Table</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <button
        type="button"
        onClick={scrollToStory}
        aria-label="Scroll down to Our Story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#9e978a] hover:text-[#c5a059] transition-colors focus:outline-none cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#9e978a]/70 group-hover:text-[#c5a059]">
          Discover
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a059]" />
      </button>
    </section>
  );
}
