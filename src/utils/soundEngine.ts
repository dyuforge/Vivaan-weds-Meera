class RoyalMayuraSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private melodyInterval: number | null = null;
  private droneOscillators: OscillatorNode[] = [];
  private masterGain: GainNode | null = null;
  private listeners: Set<() => void> = new Set();

  private readonly hamsadhwaniNotes = [
    311.13, 349.23, 392.00, 466.16, 587.33, 622.25, 698.46, 783.99,
  ];

  private readonly phrases = [
    [0, 1, 2, 3, 2, 1, 0],
    [2, 3, 4, 5, 4, 3, 2],
    [0, 2, 3, 5, 6, 5, 4, 3],
    [5, 4, 3, 2, 1, 2, 0],
    [3, 4, 5, 7, 6, 5, 3],
  ];

  private phraseIndex = 0;
  private noteInPhraseIndex = 0;

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.isMuted ? 0 : 0.28;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
    };
  }

  public playPalaceGateOpenSound() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const now = this.ctx.currentTime;
      const glissando = [311.13, 349.23, 392.0, 466.16, 587.33, 622.25, 783.99, 932.33];
      glissando.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const startTime = now + 0.15 + idx * 0.095;
        this.playSitarAndBansuriNote(freq, startTime, 2.5, 0.16, idx % 2 === 0);
      });
    } catch {
      // Ignore
    }
  }

  public playLotusLampChime() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const now = this.ctx.currentTime;
      const bellFreq = 1244.5;
      this.playSitarAndBansuriNote(bellFreq, now, 2.1, 0.14, false);
      this.playSitarAndBansuriNote(bellFreq * 1.5, now + 0.04, 1.5, 0.07, false);
    } catch {
      // Ignore
    }
  }

  private playSitarAndBansuriNote(
    freq: number,
    startTime: number,
    duration: number,
    volume = 0.13,
    withBansuriSustain = false
  ) {
    if (!this.ctx || !this.masterGain) return;
    const sitarOsc = this.ctx.createOscillator();
    const jawariOsc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    sitarOsc.type = 'triangle';
    jawariOsc.type = 'sine';
    sitarOsc.frequency.setValueAtTime(freq, startTime);
    jawariOsc.frequency.setValueAtTime(freq * 2, startTime);

    noteGain.gain.setValueAtTime(0.001, startTime);
    noteGain.gain.linearRampToValueAtTime(volume, startTime + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0008, startTime + duration);

    const jawariGain = this.ctx.createGain();
    jawariGain.gain.value = 0.28;

    sitarOsc.connect(noteGain);
    jawariOsc.connect(jawariGain);
    jawariGain.connect(noteGain);
    noteGain.connect(this.masterGain);

    sitarOsc.start(startTime);
    jawariOsc.start(startTime);
    sitarOsc.stop(startTime + duration);
    jawariOsc.stop(startTime + duration);

    if (withBansuriSustain) {
      const fluteOsc = this.ctx.createOscillator();
      const fluteGain = this.ctx.createGain();
      fluteOsc.type = 'sine';
      fluteOsc.frequency.setValueAtTime(freq, startTime + 0.1);
      fluteGain.gain.setValueAtTime(0.0005, startTime + 0.1);
      fluteGain.gain.linearRampToValueAtTime(volume * 0.45, startTime + 0.45);
      fluteGain.gain.exponentialRampToValueAtTime(0.0008, startTime + duration + 0.3);
      fluteOsc.connect(fluteGain);
      fluteGain.connect(this.masterGain);
      fluteOsc.start(startTime + 0.1);
      fluteOsc.stop(startTime + duration + 0.35);
    }
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;
    this.stopTanpuraDrone();
    const droneFreqs = [155.56, 233.08, 311.13];
    droneFreqs.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = i === 0 ? 0.048 : 0.028;
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      this.droneOscillators.push(osc);
    });
  }

  private stopTanpuraDrone() {
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore
      }
    });
    this.droneOscillators = [];
  }

  public startMusic() {
    try {
      this.initContext();
      if (this.isPlaying) return;
      this.isPlaying = true;
      this.startTanpuraDrone();
      if (this.ctx) {
        const now = this.ctx.currentTime;
        this.playSitarAndBansuriNote(311.13, now, 2.4, 0.13, true);
        this.playSitarAndBansuriNote(466.16, now + 0.22, 2.4, 0.11, false);
      }
      this.melodyInterval = window.setInterval(() => {
        if (!this.ctx || !this.isPlaying || this.isMuted) return;
        const currentPhrase = this.phrases[this.phraseIndex % this.phrases.length];
        const noteIdx = currentPhrase[this.noteInPhraseIndex % currentPhrase.length];
        const freq = this.hamsadhwaniNotes[noteIdx];
        const now = this.ctx.currentTime;
        const useFlute = this.noteInPhraseIndex % 2 === 0;
        this.playSitarAndBansuriNote(freq, now, 2.0, 0.11, useFlute);
        this.noteInPhraseIndex++;
        if (this.noteInPhraseIndex >= currentPhrase.length) {
          this.noteInPhraseIndex = 0;
          this.phraseIndex++;
        }
      }, 920);
      this.notify();
    } catch {
      // Ignore
    }
  }

  public pauseMusic() {
    this.isPlaying = false;
    if (this.melodyInterval !== null) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
    this.stopTanpuraDrone();
    this.notify();
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.startMusic();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.28, this.ctx.currentTime);
    }
    this.notify();
  }
}

export const soundEngine = new RoyalMayuraSoundEngine();
