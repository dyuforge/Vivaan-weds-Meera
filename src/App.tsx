import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { defaultWeddingData, WeddingData, WeddingThemeId } from './data/weddingData';
import { PalaceArchwayBox3D } from './components/PalaceArchwayBox3D';
import { MainInvitationHero } from './components/MainInvitationHero';
import { WeddingDetailsSection } from './components/WeddingDetailsSection';
import { WeddingGallerySection } from './components/WeddingGallerySection';
import { WeddingVideoSection } from './components/WeddingVideoSection';
import { FooterSection } from './components/FooterSection';
import { AudioController } from './components/AudioController';

export function App() {
  const [weddingData, setWeddingData] = useState<WeddingData>(defaultWeddingData);
  const [activeTheme, setActiveTheme] = useState<WeddingThemeId>('emerald-mayura');
  const [isGatesOpened, setIsGatesOpened] = useState<boolean>(false);

  const currentTheme = weddingData.themes[activeTheme];

  return (
    <div
      className="relative min-h-screen w-full text-[#F4FBF7] transition-colors duration-700 overflow-x-hidden"
      style={{ backgroundColor: currentTheme.primaryBg }}
    >
      <AudioController />
      <AnimatePresence mode="wait">
        {!isGatesOpened ? (
          <PalaceArchwayBox3D
            key="palace-gates-landing"
            data={weddingData}
            activeTheme={activeTheme}
            onSelectTheme={setActiveTheme}
            onOpenComplete={() => {
              setIsGatesOpened(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <motion.main
            key="main-emerald-invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85 }}
            className="relative z-10"
          >
            <MainInvitationHero
              data={weddingData}
              activeTheme={activeTheme}
              onSelectTheme={setActiveTheme}
              onReplayEnvelope={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsGatesOpened(false);
              }}
            />
            <WeddingDetailsSection data={weddingData} />
            <WeddingGallerySection photos={weddingData.gallery} />
            <WeddingVideoSection
              video={weddingData.video}
              coupleNames={`${weddingData.groom.firstName} & ${weddingData.bride.firstName}`}
            />
            <FooterSection
              data={weddingData}
              onUpdateData={setWeddingData}
              onReplayEnvelope={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsGatesOpened(false);
              }}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
