import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Logo } from '@/components/common/Logo';
import { COMPANY_INFO } from '@/data/navigation';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  User,
  FileText,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Structural Project Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#eaf2fc] via-[#f4f8fe] to-[#f8fbfe] overflow-hidden py-10 sm:py-14">
      {/* Decorative Wave Shapes & Liquid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top-left soft flowing curve */}
        <svg
          className="absolute -top-12 -left-12 w-[520px] h-[520px] text-[#bedbfa] opacity-60"
          viewBox="0 0 520 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C180,60 300,30 380,160 C460,290 340,430 520,520 L0,520 Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>

        {/* Right swoosh accent */}
        <svg
          className="absolute top-1/3 -right-16 w-[700px] h-[380px] text-[#b9daf9] opacity-45"
          viewBox="0 0 700 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M700,0 C540,60 380,220 220,180 C80,150 40,260 0,380 L700,380 Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>

        {/* 6x6 Dot Matrix decorative accent in top right */}
        <div className="absolute top-8 right-10 hidden sm:grid grid-cols-6 gap-1.5 opacity-25">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          ))}
        </div>
      </div>

      <Container size="xl" className="relative">
        {/* Section Header (Compact) */}
        <div className="max-w-xl mb-7 sm:mb-8">
          {/* Kicker with dash */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-5 h-0.5 bg-blue-600 inline-block" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-600">
              CONSULTATION & INQUIRIES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact Our Engineering Office
          </h2>

          
        </div>

        {/* 2-Column Layout: Details Card & Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Office Details Card (Compact) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl border border-blue-100/90 bg-white p-5 sm:p-5.5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col justify-between space-y-4 h-full">
              
              {/* Brand Header */}
              <div className="pb-3 border-b border-slate-100">
                <Logo variant="light" imgClassName="h-8 w-auto" />
              </div>

              {/* Contact Info Items */}
              <div className="space-y-3 sm:space-y-3.5">
                
                {/* Office Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#07162e] flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      OFFICE ADDRESS
                    </span>
                    <p className="text-xs sm:text-[13px] text-slate-800 font-medium mt-0.5 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Karaparamba,+Kozhikode,+Kerala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#07162e] hover:text-blue-700 hover:underline mt-0.5"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#07162e] flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      TELEPHONE
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-xs sm:text-[13px] text-slate-800 font-medium hover:text-[#07162e] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#07162e] flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs sm:text-[13px] text-slate-800 font-medium hover:text-[#07162e] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#07162e] flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      WORKING HOURS
                    </span>
                    <p className="text-xs sm:text-[13px] text-slate-800 font-medium mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </p>
                    <p className="text-[10.5px] text-slate-500 mt-0.5">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Security / Privacy Badge */}
              <div className="rounded-xl bg-blue-50/70 border border-blue-100/90 p-2.5 sm:p-3 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#07162e] shrink-0" />
                <p className="text-[10.5px] text-slate-600 leading-snug">
                  Your information is secure and will only be used for project communication.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Send Us a Message Form Card (Compact) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-blue-100/90 bg-white p-5 sm:p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] h-full">
              {submitted ? (
                <div className="text-center py-10 space-y-2.5">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-xs leading-relaxed">
                    Thank you. Our structural engineering team will review your specifications and get in touch promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        subject: 'Structural Project Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-2.5 px-4 py-2 rounded-lg bg-[#07162e] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0f2044] transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Card Header */}
                  <div className="mb-3.5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill in your details and our team will get back to you soon.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-fullName" className="block text-[10px] font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                        FULL NAME *
                      </label>
                      <div className="relative flex items-center">
                        <User className="w-4 h-4 text-[#07162e] absolute left-3 pointer-events-none" />
                        <input
                          id="contact-fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-[13px] focus:outline-none focus:border-[#07162e] focus:ring-1 focus:ring-[#07162e] transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="w-4 h-4 text-[#07162e] absolute left-3 pointer-events-none" />
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-[13px] focus:outline-none focus:border-[#07162e] focus:ring-1 focus:ring-[#07162e] transition-all shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-phone" className="block text-[10px] font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                        PHONE NUMBER
                      </label>
                      <div className="relative flex items-center">
                        <Phone className="w-4 h-4 text-[#07162e] absolute left-3 pointer-events-none" />
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-[13px] focus:outline-none focus:border-[#07162e] focus:ring-1 focus:ring-[#07162e] transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-[10px] font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                        SUBJECT *
                      </label>
                      <div className="relative flex items-center">
                        <FileText className="w-4 h-4 text-[#07162e] absolute left-3 pointer-events-none" />
                        <select
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full pl-10 pr-9 py-2 sm:py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs sm:text-[13px] focus:outline-none focus:border-[#07162e] focus:ring-1 focus:ring-[#07162e] transition-all appearance-none shadow-2xs cursor-pointer font-medium"
                        >
                          <option value="Structural Project Inquiry">Structural Project Inquiry</option>
                          <option value="Structural Inspection & Audit">Structural Inspection & Audit</option>
                          <option value="Detailing / BIM Support">Detailing / BIM Support</option>
                          <option value="Career Application">Career Application</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Project Details / Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                      PROJECT DETAILS / MESSAGE *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-[#07162e] absolute left-3 top-2.5 pointer-events-none" />
                      <textarea
                        id="contact-message"
                        rows={3}
                        maxLength={500}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Outline your structure type, site location, timeline or inquiry..."
                        className="w-full pl-10 pr-3.5 pt-2 pb-5.5 rounded-lg bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-[13px] focus:outline-none focus:border-[#07162e] focus:ring-1 focus:ring-[#07162e] transition-all resize-none shadow-2xs min-h-[85px]"
                      />
                      <div className="text-[9.5px] font-mono text-slate-400 absolute right-2.5 bottom-1.5 pointer-events-none">
                        {formData.message.length} / 500
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Submit Button */}
                  <div className="pt-0.5">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-[#07162e] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0f2044] transition-all active:scale-95 shadow-sm cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

