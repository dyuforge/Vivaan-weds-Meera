import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Flower2,
  Music,
  Flame,
  Crown,
  Send,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { WeddingData, CeremonyEvent } from '../data/weddingData';
import { KundanCornerFiligree, PeacockFeatherDivider } from './OrnamentalSVGs';
import { MayuraPavilion3DScene } from './MayuraPavilion3DScene';

export const WeddingDetailsSection: React.FC<{ data: WeddingData }> = ({ data }) => {
  const calculateTimeLeft = () => {
    const target = new Date(data.weddingDate.isoDateTime).getTime();
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [guestName, setGuestName] = useState('');
  const [guestsCount, setGuestsCount] = useState('2');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [data.weddingDate.isoDateTime]);

  const handleRsvpWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    const text = `Adab & Namaskaram! ✨\n*Shahi Palace Wedding RSVP — ${data.groom.firstName} & ${data.bride.firstName}*\n• *Guest:* ${guestName}\n• *Guests:* ${guestsCount}`;
    window.open(
      `https://wa.me/${data.rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const renderCeremonyIcon = (iconType: CeremonyEvent['iconType']) => {
    switch (iconType) {
      case 'mangalasnanam':
        return <Sun className="w-6 h-6 text-[#34D399]" />;
      case 'mehendi':
        return <Flower2 className="w-6 h-6 text-emerald-300" />;
      case 'sangeet':
        return <Music className="w-6 h-6 text-[#FBF0C4]" />;
      case 'muhurtham':
        return <Flame className="w-6 h-6 text-amber-300" />;
      case 'walima':
        return <Crown className="w-6 h-6 text-pink-300" />;
    }
  };

  return (
    <section id="wedding-details" className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-t-[110px] rounded-b-3xl p-7 sm:p-10 bg-gradient-to-b from-[#0A3C30]/90 to-[#02120E]/95 border border-[#E5C158]/55 emerald-gold-glow text-center space-y-3">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-sans uppercase tracking-widest bg-[#10B981]/20 border border-[#E5C158]/45 text-[#FBF0C4]">
            Var • The Groom
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-champagne-foil">{data.groom.fullName}</h3>
          <p className="text-sm font-serif italic text-[#F4FBF7]/85">“{data.groom.bio}”</p>
          <p className="font-serif text-lg font-bold text-[#F4FBF7] pt-3">
            {data.groom.parents.father} {data.groom.parents.mother}
          </p>
          <p className="text-xs font-serif text-[#FBF0C4]/75">{data.groom.parents.familyOrigin}</p>
        </div>

        <div className="relative rounded-t-[110px] rounded-b-3xl p-7 sm:p-10 bg-gradient-to-b from-[#0A3C30]/90 to-[#02120E]/95 border border-[#E5C158]/55 emerald-gold-glow text-center space-y-3">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-sans uppercase tracking-widest bg-[#10B981]/20 border border-[#E5C158]/45 text-[#FBF0C4]">
            Vadhu • The Bride
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-champagne-foil">{data.bride.fullName}</h3>
          <p className="text-sm font-serif italic text-[#F4FBF7]/85">“{data.bride.bio}”</p>
          <p className="font-serif text-lg font-bold text-[#F4FBF7] pt-3">
            {data.bride.parents.father} {data.bride.parents.mother}
          </p>
          <p className="text-xs font-serif text-[#FBF0C4]/75">{data.bride.parents.familyOrigin}</p>
        </div>
      </div>

      {/* Countdown */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#04241C] via-[#0A3C30] to-[#04241C] border-2 border-[#E5C158] emerald-gold-glow-strong text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#02120E]/80 border border-[#E5C158]/50 text-xs font-sans uppercase tracking-[0.25em] text-[#34D399]">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
          <span>Countdown to the Starlit Godhuli Muhurtham</span>
        </div>
        <h3 className="font-display text-2xl sm:text-4xl font-bold text-champagne-foil mt-3">
          {data.weddingDate.displayDate}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 my-8 max-w-2xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((unit) => (
            <div
              key={unit.label}
              className="p-4 sm:p-5 rounded-t-[36px] rounded-b-2xl bg-[#02120E]/90 border-2 border-[#E5C158]/65 flex flex-col items-center justify-center"
            >
              <span className="font-display text-3xl sm:text-5xl font-bold text-champagne-foil tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-xs font-sans uppercase tracking-[0.22em] text-[#34D399]">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <MayuraPavilion3DScene />

      {/* Ceremonies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.ceremonies.map((event) => (
          <div
            key={event.id}
            className={`relative rounded-t-[48px] rounded-b-3xl p-6 sm:p-7 bg-gradient-to-b ${event.badgeColor} bg-[#042019]/95 border border-[#E5C158]/50 emerald-gold-glow flex flex-col justify-between ${
              event.id === 'muhurtham' ? 'md:col-span-2 lg:col-span-2 border-2 border-[#FBF0C4]' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-serif text-[#FBF0C4] px-3 py-1 rounded-full bg-[#02120E]/75 border border-[#E5C158]/40">
                  {event.regionalTitle}
                </span>
                <div className="w-11 h-11 rounded-2xl bg-[#02120E]/85 border border-[#E5C158]/50 flex items-center justify-center">
                  {renderCeremonyIcon(event.iconType)}
                </div>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-champagne-foil">{event.name}</h3>
              <p className="mt-2 text-sm font-serif text-[#F4FBF7]/85">{event.description}</p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#E5C158]/30 space-y-2 text-xs sm:text-sm font-sans">
              <div className="flex items-center gap-2.5 text-[#F4FBF7]">
                <Calendar className="w-4 h-4 text-[#34D399]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#FBF0C4]">
                <Clock className="w-4 h-4 text-[#E5C158]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#F4FBF7]/90">
                <MapPin className="w-4 h-4 text-[#34D399]" />
                <span>{event.venueArea}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Venue & RSVP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-[#073329]/95 to-[#031A15]/95 border-2 border-[#E5C158]/65 emerald-gold-glow space-y-4">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-champagne-foil">{data.venue.name}</h2>
          <p className="text-base font-serif font-semibold text-[#34D399]">{data.venue.hallName}</p>
          <p className="text-sm font-sans text-[#F4FBF7]/90">
            {data.venue.addressLine1}, {data.venue.cityStatePin}
          </p>
          <a
            href={data.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B68D2C] via-[#FBF0C4] to-[#E5C158] text-[#031A15] font-sans font-bold text-sm"
          >
            <Navigation className="w-4 h-4 fill-[#031A15]" />
            <span>Navigate on Google Maps</span>
          </a>
        </div>

        <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#062920]/95 to-[#02120E]/95 border-2 border-[#E5C158]/60 emerald-gold-glow">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-champagne-foil">
            Confirm Your Gracious Presence
          </h3>
          <form onSubmit={handleRsvpWhatsAppSubmit} className="mt-4 space-y-3.5 text-xs font-sans">
            <input
              type="text"
              required
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Your Full Name & Family"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#02100D] border border-[#E5C158]/45 text-[#F4FBF7]"
            />
            <select
              value={guestsCount}
              onChange={(e) => setGuestsCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#02100D] border border-[#E5C158]/45 text-[#F4FBF7]"
            >
              <option value="1">1 Esteemed Guest</option>
              <option value="2">2 Esteemed Guests (Couple)</option>
              <option value="4">4 Esteemed Guests (Family)</option>
            </select>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#0D9488] text-[#02120E] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-[#FBF0C4]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Shahi RSVP via WhatsApp</span>
            </button>
            {rsvpSubmitted && (
              <p className="text-[11px] text-[#34D399] flex items-center justify-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>WhatsApp RSVP Concierge opened!</span>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
