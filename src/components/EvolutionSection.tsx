import React, { useState } from 'react';
import { Check, X as XIcon, ShieldAlert, Sparkles, Magnet } from 'lucide-react';

export const EvolutionSection: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'both' | 'legacy' | 'magnetic'>('both');

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Comparison Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-slate-700/40 via-cyan-900/20 to-slate-900/80 shadow-2xl">
              <div className="rounded-[22px] bg-[#070e1c] border border-slate-800/80 p-6 sm:p-8">
                
                {/* Visual Header / Switcher */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    <span className="text-xs font-mono-tech text-slate-300 font-bold uppercase">EVOLUTION STUDY // 01</span>
                  </div>
                  <div className="inline-flex rounded-lg bg-slate-900 border border-slate-800 p-1 text-[11px] font-mono-tech">
                    <button
                      onClick={() => setSelectedView('both')}
                      className={`px-2.5 py-1 rounded transition-colors ${selectedView === 'both' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400'}`}
                    >
                      SIDE-BY-SIDE
                    </button>
                    <button
                      onClick={() => setSelectedView('legacy')}
                      className={`px-2.5 py-1 rounded transition-colors ${selectedView === 'legacy' ? 'bg-rose-950/80 text-rose-300 font-bold' : 'text-slate-400'}`}
                    >
                      LEGACY
                    </button>
                    <button
                      onClick={() => setSelectedView('magnetic')}
                      className={`px-2.5 py-1 rounded transition-colors ${selectedView === 'magnetic' ? 'bg-cyan-950/80 text-cyan-300 font-bold' : 'text-slate-400'}`}
                    >
                      MAGNETIC
                    </button>
                  </div>
                </div>

                {/* Comparison Graphic Mockups */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                  
                  {/* Legacy Clamp Card */}
                  {(selectedView === 'both' || selectedView === 'legacy') && (
                    <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-rose-900/30 p-5 flex flex-col items-center text-center">
                      <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/40">
                        [ OLD CLIP-STYLE HOLDER ]
                      </div>

                      {/* Schematic Graphic: Clamp Phone */}
                      <div className="w-full h-40 mt-6 flex items-center justify-center relative">
                        {/* Clamped Smartphone Wireframe */}
                        <div className="w-28 h-36 rounded-xl border border-slate-700 bg-slate-900/80 relative flex items-center justify-center">
                          {/* Clamping Arms blocking sides */}
                          <div className="absolute -left-3 top-10 w-4 h-16 bg-rose-900/80 border border-rose-600/60 rounded-l flex items-center justify-center shadow-lg">
                            <ShieldAlert className="w-3 h-3 text-rose-300" />
                          </div>
                          <div className="absolute -right-3 top-10 w-4 h-16 bg-rose-900/80 border border-rose-600/60 rounded-r flex items-center justify-center shadow-lg">
                            <ShieldAlert className="w-3 h-3 text-rose-300" />
                          </div>
                          
                          {/* Obstructed Screen Mark */}
                          <div className="text-[10px] font-mono-tech text-rose-400/90 px-1 font-bold">
                            BUTTONS PINCHED
                          </div>
                        </div>

                        {/* Bulky Arrow / Callout */}
                        <div className="absolute bottom-1 right-2 text-[9px] font-mono-tech text-rose-400/80 bg-slate-950/90 px-2 py-1 rounded border border-rose-900/40">
                          BULKY, COMPLICATED
                        </div>
                      </div>

                      {/* Legacy Pill Tag */}
                      <div className="w-full mt-4 pt-3 border-t border-slate-800/80">
                        <span className="inline-block w-full py-1.5 rounded-lg bg-slate-900 text-rose-300 font-mono-tech text-xs font-bold border border-rose-900/30">
                          LEGACY CLIP
                        </span>
                        <ul className="text-left text-[11px] text-slate-400 space-y-1.5 mt-3">
                          <li className="flex items-center gap-1.5 text-rose-400">
                            <XIcon className="w-3 h-3 flex-shrink-0" /> Blocks side trigger buttons
                          </li>
                          <li className="flex items-center gap-1.5 text-rose-400">
                            <XIcon className="w-3 h-3 flex-shrink-0" /> Scratches phone chassis
                          </li>
                          <li className="flex items-center gap-1.5 text-rose-400">
                            <XIcon className="w-3 h-3 flex-shrink-0" /> Restricts natural landscape grip
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Glacier Magnetic Mount Card */}
                  {(selectedView === 'both' || selectedView === 'magnetic') && (
                    <div className="relative rounded-2xl bg-gradient-to-b from-[#0a1428] to-[#060c18] border border-cyan-500/40 p-5 flex flex-col items-center text-center shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                      <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-cyan-300 font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                        [ NEW MAGNETIC MOUNT ]
                      </div>

                      {/* Schematic Graphic: Magnetic Snap */}
                      <div className="w-full h-40 mt-6 flex items-center justify-center relative">
                        {/* Free Smartphone Back */}
                        <div className="w-28 h-36 rounded-xl border border-cyan-500/30 bg-slate-900/90 relative flex items-center justify-center shadow-lg">
                          
                          {/* Centered Magnetic Puck */}
                          <div className="w-16 h-16 rounded-full bg-cyan-950/80 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center animate-pulse">
                            <Magnet className="w-6 h-6 text-cyan-300" />
                          </div>

                          {/* Concentric Magnetic Ring */}
                          <div className="absolute w-20 h-20 rounded-full border border-dashed border-cyan-400/40"></div>
                        </div>

                        {/* Clean Arrow / Callout */}
                        <div className="absolute bottom-1 right-2 text-[9px] font-mono-tech text-cyan-300 bg-slate-950/90 px-2 py-1 rounded border border-cyan-500/40 shadow-sm">
                          CLEAN, EFFORTLESS
                        </div>
                      </div>

                      {/* Magnetic Mount Pill Tag */}
                      <div className="w-full mt-4 pt-3 border-t border-slate-800/80">
                        <span className="inline-block w-full py-1.5 rounded-lg bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-cyan-200 font-mono-tech text-xs font-bold border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                          MAGNETIC MOUNT
                        </span>
                        <ul className="text-left text-[11px] text-slate-300 space-y-1.5 mt-3">
                          <li className="flex items-center gap-1.5 text-cyan-300">
                            <Check className="w-3 h-3 flex-shrink-0 text-cyan-400" /> Zero screen or button contact
                          </li>
                          <li className="flex items-center gap-1.5 text-cyan-300">
                            <Check className="w-3 h-3 flex-shrink-0 text-cyan-400" /> Snap-and-play in 0.1 seconds
                          </li>
                          <li className="flex items-center gap-1.5 text-cyan-300">
                            <Check className="w-3 h-3 flex-shrink-0 text-cyan-400" /> Full 360° rotational orientation
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copy & Benefits */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            {/* Tagline */}
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono-tech font-bold tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              THE EVOLUTION
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ditch the Bulk.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">
                Embrace the Magnet.
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Say goodbye to clumsy, spring-loaded clips that block your screen and scratch your device.
              The Glacier Core utilizes a seamless magnetic interface, snapping perfectly into alignment
              for immediate charging and cooling.
            </p>

            {/* Checkpoints with glowing icons */}
            <div className="space-y-4 pt-2">
              {[
                {
                  title: 'Instant perfect alignment',
                  desc: 'Precision N52 neodymium magnetic ring snaps straight to your phone inductive center with zero micro-fidgeting.',
                },
                {
                  title: 'Zero screen obstruction',
                  desc: 'No clamps, no brackets, and no screen bezel encroachment. Enjoy full palm freedom for 4-finger claw grip gaming.',
                },
                {
                  title: 'Aerospace-grade neodymium holding power',
                  desc: 'Over 15.5 Newtons of magnetic shear resistance keeps the cooler firmly locked during rapid swipes and motion controls.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400 group-hover:text-black transition-colors shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                    <Check className="w-3 h-3 text-cyan-300 group-hover:text-black transition-colors stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-0.5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
