import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SectionHeading } from './common/SectionHeading';
import { Reveal } from './common/Reveal';
import { CheckCircle2, Heart, MessageCircle, Send, Users, Phone, User, MessageSquare } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

/**
 * Refined Modern RSVP Component
 * - Obey config flag config.rsvp.enabled
 * - Styled with thin gold hairline borders, softer shadows, and refined typography
 * - Supabase integration with localStorage fallback
 * - Direct WhatsApp confirmation button
 */
export const RSVPSection = ({ config }) => {
  // If RSVP is disabled in config, do not render
  if (config.rsvp?.enabled === false) return null;

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    attendance: 'attending', // 'attending' | 'declining'
    guestCount: 2,
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successInfo, setSuccessInfo] = useState(null);

  const deadline = config.rsvp?.deadline || "15 February 2027";

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name";
    }
    const cleanPhone = formData.mobile.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      errs.mobile = "Please enter a valid mobile number";
    }
    if (formData.attendance === 'attending' && (formData.guestCount < 1 || formData.guestCount > 10)) {
      errs.guestCount = "Please select valid number of guests (1-10)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const submissionPayload = {
      guest_name: formData.name.trim(),
      mobile_number: formData.mobile.trim(),
      attendance: formData.attendance,
      guest_count: formData.attendance === 'attending' ? Number(formData.guestCount) : 0,
      message: formData.message.trim(),
      created_at: new Date().toISOString(),
    };

    try {
      const { supabaseUrl, supabaseAnonKey, tableName } = config.rsvp || {};

      if (supabaseUrl && supabaseAnonKey) {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        const { error } = await supabase
          .from(tableName || 'wedding_rsvps')
          .insert([submissionPayload]);

        if (error) {
          saveLocally(submissionPayload);
        }
      } else {
        saveLocally(submissionPayload);
      }

      confetti({
        particleCount: 50,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#5A684C', '#E8CA8B', '#FDFBF7'],
      });

      setSuccessInfo(submissionPayload);
      setIsSuccess(true);
    } catch {
      saveLocally(submissionPayload);
      setSuccessInfo(submissionPayload);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveLocally = (payload) => {
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existing.push(payload);
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }
  };

  const handleSendWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `🙏 *Wedding RSVP for Subash & Monika*\n\n👤 *Guest:* ${formData.name}\n📱 *Phone:* ${formData.mobile}\n✨ *Status:* ${
        formData.attendance === 'attending' ? 'Joyfully Attending' : 'Regretfully Declining'
      }\n👥 *Number of Guests:* ${formData.guestCount}\n💌 *Message:* ${formData.message || 'Heartiest congratulations!'}`
    );
    window.open(`https://api.whatsapp.com/send?phone=${config.rsvp?.whatsappNumber || ''}&text=${text}`, '_blank');
  };

  return (
    <section id="rsvp" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#F8FAF5] border-t border-gold/20 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="GUEST ATTENDANCE"
            title="RSVP & Best Wishes"
            subtitle={`Kindly respond by ${deadline} so we can warmly welcome you`}
          />
        </Reveal>

        <Reveal direction="up" delay={120}>
          <div className="mt-10 relative bg-white rounded-2xl p-6 sm:p-10 border border-gold/35 shadow-xs overflow-hidden">
            {isSuccess ? (
              /* SUCCESS STATE */
              <div className="text-center py-6 px-2">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-400 flex items-center justify-center text-emerald-600 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#3A2A20] mb-2">
                  Nandri! RSVP Received
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#5C4537] max-w-md mx-auto leading-relaxed">
                  Dear <strong className="text-[#3A2A20]">{successInfo?.guest_name}</strong>, thank you for confirming. Your presence will add immense joy to our celebration!
                </p>

                <div className="mt-5 bg-[#FAF7F0] border border-gold/30 rounded-xl p-4 max-w-sm mx-auto text-xs font-serif text-[#6C584C] space-y-1">
                  <p>
                    <strong>Attendance:</strong>{' '}
                    {successInfo?.attendance === 'attending' ? 'Joyfully Attending' : 'Regretfully Declining'}
                  </p>
                  {successInfo?.attendance === 'attending' && (
                    <p>
                      <strong>Total Guests:</strong> {successInfo?.guest_count}
                    </p>
                  )}
                  {successInfo?.message && (
                    <p className="italic pt-1 border-t border-gold/20">"{successInfo.message}"</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleSendWhatsAppConfirmation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-serif font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-xs transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Notify Couple on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        mobile: '',
                        attendance: 'attending',
                        guestCount: 2,
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-serif text-[#454D38] bg-white border border-gold/40 hover:bg-[#FAF6ED] transition-all"
                  >
                    <span>Submit Another Response</span>
                  </button>
                </div>
              </div>
            ) : (
              /* RSVP FORM */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Attendance Choice */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#5A684C] font-semibold mb-2">
                    Will you be attending? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                      className={`py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-serif font-semibold transition-all flex items-center justify-center gap-2 ${
                        formData.attendance === 'attending'
                          ? 'bg-[#5A684C] border-[#5A684C] text-white shadow-xs'
                          : 'bg-white border-gold/35 text-[#5C4537] hover:bg-[#FAF8F2]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${formData.attendance === 'attending' ? 'fill-white text-white' : 'text-[#B8860B]'}`} />
                      <span>Joyfully Accept</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'declining' })}
                      className={`py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-serif font-semibold transition-all flex items-center justify-center gap-2 ${
                        formData.attendance === 'declining'
                          ? 'bg-[#3A2A20] border-[#3A2A20] text-white shadow-xs'
                          : 'bg-white border-gold/35 text-[#5C4537] hover:bg-[#FAF8F2]'
                      }`}
                    >
                      <span>Regretfully Decline</span>
                    </button>
                  </div>
                </div>

                {/* Guest Name */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#5A684C] font-semibold mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8A7668] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Kumar"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F2] border border-gold/30 rounded-xl text-sm font-serif text-[#3A2A20] placeholder-[#8A7668] focus:bg-white focus:outline-none focus:border-[#5A684C] focus:ring-1 focus:ring-[#5A684C] transition-colors"
                    />
                  </div>
                  {errors.name && <p className="text-xs text-rose-600 mt-1 font-serif">{errors.name}</p>}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#5A684C] font-semibold mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8A7668] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F2] border border-gold/30 rounded-xl text-sm font-serif text-[#3A2A20] placeholder-[#8A7668] focus:bg-white focus:outline-none focus:border-[#5A684C] focus:ring-1 focus:ring-[#5A684C] transition-colors"
                    />
                  </div>
                  {errors.mobile && <p className="text-xs text-rose-600 mt-1 font-serif">{errors.mobile}</p>}
                </div>

                {/* Guest Count (only if attending) */}
                {formData.attendance === 'attending' && (
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#5A684C] font-semibold mb-1">
                      Total Guests Attending
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#8A7668] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F2] border border-gold/30 rounded-xl text-sm font-serif text-[#3A2A20] focus:bg-white focus:outline-none focus:border-[#5A684C] focus:ring-1 focus:ring-[#5A684C] transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest (Self)' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#5A684C] font-semibold mb-1">
                    Warm Wishes or Notes (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-[#8A7668] absolute left-3.5 top-3" />
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a heartfelt blessing for the couple..."
                      className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F2] border border-gold/30 rounded-xl text-sm font-serif text-[#3A2A20] placeholder-[#8A7668] focus:bg-white focus:outline-none focus:border-[#5A684C] focus:ring-1 focus:ring-[#5A684C] transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-serif font-semibold text-white bg-[#454D38] hover:bg-[#343B2A] shadow-xs active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending Confirmation...' : 'Confirm RSVP'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
