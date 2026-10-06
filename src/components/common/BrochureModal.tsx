import React, { useEffect } from 'react';
import { X, FileText, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import { assetUrl } from '@/lib/assets';
import { getLenis } from '@/lib/lenis';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key & Lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      const lenis = getLenis();
      lenis?.stop();
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        lenis?.start();
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = assetUrl('/Jithesh_Engineers_Corporate_Profile.pdf');
    link.download = 'Jithesh_Engineers_Corporate_Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPrint = () => {
    window.open(assetUrl('/corporate-profile-print.html'), '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 select-none"
      onClick={onClose}
      data-lenis-prevent
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Corporate Profile
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Official Presentation Dossier (PDF)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body - Clean & Minimal */}
        <div className="p-4 sm:p-5 space-y-3.5">
          {/* Document Preview Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200 text-slate-800">
                4-Page Document
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                PDF • 950 KB
              </span>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                Jithesh Engineers Pvt. Ltd.
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Complete overview of our structural engineering capabilities, technical disciplines, IS/ACI design standards, and projects across India & Saudi Arabia.
              </p>
            </div>

            {/* 3 Minimal Highlights */}
            <div className="pt-2 border-t border-slate-200/70 space-y-1 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                <span>Structural analysis, PEB steel & BIM detailing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                <span>IS 456, IS 800, IS 1893 & ACI 318 compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                <span>Notable project portfolio & leadership credentials</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-5 pt-0 sm:pt-0 space-y-2">
          <button
            type="button"
            onClick={handleDownload}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Corporate Profile (PDF)</span>
          </button>

          <button
            type="button"
            onClick={handleViewPrint}
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors active:scale-95"
          >
            <span>Preview in Browser / Print</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
