import { chefsData } from '../data/chefsData';
import { ChefHat, Quote } from 'lucide-react';

export default function ChefsSection() {
  return (
    <section id="chefs" className="py-24 sm:py-32 bg-[#121417] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <ChefHat className="w-4 h-4 text-[#c5a059]" />
            <span>The Masters of Fire & Spice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            Meet the Chefs Behind AURA
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Four master artisans unite their deep regional lineages to reimagine Indian culinary heritage with relentless creativity and technical precision.
          </p>
        </div>

        {/* 4 Chefs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefsData.map((chef) => (
            <article
              key={chef.id}
              className="group rounded bg-[#181b20] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:-translate-y-1.5"
            >
              {/* Chef Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1c2026]">
                <img
                  src={chef.image}
                  alt={`${chef.name} - ${chef.role}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subdued Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b20] via-transparent to-transparent opacity-80" />

                {/* Experience badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0c0d0e]/85 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-wider text-[#e2c285] font-medium">
                  {chef.experience}
                </div>
              </div>

              {/* Chef Info */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-serif text-[#f8f5ee] font-medium tracking-tight group-hover:text-[#d4af66] transition-colors">
                    {chef.name}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-[0.14em] text-[#c5a059] font-medium mt-1">
                    {chef.role}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[#ede8df]/75 font-light leading-relaxed">
                    {chef.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[11px] text-[#9e978a]">
                    <span className="text-[#c5a059] font-medium">Speciality:</span> {chef.speciality}
                  </div>
                  <div className="text-[11px] text-[#ede8df]/70 italic flex items-start gap-1">
                    <Quote className="w-3 h-3 text-[#c5a059]/60 shrink-0 mt-0.5" />
                    <span>&ldquo;{chef.philosophy}&rdquo;</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
