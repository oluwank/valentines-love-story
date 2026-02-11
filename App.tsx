import React from 'react';
import { Hero } from './components/Hero';
import { LoveLetter } from './components/LoveLetter';
import { VibeSection } from './components/VibeSection';
import { Reasons } from './components/Reasons';
import { Gallery } from './components/Gallery';
import { Countdown } from './components/Countdown';
import { Surprise } from './components/Surprise';
import { Proposal } from './components/Proposal';
import { Footer } from './components/Footer';
import { HeartCursor } from './components/HeartCursor';
import { AudioPlayer } from './components/AudioPlayer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Interactive Cursor Effect */}
      <HeartCursor />
      
      {/* Background Music Controller */}
      <AudioPlayer />
      
      {/* 1. Full Screen Hero */}
      <Hero />
      
      {/* 2. Glassmorphism Love Letter */}
      <LoveLetter />
      
      {/* 3. Personalized Vibe Section */}
      <VibeSection />

      {/* 4. Reasons I Love You (Flip Cards) */}
      <Reasons />
      
      {/* 5. Memory Gallery (Clickable Grid) */}
      <Gallery />
      
      {/* 6. Live Countdown Timer */}
      <Countdown />
      
      {/* 7. Hidden Surprise Section */}
      <Surprise />
      
      {/* 8. Proposal Mode (Final Act) */}
      <Proposal />
      
      {/* 9. Elegant Footer */}
      <Footer />
    </div>
  );
};

export default App;