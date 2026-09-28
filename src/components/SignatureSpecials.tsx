import { signatureSpecials } from '../data/specialsData';
import { Sparkles, Calendar } from 'lucide-react';

interface SignatureSpecialsProps {
  onOpenReservation: () => void;
}

export default function SignatureSpecials({ onOpenReservation }: SignatureSpecialsProps) {
  return (
    <section id="specials" className="py-24 sm:py-32 bg-[#121417] relative border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterpiece Creations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            AURA Signature Specials
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Handpicked culinary expressions that define our kitchen, celebrating the most revered royal recipes and coastal traditions of India.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {signatureSpecials.map((dish) => (
            <article
              key={dish.id}
              className="group rounded bg-[#181b20] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              {/* Dish Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1c2026]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dietary Badge (Standard Indian Veg/Non-Veg Square Indicator) */}
                <div
                  className="absolute top-4 left-4 p-1 rounded bg-[#0c0d0e]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  aria-label={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                >
                  <div
                    className={`w-3.5 h-3.5 border flex items-center justify-center ${
                      dish.isVeg ? 'border-emerald-500' : 'border-red-500'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Region metadata (unboxed quiet text over scrim) */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#181b20] via-[#181b20]/60 to-transparent">
                  <span className="text-[11px] tracking-wider uppercase text-[#c5a059] font-medium">
                    {dish.region}
                  </span>
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-serif text-[#f8f5ee] font-medium tracking-tight group-hover:text-[#d4af66] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-lg font-serif text-[#c5a059] font-normal tabular-nums whitespace-nowrap">
                      ₹{dish.price}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#ede8df]/75 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {dish.preparationNote && (
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#9e978a]">
                    <span className="italic">{dish.preparationNote}</span>
                    <button
                      type="button"
                      onClick={onOpenReservation}
                      className="text-[#c5a059] hover:text-[#e2c285] font-medium tracking-wider uppercase transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Reserve</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Section bottom note & CTA */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#9e978a] tracking-wider uppercase mb-4">
            Curated daily with the season's finest coastal and regional harvests
          </p>
          <button
            type="button"
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 shadow-md cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Taste Our Signatures — Reserve</span>
          </button>
        </div>
      </div>
    </section>
  );
}
