import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { COMPANY_INFO } from '@/data/navigation';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Project Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <Container size="xl">
        {/* Section Header - Clean & Direct */}
        <div className="max-w-2xl mb-12 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            Consultation & Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
            Contact Our Engineering Office
          </h2>
          <p className="text-sm text-brand-muted leading-relaxed">
            Discuss your project requirements, structural audits, or engineering peer reviews with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-7 bg-white shadow-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold text-brand-navy">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">
                  Structural Engineering Consultancy
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Office Address
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Karaparamba,+Kozhikode,+Kerala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-accent hover:underline mt-1"
                    >
                      <span>View on Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Phone className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Telephone
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-xs sm:text-sm text-brand-muted hover:text-brand-accent transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Mail className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs sm:text-sm text-brand-muted hover:text-brand-accent transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Clock className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Working Hours
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    Inquiry Received
                  </h3>
                  <p className="text-brand-muted max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
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
                        subject: 'Project Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-3 px-5 py-2 rounded-lg bg-brand-light text-brand-navy font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-fullName" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-light border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-light border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-light border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-light border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium"
                      >
                        <option value="Project Inquiry">Structural Project Inquiry</option>
                        <option value="Structural Audit">Structural Inspection & Audit</option>
                        <option value="Detailing & BIM">Detailing / BIM Support</option>
                        <option value="Career Application">Career Application</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Project Details / Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your structure type, site location, timeline or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-light border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-all active:scale-95 shadow-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
