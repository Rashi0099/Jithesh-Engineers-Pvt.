import React, { useState, useRef } from 'react';
import { Container } from '@/components/common/Container';
import {
  MapPin,
  Clock,
  Briefcase,
  UploadCloud,
  FileCheck,
  CheckCircle2,
  X,
  Send,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

const OPENINGS: JobOpening[] = [
  {
    id: 'sde',
    title: 'Senior Design Engineer',
    department: 'Engineering & Modeling',
    location: 'Calicut, Kerala',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    id: 'site',
    title: 'Structural Site Engineer',
    department: 'Execution & Inspection',
    location: 'Kerala & Regional Sites',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    id: 'bim',
    title: 'BIM / CAD Structural Draftsman',
    department: 'Detailing Studio',
    location: 'Calicut, Kerala',
    type: 'Full-time',
    experience: '2+ years',
  },
  {
    id: 'pm',
    title: 'Project Coordinator',
    department: 'Project Management',
    location: 'Calicut, Kerala',
    type: 'Full-time',
    experience: '3+ years',
  },
];

interface ApplicationFormState {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
  cvFile: File | null;
}

const INITIAL_FORM: ApplicationFormState = {
  fullName: '',
  email: '',
  phone: '',
  experience: '',
  message: '',
  cvFile: null,
};

export const CareersSection: React.FC = () => {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ApplicationFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedJobId, setSubmittedJobId] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleApply = (jobId: string) => {
    if (activeJobId === jobId) {
      setActiveJobId(null);
    } else {
      setActiveJobId(jobId);
      setSubmittedJobId(null);
      setFormData(INITIAL_FORM);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cvFile: e.target.files![0] }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({ ...prev, cvFile: e.dataTransfer.files[0] }));
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, cvFile: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedName(formData.fullName);
      setSubmittedJobId(activeJobId);
      setFormData(INITIAL_FORM);
    }, 700);
  };

  return (
    <section id="careers" className="py-20 bg-white relative">
      <Container size="xl">
        {/* Header - Minimal & Architectural */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Careers & Opportunities
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Join Our Engineering Practice
            </h2>
           
          </div>
          <span className="self-start md:self-auto px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-800 text-xs font-mono font-medium border border-slate-200">
            {OPENINGS.length} Positions Available
          </span>
        </div>

        {/* Current Openings List with Inline Expandable Form */}
        <div className="space-y-2.5 sm:space-y-4">
          {OPENINGS.map((job) => {
            const isExpanded = activeJobId === job.id;
            const isSuccess = submittedJobId === job.id;

            return (
              <div
                key={job.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#040915] via-[#08152c] to-[#0d2144] ${
                  isExpanded
                    ? 'border-blue-400/60 shadow-xl ring-2 ring-blue-500/20'
                    : 'border-blue-900/60 hover:border-blue-600/60 shadow-md hover:shadow-xl hover:shadow-black/40'
                }`}
              >
                {/* Job Summary Row (Compact on Mobile) */}
                <div className="p-3.5 sm:p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                        {job.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10.5px] sm:text-xs font-mono bg-blue-500/15 text-blue-200 border border-blue-400/25 shadow-2xs backdrop-blur-xs">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-blue-200/80 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <div className="w-full md:w-auto flex items-center justify-end shrink-0 pt-0.5 md:pt-0">
                    <button
                      type="button"
                      onClick={() => toggleApply(job.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-sm"
                    >
                      <span>{isExpanded ? 'Close Form' : 'Apply Now'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      ) : (
                        <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Inline Application Form Drawer */}
                {isExpanded && (
                  <div className="border-t border-blue-200/80 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#f7fafe] p-5 sm:p-7 animate-in fade-in duration-300">
                    {isSuccess ? (
                      /* Success State */
                      <div className="bg-white border border-emerald-300 rounded-xl p-6 text-center max-w-lg mx-auto shadow-md space-y-3">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          Application Submitted Successfully!
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Thank you <span className="font-semibold text-slate-900">{submittedName}</span>. Your resume and application for <span className="font-semibold text-slate-900">{job.title}</span> have been received. Our HR team will review your profile and contact you shortly.
                        </p>
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSubmittedJobId(null);
                              setActiveJobId(null);
                            }}
                            className="px-5 py-2 bg-[#08152c] hover:bg-[#0d2144] text-white text-xs font-semibold rounded-lg transition-all shadow-sm"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Application Input Form */
                      <form
                        onSubmit={handleSubmit}
                        className="max-w-2xl mx-auto space-y-4"
                      >
                        <div className="flex items-center justify-between border-b border-blue-200/80 pb-3">
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 font-bold">
                              Direct Application
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900">
                              Applying for: {job.title}
                            </h4>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveJobId(null)}
                            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-blue-100 transition-colors"
                            aria-label="Close application form"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                              Full Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="e.g. Rahul Nair"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                              Email Address <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g. rahul@example.com"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                            />
                          </div>
                        </div>

                        {/* Phone & Experience */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                              Phone / WhatsApp Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 98765 43210"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                              Total Experience / Current Role
                            </label>
                            <input
                              type="text"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              placeholder="e.g. 4 years • Structural Designer"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                            />
                          </div>
                        </div>

                        {/* Upload CV Box */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Upload CV / Resume <span className="text-rose-500">*</span>
                          </label>

                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />

                          {formData.cvFile ? (
                            <div className="flex items-center justify-between p-3.5 bg-white border border-blue-200 rounded-lg shadow-2xs">
                              <div className="flex items-center gap-3">
                                <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                                <div>
                                  <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate max-w-xs sm:max-w-sm">
                                    {formData.cvFile.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500">
                                    {(formData.cvFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={removeFile}
                                className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                                title="Remove file"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <div
                              onDragEnter={handleDrag}
                              onDragLeave={handleDrag}
                              onDragOver={handleDrag}
                              onDrop={handleDrop}
                              onClick={() => fileInputRef.current?.click()}
                              className={`border-2 border-dashed rounded-lg p-5 text-center cursor-pointer transition-all bg-white ${
                                dragActive
                                  ? 'border-slate-900 bg-slate-100/80'
                                  : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                              }`}
                            >
                              <UploadCloud className="w-7 h-7 text-slate-400 mx-auto mb-1.5" />
                              <div className="text-xs font-semibold text-slate-800">
                                Click to browse or drag & drop your CV
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                PDF, DOC, DOCX up to 10MB
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Brief Message */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Brief Message / Software Proficiency (Optional)
                          </label>
                          <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Mention your software proficiency (e.g. ETABS, SAFE, STAAD.Pro, Revit BIM) and notice period..."
                            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 transition-all resize-none"
                          />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setActiveJobId(null)}
                            className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-all disabled:opacity-50 active:scale-95 shadow-sm"
                          >
                            {isSubmitting ? (
                              <span>Submitting...</span>
                            ) : (
                              <>
                                <span>Submit Application</span>
                                <Send className="w-3.5 h-3.5" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* General Application Banner with Direct Drawer */}
        <div
          className={`mt-8 rounded-xl border transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#040915] via-[#08152c] to-[#0d2144] ${
            activeJobId === 'general'
              ? 'border-blue-400/60 shadow-xl ring-2 ring-blue-500/20'
              : 'border-blue-900/60 hover:border-blue-600/60 shadow-md hover:shadow-xl hover:shadow-black/40'
          }`}
        >
          <div className="p-3.5 sm:p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-blue-100 font-medium text-center sm:text-left leading-relaxed">
              Don't see a matching vacancy? Send your CV and engineering portfolio to our recruitment desk.
            </p>
            <button
              type="button"
              onClick={() => toggleApply('general')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-sm shrink-0"
            >
              <span>{activeJobId === 'general' ? 'Close Form' : 'General Application'}</span>
              {activeJobId === 'general' ? (
                <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              ) : (
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              )}
            </button>
          </div>

          {activeJobId === 'general' && (
            <div className="border-t border-blue-200/80 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#f7fafe] p-5 sm:p-7 animate-in fade-in duration-300">
              {submittedJobId === 'general' ? (
                <div className="border border-emerald-300 bg-white rounded-xl p-6 text-center max-w-lg mx-auto shadow-md space-y-2">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                  <h3 className="text-sm font-bold text-slate-900">Resume Received!</h3>
                  <p className="text-xs text-slate-600">
                    Thank you <span className="font-semibold">{submittedName}</span>. Your resume has been added to our talent repository. We will contact you when suitable openings arise.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="max-w-2xl mx-auto space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="general-fullName" className="block text-xs font-semibold text-slate-800 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="general-fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="general-email" className="block text-xs font-semibold text-slate-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="general-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="general-phone" className="block text-xs font-semibold text-slate-800 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="general-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="general-experience" className="block text-xs font-semibold text-slate-800 mb-1">
                        Field of Interest / Specialization
                      </label>
                      <input
                        id="general-experience"
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g. Structural Modeling / Site Inspection"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Upload Resume / CV *
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#08152c] file:text-white hover:file:bg-[#0d2144] file:cursor-pointer transition-all"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveJobId(null)}
                      className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-blue-100/50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-lg bg-[#08152c] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0d2144] transition-all shadow-md active:scale-95"
                    >
                      {isSubmitting ? 'Sending...' : 'Send General Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
