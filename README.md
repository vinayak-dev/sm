# Subash & Monika – Premium South Indian Wedding E-Invitation

A luxurious, interactive, mobile-first wedding e-invitation website celebrating the sacred wedding of **Subash & Monika** on **26 February 2026** in Chennai, Tamil Nadu.

---

## ✨ Features & Highlights

1. **South Indian Traditional Temple Theme:**
   - Color palette: Ivory, cream, champagne gold, pastel peach, rose pink, sage green, and subtle maroon.
   - Traditional South Indian motifs: Dravidian Temple Gopuram architecture, Kuthu Vilakku brass deepam lamps with glowing flames, swinging temple bells (Mani), fragrant jasmine & marigold floral garlands (Thoranam), sacred Kolam/Rangoli geometry, and ornate gold borders.

2. **Opening Invitation Animation:**
   - Full-screen traditional wedding envelope with floral decorations and gold filigree.
   - Displays:
     - `SUBASH & MONIKA`
     - `26 FEBRUARY 2026`
     - `"A Celebration of Love"`
     - `OPEN INVITATION` button with shimmer effect.
   - Smooth 3D unsealing animation with ceremonial gold & rose confetti burst and automatic background music playback.

3. **Background Music Player:**
   - Traditional Nadaswaram & Thavil instrumental (*Kalyana Nadaswaram Mangala Vadhyam*).
   - Configurable MP3 URL with built-in Web Audio API Carnatic synthesized fallback so audio never fails even offline.
   - Floating audio widget with real-time animated equalizer sound-wave bars, play/pause, and mute controls.
   - Continuous playback across scrolling without interruptions.

4. **Hero Section & Wedding Countdown:**
   - Majestic temple-inspired hero with Kuthu Vilakku lamps, Gopuram silhouette, and couple's names prominently presented.
   - Core message: *"Together with our families, we invite you to celebrate our wedding."*
   - Live Countdown timer (Days, Hours, Minutes, Seconds) configured for **Asia/Kolkata (+05:30)** timezone.
   - Displays *"Our Forever Begins"* after the wedding date.
   - One-tap "Add to Google Calendar" button.

5. **Traditional Invitation & Romantic Love Story Timeline:**
   - Formal invitation card with exact traditional text:
     > *"With the blessings of our families and the grace of the Almighty, we joyfully invite you to join us as we begin a beautiful new chapter of our lives."*
   - Romantic visual milestone timeline:
     - **How We Met** (April 2022)
     - **Our Beautiful Journey** (2022 – 2025)
     - **The Engagement** (November 2025)
     - **The Wedding Day** (26 February 2026)

6. **Photo Gallery ("A Glimpse of Our Journey"):**
   - Premium image slider with exactly 4 replaceable image placeholders.
   - Touch swipe gesture support for mobile devices.
   - Smooth navigation arrows and thumbnail selector.
   - Full-screen lightbox zoom view.

7. **Wedding Video ("Our Special Moments"):**
   - 16:9 video placeholder with ornate gold corner frames.
   - Central pulsating play button.
   - Configurable video URL (YouTube embed or MP4).

8. **Wedding Details & Google Maps:**
   - Detailed event cards:
     - **Sacred Muhurtham:** Thursday, 26 February 2026 (9:00 AM – 10:30 AM Meena Lagnam)
     - **Wedding Reception:** Wednesday, 25 February 2026 (6:30 PM onwards)
   - Interactive Google Maps embed preview.
   - Prominent **GET DIRECTIONS** button, Copy Address with instant feedback, and WhatsApp Share button.

9. **Interactive RSVP Form:**
   - Guest Name, Mobile Number (WhatsApp preferred), Attendance Confirmation (Joyfully Accept / Regretfully Decline), Number of Guests (1–6+), and Optional Message.
   - **Supabase Integration:** Safely inserts into `wedding_rsvps` table when configured with public Anon Key (no secrets exposed in frontend).
   - **Offline / Local Fallback:** Automatically saves to `localStorage` if Supabase is unconfigured, ensuring zero loss of guest confirmations.
   - 1-click **Notify Couple on WhatsApp** button with pre-filled guest details.

10. **Background Animations & Mobile Optimization:**
    - High-performance HTML5 Canvas falling jasmine and rose petals with golden dust.
    - User toggle pill (`🌸 Petals On/Off`) to respect battery and reduced-motion preferences (`prefers-reduced-motion`).
    - Open Graph & WhatsApp rich link sharing preview tags.
    - Zero horizontal overflow, mobile-first responsive design.

11. **Emotional Closing Footer:**
    - Traditional lamps, maroon accents, gold filigree:
      > *"SUBASH & MONIKA"*
      > *"Two hearts, one beautiful journey. Thank you for being part of our celebration!"*

---

## 🛠️ Project Structure

```
subash-monika-wedding/
├── index.html                           # Open Graph meta tags, Google Fonts, PWA viewport
├── package.json
├── tailwind.config.js                   # Traditional Indian wedding palette & typography
├── vite.config.js
└── src/
    ├── App.jsx                          # Main invitation layout & state
    ├── main.jsx
    ├── index.css
    ├── config/
    │   └── weddingConfig.js             # 💡 ALL text, dates, images, music, video, and venue details
    └── components/
        ├── OpeningEnvelope.jsx          # Fullscreen opening envelope with confetti
        ├── MusicPlayer.jsx              # Floating audio player with soundwave bars
        ├── HeroSection.jsx              # Temple hero, lamps, Gopuram, couple names
        ├── Countdown.jsx                # Asia/Kolkata countdown & Google Calendar
        ├── InvitationLoveStory.jsx      # Formal card & 4-milestone timeline
        ├── PhotoGallery.jsx             # 4-image slider with swipe and lightbox
        ├── WeddingVideo.jsx             # 16:9 video player with play trigger
        ├── EventLocation.jsx            # Reception & Muhurtham cards, Google Maps, Directions
        ├── RSVPSection.jsx              # Guest confirmation form with Supabase / local storage
        ├── Footer.jsx                   # Emotional closing section & share buttons
        └── decorations/
            ├── KuthuVilakku.jsx         # South Indian brass oil lamp with flame glow
            ├── TempleGopuram.jsx        # Dravidian temple gopuram architectural motif
            ├── FloralGarland.jsx        # Jasmine, marigold & mango leaf Thoranam
            ├── KolamPattern.jsx         # Auspicious Kolam / Rangoli geometry
            ├── TempleBell.jsx           # Animated swinging brass temple bells
            ├── GoldBorder.jsx           # Ornate filigree corners and dividers
            └── FallingPetals.jsx        # HTML5 Canvas falling petals & sparkles
```

---

## 🚀 How to Run Locally

```bash
cd /Users/v/.gemini/antigravity/scratch/subash-monika-wedding
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## 📝 Customization

All wedding details are cleanly organized in `src/config/weddingConfig.js`:

- **Couple details:** Names, parents, tagline, messages.
- **Wedding Date & Time:** `weddingDateISO: "2026-02-26T09:30:00+05:30"`.
- **Music:** Replace `audioUrl` with any MP3 link.
- **Photos:** Replace the 4 image URLs in the `gallery` array.
- **Video:** Replace `videoUrl` in `video`.
- **Venue:** Change venue address, coordinates, and Google Maps embed URL.
- **Supabase RSVP:** Add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env` or in `weddingConfig.js`.
