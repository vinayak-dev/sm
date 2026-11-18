// Wedding E-Invitation Configuration
// All user-facing text, dates, images, and venue details are configured here.
// NOTE: Placeholders (venue, address, phone, maps URLs, parents, feast timing) are flagged for owner update.

export const weddingConfig = {
  // Couple Information
  couple: {
    groom: "Subash",
    bride: "Monika",
    groomParents: "Mr. & Mrs. R. Natarajan", // PLACEHOLDER: Owner to update if showParents is enabled
    brideParents: "Mr. & Mrs. S. Soundararajan", // PLACEHOLDER: Owner to update if showParents is enabled
    dateFormatted: "26 FEBRUARY 2027",
    dayFormatted: "Friday",
    tagline: "We're getting married",
    heroInvitation: "Together with our families, we joyfully invite you to celebrate our sacred wedding union.",
    formalInvitation: "With the blessings of our families and the grace of the Almighty, we invite you to share in our joy as we begin a beautiful new chapter of our lives.",
    footerMessage: "Two hearts, one beautiful journey. Thank you for being part of our celebration!",
  },

  // Hero Lead Image (Full-bleed couple portrait with Ken Burns zoom)
  heroImage: {
    src: "/images/TBA06761.jpg",
    alt: "Subash & Monika",
    width: 1400,
    height: 933,
  },

  // Config-driven flag to show parent blessings (default false as requested)
  showParents: false,

  // Wedding Date & Time for Countdown (Asia/Kolkata Timezone)
  weddingDateISO: "2027-02-26T09:30:00+05:30",
  timezone: "Asia/Kolkata",
  postWeddingMessage: "Our Forever Begins.",

  // Background Music Settings (Hosted locally in public/audio/)
  music: {
    title: "Wedding Celebration Music",
    subtitle: "Auspicious Celebration Melody",
    audioUrl: "/audio/wedding_music.mp3",
    fallbackAudioUrl: "/audio/wedding_music.m4a",
    autoPlayAfterOpen: true,
  },

  // Ceremony & Event Details for Vertical Timeline & Event Cards
  events: [
    {
      id: "muhurtham",
      title: "Sacred Muhurtham Ceremony",
      eyebrow: "Auspicious Union",
      date: "Friday, 26 February 2027",
      dateISO: "2027-02-26",
      time: "9:00 AM – 10:30 AM",
      venue: "SS Mani Mahal",
      address: "Atthimara Thottam, Poyampalayam, Tiruppur, Tamil Nadu 641603",
      icon: "knot",
      badge: "Sacred Muhurtham",
      highlight: true,
    },
    {
      id: "feast",
      title: "Kalyana Virundhu",
      eyebrow: "Wedding Feast",
      date: "Friday, 26 February 2027",
      dateISO: "2027-02-26",
      time: "11:30 AM – 2:30 PM",
      auspiciousTime: "Traditional South Indian Plantain Leaf Feast",
      venue: "SS Mani Mahal (Dining Hall)",
      address: "Atthimara Thottam, Poyampalayam, Tiruppur, Tamil Nadu 641603",
      icon: "utensils",
      badge: "Grand Feast",
      highlight: false,
    },
    {
      id: "reception",
      title: "Wedding Reception",
      eyebrow: "Evening Celebration",
      date: "Friday, 26 February 2027",
      dateISO: "2027-02-26",
      time: "6:30 PM onwards",
      auspiciousTime: "Dinner & Musical Evening",
      venue: "SS Mani Mahal",
      address: "Atthimara Thottam, Poyampalayam, Tiruppur, Tamil Nadu 641603",
      icon: "party", // "party" | "knot" | "utensils"
      badge: "Evening Reception",
      highlight: false,
    }
  ],

  // Venue & Map Location
  location: {
    venueName: "SS Mani Mahal",
    venueAddress: "Atthimara Thottam, Poyampalayam, Tiruppur, Tamil Nadu 641603",
    phone: "+91 98765 43210", // PLACEHOLDER
    mapQuery: "SS+MANI+MAHAL+Tiruppur",
    directionsUrl: "https://maps.app.goo.gl/88zN49xQnFKbVufP6",
    embedMapUrl: "https://maps.google.com/maps?q=SS+MANI+MAHAL+Tiruppur&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  // 9:16 Full-Width Wedding Reel Video
  video: {
    title: "Special Moments",
    videoUrl: "/video/wedding_reel.mp4",
    posterUrl: "/images/reel_poster.jpg",
  },

  // Photo Gallery Configuration (Editorial Masonry layout & Lightbox)
  gallery: {
    lightbox: true, // Config flag: enable/disable tap-to-open fullscreen viewer
    items: [
      {
        id: 1,
        imageUrl: "/images/TBA06761.jpg",
        alt: "Subash & Monika",
        aspect: "wide", // "wide" | "tall" | "square"
        width: 1400,
        height: 933,
      },
      {
        id: 2,
        imageUrl: "/images/TBA07254.jpg",
        alt: "Subash & Monika Romantic Portrait",
        aspect: "tall",
        width: 1400,
        height: 933,
      },
      {
        id: 3,
        imageUrl: "/images/TBA07258.jpg",
        alt: "Subash & Monika Smile",
        aspect: "tall",
        width: 1400,
        height: 933,
      },
      {
        id: 4,
        imageUrl: "/images/TBA07309.jpg",
        alt: "Subash & Monika Sunset Pose",
        aspect: "wide",
        width: 1400,
        height: 933,
      },
      {
        id: 5,
        imageUrl: "/images/TBA07358.jpg",
        alt: "Subash & Monika Hand in Hand",
        aspect: "wide",
        width: 1400,
        height: 933,
      }
    ]
  },

  // "You're Invited" Special Invitation Section
  invitedSection: {
    eyebrow: "CORDIALLY INVITED",
    title: "You're Invited!",
    subtitle: "With joyful hearts, we request the honor of your gracious presence",
    message: "Together with our families, we warmly invite you to join us in celebrating our wedding. Your blessings, laughter, and presence will make our union truly auspicious and memorable.",
    dateHighlight: "Friday, 26 February 2027",
    venueHighlight: "SS Mani Mahal, Tiruppur",
  },

  // RSVP Configuration (Disabled per user request)
  rsvp: {
    enabled: false,
  }
};
