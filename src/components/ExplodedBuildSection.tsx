import React, { useState } from 'react';
import { Sparkles, Check, ChevronRight, Layers, Wrench, Shield, Cpu } from 'lucide-react';
import { ComponentLayer } from '../types';

interface ExplodedBuildSectionProps {
  onOpenBuy: () => void;
  onOpenGuide: () => void;
}

const LAYERS: ComponentLayer[] = [
  {
    id: 'smartphone',
    calloutNumber: '00',
    name: 'SMARTPHONE',
    category: 'Target Host Device',
    material: 'MagSafe Compatible Device',
    description: 'Any Qi2 or MagSafe enabled smartphone (or any phone using the included universal ultra-thin magnetic ring adapter).',
    specs: 'Universal MagSafe / Qi2 Standard',
    color: 'from-slate-600 to-slate-400',
  },
  {
    id: 'magsafe-ring',
    calloutNumber: '01',
    name: 'MAGSAFE RING',
    category: 'Magnetic Coupling',
    material: 'N52 Neodymium Magnets',
    description: 'Array of 36 high-coercivity rare earth magnets shielded with anti-demagnetization steel backing plate.',
    specs: '15.5N Holding Force / 0.8mm Thickness',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'charging-coil',
    calloutNumber: '04',
    name: '15W CHARGING COIL',
    category: 'Inductive Transmitter',
    material: '15W Pure Oxygen-Free Copper (OFC)',
    description: 'Multi-strand Litz wire wound around a high-permeability ferrite core for 88.4% energy transfer efficiency.',
    specs: 'Qi2 15W Fast Charge / 110-205 kHz',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'thermal-pad',
    calloutNumber: '03',
    name: 'INTERNAL THERMAL PAD',
    category: 'Interface Material',
    material: 'Phase-Change Synthetic Graphene',
    description: 'Directly bridges the Qi2 coil thermal plane to the aluminum heatsink fin stack with zero air pockets.',
    specs: '12.8 W/mK Thermal Conductivity',
    color: 'from-sky-400 to-cyan-600',
  },
  {
    id: 'cooling-fan',
    calloutNumber: '02',
    name: 'HIGH-SPEED COOLING FAN',
    category: 'Active Convection',
    material: 'Acoustic Hydro-Dynamic Turbine',
    description: '7-blade precision aerodynamic impeller driven by a low-vibration 3-phase brushless motor.',
    specs: '7,200 RPM / 16.8 dBA Acoustic Profile',
    color: 'from-cyan-400 to-indigo-600',
  },
  {
    id: 'main-housing',
    calloutNumber: '01',
    name: 'MAIN HOUSING',
    category: 'Chassis & Enclosure',
    material: 'Aerospace 6061 Anodized Aluminum',
    description: 'Single-block CNC milled structural chassis designed with dual exhaust vector ducts and integrated heat spreader.',
    specs: '6061-T6 Aluminum / Type III Hard Anodize',
    color: 'from-slate-700 to-slate-900',
  },
  {
    id: 'rear-ventilation',
    calloutNumber: '05',
    name: 'REAR VENTILATION',
    category: 'Intake Filtration',
    material: 'Laser-Etched Hexagonal Steel Mesh',
    description: 'Protective acoustic filter grille engineered for maximum volumetric airflow intake while preventing dust ingress.',
    specs: '84% Open Area Porosity / Anti-Dust Mesh',
    color: 'from-slate-800 to-slate-950',
  },
];

export const ExplodedBuildSection: React.FC<ExplodedBuildSectionProps> = ({
  onOpenBuy,
  onOpenGuide,
}) => {
  const [selectedLayer, setSelectedLayer] = useState<ComponentLayer | null>(LAYERS[2]);
  const [explodedMode, setExplodedMode] = useState<boolean>(true);

  return (
    <section id="diy-guide" className="py-24 relative overflow-hidden">
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Build It <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Better.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            We provide the highest grade components. You put together the ultimate charging cooler.
            Complete transparency in engineering.
          </p>
        </div>

        {/* Blueprint Exploded Diagram Container */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800 to-slate-950 shadow-2xl mb-12">
          <div className="rounded-[22px] bg-[#070e1c] border border-cyan-900/30 p-6 sm:p-10">
            
            {/* Header Banner on Diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wide">
                  DIY Magnetic Wireless Charging Cooler
                </h3>
                <span className="text-xs font-mono-tech text-cyan-400">
                  SCHEMATIC REV 3.4 // EXPLODED COMPONENT HIERARCHY
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setExplodedMode(!explodedMode)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono-tech text-cyan-300 hover:border-cyan-400 transition-colors cursor-pointer"
                >
                  VIEW: {explodedMode ? 'EXPLODED ASSEMBLY' : 'COMPACT PACK'}
                </button>
                <button
                  onClick={onOpenGuide}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono-tech text-cyan-300 hover:bg-cyan-900 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  GUIDE
                </button>
              </div>
            </div>

            {/* Interactive Exploded View Stage */}
            <div className="relative w-full py-8 px-2 overflow-x-auto">
              <div className="min-w-[760px] flex items-center justify-between gap-3 relative py-4">
                
                {/* Connecting Laser Guide Line */}
                <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-slate-700 via-cyan-500/50 to-slate-700 -translate-y-1/2 pointer-events-none -z-0"></div>

                {LAYERS.map((layer, index) => {
                  const isSelected = selectedLayer?.id === layer.id;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setSelectedLayer(layer)}
                      className={`relative z-10 flex flex-col items-center cursor-pointer transition-all duration-300 group ${
                        isSelected ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'
                      }`}
                    >
                      {/* Component Visual Representation Box */}
                      <div
                        className={`w-24 h-36 sm:w-28 sm:h-44 rounded-2xl p-2.5 flex flex-col items-center justify-center transition-all duration-300 relative border ${
                          isSelected
                            ? 'bg-[#0a162e] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)]'
                            : 'bg-slate-900/90 border-slate-700 group-hover:border-cyan-500/50'
                        }`}
                      >
                        {/* Layer Specific Vector Art */}
                        {layer.id === 'smartphone' && (
                          <div className="w-16 h-28 rounded-xl border border-slate-500 bg-slate-800/60 flex flex-col items-center justify-between p-1.5">
                            <div className="w-6 h-1 bg-slate-600 rounded-full"></div>
                            <div className="w-8 h-8 rounded-full border border-dashed border-cyan-400/40 flex items-center justify-center">
                              <span className="text-[8px] text-cyan-400">Qi</span>
                            </div>
                            <div className="w-4 h-0.5 bg-slate-600 rounded-full"></div>
                          </div>
                        )}

                        {layer.id === 'magsafe-ring' && (
                          <div className="w-16 h-16 rounded-full border-4 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] flex items-center justify-center animate-pulse">
                            <div className="w-10 h-10 rounded-full border border-dashed border-cyan-300"></div>
                          </div>
                        )}

                        {layer.id === 'charging-coil' && (
                          <div className="w-16 h-16 rounded-full border-4 border-amber-500 bg-amber-950/40 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full border-2 border-amber-300 bg-amber-500/20"></div>
                          </div>
                        )}

                        {layer.id === 'thermal-pad' && (
                          <div className="w-14 h-24 rounded-lg bg-sky-500/30 border-2 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center justify-center">
                            <span className="text-[9px] font-mono-tech text-sky-200 font-bold -rotate-90 whitespace-nowrap">
                              GRAPHENE
                            </span>
                          </div>
                        )}

                        {layer.id === 'cooling-fan' && (
                          <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center animate-spin-fan">
                            {[...Array(7)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-6 h-1.5 bg-cyan-300 rounded-full"
                                style={{
                                  transform: `rotate(${i * (360 / 7)}deg) translate(6px, 0)`,
                                }}
                              ></div>
                            ))}
                            <div className="w-4 h-4 rounded-full bg-slate-900 border border-cyan-400 z-10"></div>
                          </div>
                        )}

                        {layer.id === 'main-housing' && (
                          <div className="w-16 h-24 rounded-xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-cyan-500/60 flex flex-col justify-between p-1.5">
                            <div className="w-full h-1 bg-cyan-400 rounded-full"></div>
                            <div className="w-10 h-10 mx-auto rounded-full border border-slate-600 bg-slate-950"></div>
                            <div className="w-full h-1 bg-cyan-400 rounded-full"></div>
                          </div>
                        )}

                        {layer.id === 'rear-ventilation' && (
                          <div className="w-14 h-24 rounded-xl bg-slate-950 border-2 border-slate-700 p-1 flex flex-col justify-center gap-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="w-full h-1 bg-cyan-900/50 rounded-sm"></div>
                            ))}
                          </div>
                        )}

                        {/* Top Indicator Arrow & Callout */}
                        <div className="absolute -top-3 w-5 h-5 rounded-full bg-slate-900 border border-cyan-500 text-[10px] font-mono-tech font-bold text-cyan-300 flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>

                      {/* Label Text Below */}
                      <div className="text-center mt-3 max-w-[100px]">
                        <span className="text-[11px] font-mono-tech font-bold text-slate-300 block leading-tight group-hover:text-cyan-300">
                          {layer.name}
                        </span>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Selected Component Detail Drawer */}
            {selectedLayer && (
              <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#091224] border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-in fade-in duration-300">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-xs font-mono-tech font-bold border border-cyan-500/40">
                      PART #{selectedLayer.calloutNumber}
                    </span>
                    <span className="text-xs font-mono-tech text-slate-400 uppercase">
                      {selectedLayer.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold font-heading text-white">
                    {selectedLayer.name} — <span className="text-cyan-300">{selectedLayer.material}</span>
                  </h4>
                  <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                    {selectedLayer.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
                  <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-tech">
                    <span className="text-slate-500 block text-[10px]">SPECIFICATION</span>
                    <span className="text-emerald-400 font-bold">{selectedLayer.specs}</span>
                  </div>
                  <button
                    onClick={onOpenGuide}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-1.5 cursor-pointer"
                  >
                    Assembly Guide <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* 4 Numbered Component Spec Blocks (from the image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              num: '01',
              title: 'MAIN HOUSING',
              subtitle: 'Aerospace aluminum',
              desc: 'CNC-milled 6061 alloy with structural thermal conductivity channels and anodized stealth finish.',
            },
            {
              num: '02',
              title: 'COOLING FAN',
              subtitle: 'High-speed magnetic',
              desc: '7,200 RPM hydro-dynamic fluid bearing for whisper-quiet heat exhaust and long service life.',
            },
            {
              num: '03',
              title: 'THERMAL PAD',
              subtitle: 'High conductivity',
              desc: '12.8 W/mK phase-change synthetic graphene pad for zero thermal impedance transfer.',
            },
            {
              num: '04',
              title: 'CHARGING COIL',
              subtitle: '15W Pure Copper',
              desc: 'Multi-filament OFC pure copper induction transmitter compatible with Qi2 & MagSafe.',
            },
          ].map((block) => (
            <div
              key={block.num}
              className="group p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#070e1c] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
            >
              <span className="text-3xl font-extrabold font-mono-tech text-cyan-400/60 group-hover:text-cyan-300 transition-colors block mb-2">
                {block.num}
              </span>
              <h3 className="text-base font-bold font-heading text-white tracking-wide uppercase">
                {block.title}
              </h3>
              <p className="text-xs font-mono-tech text-cyan-400 font-semibold mb-2">
                {block.subtitle}
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                {block.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Big Glowing START YOUR BUILD Button */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* Pulsing Outer Glow Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
            
            <button
              onClick={onOpenBuy}
              id="cta-start-your-build"
              className="relative px-10 py-4 rounded-full font-extrabold text-sm sm:text-base tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 text-slate-950 shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:shadow-[0_0_55px_rgba(6,182,212,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              START YOUR BUILD
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
