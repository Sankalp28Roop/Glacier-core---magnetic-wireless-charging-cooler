import React, { useState } from 'react';
import { X, Wrench, CheckCircle2, ChevronRight, ChevronLeft, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { AssemblyStep } from '../types';

interface DiyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS: AssemblyStep[] = [
  {
    step: 1,
    title: 'Prep Aluminum Shroud & Neodymium Array',
    time: '2-3 Mins',
    difficulty: 'Easy',
    toolsNeeded: ['0.8mm Alignment Template', 'Microfiber Cloth'],
    description:
      'Clean the inner magnetic pocket of the CNC aluminum chassis with the included lint-free wipe. Press the 36-piece N52 neodymium magnetic ring into the precision alignment channel until it clicks flush.',
    tips: 'Ensure the polarity indicator notch on the magnetic ring faces upwards toward the 12 o’clock position.',
  },
  {
    step: 2,
    title: 'Install Pure Copper 15W Qi2 Inductive Coil',
    time: '3-4 Mins',
    difficulty: 'Moderate',
    toolsNeeded: ['T3 Hex Screwdriver (Included)', 'Insulation Ring'],
    description:
      'Seat the multi-strand pure OFC copper charging coil directly atop the magnetic ring isolator. Route the 4-pin ultra-flexible power ribbon into the PCB socket until the locking tab engages.',
    tips: 'Do not crease the copper ribbon cable; keep a smooth 1mm bend radius.',
  },
  {
    step: 3,
    title: 'Apply Synthetic Graphene Phase-Change Thermal Pad',
    time: '2 Mins',
    difficulty: 'Precision',
    toolsNeeded: ['Tweezers', 'Thermal Interface Pad (12.8 W/mK)'],
    description:
      'Peel both protective film liners from the pre-cut synthetic graphene thermal pad. Lay it across the central thermal transfer core to eliminate microscopic air gaps between the coil and heatsink.',
    tips: 'Use the included tweezers to avoid touching the thermal pad surface with bare fingers to preserve optimal conductivity.',
  },
  {
    step: 4,
    title: 'Mount 7-Blade Hydro-Dynamic Turbine Fan',
    time: '3 Mins',
    difficulty: 'Easy',
    toolsNeeded: ['T3 Screwdriver', '4x Anti-Vibration Silicon Dampers'],
    description:
      'Position the 7200 RPM acoustic turbine fan into the central chamber. Secure the four corner vibration-damping silicone grommets and tighten the corner T3 titanium screws in an X-pattern.',
    tips: 'Tighten screws until snug (0.4 Nm). Over-tightening is not necessary due to the silicone damping gaskets.',
  },
  {
    step: 5,
    title: 'Snap Hex Mesh Grille & Initial Power Calibration',
    time: '1 Min',
    difficulty: 'Easy',
    toolsNeeded: ['USB-C Power Meter (Optional)', '9V/2.22A+ PD Power Source'],
    description:
      'Snap the laser-etched hexagonal intake grille onto the rear chassis. Connect any standard USB-C PD power adapter. The blue status LED will pulse twice indicating successful coil-to-fan circuit self-test.',
    tips: 'Once connected, you will hear a smooth 16.8 dBA whisper from the fan as the thermistor calibrates to ambient room temperature.',
  },
];

export const DiyGuideModal: React.FC<DiyGuideModalProps> = ({ isOpen, onClose }) => {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);

  if (!isOpen) return null;

  const currentStep = STEPS[currentStepIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#070e1c] border border-cyan-900/50 shadow-[0_0_80px_rgba(6,182,212,0.3)] overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:px-8 border-b border-slate-800 bg-[#081224]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                DIY Assembly Blueprint
              </h3>
              <p className="text-xs font-mono-tech text-slate-400">
                5-STEP OPEN ENGINEERING WORKBOOK
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

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Step Progress Indicators */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-6">
            {STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setCurrentStepIdx(idx)}
                className={`flex-1 py-2 px-1 rounded-xl text-center transition-all cursor-pointer ${
                  currentStepIdx === idx
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                    : idx < currentStepIdx
                    ? 'bg-slate-800/80 text-cyan-400'
                    : 'bg-slate-900 text-slate-500'
                }`}
              >
                <span className="text-[10px] font-mono-tech block">STEP {s.step}</span>
              </button>
            ))}
          </div>

          {/* Current Step Detailed Card */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono-tech text-cyan-400 font-bold uppercase tracking-wider">
                  STEP {currentStep.step} OF 5 // {currentStep.difficulty.toUpperCase()}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  {currentStep.title}
                </h4>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono-tech text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {currentStep.time}
                </span>
              </div>
            </div>

            {/* Instruction description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
              {currentStep.description}
            </p>

            {/* Tools Needed & Pro Tip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                <span className="text-slate-400 font-mono-tech font-bold block mb-2 uppercase">
                  REQUIRED TOOLS & PARTS
                </span>
                <ul className="space-y-1.5 text-slate-200">
                  {currentStep.toolsNeeded.map((tool, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs">
                <span className="text-cyan-400 font-mono-tech font-bold block mb-2 uppercase flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  ENGINEERING PRO-TIP
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {currentStep.tips}
                </p>
              </div>
            </div>

          </div>

          {/* Step Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-800">
            <button
              onClick={() => setCurrentStepIdx(Math.max(0, currentStepIdx - 1))}
              disabled={currentStepIdx === 0}
              className="px-5 py-2.5 rounded-full border border-slate-700 text-xs font-mono-tech font-bold text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none flex items-center gap-2 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Step
            </button>

            {currentStepIdx < STEPS.length - 1 ? (
              <button
                onClick={() => setCurrentStepIdx(currentStepIdx + 1)}
                className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono-tech font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono-tech font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                Assembly Complete! <ShieldCheck className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
