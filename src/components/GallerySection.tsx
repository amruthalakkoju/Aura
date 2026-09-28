import { useState, useEffect } from 'react';
import { galleryItems, GalleryItem } from '../data/galleryData';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Food' | 'Interiors' | 'Chefs' | 'Dining'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Interiors', 'Chefs', 'Dining'] as const;

  const filteredItems = galleryItems.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  // Handle keyboard navigation inside lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#121417] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <Camera className="w-4 h-4 text-[#c5a059]" />
            <span>Visual Glimpses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            The AURA Gallery
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Immerse yourself in our world of culinary artistry, warm coastal architecture, and quiet moments behind the pass.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a059] text-[#0c0d0e] font-semibold shadow-md'
                    : 'bg-[#181b20] text-[#ede8df]/80 hover:text-[#f8f5ee] hover:bg-[#20252c] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] rounded overflow-hidden bg-[#181b20] border border-white/10 hover:border-[#c5a059]/40 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Hover Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif text-[#f8f5ee] font-medium mt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#ede8df]/80 font-light mt-1 line-clamp-1">
                  {item.subtitle}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#e2c285] font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between max-w-6xl mx-auto w-full text-white/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">
                {currentLightboxItem.category} ({lightboxIndex! + 1} / {filteredItems.length})
              </p>
              <h4 className="text-xl font-serif text-[#f8f5ee] mt-0.5">
                {currentLightboxItem.title}
              </h4>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#ede8df] transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image with Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-5xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1))
              }
              aria-label="Previous image"
              className="absolute left-2 sm:-left-12 z-10 p-3 rounded-full bg-[#0c0d0e]/80 hover:bg-[#c5a059] text-[#ede8df] hover:text-[#0c0d0e] transition-colors border border-white/10 shadow-lg cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <img
              src={currentLightboxItem.image}
              alt={currentLightboxItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-full rounded object-contain shadow-2xl border border-white/10"
            />

            {/* Next Button */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0))
              }
              aria-label="Next image"
              className="absolute right-2 sm:-right-12 z-10 p-3 rounded-full bg-[#0c0d0e]/80 hover:bg-[#c5a059] text-[#ede8df] hover:text-[#0c0d0e] transition-colors border border-white/10 shadow-lg cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div
            className="text-center max-w-2xl mx-auto text-xs sm:text-sm text-[#ede8df]/80 font-light"
            onClick={(e) => e.stopPropagation()}
          >
            {currentLightboxItem.subtitle}
          </div>
        </div>
      )}
    </section>
  );
}
