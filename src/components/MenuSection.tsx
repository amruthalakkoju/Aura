import { useState, useMemo } from 'react';
import { menuCategories, fullMenuItems, MenuItem } from '../data/menuData';
import { Search, Flame, Award, BookOpen, X, Check } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export default function MenuSection({ onOpenReservation }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [fullMenuModalOpen, setFullMenuModalOpen] = useState<boolean>(false);

  // Filter items dynamically
  const filteredDishes = useMemo(() => {
    return fullMenuItems.filter((dish) => {
      // Category filter
      if (selectedCategory === 'vegetarian' && !dish.isVeg) return false;
      if (selectedCategory === 'non-vegetarian' && dish.isVeg) return false;
      if (
        selectedCategory !== 'all' &&
        selectedCategory !== 'vegetarian' &&
        selectedCategory !== 'non-vegetarian' &&
        dish.category !== selectedCategory
      ) {
        return false;
      }

      // Veg only toggle
      if (vegOnly && !dish.isVeg) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(q);
        const matchesDesc = dish.description.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, vegOnly]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0c0d0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <span>Culinary Portfolio</span>
            <span className="w-8 h-[1px] bg-[#c5a059]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            The AURA Menu
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            An exploration of India's storied culinary heritage, honoring authentic time-tested techniques and pristine seasonal ingredients.
          </p>
        </div>

        {/* Controls Bar: Category Filters, Search & Veg Toggle */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Category Tabs (Segmented control) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar justify-start md:justify-center">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#c5a059] text-[#0c0d0e] font-semibold shadow-[0_2px_12px_rgba(197,160,89,0.3)]'
                      : 'bg-[#181b20] text-[#ede8df]/80 hover:text-[#f8f5ee] hover:bg-[#20252c] border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Controls: Search & Veg Only Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto w-full pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9e978a]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, spices, ingredients..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-[#14161a] border border-white/10 rounded text-[#ede8df] placeholder-[#9e978a]/60 focus:outline-none focus:border-[#c5a059] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9e978a] hover:text-[#f8f5ee]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg Only Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-[#ede8df]/85">
                <input
                  type="checkbox"
                  checked={vegOnly}
                  onChange={(e) => setVegOnly(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-9 h-5 rounded-full transition-colors relative flex items-center px-0.5 ${
                    vegOnly ? 'bg-emerald-600' : 'bg-[#272c35]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      vegOnly ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </div>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 border border-emerald-500 rounded-sm flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span>Vegetarian Only</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Results Counter & Active Category Note */}
        <div className="flex items-center justify-between text-xs text-[#9e978a] mb-8 pb-3 border-b border-white/5">
          <span>
            Showing <strong className="text-[#ede8df] font-medium">{filteredDishes.length}</strong> delicacies
          </span>
          <span className="capitalize">
            {selectedCategory === 'all' ? 'All Sections' : selectedCategory.replace('-', ' ')}
          </span>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group p-5 rounded bg-[#121417]/80 hover:bg-[#181b20] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Name, indicator, and price */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {/* Dietary Indicator */}
                      <span
                        className="inline-flex w-3.5 h-3.5 border rounded-xs items-center justify-center shrink-0"
                        style={{ borderColor: dish.isVeg ? '#10b981' : '#ef4444' }}
                        title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: dish.isVeg ? '#10b981' : '#ef4444' }}
                        />
                      </span>

                      <h3 className="text-base sm:text-lg font-serif text-[#f8f5ee] font-medium tracking-tight group-hover:text-[#d4af66] transition-colors">
                        {dish.name}
                      </h3>

                      {dish.isChefSpecial && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">
                          <Award className="w-3 h-3 text-[#c5a059]" />
                          <span>Signature</span>
                        </span>
                      )}
                    </div>

                    <span className="text-base sm:text-lg font-serif text-[#c5a059] font-normal tabular-nums whitespace-nowrap">
                      ₹{dish.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#ede8df]/70 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Footer metadata */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#9e978a]">
                  <div className="flex items-center gap-2">
                    {dish.spiceLevel && (
                      <span className="flex items-center gap-0.5" title={`Spice Level: ${dish.spiceLevel}/3`}>
                        {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-[#9b4733]" />
                        ))}
                      </span>
                    )}
                    <span className="capitalize">{dish.category.replace('-', ' ')}</span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenReservation}
                    className="text-[#c5a059] hover:text-[#e2c285] font-medium transition-colors uppercase tracking-wider text-[10px]"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#14161a] rounded border border-white/5">
            <p className="text-base font-serif text-[#ede8df]">No dishes found matching your selection.</p>
            <p className="text-xs text-[#9e978a] mt-2">Try clearing your search query or dietary filters.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setVegOnly(false);
              }}
              className="mt-4 px-4 py-2 text-xs uppercase tracking-wider text-[#c5a059] border border-[#c5a059]/40 hover:bg-[#c5a059]/10 rounded transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Full Menu Button */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => setFullMenuModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#ede8df] hover:text-[#f8f5ee] bg-[#181b20] hover:bg-[#20252c] border border-[#c5a059]/40 hover:border-[#c5a059] rounded transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-[#c5a059]" />
            <span>View Full Menu & Tasting Catalog</span>
          </button>
        </div>
      </div>

      {/* Full Menu Modal */}
      {fullMenuModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        >
          <div className="bg-[#121417] border border-[#c5a059]/30 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0c0d0e]">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c5a059]">The Complete Collection</p>
                <h3 className="text-2xl font-serif text-[#f8f5ee] mt-1 font-normal">AURA Culinary Catalog</h3>
              </div>
              <button
                type="button"
                onClick={() => setFullMenuModalOpen(false)}
                className="p-2 text-[#9e978a] hover:text-[#f8f5ee] hover:bg-white/5 rounded transition-colors"
                aria-label="Close menu dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-10 divide-y divide-white/5">
              {(['starters', 'main-course', 'biryani', 'breads', 'desserts', 'beverages'] as const).map((catKey) => {
                const itemsInCat = fullMenuItems.filter((item) => item.category === catKey);
                const catTitle =
                  catKey === 'starters'
                    ? 'Starters & Small Plates'
                    : catKey === 'main-course'
                    ? 'Main Course Delicacies'
                    : catKey === 'biryani'
                    ? 'Royal Dum Biryani'
                    : catKey === 'breads'
                    ? 'Tandoor Breads'
                    : catKey === 'desserts'
                    ? 'Artisanal Desserts & Mithai'
                    : 'Craft Mocktails & Beverages';

                return (
                  <div key={catKey} className="pt-8 first:pt-0">
                    <h4 className="text-xl font-serif text-[#d4af66] tracking-wide mb-6 border-l-2 border-[#c5a059] pl-3">
                      {catTitle}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {itemsInCat.map((item) => (
                        <div key={item.id} className="flex flex-col justify-between">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-sm font-medium text-[#f8f5ee] font-serif tracking-wide flex items-center gap-2">
                              <span
                                className="w-2.5 h-2.5 border rounded-xs shrink-0 flex items-center justify-center"
                                style={{ borderColor: item.isVeg ? '#10b981' : '#ef4444' }}
                              >
                                <span
                                  className="w-1 h-1 rounded-full"
                                  style={{ backgroundColor: item.isVeg ? '#10b981' : '#ef4444' }}
                                />
                              </span>
                              {item.name}
                            </span>
                            <span className="text-sm font-serif text-[#c5a059] tabular-nums shrink-0">
                              ₹{item.price}
                            </span>
                          </div>
                          <p className="text-xs text-[#9e978a] mt-1 font-light leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0c0d0e] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#9e978a]">
                All prices are in INR. Government taxes applicable. 10% discretionary service charge.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFullMenuModalOpen(false);
                  onOpenReservation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] rounded shadow-md"
              >
                Reserve a Table for Dining
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
