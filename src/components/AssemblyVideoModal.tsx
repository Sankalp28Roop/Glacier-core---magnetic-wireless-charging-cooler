import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Check } from 'lucide-react';

interface AssemblyVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssemblyVideoModal: React.FC<AssemblyVideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [audioMuted, setAudioMuted] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1.2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentPhase =
    progress < 25
      ? 'PHASE 1: Magnetic Core & Polarizer Seating'
      : progress < 50
      ? 'PHASE 2: 15W Qi2 OFC Pure Copper Coil Attachment'
      : progress < 75
      ? 'PHASE 3: Phase-Change Graphene Interface Placement'
      : 'PHASE 4: 7,200 RPM Hydro-Dynamic Fan Locking & Calibration';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#070e1c] border border-cyan-900/50 shadow-[0_0_80px_rgba(6,182,212,0.3)] overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#081224]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Play className="w-4 h-4 fill-cyan-400 ml-0.5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">
                Glacier Core Assembly Walkthrough
              </h3>
              <p className="text-xs font-mono-tech text-cyan-400">
                INTERACTIVE 3D COMPONENT TIMELINE
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

        {/* Video / 3D Stage Simulation */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-[#050b18] via-[#09142b] to-[#040813] flex flex-col items-center justify-center overflow-hidden p-8">
          
          {/* Animated 3D Component Explode / Snap Cycle */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            
            {/* Outer Shroud */}
            <div
              className="absolute w-52 h-52 rounded-full border-4 border-slate-700 bg-slate-900/80 flex items-center justify-center transition-all duration-500 shadow-2xl"
              style={{
                transform: `scale(${progress > 75 ? 1 : 1.15}) rotate(${progress * 2}deg)`,
                opacity: progress > 15 ? 1 : 0.4,
              }}
            >
              {/* Fan Blades inside */}
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  transform: `rotate(${progress * 15}deg)`,
                  opacity: progress > 50 ? 1 : 0.2,
                }}
              >
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-14 h-3 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"
                    style={{
                      transformOrigin: 'center right',
                      transform: `rotate(${i * (360 / 7)}deg) translate(-10px, 0)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Glowing Copper Coil Layer */}
            <div
              className="absolute w-36 h-36 rounded-full border-4 border-amber-500 bg-amber-950/40 flex items-center justify-center transition-all duration-700 shadow-[0_0_25px_rgba(245,158,11,0.6)]"
              style={{
                transform: `scale(${progress > 40 ? 1 : 1.3})`,
                opacity: progress > 20 ? 1 : 0.2,
              }}
            >
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-300"></div>
            </div>

            {/* Center MagSafe Core */}
            <div className="relative z-20 w-16 h-16 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.8)]">
              <span className="text-cyan-400 font-bold text-lg">❄</span>
            </div>

            {/* Laser Caliper Crosshairs */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-full pointer-events-none animate-ping opacity-30"></div>
          </div>

          {/* Current Phase Floating Overlay */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-slate-950/85 border border-cyan-500/40 text-xs font-mono-tech text-cyan-300 font-bold shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {currentPhase}
          </div>

          {/* Audio toggle */}
          <button
            onClick={() => setAudioMuted(!audioMuted)}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>
        </div>

        {/* Video Controls & Timeline Bar */}
        <div className="p-6 bg-[#070e1c] border-t border-slate-800 space-y-4">
          
          {/* Progress Timeline */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono-tech text-slate-400">
              <span className="text-cyan-400 font-bold">ASSEMBLY TIMELINE: {progress.toFixed(0)}%</span>
              <span>TOTAL DURATION: 03:42</span>
            </div>
            <div
              className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 cursor-pointer overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setProgress((clickX / rect.width) * 100);
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Play/Pause & Reset Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
              </button>
              <button
                onClick={() => setProgress(0)}
                className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs font-mono-tech text-slate-400 hidden sm:block">
              PRECISION TOLERANCE: ±0.02mm CNC SPEC
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
