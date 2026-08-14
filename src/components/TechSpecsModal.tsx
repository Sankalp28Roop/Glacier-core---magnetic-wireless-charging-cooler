import React from 'react';
import { X, Cpu, Zap, Shield, Wind, Sparkles, Magnet } from 'lucide-react';

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const specCategories = [
    {
      category: 'Wireless Power & Induction',
      icon: Zap,
      specs: [
        { label: 'Induction Standard', val: 'Qi2 & Apple MagSafe Compatible' },
        { label: 'Max Output Power', val: '15.0W Fast Wireless Induction' },
        { label: 'Coil Material', val: 'Pure Oxygen-Free Multi-Filament Copper (OFC)' },
        { label: 'Transfer Efficiency', val: '88.4% Peak Coupling Efficiency' },
        { label: 'Input Interface', val: 'USB Type-C (PD 3.0 / 9V 2.22A, 12V 1.67A)' },
      ],
    },
    {
      category: 'Active Thermal Architecture',
      icon: Wind,
      specs: [
        { label: 'Thermal Interface Material', val: '12.8 W/mK Synthetic Phase-Change Graphene' },
        { label: 'Heatsink Material', val: '6061-T6 Anodized Aluminum Micro-Channels' },
        { label: 'Fan Bearing', val: 'Hydro-Dynamic Fluid Bearing (HDB)' },
        { label: 'Fan Speed', val: 'Up to 7,200 RPM (Turbo Mode: 9,000 RPM)' },
        { label: 'Acoustic Sound Level', val: '< 16.8 dBA at 1 Meter (Silent Whisper)' },
        { label: 'Core Temperature Delta', val: 'Up to -18.4°C under 100% SoC Load' },
      ],
    },
    {
      category: 'Mechanical & Magnetic Array',
      icon: Magnet,
      specs: [
        { label: 'Magnet Grade', val: '36x N52 High-Coercivity Rare-Earth Neodymium' },
        { label: 'Magnetic Clamping Force', val: '15.5 Newtons (~1,580 grams shear hold)' },
        { label: 'Chassis Dimensions', val: '59.2 mm x 59.2 mm x 16.5 mm' },
        { label: 'Chassis Net Weight', val: '64.0 grams (Ultra-Lightweight)' },
        { label: 'Finish', val: 'Type III Hard Anodize (Matte Obsidian / Cyber Cyan)' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#070e1c] border border-cyan-900/50 shadow-[0_0_80px_rgba(6,182,212,0.3)] overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:px-8 border-b border-slate-800 bg-[#081224]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                Technical Specifications & Engineering Sheet
              </h3>
              <p className="text-xs font-mono-tech text-slate-400">
                GLACIER CORE MK-IV ARCHITECTURE
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {specCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-300 font-mono-tech text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{group.category}</span>
                </div>

                <div className="rounded-2xl bg-slate-900/70 border border-slate-800 divide-y divide-slate-800/60 overflow-hidden">
                  {group.specs.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 px-4 text-xs font-mono-tech gap-1">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-slate-100 font-bold text-right">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-[#070e1c] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono-tech font-bold uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            Close Sheet
          </button>
        </div>

      </div>
    </div>
  );
};
