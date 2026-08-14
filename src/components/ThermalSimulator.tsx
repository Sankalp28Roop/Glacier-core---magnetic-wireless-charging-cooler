import React, { useState } from 'react';
import { Flame, Snowflake, Zap, Activity, Play, RotateCcw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { GameBenchmark } from '../types';

const BENCHMARKS: GameBenchmark[] = [
  {
    id: 'genshin',
    name: 'Genshin Impact (Highest 60 FPS)',
    resolution: '1440p Native @ Ultra Settings',
    uncooledTemp: 48.6,
    uncooledFps: 34.2,
    cooledTemp: 21.8,
    cooledFps: 59.9,
    throttleRisk: 'CRITICAL',
  },
  {
    id: 'warzone',
    name: 'Warzone Mobile (Peak 120 FPS)',
    resolution: '120Hz Ray Traced Mobile',
    uncooledTemp: 49.8,
    uncooledFps: 68.4,
    cooledTemp: 23.4,
    cooledFps: 119.4,
    throttleRisk: 'CRITICAL',
  },
  {
    id: 'pubg',
    name: 'PUBG Mobile (90 FPS Extreme)',
    resolution: 'HDR 90Hz Competitive',
    uncooledTemp: 44.2,
    uncooledFps: 58.1,
    cooledTemp: 19.6,
    cooledFps: 89.8,
    throttleRisk: 'HIGH',
  },
  {
    id: 'video',
    name: '4K ProRes 60FPS Continuous Rec',
    resolution: 'Apple Log / 10-bit HDR Capture',
    uncooledTemp: 47.1,
    uncooledFps: 42.0,
    cooledTemp: 22.0,
    cooledFps: 60.0,
    throttleRisk: 'HIGH',
  },
];

export const ThermalSimulator: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameBenchmark>(BENCHMARKS[0]);
  const [glacierCoolerActive, setGlacierCoolerActive] = useState<boolean>(true);

  const currentTemp = glacierCoolerActive ? selectedGame.cooledTemp : selectedGame.uncooledTemp;
  const currentFps = glacierCoolerActive ? selectedGame.cooledFps : selectedGame.uncooledFps;
  const tempDelta = selectedGame.uncooledTemp - selectedGame.cooledTemp;

  return (
    <section id="thermal-sim" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050811] via-[#070d1c] to-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-cyan-400">
            LIVE PERFORMANCE LAB
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mt-2 mb-4">
            Zero Throttling. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">Sustained FPS.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Smartphones aggressively throttle GPU clock frequencies once SoC core temperatures breach 42°C.
            Toggle Glacier Core to experience sustained full-throttle performance.
          </p>
        </div>

        {/* Simulator Dashboard Container */}
        <div className="rounded-3xl p-1 bg-gradient-to-br from-cyan-500/30 via-slate-800 to-slate-900 shadow-2xl">
          <div className="rounded-[22px] bg-[#070e1d] border border-cyan-900/30 p-6 sm:p-10">
            
            {/* Top Game Selection Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
              <div className="flex flex-wrap gap-2">
                {BENCHMARKS.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => setSelectedGame(game)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono-tech transition-all cursor-pointer ${
                      selectedGame.id === game.id
                        ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {game.name.split(' (')[0]}
                  </button>
                ))}
              </div>

              {/* Glacier Core ON/OFF Toggle Switch */}
              <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 p-1.5 rounded-2xl">
                <span className="text-xs font-mono-tech font-bold text-slate-400 px-2">
                  GLACIER ACTIVE:
                </span>
                <button
                  onClick={() => setGlacierCoolerActive(!glacierCoolerActive)}
                  className={`px-4 py-1.5 rounded-xl font-mono-tech font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    glacierCoolerActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_20px_rgba(6,182,212,0.6)]'
                      : 'bg-rose-950/80 text-rose-300 border border-rose-800'
                  }`}
                >
                  {glacierCoolerActive ? (
                    <>
                      <Snowflake className="w-3.5 h-3.5 animate-spin-slow" />
                      ON (-{tempDelta.toFixed(1)}°C)
                    </>
                  ) : (
                    <>
                      <Flame className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
                      OFF (THROTTLED)
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Metrics HUD & Thermal Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Real-Time Gauges */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Temperature Gauge */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono-tech text-slate-400 uppercase">
                      PHONE BACKPLATE TEMP
                    </span>
                    <span className={`text-xs font-mono-tech font-bold px-2 py-0.5 rounded ${
                      glacierCoolerActive
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                        : 'bg-rose-950 text-rose-300 border border-rose-800'
                    }`}>
                      {glacierCoolerActive ? 'OPTIMAL CRYO' : 'OVERHEATING'}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className={`text-5xl sm:text-6xl font-extrabold font-mono-tech tracking-tight ${
                      glacierCoolerActive ? 'text-cyan-300' : 'text-rose-400'
                    }`}>
                      {currentTemp.toFixed(1)}°C
                    </span>
                    <span className="text-sm font-mono-tech text-slate-400">
                      / 15W Charging Load
                    </span>
                  </div>

                  {/* Progress Bar Gauge */}
                  <div className="w-full h-3 rounded-full bg-slate-950 mt-4 overflow-hidden border border-slate-800">
                    <div
                      className={`h-full transition-all duration-700 ${
                        glacierCoolerActive
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                          : 'bg-gradient-to-r from-amber-500 to-rose-600 shadow-[0_0_12px_rgba(244,63,94,0.8)]'
                      }`}
                      style={{ width: `${(currentTemp / 55) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono-tech text-slate-500 mt-1">
                    <span>15°C (Ice Cool)</span>
                    <span>38°C (Throttle Point)</span>
                    <span>50°C (Max Limit)</span>
                  </div>
                </div>

                {/* FPS Stability Gauge */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono-tech text-slate-400 uppercase">
                      FRAME RATE STABILITY
                    </span>
                    <span className={`text-xs font-mono-tech font-bold px-2 py-0.5 rounded ${
                      glacierCoolerActive
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                        : 'bg-rose-950 text-rose-300 border border-rose-800'
                    }`}>
                      {glacierCoolerActive ? '100% 1% LOWS' : '-46% FRAME DROPS'}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className={`text-5xl sm:text-6xl font-extrabold font-mono-tech tracking-tight ${
                      glacierCoolerActive ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {currentFps.toFixed(1)} <span className="text-2xl text-slate-400">FPS</span>
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    {glacierCoolerActive
                      ? '✓ GPU core clocks pinned to maximum boost clock. Zero thermal stutter.'
                      : '⚠ Severe thermal throttling active. Chipset down-clocked to prevent hardware damage.'}
                  </p>
                </div>

              </div>

              {/* Right Column: Comparative Visual Telemetry Box */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#091224] border border-cyan-500/30 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h4 className="font-heading font-bold text-white text-lg">
                    {selectedGame.name}
                  </h4>
                  <span className="text-xs font-mono-tech text-cyan-400">
                    {selectedGame.resolution}
                  </span>
                </div>

                {/* Side by side comparison bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono-tech mb-1.5">
                      <span className="text-slate-400">STOCK DEVICE (NO COOLER)</span>
                      <span className="text-rose-400 font-bold">{selectedGame.uncooledTemp}°C // {selectedGame.uncooledFps} FPS</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-950 overflow-hidden">
                      <div
                        className="h-full bg-rose-500"
                        style={{ width: `${(selectedGame.uncooledTemp / 55) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono-tech mb-1.5">
                      <span className="text-cyan-300 font-bold">WITH GLACIER CORE 15W</span>
                      <span className="text-cyan-400 font-bold">{selectedGame.cooledTemp}°C // {selectedGame.cooledFps} FPS</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-950 overflow-hidden border border-cyan-500/30">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-sky-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                        style={{ width: `${(selectedGame.cooledTemp / 55) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Key takeaway facts */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>+{tempDelta.toFixed(1)}°C Temperature Drop across entire chassis</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Maintains 15W peak Qi2 continuous fast charging throughput</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Preserves battery chemistry health by eliminating heat degradation</span>
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
