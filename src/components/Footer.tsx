import React, { useState } from 'react';
import { Share2, Globe, Mail, Check, Github, Disc as DiscordIcon } from 'lucide-react';

interface FooterProps {
  onOpenSpecs: () => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSpecs, onOpenGuide }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#040711] py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-900">
          
          {/* Left Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              {/* Snowflake */}
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"></line>
                <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
              </svg>
            </div>
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-widest text-white uppercase">
              GLACIER
            </span>
          </div>

          {/* Center Social / Action Icons */}
          <div className="flex items-center gap-5 text-slate-400">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full hover:bg-slate-800 hover:text-cyan-400 transition-colors relative cursor-pointer"
              title="Share Glacier Core"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-mono-tech text-emerald-400 whitespace-nowrap shadow-md">
                  Link Copied!
                </span>
              )}
            </button>

            <a
              href="#"
              className="p-2.5 rounded-full hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              title="Global Community"
            >
              <Globe className="w-4 h-4" />
            </a>

            <a
              href="mailto:contact@glaciercore.engineering"
              className="p-2.5 rounded-full hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              title="Contact Engineering Support"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Legal & Nav Links */}
          <div className="flex items-center gap-6 text-xs font-mono-tech text-slate-400 tracking-wider">
            <a href="#privacy" className="hover:text-cyan-300 transition-colors uppercase">
              PRIVACY
            </a>
            <a href="#terms" className="hover:text-cyan-300 transition-colors uppercase">
              TERMS
            </a>
            <a href="#support" className="hover:text-cyan-300 transition-colors uppercase">
              SUPPORT
            </a>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 text-center text-xs font-mono-tech text-slate-500 tracking-wider">
          © 2024 GLACIER CORE. ENGINEERED FOR ABSOLUTE ZERO.
        </div>

      </div>
    </footer>
  );
};
