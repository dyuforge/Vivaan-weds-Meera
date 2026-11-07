import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Flame, RotateCcw, Palette } from 'lucide-react';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import {
  RoyalMayuraGaneshaCrest,
  AnimatedLotusUrliLamp,
  PearlJasmineBandhanwar,
  KundanCornerFiligree,
  PeacockFeatherDivider,
  DeccanPalaceSkyline,
} from './OrnamentalSVGs';
import { soundEngine } from '../utils/soundEngine';

interface MainInvitationHeroProps {
  data: WeddingData;
  activeTheme: WeddingThemeId;
  onSelectTheme: (theme: WeddingThemeId) => void;
  onReplayEnvelope: () => void;
}

export const MainInvitationHero: React.FC<MainInvitationHeroProps> = ({
  data,
  activeTheme,
  onSelectTheme,
  onReplayEnvelope,
}) => {
  const theme = data.themes[activeTheme];
  const [litLamps, setLitLamps] = useState<boolean[]>([true, true, true, true, true]);
  const [blessingsCount, setBlessingsCount] = useState<number>(216);

  const handleOfferLotusBlessing = (index: number) => {
    soundEngine.playLotusLampChime();
    setLitLamps((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    setBlessingsCount((prev) => prev + 1);
  };

  return (
    <section
      id="invitation-top"
      className="relative min-h-screen w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <PearlJasmineBandhanwar />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto mb-8 pt-4 flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#021410]/85 border border-[#E5C158]/40 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs font-sans text-[#FBF0C4]">
          <Palette className="w-4 h-4 text-[#34D399]" />
          <div className="flex items-center gap-1">
            {(Object.keys(data.themes) as WeddingThemeId[]).map((tId) => (
              <button
                key={tId}
                type="button"
                onClick={() => onSelectTheme(tId)}
                className={`px-3 py-1 rounded-full text-[11px] font-sans transition-all ${
                  activeTheme === tId
                    ? 'bg-[#E5C158] text-[#031A15] font-bold shadow'
                    : 'bg-[#073329]/70 text-[#F4FBF7]/80 hover:text-[#FBF0C4]'
                }`}
              >
                {data.themes[tId].name.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onReplayEnvelope}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#073329] hover:bg-[#E5C158] text-[#FBF0C4] hover:text-[#031A15] border border-[#E5C158]/45 text-xs font-sans font-medium transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay 3D Palace Gates</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95 }}
        className="relative z-20 max-w-4xl mx-auto rounded-t-[160px] rounded-b-3xl p-1 sm:p-2 bg-gradient-to-b from-[#FBF0C4] via-[#E5C158] to-[#8A661B] shadow-2xl"
      >
        <div
          className="relative rounded-t-[152px] rounded-b-[22px] px-5 py-12 sm:px-14 sm:py-16 text-center overflow-hidden bg-jali-pattern"
          style={{
            backgroundColor: theme.primaryBg,
            backgroundImage: `radial-gradient(circle at 50% 18%, ${theme.secondaryBg} 0%, ${theme.primaryBg} 80%)`,
          }}
        >
          <KundanCornerFiligree position="bottom-left" className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5" />
          <KundanCornerFiligree position="bottom-right" className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5" />

          <div className="relative z-10 flex flex-col items-center mt-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#10B981]/15 border border-[#E5C158]/45 text-xs sm:text-sm font-serif tracking-[0.22em] text-[#FBF0C4] mb-3">
              <span>{theme.invocation}</span>
            </div>
            <RoyalMayuraGaneshaCrest size={172} />
            <span className="mt-2 text-[11px] font-sans uppercase tracking-[0.22em] text-[#34D399]">
              {theme.invocationMeaning}
            </span>
          </div>

          <PeacockFeatherDivider />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.26em] text-[#E5C158]">
              With the Divine Grace of Lord Vigneshwara &amp; Our Revered Forefathers
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 pb-4 px-5 rounded-2xl bg-[#02120E]/65 border border-[#E5C158]/35">
              <div className="text-center sm:border-r border-[#E5C158]/25 sm:pr-3">
                <p className="text-[11px] uppercase tracking-widest text-[#34D399] font-sans">Groom’s Parents</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#F4FBF7] mt-1">{data.groom.parents.father}</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#FBF0C4]">{data.groom.parents.mother}</p>
              </div>
              <div className="text-center sm:pl-3">
                <p className="text-[11px] uppercase tracking-widest text-[#34D399] font-sans">Bride’s Parents</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#F4FBF7] mt-1">{data.bride.parents.father}</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#FBF0C4]">{data.bride.parents.mother}</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 my-8 py-7 px-4 rounded-3xl bg-gradient-to-r from-transparent via-[#10B981]/15 to-transparent border-y border-[#E5C158]/45">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
              <div className="text-center">
                <span className="text-xs font-sans uppercase tracking-[0.28em] text-[#34D399]">Var • The Groom</span>
                <h1 className="font-display text-4xl sm:text-6xl font-bold text-champagne-foil tracking-wide mt-1">{data.groom.firstName}</h1>
                <p className="text-xs sm:text-sm font-serif text-[#F4FBF7]/80 mt-1">{data.groom.fullName}</p>
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-[#E5C158] bg-gradient-to-br from-[#0F6B58] to-[#031A15] flex items-center justify-center">
                <span className="font-script text-3xl sm:text-4xl text-[#FBF0C4]">weds</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-sans uppercase tracking-[0.28em] text-[#34D399]">Vadhu • The Bride</span>
                <h1 className="font-display text-4xl sm:text-6xl font-bold text-champagne-foil tracking-wide mt-1">{data.bride.firstName}</h1>
                <p className="text-xs sm:text-sm font-serif text-[#F4FBF7]/80 mt-1">{data.bride.fullName}</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto my-6">
            <div className="p-5 rounded-t-[45px] rounded-b-2xl bg-[#02120E]/75 border border-[#E5C158]/45 flex flex-col items-center">
              <Calendar className="w-5 h-5 text-[#34D399] mb-1.5" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#E5C158]">Ratha Saptami Vivah Date</span>
              <p className="font-serif text-base sm:text-lg font-bold text-[#F4FBF7] mt-0.5">{data.weddingDate.displayDate}</p>
            </div>
            <div className="p-5 rounded-t-[45px] rounded-b-2xl bg-[#02120E]/75 border border-[#E5C158]/45 flex flex-col items-center">
              <Sparkles className="w-5 h-5 text-[#FBF0C4] mb-1.5" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#E5C158]">Godhuli Subh Muhurtham</span>
              <p className="font-serif text-base sm:text-lg font-bold text-[#FBF0C4] mt-0.5">{data.muhurtham.timeWindow}</p>
            </div>
            <div className="p-5 rounded-t-[45px] rounded-b-2xl bg-[#02120E]/75 border border-[#E5C158]/45 flex flex-col items-center">
              <MapPin className="w-5 h-5 text-[#34D399] mb-1.5" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#E5C158]">Shahi Destination</span>
              <p className="font-serif text-base sm:text-lg font-bold text-[#F4FBF7] mt-0.5">{data.venue.name}</p>
            </div>
          </div>

          <PeacockFeatherDivider />

          <div className="relative z-10 mt-6 pt-4 px-4 pb-3 rounded-2xl bg-[#02120E]/60 border border-[#E5C158]/30 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-widest text-[#FBF0C4]">
              <Flame className="w-4 h-4 text-[#34D399]" />
              <span>Tap Any Sacred Lotus Urli Lamp to Offer Pushpanjali &amp; Ashirwad</span>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-8 my-3">
              {litLamps.map((isLit, idx) => (
                <AnimatedLotusUrliLamp key={idx} size={54} isLit={isLit} onClick={() => handleOfferLotusBlessing(idx)} />
              ))}
            </div>
            <p className="text-xs font-serif text-[#E5C158]">
              ✨ <strong className="text-[#F4FBF7]">{blessingsCount}</strong> Auspicious Lotus Deepa Blessings Offered
            </p>
          </div>

          <div className="mt-8 -mx-5 sm:-mx-14 -mb-12 sm:-mb-16">
            <DeccanPalaceSkyline />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
