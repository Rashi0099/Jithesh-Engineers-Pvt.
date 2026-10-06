import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '+919876543210',
  defaultMessage = 'Hello Jithesh Engineers, I would like to inquire about structural engineering consultancy services.',
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 print:hidden select-none">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="flex items-center gap-2 bg-white text-slate-800 text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200/80 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Quick Chat with Us</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Chat with Jithesh Engineers on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
