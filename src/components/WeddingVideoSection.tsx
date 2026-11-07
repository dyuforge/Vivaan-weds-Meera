import React, { useState } from 'react';
import { Play, Film } from 'lucide-react';
import { WeddingVideoConfig } from '../data/weddingData';
import { PeacockFeatherDivider } from './OrnamentalSVGs';

export const WeddingVideoSection: React.FC<{ video: WeddingVideoConfig; coupleNames: string }> = ({
  video,
}) => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <section id="video-section" className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#10B981]/15 border border-[#E5C158]/45 text-xs font-sans uppercase tracking-[0.25em] text-[#FBF0C4]">
          <Film className="w-3.5 h-3.5 text-[#34D399]" />
          <span>Shahi Palace Cinema • 1 Exclusive Feature Film</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-champagne-foil mt-3">
          Symphony of the Emerald Peacock
        </h2>
        <PeacockFeatherDivider />
      </div>

      <div className="relative rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-b from-[#FBF0C4] via-[#E5C158] to-[#8A661B] emerald-gold-glow-strong overflow-hidden">
        <div className="relative rounded-[22px] overflow-hidden bg-[#010E0B] aspect-video w-full">
          {!hasStarted ? (
            <div
              onClick={() => setHasStarted(true)}
              className="group relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
            >
              <img src={video.posterUrl} alt={video.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02100C] via-[#031A15]/60 to-[#02100C]/40" />
              <div className="relative z-20 flex flex-col items-center text-center px-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FBF0C4] via-[#E5C158] to-[#8A661B] p-1 flex items-center justify-center border-2 border-[#F4FBF7]">
                  <div className="w-full h-full rounded-full bg-[#073329] flex items-center justify-center">
                    <Play className="w-9 h-9 text-[#FBF0C4] fill-[#FBF0C4] ml-1" />
                  </div>
                </div>
                <h3 className="font-display text-xl sm:text-3xl font-bold text-champagne-foil mt-3">
                  {video.title}
                </h3>
              </div>
            </div>
          ) : (
            <video src={video.videoUrl} controls autoPlay playsInline className="w-full h-full object-contain" />
          )}
        </div>
      </div>
    </section>
  );
};
