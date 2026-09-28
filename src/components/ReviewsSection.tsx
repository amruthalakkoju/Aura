import { guestReviews } from '../data/reviewsData';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0d0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <MessageSquareQuote className="w-4 h-4 text-[#c5a059]" />
            <span>Guest Chronicles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Reflections from patrons who have celebrated their milestones, gatherings, and quiet evenings with us on Beach Road.
          </p>
        </div>

        {/* 4 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {guestReviews.map((rev) => (
            <article
              key={rev.id}
              className="p-8 rounded bg-[#121417] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5" aria-label={`${rev.rating} out of 5 stars`}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-xs sm:text-sm text-[#ede8df]/85 font-light leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </blockquote>
              </div>

              {/* Author & Occasion */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <p className="text-sm font-serif text-[#f8f5ee] font-medium">
                  {rev.author}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#9e978a] mt-1">
                  <span>{rev.occasion}</span>
                  <span className="text-[#c5a059]/80">{rev.city}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
