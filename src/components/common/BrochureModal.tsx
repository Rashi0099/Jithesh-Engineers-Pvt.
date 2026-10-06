import React from 'react';
import { X, FileText, Download, Printer, CheckCircle, ExternalLink } from 'lucide-react';
import { assetUrl } from '@/lib/assets';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Download the authentic, beautifully formatted multi-page Corporate Profile PDF
    const link = document.createElement('a');
    link.href = assetUrl('/Jithesh_Engineers_Corporate_Profile.pdf');
    link.download = 'Jithesh_Engineers_Corporate_Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPrint = () => {
    // Open the high-resolution printable profile in a new tab for instant viewing / printing
    window.open(assetUrl('/corporate-profile-print.html'), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  Corporate Profile & Capabilities
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-200/80 text-slate-800">
                  PDF Dossier
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Jithesh Engineers Pvt. Ltd. • 4-Page Official Presentation
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-lg font-bold text-slate-900 font-mono">18+ Years</div>
              <div className="text-[11px] text-slate-500">Practice Experience</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-lg font-bold text-slate-900 font-mono">2008</div>
              <div className="text-[11px] text-slate-500">Year Established</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-lg font-bold text-slate-900 font-mono">100+</div>
              <div className="text-[11px] text-slate-500">Major Projects</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-lg font-bold text-slate-900 font-mono">India & Gulf</div>
              <div className="text-[11px] text-slate-500">Regional Footprint</div>
            </div>
          </div>

          {/* Dossier Structure / Content Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
              Included in the 4-Page Corporate Profile PDF:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Page 1: Executive Cover</strong>
                  <span>Firm qualifications, banner visual & practice metrics.</span>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Page 2: Leadership & Awards</strong>
                  <span>Er. K. Jithesh credentials, CEng/MIE & national honors.</span>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Page 3: Disciplines & Codes</strong>
                  <span>High-rise RCC, steel PEB, spatial trusses & IS/ACI standards.</span>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Page 4: Clientele & Contact</strong>
                  <span>Select builders (Landmark, Pentium, KHRWS) & Calicut HQ.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Spotlight Card */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={assetUrl('/real-assets/director.jpg')}
                alt="Er. K. Jithesh"
                className="w-12 h-14 rounded-lg object-cover object-top border border-slate-200 shrink-0"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Founder & Chief Structural Engineer
                </div>
                <div className="text-sm font-bold text-slate-900">Er. K. Jithesh</div>
                <div className="text-xs text-slate-600">
                  MTech (Structural) • CEng • MIE • ICI (Practicing since 1991)
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-right text-xs font-mono text-slate-500">
              Calicut, Kerala
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-50">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleViewPrint}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-300 hover:bg-slate-200/70 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Preview / Print</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Corporate Profile (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
