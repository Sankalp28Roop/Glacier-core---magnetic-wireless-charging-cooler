import React, { useState } from 'react';
import { Play, Sparkles, Zap, ShieldCheck, RefreshCw, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  onOpenBuy: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBuy, onOpenVideo }) => {
  const [fanSpeed, setFanSpeed] = useState<'idle' | 'turbo' | 'cryo'>('turbo');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'cooling' | 'power' | 'magsafe'>('cooling');

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Ambient Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:border-cyan-400 transition-colors cursor-default animate-float">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-cyan-400">❄</span> NEXT GEN COOLING TECH
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading leading-[1.08] mb-6">
          <span className="text-white block">Extreme Cooling.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
            Infinite Power.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-10">
          The DIY 15W magnetic wireless charging cooler designed for peak performance.
          Engineered to sustain absolute zero throttling during intense gaming sessions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={onOpenBuy}
            id="hero-cta-build"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            BUILD YOURS NOW
          </button>

          <button
            onClick={onOpenVideo}
            id="hero-cta-watch"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
              <Play className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400 ml-0.5" />
            </div>
            WATCH ASSEMBLY
          </button>
        </div>

        {/* Hero Visual Mockup - Dual Magnetic Pucks / Phone Chassis Rendering */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Visual Container */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/20 to-transparent shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
            <div className="relative rounded-[22px] bg-[#070d1a]/95 border border-cyan-900/30 overflow-hidden p-6 sm:p-10 flex flex-col items-center">
              
              {/* Top Telemetry Bar */}
              <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4 mb-8 text-xs font-mono-tech text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    STATUS: ACTIVE_CRYO
                  </span>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <span className="hidden sm:inline text-slate-400">DELTA: -18.4°C</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>15.0W Qi2 FAST</span>
                  </div>
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                    title={soundEnabled ? 'Fan Acoustic Muted' : 'Acoustic Sound Simulation'}
                  >
                    {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Graphic Phone + Dual Glacier Core Modules */}
              <div className="relative w-full max-w-lg aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center my-2">
                
                {/* Background Magnetic Aura & Particle Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`w-64 h-64 rounded-full border border-cyan-500/20 ${fanSpeed === 'cryo' ? 'animate-ping opacity-30' : 'animate-pulse opacity-20'}`}></div>
                  <div className="w-80 h-80 rounded-full border border-indigo-500/15 animate-spin-slow"></div>
                  <div className="absolute w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl"></div>
                </div>

                {/* Left/Back Ghost Phone Silhouette */}
                <div className="relative flex items-center justify-center">
                  
                  {/* Smartphone Back Plate */}
                  <div className="relative w-72 sm:w-80 h-44 sm:h-52 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 shadow-2xl p-3 flex items-center justify-center overflow-hidden">
                    {/* Camera Island Mockup */}
                    <div className="absolute top-3 left-3 w-14 h-14 rounded-xl bg-slate-950/80 border border-slate-700/50 p-1.5 flex flex-wrap gap-1">
                      <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700"></div>
                      <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700"></div>
                      <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700"></div>
                    </div>

                    {/* Magnetic Flux Circular Lines */}
                    <div className="w-36 h-36 rounded-full border border-dashed border-cyan-500/30 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full border border-cyan-400/20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-cyan-950/40 border border-cyan-500/40"></div>
                      </div>
                    </div>

                    {/* Glacier Core Cooler Puck Mounted */}
                    <div className="absolute z-20 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-slate-900 to-[#0b1324] border-2 border-cyan-500/60 shadow-[0_0_35px_rgba(6,182,212,0.5)] flex items-center justify-center">
                      {/* Outer Aluminum Fin Ring */}
                      <div className="absolute inset-1 rounded-full border border-slate-700 bg-[#070e1c] flex items-center justify-center overflow-hidden">
                        
                        {/* Radial Heatsink Fins simulation */}
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-full h-0.5 bg-cyan-900/30"
                            style={{ transform: `rotate(${i * 15}deg)` }}
                          ></div>
                        ))}

                        {/* Spinning 7-Blade Acoustic Fan */}
                        <div
                          className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                            fanSpeed === 'cryo'
                              ? 'animate-spin-fan-fast'
                              : fanSpeed === 'turbo'
                              ? 'animate-spin-fan'
                              : 'animate-spin-slow'
                          }`}
                        >
                          {/* 7 curved turbine blades */}
                          {[...Array(7)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-10 h-3 rounded-full bg-gradient-to-r from-cyan-400/80 via-sky-300 to-transparent shadow-sm"
                              style={{
                                transformOrigin: 'center right',
                                transform: `rotate(${i * (360 / 7)}deg) translate(-10px, 0px)`,
                              }}
                            ></div>
                          ))}

                          {/* Center Glacier Core Hub Badge */}
                          <div className="relative z-10 w-10 h-10 rounded-full bg-slate-950 border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)]">
                            <span className="text-cyan-400 text-xs font-black">❄</span>
                          </div>
                        </div>

                        {/* Cyan Airflow Glow */}
                        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
                      </div>

                      {/* MagSafe Snap Status Badge */}
                      <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-mono-tech font-extrabold uppercase shadow-md flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        15N MAG-LOCK
                      </div>
                    </div>

                    {/* Secondary Puck Ghost (Isometric Depth) */}
                    <div className="absolute -right-8 -top-4 w-28 h-28 rounded-full bg-slate-900/40 border border-slate-700/30 blur-[1px] pointer-events-none hidden md:block opacity-40">
                      <div className="w-full h-full rounded-full border border-cyan-500/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-slate-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive HUD Speed & Mode Controller */}
              <div className="w-full mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-mono-tech">TURBINE PRESET:</span>
                  <div className="inline-flex rounded-lg bg-slate-900 border border-slate-800 p-1">
                    {(['idle', 'turbo', 'cryo'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setFanSpeed(mode)}
                        className={`px-3 py-1 rounded-md font-mono-tech uppercase text-[11px] font-bold transition-all ${
                          fanSpeed === mode
                            ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {mode === 'idle' ? 'ECO 3200' : mode === 'turbo' ? 'TURBO 7200' : 'CRYO 9000'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Output Statistics */}
                <div className="flex items-center gap-6 font-mono-tech text-slate-300">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-500 uppercase">Acoustics</span>
                    <span className="text-cyan-400 font-semibold">
                      {fanSpeed === 'idle' ? '14.2 dBA (Silent)' : fanSpeed === 'turbo' ? '18.5 dBA (Whisper)' : '24.1 dBA (Max)'}
                    </span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-500 uppercase">Sustained FPS</span>
                    <span className="text-emerald-400 font-semibold">60.0 LOCKED (0% Drop)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
