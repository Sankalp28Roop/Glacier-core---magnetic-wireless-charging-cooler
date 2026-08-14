import React from 'react';
import { Target, Layers, Zap, Wind, ShieldCheck, Compass } from 'lucide-react';

export const StealthFeatures: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050811] via-[#080e1e] to-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-indigo-400">
            FORM MEETS FUNCTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mt-2 mb-4">
            Engineered for Stealth
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every millimeter is optimized for ergonomics, zero acoustic distraction, and maximum thermal conductivity.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Precision Alignment */}
          <div className="group relative rounded-3xl p-1 bg-gradient-to-b from-slate-800/80 via-slate-900 to-[#070d1a] hover:from-cyan-500/40 transition-all duration-500 shadow-xl">
            <div className="rounded-[22px] bg-[#091022] border border-slate-800/80 p-8 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Top Visual: Magnetic Phone Render */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-slate-950 to-[#070e1c] border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden mb-8 group-hover:border-cyan-500/30 transition-colors">
                
                {/* Isometric Smartphone & Magnetic Puck Attachment */}
                <div className="relative transform -rotate-12 group-hover:-rotate-6 transition-transform duration-700 ease-out">
                  {/* Smartphone Body */}
                  <div className="w-48 sm:w-56 h-72 sm:h-80 rounded-3xl bg-slate-900 border-2 border-slate-700 shadow-2xl p-3 relative flex items-center justify-center">
                    {/* Camera Bump */}
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-slate-950 border border-slate-700/80 p-1.5 grid grid-cols-2 gap-1">
                      <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600"></div>
                      <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600"></div>
                      <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 col-span-2 mx-auto"></div>
                    </div>

                    {/* Glacier Core Precision Puck Snapped */}
                    <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border border-slate-700 bg-slate-900/90 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                          <Target className="w-7 h-7 animate-pulse text-cyan-300" />
                        </div>
                      </div>
                      
                      {/* Laser Alignment Crosshair */}
                      <div className="absolute inset-x-0 h-0.5 bg-cyan-400/30 pointer-events-none"></div>
                      <div className="absolute inset-y-0 w-0.5 bg-cyan-400/30 pointer-events-none"></div>
                    </div>

                    {/* Concentric Magnetic Ring */}
                    <div className="absolute w-40 h-40 rounded-full border-2 border-dashed border-cyan-400/30 animate-spin-slow"></div>
                  </div>
                </div>

                {/* Floating Qi2 Fast badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-tech font-bold flex items-center gap-1.5 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  15W QI2 INDUCTION
                </div>
              </div>

              {/* Bottom Card Content */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  Precision Alignment
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  15W MagSafe compatible array ensures maximum energy transfer with zero slip.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono-tech text-slate-400">
                  <span>MAGNETIC FORCE: 15.5N</span>
                  <span className="text-cyan-400 font-bold">COIL EFFICIENCY: 88.4%</span>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Ultra-Thin Profile */}
          <div className="group relative rounded-3xl p-1 bg-gradient-to-b from-slate-800/80 via-slate-900 to-[#070d1a] hover:from-indigo-500/40 transition-all duration-500 shadow-xl">
            <div className="rounded-[22px] bg-[#091022] border border-slate-800/80 p-8 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Top Visual: Side Profile Airflow View */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-slate-950 to-[#070e1c] border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden mb-8 group-hover:border-indigo-500/30 transition-colors">
                
                {/* Side-Profile Cross Section Graphic */}
                <div className="relative flex items-center">
                  
                  {/* Smartphone Edge */}
                  <div className="w-8 h-56 rounded-l-xl bg-slate-900 border-l-2 border-y-2 border-slate-700 shadow-2xl relative flex items-center justify-end">
                    <div className="w-1.5 h-12 bg-slate-700 rounded-l mr-0.5"></div>
                  </div>

                  {/* Glacier Core Slim Chassis Mounted */}
                  <div className="w-16 h-44 rounded-r-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#0e1830] border-y-2 border-r-2 border-cyan-500/50 relative flex items-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                    
                    {/* Internal Slim Fin Stack */}
                    <div className="w-full px-2 space-y-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-1 bg-slate-700/80 rounded"></div>
                      ))}
                    </div>

                    {/* Glowing Airflow Streaks exiting */}
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none">
                      <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full opacity-80 animate-pulse"></div>
                      <div className="w-20 h-1.5 bg-gradient-to-r from-sky-300 to-transparent rounded-full opacity-90"></div>
                      <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full opacity-70 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Measurement Caliper Marker: 16.5mm */}
                  <div className="absolute -bottom-6 left-6 right-2 flex flex-col items-center">
                    <div className="w-full h-px bg-cyan-400 flex items-center justify-between">
                      <span className="w-1 h-2 bg-cyan-400"></span>
                      <span className="w-1 h-2 bg-cyan-400"></span>
                    </div>
                    <span className="text-[10px] font-mono-tech text-cyan-300 mt-1 font-bold">
                      16.5mm ULTRA-SLIM
                    </span>
                  </div>
                </div>

                {/* Hydro-Dynamic Turbine Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono-tech font-bold flex items-center gap-1.5 shadow-md">
                  <Wind className="w-3.5 h-3.5 text-indigo-400" />
                  RADIAL EXHAUST
                </div>
              </div>

              {/* Bottom Card Content */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  Ultra-Thin Profile
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Designed to meld with your device. Maximum cooling capacity in a remarkably slim chassis.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono-tech text-slate-400">
                  <span>TOTAL WEIGHT: 64 GRAMS</span>
                  <span className="text-indigo-400 font-bold">ZERO FINGER INTERFERENCE</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
