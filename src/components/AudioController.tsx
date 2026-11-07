import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const AudioController: React.FC = () => {
  const [audioState, setAudioState] = useState(soundEngine.getState());

  useEffect(() => {
    return soundEngine.subscribe(() => {
      setAudioState(soundEngine.getState());
    });
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 p-1.5 rounded-full bg-[#02120E]/90 backdrop-blur-md border border-[#E5C158]/60 shadow-[0_0_28px_rgba(16,185,129,0.38)]">
      <button
        type="button"
        onClick={() => soundEngine.togglePlay()}
        className="flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-full bg-gradient-to-r from-[#073329] to-[#0F6B58] border border-[#E5C158]/45 text-[#F4FBF7] transition-all"
      >
        {audioState.isPlaying ? (
          <Pause className="w-4 h-4 text-[#FBF0C4]" />
        ) : (
          <Play className="w-4 h-4 text-[#FBF0C4] fill-[#FBF0C4]" />
        )}
        <span className="text-xs font-sans font-medium tracking-wider uppercase text-[#FBF0C4] hidden sm:inline">
          {audioState.isPlaying ? 'Raag Hamsadhwani (Sitar & Flute)' : 'Play Sitar & Bansuri'}
        </span>
        <Music className="w-3.5 h-3.5 text-[#34D399] sm:hidden" />
      </button>

      <button
        type="button"
        onClick={() => soundEngine.toggleMute()}
        className="p-2 rounded-full bg-[#04241C] hover:bg-[#E5C158] text-[#FBF0C4] hover:text-[#031A15] border border-[#E5C158]/40 transition-all"
      >
        {audioState.isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
};
