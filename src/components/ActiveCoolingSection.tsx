import React, { useState } from 'react';
import { Flame, Snowflake, Cpu, Zap, Activity, Gauge, RefreshCw } from 'lucide-react';

export const ActiveCoolingSection: React.FC = () => {
  const [activeTempMode, setActiveTempMode] = useState<'cryo' | 'turbo' | 'idle'>('cryo');
  const [fanRpm, setFanRpm] = useState<number>(7200);

  const deltaTemp = activeTempMode === 'cryo' ? -18.2 : activeTempMode === 'turbo' ? -14.5 : -8.0;

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Telemetry Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-800/80 gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono-tech font-bold tracking-widest uppercase mb-3">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              ACTIVE COOLING ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              The Science of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Absolute Zero.
              </span>
            </h2>
          </div>

          {/* Right Live Telemetry Badge */}
          <div className="flex items-center gap-4">
            <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase">TELEMETRY DELTA</span>
                <span className="text-sm sm:text-base font-mono-tech text-cyan-300 font-bold tracking-wider">
                  SYS.TEMP: // {deltaTemp > 0 ? `+${deltaTemp}` : `${deltaTemp}`}°C DELTA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Card Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Large Card: Cutaway [ THERMAL PATHWAY ] */}
          <div className="lg:col-span-7 rounded-3xl p-1 bg-gradient-to-br from-slate-700/50 via-slate-900 to-[#070e1c] shadow-2xl">
            <div className="rounded-[22px] bg-[#070e1d] border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-tech font-bold uppercase tracking-wider">
                  [ THERMAL PATHWAY ]
                </span>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>HEAT FLUX: DIRECT CONTACT</span>
                </div>
              </div>

              {/* 3D Cutaway Vector Render Simulation */}
              <div className="relative w-full h-64 sm:h-80 my-4 rounded-2xl bg-gradient-to-r from-[#0a1224] to-[#060c18] border border-slate-800 p-6 flex items-center justify-center overflow-hidden">
                
                {/* Cross-Section Graphic */}
                <div className="relative flex items-center scale-95 sm:scale-100">
                  
                  {/* Smartphone Back Edge */}
                  <div className="relative w-28 sm:w-36 h-48 sm:h-56 rounded-2xl bg-slate-900 border-2 border-slate-700 shadow-xl flex items-center justify-center p-2">
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase -rotate-90">
                      DEVICE BACK
                    </span>
                  </div>

                  {/* Pure Copper Charging Coil */}
                  <div className="relative -ml-4 z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-amber-600/90 bg-amber-950/60 shadow-[0_0_25px_rgba(217,119,6,0.5)] flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-amber-400 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-300"></div>
                    </div>
                    {/* Floating Callout: Pure Copper */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-amber-950 border border-amber-500/50 text-amber-300 text-[9px] font-mono-tech whitespace-nowrap font-bold shadow-md">
                      15W OFC COIL
                    </div>
                  </div>

                  {/* Aluminum Micro-Fin Heatsink */}
                  <div className="relative -ml-6 z-20 w-24 sm:w-32 h-36 sm:h-44 rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 border-2 border-cyan-500/40 p-2 shadow-2xl flex flex-col justify-center gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="h-1.5 w-full bg-slate-600 rounded-sm"></div>
                    ))}
                    {/* Floating Callout: Heatsink */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-[9px] font-mono-tech whitespace-nowrap font-bold shadow-md">
                      6061 FIN STACK
                    </div>
                  </div>

                  {/* Outer Cyber Housing & Active Airflow Vents */}
                  <div className="relative -ml-4 z-30 w-24 sm:w-28 h-40 sm:h-48 rounded-r-2xl bg-gradient-to-r from-cyan-950 via-slate-900 to-[#07132c] border-y-2 border-r-2 border-cyan-400 p-3 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex flex-col justify-between">
                    
                    {/* Airflow Vents with dynamic blue glow streams */}
                    <div className="flex flex-col gap-2 my-auto">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="relative flex items-center">
                          <div className="w-8 h-2 bg-cyan-500/30 rounded border border-cyan-400/50"></div>
                          {/* Animated Air streak */}
                          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full ml-1 animate-pulse"></div>
                        </div>
                      ))}
                    </div>

                    <span className="text-[9px] font-mono-tech text-cyan-300 text-center font-bold">
                      VENT OUTLET
                    </span>
                  </div>

                </div>

              </div>

              {/* Bottom Spec Details */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs font-mono-tech">
                <div>
                  <span className="text-slate-500 block">THERMAL PAD</span>
                  <span className="text-cyan-300 font-bold">12.8 W/mK</span>
                </div>
                <div>
                  <span className="text-slate-500 block">FIN SURFACE</span>
                  <span className="text-white font-bold">4,820 mm²</span>
                </div>
                <div>
                  <span className="text-slate-500 block">HEAT CAPACITY</span>
                  <span className="text-emerald-400 font-bold">25W MAX LOAD</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Card: 7-Blade Turbine Fan */}
          <div className="lg:col-span-5 rounded-3xl p-1 bg-gradient-to-br from-slate-700/50 via-slate-900 to-[#070e1c] shadow-2xl">
            <div className="rounded-[22px] bg-[#070e1d] border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Fan Graphic View */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-[#070e1c] to-slate-950 border border-slate-800 p-6 flex flex-col items-center justify-center overflow-hidden">
                
                {/* Circular Fan Housing */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-slate-900 border-4 border-slate-700 shadow-[0_0_35px_rgba(6,182,212,0.3)] flex items-center justify-center">
                  
                  {/* Outer Bearing Ring */}
                  <div className="absolute inset-1 rounded-full border border-cyan-500/30"></div>

                  {/* 7-Blade Spinning Rotor */}
                  <div
                    className="relative w-28 h-28 rounded-full flex items-center justify-center animate-spin-fan"
                    style={{ animationDuration: `${(10000 / fanRpm) * 0.3}s` }}
                  >
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-12 h-3.5 rounded-full bg-gradient-to-r from-slate-200 via-cyan-300 to-transparent shadow-sm"
                        style={{
                          transformOrigin: 'center right',
                          transform: `rotate(${i * (360 / 7)}deg) translate(-12px, 0px)`,
                        }}
                      ></div>
                    ))}

                    {/* Center Core Cap */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg">
                      <Snowflake className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* RPM Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/50 text-cyan-300 font-mono-tech text-xs font-bold shadow-md">
                  {fanRpm} RPM
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold font-heading text-white">
                    7-Blade Exhaust
                  </h3>
                  <span className="text-xs font-mono-tech text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                    HYDRO-DYNAMIC
                  </span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Acoustically tuned hydro-dynamic bearing fan silently dissipates extreme heat loads generated during max-wattage charging.
                </p>
              </div>

              {/* Interactive RPM Slider */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                  <span className="text-slate-400">RPM SPEED DIAL</span>
                  <span className="text-cyan-400 font-bold">{fanRpm} RPM // {(fanRpm / 60).toFixed(0)} Hz</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="9500"
                  step="500"
                  value={fanRpm}
                  onChange={(e) => setFanRpm(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
