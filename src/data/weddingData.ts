export type WeddingThemeId = 'emerald-mayura' | 'mysore-sandalwood' | 'deccan-sapphire';

export interface ThemeConfig {
  id: WeddingThemeId;
  name: string;
  subtitle: string;
  invocation: string;
  invocationMeaning: string;
  primaryBg: string;
  secondaryBg: string;
  cardBg: string;
  accentColor: string;
  secondaryAccent: string;
  borderGlow: string;
  architectureLabel: string;
  floralNote: string;
}

export interface CeremonyEvent {
  id: string;
  name: string;
  regionalTitle: string;
  date: string;
  time: string;
  venueArea: string;
  dressCode: string;
  description: string;
  accentColor: string;
  badgeColor: string;
  iconType: 'mangalasnanam' | 'mehendi' | 'sangeet' | 'muhurtham' | 'walima';
}

export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  caption: string;
  dateLocation: string;
  imageUrl: string;
  fallbackScene: 'portrait' | 'prewedding' | 'haldi' | 'mehendi' | 'traditional';
  aspectLabel: string;
}

export interface WeddingVideoConfig {
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
}

export interface WeddingData {
  bride: {
    firstName: string;
    fullName: string;
    parents: {
      father: string;
      mother: string;
      familyOrigin: string;
    };
    bio: string;
  };
  groom: {
    firstName: string;
    fullName: string;
    parents: {
      father: string;
      mother: string;
      familyOrigin: string;
    };
    bio: string;
  };
  weddingDate: {
    displayDate: string;
    shortDate: string;
    isoDateTime: string;
    hinduCalendarDate: string;
  };
  muhurtham: {
    timeWindow: string;
    lagna: string;
    nakshatra: string;
    auspiciousNote: string;
  };
  venue: {
    name: string;
    hallName: string;
    addressLine1: string;
    addressLine2: string;
    cityStatePin: string;
    landmark: string;
    googleMapsUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    hospitalityNote: string;
  };
  rsvp: {
    whatsappNumber: string;
    displayPhone: string;
    contactPerson: string;
    rsvpDeadline: string;
    defaultMessage: string;
  };
  ceremonies: CeremonyEvent[];
  gallery: GalleryPhoto[];
  video: WeddingVideoConfig;
  themes: Record<WeddingThemeId, ThemeConfig>;
}

export const defaultWeddingData: WeddingData = {
  bride: {
    firstName: 'Meera',
    fullName: 'Chi. Sow. Meera Nandini Rao',
    parents: {
      father: 'Dr. Suryanarayana &',
      mother: 'Smt. Annapurna Rao',
      familyOrigin: 'Granddaughter of Late Justice Venkatadri Rao (Hyderabad & Mysuru)',
    },
    bio: 'Fine Arts Conservationist & Classical Kuchipudi Exponent enchanted by temple poetry, lotus motifs, and botanical heritage.',
  },
  groom: {
    firstName: 'Vivaan',
    fullName: 'Chi. Vivaan Dev Rajvansh',
    parents: {
      father: 'Shri Devendra Pratap &',
      mother: 'Smt. Gayatri Devi Rajvansh',
      familyOrigin: 'Grandson of Late Thakur Harihar Pratap Rajvansh (Jodhpur & Hyderabad)',
    },
    bio: 'Quantum Systems Architect & Classical Sitar Virtuoso who finds harmony in sacred traditions and celestial geometry.',
  },
  weddingDate: {
    displayDate: 'Sunday, 14th February 2027',
    shortDate: '14 • 02 • 2027',
    isoDateTime: '2027-02-14T19:15:00+05:30',
    hinduCalendarDate: 'Magha Shukla Paksha Saptami (Ratha Saptami), Vikram Samvat 2083',
  },
  muhurtham: {
    timeWindow: '07:15 PM – 08:28 PM IST',
    lagna: 'Godhuli Starlit Muhurtham • Simha Subh Lagna',
    nakshatra: 'Mrigashira Nakshatra • Amrita Siddha Yoga',
    auspiciousNote: 'Kanyadaanam, Jeelakarra Bellam & Mangalya Dharanam beneath the Emerald Mayura Baradari Pavilion',
  },
  venue: {
    name: 'Taj Falaknuma Palace & Nizam Heritage Gardens',
    hallName: 'Jade Durbar Hall & Mayura Terraced Courtyards',
    addressLine1: 'Engine Bowli, Falaknuma Hilltop Estate',
    addressLine2: 'Overlooking the Pearl City & Charminar Heritage Skyline',
    cityStatePin: 'Hyderabad, Telangana 500053, India',
    landmark: '20 mins from Charminar Precinct • 25 mins from RGIA Hyderabad Airport',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Taj+Falaknuma+Palace+Hyderabad',
    coordinates: {
      lat: 17.3313,
      lng: 78.4675,
    },
    hospitalityNote:
      'Horse-drawn royal Victoria carriage arrival from the palace gates, rose-water & emerald pistachio sharbat welcome, and curated Bidriware & Kanjeevaram tambulam.',
  },
  rsvp: {
    whatsappNumber: '919123456789',
    displayPhone: '+91 91234 56789',
    contactPerson: 'Rajvansh & Rao Palace Hospitality Desk',
    rsvpDeadline: 'January 31, 2027',
    defaultMessage:
      'Adab & Namaskaram! ✨ With immense joy, we confirm our presence at the Royal Emerald Palace Wedding of Vivaan & Meera on Sunday, 14th February 2027 at Taj Falaknuma Palace, Hyderabad.',
  },
  ceremonies: [
    {
      id: 'mangalasnanam',
      name: 'Mangala Snanam & Pelliuthuru',
      regionalTitle: 'మంగళ స్నానం • हल्दी और चंदन उत्सव',
      date: 'Friday, 12th February 2027',
      time: '09:30 AM Onwards',
      venueArea: 'Frangipani Lotus Verandah & Marble Fountain Courtyard',
      dressCode: 'Ivory Pearl, Mint Green, Pastel Yellow & Chanderi Silk',
      description:
        'A serene morning of sandalwood paste, kasturi turmeric, rose-water sprinklers, Nadaswaram recitals, and showering mogra buds.',
      accentColor: '#34D399',
      badgeColor: 'from-emerald-900/70 to-teal-700/30',
      iconType: 'mangalasnanam',
    },
    {
      id: 'mehendi',
      name: 'Mayura Mehendi & Sufi Mehfil',
      regionalTitle: 'మయూర మెహందీ • महफ़िल-ए-मेहंदी',
      date: 'Friday, 12th February 2027',
      time: '04:45 PM Onwards',
      venueArea: 'Jade Peacock Terraces & Bougainvillea Lawns',
      dressCode: 'Peacock Teal, Emerald Green, Blush Lotus Pink & Gota Patti',
      description:
        'Intricate Deccan & Marwari henna artistry amidst live Sufi acoustic melodies, lac bangle artisans, and Hyderabadi Irani chai.',
      accentColor: '#10B981',
      badgeColor: 'from-teal-900/75 to-emerald-600/25',
      iconType: 'mehendi',
    },
    {
      id: 'sangeet',
      name: 'Jashn-e-Mayura Sangeet Soirée',
      regionalTitle: 'సంగీత్ విభావరి • जश्न-ए-संगीत',
      date: 'Saturday, 13th February 2027',
      time: '07:30 PM Onwards',
      venueArea: 'Grand Venetian Chandelier Durbar Hall',
      dressCode: 'Champagne Gold, Midnight Emerald, Sequined Sherwanis & Couture Gowns',
      description:
        'An enchanting evening of classical sitar-flute jugalbandi, family dance chronicles, and champagne toasts under 40-arm Belgian chandeliers.',
      accentColor: '#E5C158',
      badgeColor: 'from-amber-900/50 to-emerald-900/60',
      iconType: 'sangeet',
    },
    {
      id: 'muhurtham',
      name: 'Godhuli Subh Muhurtham & Kalyanam',
      regionalTitle: 'శుభ కళ్యాణ ముహూర్తం • शुभ विवाह संस्कार',
      date: 'Sunday, 14th February 2027',
      time: '07:15 PM – 08:28 PM (Royal Baraat: 05:30 PM)',
      venueArea: 'Emerald Mayura Baradari Pavilion & Lotus Reflection Pool',
      dressCode: 'Heirloom Kanjeevaram Pattu, Paithani Silk & Royal Zardozi Achkan',
      description:
        'Under a canopy of 10,000 jasmine garlands and starlight, witness the sacred Kanyadaanam, Jeelakarra Bellam, Mangalsutra Dharanam, and Talambralu.',
      accentColor: '#FBF0C4',
      badgeColor: 'from-emerald-800/80 to-amber-600/35',
      iconType: 'muhurtham',
    },
    {
      id: 'walima',
      name: 'Shahi Dawat-e-Walima & Reception Banquet',
      regionalTitle: 'రాజ దర్బార్ రిసెప్షన్ • शाही दावत-ए-वलीमा',
      date: 'Monday, 15th February 2027',
      time: '08:00 PM Onwards',
      venueArea: '101-Seater Palace Dining Hall & Starlit Hilltop Terrace',
      dressCode: 'Regal Velvet Bandhgalas, Tissue Banarasi Sarees & Kundan Jewels',
      description:
        'A grand royal banquet celebrating the newlyweds with a 7-course Nizami & Dakshina Patha culinary journey and live ghazal ensemble.',
      accentColor: '#F472B6',
      badgeColor: 'from-pink-950/60 to-emerald-900/60',
      iconType: 'walima',
    },
  ],
  gallery: [
    {
      id: 1,
      title: 'Beneath the Emerald Jharokha',
      category: '1. Royal Couple Portrait',
      caption:
        'Vivaan & Meera in bespoke emerald-and-champagne zardozi couture framed by the carved marble arches of Falaknuma Palace.',
      dateLocation: 'Jade Durbar Archway • Hyderabad',
      imageUrl:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'portrait',
      aspectLabel: 'Royal Portrait',
    },
    {
      id: 2,
      title: 'Moonlight Over Hussein Sagar & Chowmahalla',
      category: '2. Pre-Wedding Editorial',
      caption:
        'A twilight serenade amidst fluted Nizami colonnades, reflection pools, and vintage brass lanterns.',
      dateLocation: 'Chowmahalla Courtyard • Deccan Heritage',
      imageUrl:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'prewedding',
      aspectLabel: 'Pre-Wedding Shoot',
    },
    {
      id: 3,
      title: 'Kasturi Turmeric & Mogra Showers',
      category: '3. Mangala Snanam & Pelliuthuru',
      caption:
        'Blessings of sandalwood, organic haldi, and fragrant jasmine petals poured from heirloom silver kalashas.',
      dateLocation: 'Frangipani Verandah • Morning Rituals',
      imageUrl:
        'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'haldi',
      aspectLabel: 'Mangala Snanam',
    },
    {
      id: 4,
      title: 'Peacock Motifs & Emerald Satlada',
      category: '4. Mayura Mehendi & Nischitartham',
      caption:
        'Delicate bridal henna featuring twin dancing peacocks alongside seven-strand Hyderabadi pearl and emerald Satlada necklaces.',
      dateLocation: 'Mayura Terraced Lawns • Sunset',
      imageUrl:
        'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'mehendi',
      aspectLabel: 'Mehendi & Engagement',
    },
    {
      id: 5,
      title: 'Starlit Sapthapadi by the Lotus Pool',
      category: '5. Sacred Kalyanam Photography',
      caption:
        'Seven eternal vows around the sacred Agni as pearl talambralu and pink lotus petals blessed the union.',
      dateLocation: 'Emerald Baradari Pavilion • Godhuli Muhurtham',
      imageUrl:
        'https://images.unsplash.com/photo-1545232972-907690f5f72e?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'traditional',
      aspectLabel: 'Sacred Kalyanam',
    },
  ],
  video: {
    title: 'Vivaan & Meera — Symphony of the Emerald Peacock',
    subtitle: 'Official Palace Pre-Wedding & Invitation Cinema (4K HDR)',
    duration: '02:42',
    location: 'Filmed at Taj Falaknuma Palace Hyderabad & Mysuru Amba Vilas',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
    description:
      'Witness the confluence of Rajputana grandeur and Deccan grace — scored with live Sitar, Bansuri flute, and Vedic hymns in Raag Hamsadhwani.',
  },
  themes: {
    'emerald-mayura': {
      id: 'emerald-mayura',
      name: 'Royal Emerald & Peacock Gold',
      subtitle: 'Deep Jade Velvet, Champagne Kundan Gold & Mayura Archways',
      invocation: '॥ ఓం శ్రీ మహాగణపతయే నమః • శ్రీరస్తు శుభమస్తు ॥',
      invocationMeaning: 'Om Sri Mahaganapataye Namaha • Divine Grace of Ganesha & Ashtalakshmi',
      primaryBg: '#031A15',
      secondaryBg: '#08382D',
      cardBg: 'rgba(10, 60, 48, 0.58)',
      accentColor: '#E5C158',
      secondaryAccent: '#10B981',
      borderGlow: 'rgba(229, 193, 88, 0.45)',
      architectureLabel: 'Falaknuma Jade Durbar & Mayura Jharokha Arches',
      floralNote: 'Pink Lotus, Mysore Jasmine & Emerald Peacock Plumes',
    },
    'mysore-sandalwood': {
      id: 'mysore-sandalwood',
      name: 'Mysore Forest & Antique Gold',
      subtitle: 'Deep Botanical Moss, Sandalwood Ivory & Temple Bronze',
      invocation: '॥ ఓం శ్రీ గణేశాయ నమః • కళ్యాణ వైభోగం ॥',
      invocationMeaning: 'Auspicious Blessings of Mysore Chamundeshwari & Lord Vigneshwara',
      primaryBg: '#0B1F13',
      secondaryBg: '#193D26',
      cardBg: 'rgba(25, 61, 38, 0.58)',
      accentColor: '#F2CE69',
      secondaryAccent: '#F59E0B',
      borderGlow: 'rgba(242, 206, 105, 0.45)',
      architectureLabel: 'Mysuru Amba Vilas Cusped Colonnades & Lotus Domes',
      floralNote: 'Sandalwood Blossoms, Kanakambaram & White Malli',
    },
    'deccan-sapphire': {
      id: 'deccan-sapphire',
      name: 'Deccan Peacock & Teal Sapphire',
      subtitle: 'Midnight Peacock Blue-Green, Pearl Zari & Starlit Kundan',
      invocation: '॥ ఓం శ్రీ విఘ్నేశ్వరాయ నమః • అవిఘ్నమస్తు ॥',
      invocationMeaning: 'Celestial Harmony under the Starlit Deccan Sky',
      primaryBg: '#031822',
      secondaryBg: '#083346',
      cardBg: 'rgba(8, 51, 70, 0.58)',
      accentColor: '#E8C766',
      secondaryAccent: '#2DD4BF',
      borderGlow: 'rgba(232, 199, 102, 0.45)',
      architectureLabel: 'Chowmahalla Baradari & Starlit Nizam Pavilions',
      floralNote: 'Blue Nilakurinji, White Lotus & Pearl Mogra Strings',
    },
  },
};
