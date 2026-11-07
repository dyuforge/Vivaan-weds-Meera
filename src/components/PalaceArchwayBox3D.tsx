import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import {
  RoyalMayuraGaneshaCrest,
  AnimatedLotusUrliLamp,
  PearlJasmineBandhanwar,
  KundanCornerFiligree,
} from './OrnamentalSVGs';
import { soundEngine } from '../utils/soundEngine';

interface PalaceArchwayBox3DProps {
  data: WeddingData;
  activeTheme: WeddingThemeId;
  onSelectTheme: (theme: WeddingThemeId) => void;
  onOpenComplete: () => void;
}

type GateStage = 'idle' | 'medallion-unlock' | 'doors-swing' | 'scroll-emerge';

export const PalaceArchwayBox3D: React.FC<PalaceArchwayBox3DProps> = ({
  data,
  activeTheme,
  onSelectTheme,
  onOpenComplete,
}) => {
  const [stage, setStage] = useState<GateStage>('idle');
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (stage !== 'idle') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: -y * 11, rotateY: x * 13 });
  };

  const triggerUnsealGates = () => {
    if (stage !== 'idle') return;
    setTilt({ rotateX: 0, rotateY: 0 });
    soundEngine.playPalaceGateOpenSound();
    soundEngine.startMusic();
    setStage('medallion-unlock');
    window.setTimeout(() => setStage('doors-swing'), 420);
    window.setTimeout(() => setStage('scroll-emerge'), 1150);
    window.setTimeout(() => onOpenComplete(), 2650);
  };

  const areDoorsOpen = stage === 'doors-swing' || stage === 'scroll-emerge';
  const isScrollEmerging = stage === 'scroll-emerge';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
      transition={{ duration: 0.9 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden py-4 px-4 sm:px-6 select-none bg-gradient-to-b from-[#02120E] via-[#062920] to-[#02100C]"
    >
      <div className="w-full fixed top-0 left-0 right-0 z-20 pointer-events-none">
        <PearlJasmineBandhanwar />
      </div>

      <div className="relative z-20 mt-14 sm:mt-20 flex flex-col items-center text-center">
        <p className="text-sm sm:text-base font-serif font-semibold tracking-[0.2em] text-[#FBF0C4]">
          ॥ ఓం శ్రీ మహాగణపతయే నమః • శ్రీరస్తు శుభమస్తు ॥
        </p>
        <p className="text-xs text-[#34D399] font-sans tracking-[0.25em] uppercase mt-1">
          The Rajvansh &amp; Rao Families Welcome You to Hyderabad
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 p-1 rounded-full bg-[#04241C]/90 border border-[#E5C158]/35">
          {(['emerald-mayura', 'mysore-sandalwood', 'deccan-sapphire'] as WeddingThemeId[]).map(
            (tId) => (
              <button
                key={tId}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTheme(tId);
                }}
                className={`px-3 py-1 rounded-full text-[11px] font-sans tracking-wider transition-all ${
                  activeTheme === tId
                    ? 'bg-[#E5C158] text-[#031A15] font-bold shadow'
                    : 'text-[#F4FBF7]/75 hover:text-[#FBF0C4]'
                }`}
              >
                {tId === 'emerald-mayura'
                  ? 'Emerald Mayura'
                  : tId === 'mysore-sandalwood'
                  ? 'Mysore Gold'
                  : 'Deccan Sapphire'}
              </button>
            )
          )}
        </div>
      </div>

      <div
        className="relative z-20 my-auto py-6 sm:py-10 w-full max-w-[560px] flex flex-col items-center justify-center perspective-2200"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      >
        <motion.div
          animate={{
            rotateX: isScrollEmerging ? 4 : tilt.rotateX,
            rotateY: isScrollEmerging ? 0 : tilt.rotateY,
            scale: isScrollEmerging ? 1.03 : 1,
          }}
          onClick={triggerUnsealGates}
          role="button"
          tabIndex={0}
          className="relative w-full aspect-[5/4] max-w-[510px] cursor-pointer preserve-3d group"
        >
          <div className="absolute inset-0 rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-[#0A3C30] via-[#05241C] to-[#02120E] border-2 border-[#E5C158] shadow-[0_35px_90px_rgba(0,0,0,0.92),0_0_55px_rgba(16,185,129,0.28)] overflow-hidden" />

          <motion.div
            animate={
              isScrollEmerging
                ? { scale: 1.05, y: -25, opacity: 1 }
                : areDoorsOpen
                ? { scale: 0.96, y: 0, opacity: 1 }
                : { scale: 0.86, y: 12, opacity: 0.85 }
            }
            transition={{ duration: 1.1 }}
            style={{ zIndex: isScrollEmerging ? 40 : 15 }}
            className="absolute inset-x-5 sm:inset-x-9 top-6 bottom-5 rounded-t-[110px] rounded-b-2xl bg-gradient-to-b from-[#FFFDF7] via-[#F5FBF8] to-[#E6F4EE] text-[#04241C] border-2 border-[#E5C158] shadow-2xl p-5 sm:p-7 flex flex-col items-center justify-between text-center overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center mt-1">
              <span className="text-[10px] sm:text-xs font-serif font-bold tracking-[0.18em] text-[#065F46]">
                ॥ ఓం శ్రీ మహాగణపతయే నమః ॥
              </span>
              <RoyalMayuraGaneshaCrest size={74} className="my-1" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#0F6B58] font-sans font-bold">
                Shahi Kalyana Nimantran
              </p>
            </div>

            <div className="relative z-10 my-1">
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#04241C] tracking-wide">
                {data.groom.firstName} <span className="text-[#B68D2C] font-script">&amp;</span>{' '}
                {data.bride.firstName}
              </h2>
              <p className="mt-1 text-xs sm:text-sm font-serif italic text-[#065F46]">
                Request the honour of your presence at Taj Falaknuma Palace
              </p>
            </div>

            <div className="relative z-10 w-full pt-2.5 border-t border-[#E5C158]/70 flex items-center justify-between text-[11px] sm:text-xs font-sans font-bold text-[#04241C]">
              <span>{data.weddingDate.displayDate}</span>
              <span className="text-[#0D9488]">✦</span>
              <span>Hyderabad</span>
            </div>
          </motion.div>

          {/* Left Hinged Palace Door */}
          <motion.div
            animate={{ rotateY: areDoorsOpen ? -135 : 0 }}
            transition={{ duration: 1.05 }}
            style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d', zIndex: 30 }}
            className="absolute inset-y-0 left-0 w-1/2 rounded-tl-[140px] rounded-bl-3xl bg-gradient-to-br from-[#0D5241] via-[#073329] to-[#031A15] border-y-2 border-l-2 border-r border-[#E5C158] overflow-hidden"
          >
            <KundanCornerFiligree position="bottom-left" className="absolute bottom-2 left-2 opacity-90" />
            <div className="absolute inset-y-0 right-3 sm:right-5 flex flex-col items-end justify-center text-right">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#34D399]">
                The Groom
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-champagne-foil mt-0.5">
                {data.groom.firstName}
              </h3>
            </div>
          </motion.div>

          {/* Right Hinged Palace Door */}
          <motion.div
            animate={{ rotateY: areDoorsOpen ? 135 : 0 }}
            transition={{ duration: 1.05 }}
            style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d', zIndex: 30 }}
            className="absolute inset-y-0 right-0 w-1/2 rounded-tr-[140px] rounded-br-3xl bg-gradient-to-bl from-[#0D5241] via-[#073329] to-[#031A15] border-y-2 border-r-2 border-l border-[#E5C158] overflow-hidden"
          >
            <KundanCornerFiligree position="bottom-right" className="absolute bottom-2 right-2 opacity-90" />
            <div className="absolute inset-y-0 left-3 sm:left-5 flex flex-col items-start justify-center text-left">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#34D399]">
                The Bride
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-champagne-foil mt-0.5">
                {data.bride.firstName}
              </h3>
            </div>
          </motion.div>

          {/* Center Peacock Medallion Lock */}
          <motion.div
            animate={
              stage === 'idle'
                ? { rotate: 0, scale: 1, opacity: 1 }
                : stage === 'medallion-unlock'
                ? { rotate: 180, scale: 1.15, opacity: 0.9 }
                : { rotate: 240, scale: 0.4, opacity: 0 }
            }
            style={{ zIndex: 35 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#FBF0C4] via-[#E5C158] to-[#8A661B] p-1 shadow-2xl flex items-center justify-center border-2 border-[#F4FBF7]">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#073329] to-[#031A15] border border-[#E5C158] flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-serif text-[#34D399] tracking-widest">శుభమస్తు</span>
                <span className="font-display text-lg sm:text-xl font-black text-champagne-foil">
                  {data.groom.firstName[0]} &amp; {data.bride.firstName[0]}
                </span>
                <span className="text-[9px] font-sans uppercase tracking-widest text-[#FBF0C4]/80">
                  14 • 02 • 27
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-8">
          <AnimatedLotusUrliLamp size={56} isLit={true} />
          <motion.button
            type="button"
            onClick={triggerUnsealGates}
            disabled={stage !== 'idle'}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#B68D2C] via-[#FBF0C4] to-[#E5C158] text-[#031A15] font-display font-bold text-sm sm:text-lg tracking-wider shadow-xl border-2 border-[#F4FBF7] cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#065F46]" />
              <span>
                {stage === 'idle'
                  ? 'Unseal Royal Palace Gates ✨'
                  : 'Opening Mayura Sanctuary...'}
              </span>
            </span>
          </motion.button>
          <AnimatedLotusUrliLamp size={56} isLit={true} />
        </div>

        <p className="mt-3 text-xs font-sans text-[#F4FBF7]/70 tracking-widest uppercase text-center flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#34D399]" />
          <span>Click the palace doors or button above • Sitar &amp; Bansuri Raag starts on open</span>
        </p>
      </div>
    </motion.section>
  );
};
