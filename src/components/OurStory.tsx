import { restaurantImages } from '../data/assets';

export default function OurStory() {
  const stats = [
    { value: '15+', label: 'Years of Culinary Experience' },
    { value: '40+', label: 'Signature Dishes' },
    { value: '12', label: 'Indian Regions Inspired' },
    { value: '4', label: 'Head Chefs' },
  ];

  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#0c0d0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section kicker without pill box */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
              <span>Heritage & Vision</span>
              <span className="w-8 h-[1px] bg-[#c5a059]/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight text-balance">
              A Story Served on Every Plate
            </h2>

            <div className="mt-8 space-y-5 text-sm sm:text-base text-[#ede8df]/80 font-light leading-relaxed">
              <p>
                <span className="text-[#d4af66] font-normal">AURA</span> was created with a simple belief — Indian cuisine deserves to be experienced as much as it is enjoyed.
              </p>
              <p>
                From age-old recipes passed through generations to contemporary interpretations of regional favourites, every dish at AURA is thoughtfully crafted to celebrate the diversity, warmth, and soul of India.
              </p>
              <p>
                Our kitchen brings together traditional spices, seasonal ingredients, artistic presentation, and modern culinary techniques to create an experience that feels both familiar and unforgettable.
              </p>
            </div>

            {/* Statistics Matrix */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-serif text-[#d4af66] font-light tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-[#9e978a] leading-tight font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Culinary Plating Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle back accent frame */}
              <div className="absolute -inset-3 rounded border border-[#c5a059]/20 transform rotate-1 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded bg-[#14161a] border border-white/10 shadow-2xl">
                <img
                  src={restaurantImages.story}
                  alt="AURA chef delicately garnishing fine-dining Indian dish with edible gold and micro-greens"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/80 to-transparent">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                    Artisanal Plating
                  </p>
                  <p className="text-xs text-[#ede8df]/85 font-light mt-0.5">
                    Every element placed with culinary precision and mindful devotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
