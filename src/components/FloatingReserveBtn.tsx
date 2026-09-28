import { useState, useEffect } from 'react';
import { Calendar, ArrowUp } from 'lucide-react';

interface FloatingReserveBtnProps {
  onOpenReservation: () => void;
}

export default function FloatingReserveBtn({ onOpenReservation }: FloatingReserveBtnProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Back to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top of page"
        className="w-10 h-10 rounded-full bg-[#121417]/90 hover:bg-[#181b20] border border-[#c5a059]/30 text-[#ede8df] hover:text-[#c5a059] flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md cursor-pointer hover:-translate-y-1"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Floating Reserve Button */}
      <button
        type="button"
        onClick={onOpenReservation}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#d4af66] via-[#c5a059] to-[#a9823f] text-[#0c0d0e] text-xs font-semibold uppercase tracking-[0.14em] shadow-[0_6px_25px_rgba(197,160,89,0.4)] hover:shadow-[0_8px_30px_rgba(197,160,89,0.55)] transition-all duration-200 cursor-pointer hover:-translate-y-1 active:translate-y-0"
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">Reserve a Table</span>
        <span className="sm:hidden">Reserve</span>
      </button>
    </div>
  );
}
