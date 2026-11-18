import React, { useState } from 'react';
import { weddingConfig } from './config/weddingConfig';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { FallingPetals } from './components/decorations/FallingPetals';
import { SideFloralVines } from './components/decorations/SideFloralVines';
import { HeroSection } from './components/HeroSection';
import { InvitationLoveStory } from './components/InvitationLoveStory';
import { PhotoGallery } from './components/PhotoGallery';
import { YouAreInvitedSection } from './components/YouAreInvitedSection';
import { CeremonyTimeline } from './components/CeremonyTimeline';
import { EventLocation } from './components/EventLocation';
import { Footer } from './components/Footer';
import { Navigation } from 'lucide-react';

export function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [showEnvelopeModal, setShowEnvelopeModal] = useState(true);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-body relative overflow-x-hidden selection:bg-gold-light selection:text-[#3B432F] w-full">
      {/* 1. ROYAL SAGE & GOLD OPENING INVITATION COVER */}
      {showEnvelopeModal && (
        <OpeningEnvelope
          isOpen={isInvitationOpened}
          onOpen={handleOpenInvitation}
          config={weddingConfig}
        />
      )}

      {/* 2. SIDE FLORAL VINES (Hidden on mobileview as requested) */}
      <div className="hidden md:block">
        <SideFloralVines position="left" isFixed={true} />
        <SideFloralVines position="right" isFixed={true} />
      </div>

      {/* 3. FLOATING PLAY/PAUSE MUSIC BUTTON */}
      <MusicPlayer
        isTriggered={isInvitationOpened}
        config={weddingConfig}
      />

      {/* 4. MINIMIZED JASMINE & ROSE PETALS CANVAS */}
      <FallingPetals />

      {/* 5. MAIN INVITATION CONTENT (Full-Width Responsive Flow, Zero Horizontal Overflow) */}
      <div className={`transition-opacity duration-[2800ms] ${isInvitationOpened ? 'opacity-100' : 'opacity-0'} w-full overflow-x-hidden`}>
        {/* HERO SECTION WITH TOP VIDEO REEL LEAD */}
        <HeroSection
          config={weddingConfig}
          onNavigate={(target) => {
            if (target === 'events') scrollToSection('program');
            if (target === 'location') scrollToSection('location');
            if (target === 'gallery') scrollToSection('gallery');
            if (target === 'invited') scrollToSection('invited');
          }}
        />

        {/* FORMAL INVITATION CARD */}
        <InvitationLoveStory config={weddingConfig} />

        {/* EDITORIAL PHOTO GALLERY WITH ROUNDED BORDERS */}
        <PhotoGallery config={weddingConfig} />

        {/* DEDICATED "YOU'RE INVITED" SPECIAL SECTION */}
        <YouAreInvitedSection config={weddingConfig} />

        {/* CEREMONY PROGRAM TIMELINE (DEEP SAGE RHYTHM) */}
        <CeremonyTimeline config={weddingConfig} />

        {/* VENUE LOCATION & DIRECTIONS */}
        <EventLocation config={weddingConfig} />

        {/* EMOTIONAL CLOSING FOOTER */}
        <Footer config={weddingConfig} />

        {/* MOBILE STICKY VENUE BAR (LARGER MOBILE TYPOGRAPHY) */}
        <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-gold/40 px-4 py-3 flex items-center justify-between shadow-lg">
          <div className="flex flex-col">
            <span className="text-xs uppercase font-bold tracking-wider text-[#5A684C]">
              26 Feb 2027 • Friday
            </span>
            <span className="text-base font-serif font-semibold text-[#3A2A20]">
              Subash & Monika
            </span>
          </div>

          <a
            href={weddingConfig.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-serif font-semibold text-white bg-[#454D38] shadow-xs active:scale-95 transition-transform"
          >
            <Navigation className="w-3.5 h-3.5 fill-white" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
