import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import SignatureSpecials from './components/SignatureSpecials';
import MenuSection from './components/MenuSection';
import ChefsSection from './components/ChefsSection';
import ChefsTable from './components/ChefsTable';
import TodaysSpecial from './components/TodaysSpecial';
import DiningExperience from './components/DiningExperience';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingReserveBtn from './components/FloatingReserveBtn';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [modalExperienceType, setModalExperienceType] = useState('Main Dining Hall');

  const handleOpenReservation = (experienceType?: string) => {
    if (experienceType) {
      setModalExperienceType(experienceType);
    } else {
      setModalExperienceType('Main Dining Hall');
    }
    setReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#ede8df] selection:bg-[#c5a059]/30 selection:text-[#f8f5ee] relative font-sans">
      {/* Subtle Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenReservation={() => handleOpenReservation()} />

        {/* 2. Welcome / Our Story */}
        <OurStory />

        {/* 3. AURA Signature Specials */}
        <SignatureSpecials onOpenReservation={() => handleOpenReservation()} />

        {/* 4. Tonight at AURA / Highlighted Special */}
        <TodaysSpecial onOpenReservation={(dish) => handleOpenReservation(dish)} />

        {/* 5. Complete Interactive Menu */}
        <MenuSection onOpenReservation={() => handleOpenReservation()} />

        {/* 6. Meet The 4 Chefs */}
        <ChefsSection />

        {/* 7. The AURA Chef's Table Experience */}
        <ChefsTable onOpenReservation={(type) => handleOpenReservation(type)} />

        {/* 8. Dining Experience Pillars (More Than a Meal) */}
        <DiningExperience />

        {/* 9. Image Gallery with Lightbox */}
        <GallerySection />

        {/* 10. Customer Reviews */}
        <ReviewsSection />

        {/* 11. Reservation System Form */}
        <ReservationSection initialExperience={modalExperienceType} />

        {/* 12. Location & Map Section */}
        <LocationSection />

        {/* 13. Contact & Concierge Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Reservation & Back-To-Top Button */}
      <FloatingReserveBtn onOpenReservation={() => handleOpenReservation()} />

      {/* Global Quick Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={handleCloseReservation}
        defaultExperience={modalExperienceType}
      />
    </div>
  );
}
