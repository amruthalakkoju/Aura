import { restaurantImages } from '../data/assets';
import { Sparkles, Users, UtensilsCrossed, Clock, Flame } from 'lucide-react';

interface ChefsTableProps {
  onOpenReservation: (experienceType?: string) => void;
}

export default function ChefsTable({ onOpenReservation }: ChefsTableProps) {
  const highlights = [
    { icon: UtensilsCrossed, text: '7-Course Tasting Menu' },
    { icon: Users, text: 'Personal Chef Interaction' },
    { icon: Flame, text: 'Table-Side Live Presentation' },
    { icon: Sparkles, text: 'Rare Seasonal Ingredients' },
    { icon: Clock, text: 'Strictly Limited Seating (8 Guests/Night)' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0d0e] relative border-t border-white/5 overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={restaurantImages.chefTable}
          alt="The AURA Chef's Table private dining room"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e] via-[#0c0d0e]/95 to-[#0c0d0e]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded overflow-hidden border border-[#c5a059]/30 shadow-2xl group">
              <img
                src={restaurantImages.chefTable}
                alt="Intimate Chef's Table multi-course dining experience"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0c0d0e]/85 backdrop-blur-md border border-[#c5a059]/40 text-xs font-serif text-[#d4af66]">
                Only 1 Seating Per Evening
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#121417]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#9e978a]">Tasting Journey</p>
                    <p className="text-sm font-serif text-[#f8f5ee]">Curated Gastronomy by Chef Amrutha & Team</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-serif text-[#c5a059] font-medium tabular-nums">₹2,499</p>
                    <p className="text-[10px] text-[#9e978a]">per person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Offer Details */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exclusive Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
              The AURA Chef&apos;s Table
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#ede8df]/85 font-light leading-relaxed">
              Step behind the scenes and experience a curated multi-course tasting menu personally presented by our chefs.
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#9e978a] leading-relaxed">
              Immerse yourself in culinary storytelling where every course reveals the folklore, royal kitchen secrets, and innovative techniques behind iconic Indian flavors.
            </p>

            {/* Inclusions */}
            <div className="mt-8 space-y-3.5">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#ede8df]/90">
                    <div className="w-6 h-6 rounded bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#c5a059]" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Price and Action */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif text-[#d4af66] font-light tabular-nums">₹2,499</span>
                  <span className="text-xs text-[#9e978a]">per person</span>
                </div>
                <p className="text-xs text-[#9e978a] italic mt-1">Advance reservation required.</p>
              </div>

              <button
                type="button"
                onClick={() => onOpenReservation("Chef's Table Tasting Experience")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 shadow-[0_4px_20px_rgba(197,160,89,0.35)] cursor-pointer hover:-translate-y-0.5"
              >
                <span>Book Chef&apos;s Table</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
