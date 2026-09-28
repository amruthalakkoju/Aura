import { restaurantImages } from '../data/assets';
import { Flame, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface TodaysSpecialProps {
  onOpenReservation: (dishName?: string) => void;
}

export default function TodaysSpecial({ onOpenReservation }: TodaysSpecialProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#14161a] relative border-t border-white/5 overflow-hidden">
      {/* Decorative Warm Backlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#181b20] border border-[#c5a059]/30 rounded-lg p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded overflow-hidden border border-white/10 shadow-xl group">
                <img
                  src={restaurantImages.saffronMuttonBiryani}
                  alt="Tonight's special: Saffron Mutton Biryani cooked in copper handi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Non-veg dietary indicator */}
                <div className="absolute top-3 left-3 p-1 rounded bg-[#0c0d0e]/85 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border border-red-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </div>
                </div>

                {/* Handi Dum tag */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-[#0c0d0e]/90 text-[11px] font-medium tracking-wider text-[#e2c285] uppercase border border-white/10">
                  Clay-Sealed Dum Pukht
                </div>
              </div>
            </div>

            {/* Content info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#d4af66] font-semibold">
                  <Flame className="w-3.5 h-3.5 text-[#9b4733]" />
                  <span>Tonight at AURA</span>
                </span>
                
                <span className="px-2.5 py-0.5 rounded-full bg-[#9b4733]/20 border border-[#9b4733]/40 text-[#f59e0b] text-[11px] font-medium tracking-wide">
                  Limited servings available
                </span>
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-light text-[#f8f5ee] tracking-tight">
                Saffron Mutton Biryani
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#ede8df]/80 font-light leading-relaxed">
                Slow-cooked for hours with aged basmati rice, saffron, caramelized onions and our signature spice blend.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#9e978a]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                  6 Hours Slow Simmered
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  Prepared by Chef Arun
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  Only 25 Portions Freshly Dum Tonight
                </span>
              </div>

              {/* Price and CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif text-[#c5a059] font-normal tabular-nums">₹599</span>
                  <span className="text-xs text-[#9e978a]">per pot · serves 1-2</span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenReservation('Tonight Special: Saffron Mutton Biryani')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table & Hold Dish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
