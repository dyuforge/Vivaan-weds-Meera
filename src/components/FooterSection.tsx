import React from 'react';
import { Heart, RotateCcw } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { AnimatedLotusUrliLamp, PeacockFeatherDivider, DeccanPalaceSkyline } from './OrnamentalSVGs';

export const FooterSection: React.FC<{
  data: WeddingData;
  onUpdateData: (updated: WeddingData) => void;
  onReplayEnvelope: () => void;
}> = ({ data, onReplayEnvelope }) => {
  return (
    <footer className="relative z-20 mt-16 border-t-2 border-[#E5C158]/50 bg-gradient-to-b from-[#031A15] via-[#02120E] to-[#010907] text-center overflow-hidden">
      <DeccanPalaceSkyline className="opacity-45" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 pt-4 space-y-6">
        <div className="flex items-center justify-center gap-6">
          <AnimatedLotusUrliLamp size={50} isLit={true} />
          <div className="w-20 h-20 rounded-full border-2 border-[#E5C158] bg-gradient-to-br from-[#0F6B58] to-[#02120E] flex flex-col items-center justify-center">
            <span className="font-display text-lg font-bold text-champagne-foil">
              {data.groom.firstName[0]} &amp; {data.bride.firstName[0]}
            </span>
          </div>
          <AnimatedLotusUrliLamp size={50} isLit={true} />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-champagne-foil">
          {data.groom.firstName} &amp; {data.bride.firstName}
        </h2>

        <PeacockFeatherDivider />

        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={onReplayEnvelope}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#073329] hover:bg-[#E5C158] text-[#FBF0C4] hover:text-[#031A15] border border-[#E5C158]/50 text-xs font-sans font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay 3D Palace Gates</span>
          </button>
        </div>

        <div className="pt-4 flex justify-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#04241C] via-[#0A3C30] to-[#04241C] border border-[#E5C158]/70 text-sm sm:text-base font-sans text-[#F4FBF7]">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400 inline animate-pulse" />
            <span>
              for <strong className="text-[#FBF0C4] font-semibold">{data.groom.firstName}</strong> and{' '}
              <strong className="text-[#FBF0C4] font-semibold">{data.bride.firstName}</strong> from{' '}
              <a
                href="https://www.dyuforge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-champagne-foil underline decoration-[#E5C158] underline-offset-4"
              >
                DYUFORGE Technologies
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
