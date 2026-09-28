import { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExperience?: string;
}

export default function ReservationModal({ isOpen, onClose, defaultExperience }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:30',
    guests: '2',
    seatingArea: defaultExperience || 'Main Dining Hall',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit phone required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setBookingRef(`AURA-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={handleModalClose}
    >
      <div
        className="bg-[#181b20] border border-[#c5a059]/40 rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 text-[#9e978a] hover:text-[#ede8df] hover:bg-white/5 rounded transition-colors"
          aria-label="Close reservation dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#c5a059]/15 border border-[#c5a059] flex items-center justify-center text-[#c5a059] mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
              Reservation Placed
            </span>
            <h3 className="text-2xl font-serif text-[#f8f5ee] mt-1 font-medium">
              We Await You, {formData.name}
            </h3>

            <div className="my-5 p-4 rounded bg-[#121417] border border-white/10 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-[#9e978a]">Confirmation Code:</span>
                <span className="font-mono text-[#d4af66] font-semibold">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-[#9e978a]">Schedule:</span>
                <span>{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9e978a]">Party:</span>
                <span>{formData.guests} Guests · {formData.seatingArea}</span>
              </div>
            </div>

            <p className="text-xs text-[#ede8df]/80 font-light leading-relaxed">
              Your reservation request has been received. The AURA team will contact you shortly to confirm your table.
            </p>

            <button
              type="button"
              onClick={handleModalClose}
              className="mt-6 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] rounded shadow cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">Fine Dining Reservations</p>
              <h3 className="text-2xl font-serif text-[#f8f5ee] mt-1 font-normal">Table at AURA</h3>
              <p className="text-xs text-[#9e978a] mt-1">Beach Road, Visakhapatnam</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9e978a] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-400 mt-0.5">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9e978a] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 90000 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-400 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9e978a] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-400 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2.5 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="12:30">12:30 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2 py-2.5 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8+">8+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                  Seating Experience
                </label>
                <select
                  value={formData.seatingArea}
                  onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="Main Dining Hall">Main Dining Hall</option>
                  <option value="Chef's Table Experience">The Chef&apos;s Table (7-course tasting)</option>
                  <option value="Private Dining Salon">Private Dining Salon</option>
                  <option value="Beach Road Terrace View">Coastal View Terrace</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#ede8df] mb-1 font-medium">
                  Special Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="Anniversary, dietary restrictions, seating preferences..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#121417] border border-white/10 rounded text-[#ede8df] placeholder-[#9e978a]/50 focus:outline-none focus:border-[#c5a059] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#0c0d0e] bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] rounded shadow-md cursor-pointer hover:opacity-95"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
