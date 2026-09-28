import { Utensils, HeartHandshake, Leaf, Wine } from 'lucide-react';

export default function DiningExperience() {
  const experiences = [
    {
      icon: Utensils,
      title: 'Curated Cuisine',
      description: 'Thoughtfully crafted dishes inspired by India\'s diverse culinary traditions.',
      badge: 'Artisanal Recipes'
    },
    {
      icon: HeartHandshake,
      title: 'Warm Hospitality',
      description: 'Personalized service designed to make every visit memorable.',
      badge: 'Atithi Devo Bhava'
    },
    {
      icon: Leaf,
      title: 'Seasonal Ingredients',
      description: 'Fresh ingredients selected according to season and quality.',
      badge: 'Locally Sourced'
    },
    {
      icon: Wine,
      title: 'Elegant Ambience',
      description: 'A refined atmosphere combining contemporary design with Indian character.',
      badge: 'Beach Road Vista'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0d0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <span>Philosophy & Values</span>
            <span className="w-8 h-[1px] bg-[#c5a059]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            More Than a Meal
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Every element of your evening at AURA is considered, from the acoustic warmth of our dining hall to the provenance of our single-origin spices.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded bg-[#121417] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Subtle Icon Container */}
                  <div className="w-12 h-12 rounded bg-[#181b20] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#0c0d0e] transition-colors duration-300 mb-6">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-xl font-serif text-[#f8f5ee] font-medium tracking-tight mb-3">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#ede8df]/75 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className="text-[11px] tracking-[0.14em] uppercase text-[#c5a059]/80 font-medium">
                    {exp.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
