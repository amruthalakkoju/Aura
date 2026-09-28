import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2, Sparkles, Phone, Mail, User, MessageSquare } from 'lucide-react';

interface ReservationFormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  seatingArea: string;
  specialRequests: string;
}

interface ReservationSectionProps {
  initialExperience?: string;
}

export default function ReservationSection({ initialExperience }: ReservationSectionProps) {
  const [formData, setFormData] = useState<ReservationFormState>({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    time: '19:30',
    guests: '2',
    seatingArea: initialExperience || 'Main Dining Hall',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const validate = () => {
    const errs: Partial<Record<keyof ReservationFormState, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.date) errs.date = 'Please select a date';
    if (!formData.time) errs.time = 'Please select a time';
    if (!formData.guests) errs.guests = 'Please select number of guests';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate reference code
    const randomCode = `AURA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '19:30',
      guests: '2',
      seatingArea: 'Main Dining Hall',
      specialRequests: '',
    });
  };

  return (
    <section id="reserve" className="py-24 sm:py-32 bg-[#121417] relative border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c5a059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f8f5ee] tracking-tight leading-tight">
            Reserve Your Table
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#ede8df]/75 font-light text-balance">
            Allow us to prepare an evening of warmth, exquisite flavours, and attentive Indian hospitality tailored to your occasion.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-[#181b20] border border-[#c5a059]/30 rounded-lg p-6 sm:p-10 shadow-2xl">
          {isSubmitted ? (
            /* Success confirmation */
            <div className="text-center py-8 px-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#c5a059]/15 border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
                Request Confirmed
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#f8f5ee] mt-2 font-medium">
                Thank You, {formData.name}
              </h3>

              <div className="my-6 p-4 rounded bg-[#121417] border border-white/10 max-w-md w-full text-left space-y-2 text-xs sm:text-sm text-[#ede8df]/85">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9e978a]">Reservation Code:</span>
                  <span className="font-mono text-[#d4af66] font-semibold">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9e978a]">Date & Time:</span>
                  <span>{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9e978a]">Guests:</span>
                  <span>{formData.guests} Guests ({formData.seatingArea})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9e978a]">Contact:</span>
                  <span>{formData.phone}</span>
                </div>
              </div>

              <p className="text-sm text-[#ede8df]/85 max-w-md font-light leading-relaxed">
                Your reservation request has been received. The AURA team will contact you shortly to confirm your table.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-8 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] rounded shadow-md cursor-pointer hover:opacity-95"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                    Full Name <span className="text-[#9b4733]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9e978a] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] placeholder-[#9e978a]/50 focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                    Phone Number <span className="text-[#9b4733]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9e978a] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] placeholder-[#9e978a]/50 focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                    Email Address <span className="text-[#9b4733]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9e978a] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] placeholder-[#9e978a]/50 focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                {/* Seating / Experience Preference */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                    Dining Ambience
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                  >
                    <option value="Main Dining Hall">Main Dining Hall (Teakwood screens)</option>
                    <option value="Chef's Table Experience">The Chef&apos;s Table (7-course tasting)</option>
                    <option value="Private Dining Salon">Private Family Salon (Up to 12 guests)</option>
                    <option value="Beach Road Terrace View">Coastal View Terrace</option>
                  </select>
                </div>
              </div>

              {/* Date, Time, Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                    Date <span className="text-[#9b4733]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9e978a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                    Time <span className="text-[#9b4733]">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#9e978a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:00">1:00 PM (Lunch)</option>
                      <option value="13:30">1:30 PM (Lunch)</option>
                      <option value="14:00">2:00 PM (Lunch)</option>
                      <option value="19:00">7:00 PM (Dinner)</option>
                      <option value="19:30">7:30 PM (Dinner)</option>
                      <option value="20:00">8:00 PM (Dinner)</option>
                      <option value="20:30">8:30 PM (Dinner)</option>
                      <option value="21:00">9:00 PM (Dinner)</option>
                      <option value="21:30">9:30 PM (Dinner)</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                    Guests <span className="text-[#9b4733]">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#9e978a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests (Table for two)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8+">8+ Guests (Celebration)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#ede8df]/90 mb-2">
                  Special Requests & Dietary Notes
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#9e978a] absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="E.g. Anniversary candle setup, Jain dietary preparation, nut allergies, high chair for infant..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#121417] border border-white/10 rounded text-[#ede8df] placeholder-[#9e978a]/50 focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] hover:from-[#e2c285] hover:to-[#c5a059] rounded transition-all duration-200 shadow-[0_4px_22px_rgba(197,160,89,0.35)] cursor-pointer hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Reservation</span>
                </button>
                <p className="text-center text-[11px] text-[#9e978a] mt-3">
                  We hold reserved tables for up to 15 minutes past scheduled arrival. Dress code: Smart Casual.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
