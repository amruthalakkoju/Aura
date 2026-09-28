import { MapPin, Phone, Mail, Clock, Navigation, Compass } from 'lucide-react';

export default function LocationSection() {
  const openDirections = () => {
    window.open('https://maps.google.com/?q=Beach+Road,+Visakhapatnam,+Andhra+Pradesh', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#0c0d0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <Compass className="w-4 h-4 text-[#c5a059]" />
            <span>Finding AURA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            Our Location
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Perched along the iconic coastline of Visakhapatnam, where the gentle breeze of the Bay of Bengal greets an evening of culinary distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded bg-[#121417] border border-white/10 shadow-xl space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                AURA Indian Fine Dining
              </span>
              <h3 className="text-2xl font-serif text-[#f8f5ee] mt-1 font-normal">
                Visakhapatnam Sanctuary
              </h3>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#181b20] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#9e978a] font-medium">Address</p>
                <p className="text-sm sm:text-base text-[#f8f5ee] font-serif mt-1">
                  Beach Road, Visakhapatnam
                </p>
                <p className="text-xs text-[#ede8df]/70">Andhra Pradesh — 530001, India</p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#181b20] border border-white/10 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#9e978a]">Phone</p>
                  <a
                    href="tel:+919000012345"
                    className="text-xs sm:text-sm text-[#f8f5ee] hover:text-[#c5a059] transition-colors tabular-nums"
                  >
                    +91 90000 12345
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#181b20] border border-white/10 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#9e978a]">Email</p>
                  <a
                    href="mailto:hello@aurarestaurant.in"
                    className="text-xs sm:text-sm text-[#f8f5ee] hover:text-[#c5a059] transition-colors truncate block"
                  >
                    hello@aurarestaurant.in
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider text-[#c5a059] font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Dining Service Hours</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-[#ede8df]/85">
                  <span className="font-light">Monday – Thursday</span>
                  <span className="font-medium font-serif text-[#f8f5ee]">12:00 PM – 10:30 PM</span>
                </div>
                <div className="flex justify-between text-[#ede8df]/85">
                  <span className="font-light">Friday – Sunday</span>
                  <span className="font-medium font-serif text-[#d4af66]">12:00 PM – 11:30 PM</span>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={openDirections}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-semibold tracking-[0.16em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Interactive Stylized Map Visual */}
          <div className="lg:col-span-7 rounded overflow-hidden border border-white/10 bg-[#14161a] relative min-h-[380px] lg:min-h-full flex flex-col justify-between shadow-xl">
            {/* Dark Styled Map Visual Representation */}
            <div className="absolute inset-0 z-0 bg-[#0e1115] overflow-hidden">
              {/* Geometric Grid & Ocean Coastline Simulation */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(#272c35 1px, transparent 1px), linear-gradient(to right, #272c35 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
              
              {/* Coastal Wave line representation */}
              <div className="absolute -right-20 top-0 bottom-0 w-2/3 bg-gradient-to-l from-sky-950/40 via-cyan-950/20 to-transparent pointer-events-none" />

              {/* Beach Road Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M -50 420 Q 250 350 450 240 T 900 80"
                  fill="none"
                  stroke="#c5a059"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                <path
                  d="M -50 440 Q 250 370 450 260 T 900 100"
                  fill="none"
                  stroke="#272c35"
                  strokeWidth="8"
                  opacity="0.8"
                />
              </svg>

              {/* Pinpoint Anchor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 animate-ping absolute -inset-0" />
                  <div className="w-12 h-12 rounded-full bg-[#0c0d0e] border-2 border-[#c5a059] flex items-center justify-center text-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.7)] relative z-10">
                    <MapPin className="w-6 h-6 fill-[#c5a059] text-[#0c0d0e]" />
                  </div>
                </div>

                <div className="mt-3 px-3 py-1.5 rounded bg-[#0c0d0e]/90 backdrop-blur-md border border-[#c5a059]/50 shadow-xl text-center">
                  <p className="text-xs font-serif text-[#f8f5ee] font-medium tracking-wide">AURA</p>
                  <p className="text-[10px] text-[#c5a059] uppercase tracking-wider">Beach Road, Vizag</p>
                </div>
              </div>
            </div>

            {/* Map Top Bar */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1 rounded bg-[#0c0d0e]/80 backdrop-blur-md border border-white/10 text-[11px] text-[#ede8df] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Valet Parking Available at Entrance</span>
              </div>

              <div className="px-3 py-1 rounded bg-[#0c0d0e]/80 backdrop-blur-md border border-white/10 text-[11px] text-[#c5a059] font-mono">
                17.7126° N, 83.3156° E
              </div>
            </div>

            {/* Map Bottom Bar */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/80 to-transparent">
              <p className="text-xs text-[#9e978a]">
                Bay of Bengal Coastline · 20 mins from Visakhapatnam International Airport
              </p>
              <button
                type="button"
                onClick={openDirections}
                className="text-xs font-semibold text-[#c5a059] hover:text-[#e2c285] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Open in Maps</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
