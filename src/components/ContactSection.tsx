import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Youtube, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [inquiryState, setInquiryState] = useState({
    name: '',
    email: '',
    subject: 'Private Dining / Milestone Banquet',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryState.name || !inquiryState.email || !inquiryState.message) return;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#121417] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <span>Hospitality Concierge</span>
            <span className="w-8 h-[1px] bg-[#c5a059]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            Let&apos;s Make Your Evening Special
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Whether organizing an intimate anniversary, a multi-course corporate degustation, or a royal family gathering, our team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded bg-[#181b20] border border-white/10 shadow-lg space-y-6">
              <h3 className="text-xl font-serif text-[#f8f5ee] font-medium">
                Direct Inquiries
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#121417] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#9e978a]">Phone Concierge</p>
                    <a href="tel:+919000012345" className="text-[#ede8df] hover:text-[#c5a059] font-serif transition-colors">
                      +91 90000 12345
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#121417] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#9e978a]">Email Inquiries</p>
                    <a href="mailto:hello@aurarestaurant.in" className="text-[#ede8df] hover:text-[#c5a059] font-serif transition-colors">
                      hello@aurarestaurant.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#121417] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#9e978a]">Location</p>
                    <p className="text-[#ede8df] font-serif">Beach Road, Visakhapatnam</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#121417] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#9e978a]">Opening Hours</p>
                    <p className="text-[#ede8df] font-serif">12:00 PM – 11:30 PM Daily</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-[#9e978a] mb-3">Connect With Us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="AURA on Instagram"
                    className="w-10 h-10 rounded bg-[#121417] border border-white/10 hover:border-[#c5a059] text-[#ede8df] hover:text-[#c5a059] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="AURA on Facebook"
                    className="w-10 h-10 rounded bg-[#121417] border border-white/10 hover:border-[#c5a059] text-[#ede8df] hover:text-[#c5a059] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="AURA on YouTube"
                    className="w-10 h-10 rounded bg-[#121417] border border-white/10 hover:border-[#c5a059] text-[#ede8df] hover:text-[#c5a059] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry / Event Host Form */}
          <div className="lg:col-span-7 bg-[#181b20] border border-white/10 rounded p-8 sm:p-10 shadow-lg">
            <h3 className="text-2xl font-serif text-[#f8f5ee] font-medium mb-1">
              Host an Exclusive Event
            </h3>
            <p className="text-xs text-[#9e978a] mb-6">
              For private dining room buyouts, bespoke tasting menus, or sommelier pairings.
            </p>

            {isSent ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-[#c5a059] mb-4" />
                <h4 className="text-xl font-serif text-[#f8f5ee]">Inquiry Transmitted</h4>
                <p className="text-xs text-[#ede8df]/80 max-w-sm mt-2">
                  Our Guest Experience Director will contact you within 4 business hours with customized arrangements.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-6 px-4 py-2 text-xs uppercase tracking-wider text-[#c5a059] border border-[#c5a059]/40 hover:bg-[#c5a059]/10 rounded transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Roy"
                      value={inquiryState.name}
                      onChange={(e) => setInquiryState({ ...inquiryState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={inquiryState.email}
                      onChange={(e) => setInquiryState({ ...inquiryState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                    Occasion / Subject
                  </label>
                  <select
                    value={inquiryState.subject}
                    onChange={(e) => setInquiryState({ ...inquiryState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Private Dining / Milestone Banquet">Private Dining / Milestone Banquet</option>
                    <option value="Corporate Executive Dinner">Corporate Executive Dinner</option>
                    <option value="Chef's Table Group Booking">Chef&apos;s Table Group Booking</option>
                    <option value="Media & Press Inquiry">Media & Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your guests, preferred dates, and specific requirements..."
                    value={inquiryState.message}
                    onChange={(e) => setInquiryState({ ...inquiryState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] placeholder-[#9e978a]/50 focus:outline-none focus:border-[#c5a059] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Concierge Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
