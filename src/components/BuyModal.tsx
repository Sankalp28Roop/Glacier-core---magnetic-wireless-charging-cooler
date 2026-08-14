import React, { useState } from 'react';
import { X, Check, Sparkles, ShoppingBag, Shield, ArrowRight, Truck, RefreshCw, Cpu, Layers } from 'lucide-react';
import { KitOption, ColorFinish } from '../types';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: any) => void;
}

const KITS: KitOption[] = [
  {
    id: 'diy-kit',
    name: 'Glacier Core DIY Kit',
    subtitle: 'For Makers & Hardware Enthusiasts',
    price: 49,
    badge: 'MOST POPULAR',
    popular: true,
    description: 'Complete set of precision CNC parts, 15W Qi2 coil, 7200 RPM turbine fan, graphene pads, magnetic ring, and mini hex assembly tool.',
    features: [
      'Raw CNC 6061 Aluminum Housing',
      '15W OFC Pure Copper Qi2 Coil PCB',
      '7-Blade Hydro-Dynamic Turbine Fan',
      '12.8 W/mK Graphene Thermal Interface',
      'N52 Neodymium MagSafe Ring Array',
      'Precision Hex Screwdriver & Thermal Grease',
      'Step-by-Step Interactive Assembly Blueprint',
    ],
  },
  {
    id: 'assembled-pro',
    name: 'Glacier Core Factory Assembled',
    subtitle: 'Plug & Play Peak Performance',
    price: 69,
    description: 'Fully calibrated, acoustically balanced, and bench-tested at the factory. Ready to snap and game right out of the box.',
    features: [
      '100% Factory Assembled & Dynamically Balanced',
      'Includes 1.5m 90° Braided Cyber USB-C Cable (60W)',
      'Pre-Applied Phase-Change Thermal Interface',
      'Zero Vibration Acoustic Calibration',
      '2-Year Full Hardware Replacement Warranty',
    ],
  },
  {
    id: 'cryo-limited',
    name: 'Glacier Core Cryo Edition',
    subtitle: 'Limited Anodized Titanium Run',
    price: 89,
    badge: 'COLLECTOR ED.',
    description: 'Grade 5 Titanium finish with addressable Aura RGB ring, laser-serialized chassis number, and carbon-fiber hard carry case.',
    features: [
      'Grade 5 Titanium Bezel & Laser Numbering',
      'Addressable Cryo Cyan / RGB LED Ring',
      'Custom Pelican-Style Shockproof Hardcase',
      '2x Additional Graphene Replacement Pads',
      '1.5m Gold-Plated Braided USB-C 90° Cable',
      'VIP Discord Engineering Access',
    ],
  },
];

const FINISHES: ColorFinish[] = [
  {
    id: 'obsidian',
    name: 'Stealth Obsidian',
    hex: '#0f172a',
    borderHex: '#334155',
    previewClass: 'bg-slate-900 border-slate-700',
  },
  {
    id: 'cyber-cyan',
    name: 'Frost Cyber Cyan',
    hex: '#06b6d4',
    borderHex: '#22d3ee',
    previewClass: 'bg-cyan-950 border-cyan-400',
  },
  {
    id: 'gunmetal',
    name: 'Titanium Gunmetal',
    hex: '#475569',
    borderHex: '#94a3b8',
    previewClass: 'bg-slate-800 border-slate-500',
  },
];

export const BuyModal: React.FC<BuyModalProps> = ({ isOpen, onClose, onAddToCart }) => {
  const [selectedKit, setSelectedKit] = useState<KitOption>(KITS[0]);
  const [selectedFinish, setSelectedFinish] = useState<ColorFinish>(FINISHES[0]);
  const [addExtraRings, setAddExtraRings] = useState<boolean>(false);
  const [addKickstand, setAddKickstand] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const calculateTotal = () => {
    let total = selectedKit.price;
    if (addExtraRings) total += 9;
    if (addKickstand) total += 14;
    return total;
  };

  const handleCheckout = () => {
    onAddToCart({
      kit: selectedKit.name,
      finish: selectedFinish.name,
      price: calculateTotal(),
      accessories: [
        ...(addExtraRings ? ['2x Extra MagSafe Rings'] : []),
        ...(addKickstand ? ['Magnetic Foldable Kickstand'] : []),
      ],
    });
    setOrderComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#070e1c] border border-cyan-900/50 shadow-[0_0_80px_rgba(6,182,212,0.3)] overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:px-8 border-b border-slate-800 bg-[#081224]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                Customize Your Glacier Core
              </h3>
              <p className="text-xs font-mono-tech text-slate-400">
                SELECT HARDWARE CONFIGURATION & FINISH
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

        {orderComplete ? (
          /* Order Confirmation View */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mx-auto text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.6)]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono-tech text-cyan-400 uppercase font-bold tracking-widest">
                ORDER RESERVATION CONFIRMED // #GLC-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Your Glacier Core Is Being Prepared
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you for supporting open-hardware engineering. Your kit will ship in stealth packaging with tracked priority air freight.
              </p>
            </div>

            <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs font-mono-tech space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>Selected Edition:</span>
                <span className="text-white font-bold">{selectedKit.name}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Chassis Anodize:</span>
                <span className="text-cyan-300 font-bold">{selectedFinish.name}</span>
              </div>
              <div className="flex justify-between text-slate-400 border-t border-slate-800 pt-2">
                <span>Total Amount:</span>
                <span className="text-emerald-400 font-bold text-sm">${calculateTotal()}.00 USD</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Customization & Checkout Step */
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            
            {/* Step 1: Select Kit Tier */}
            <div>
              <label className="text-xs font-mono-tech font-bold text-slate-400 uppercase tracking-wider block mb-3">
                1. Select Hardware Edition
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {KITS.map((kit) => {
                  const isSelected = selectedKit.id === kit.id;
                  return (
                    <div
                      key={kit.id}
                      onClick={() => setSelectedKit(kit)}
                      className={`relative rounded-2xl p-5 border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#0b1730] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.35)]'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {kit.badge && (
                        <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-mono-tech text-[9px] font-extrabold uppercase shadow-sm">
                          {kit.badge}
                        </div>
                      )}
                      <div>
                        <h4 className="text-base font-bold font-heading text-white">
                          {kit.name}
                        </h4>
                        <span className="text-[11px] font-mono-tech text-cyan-400 block mt-0.5 mb-2">
                          {kit.subtitle}
                        </span>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                          {kit.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-baseline gap-1 pt-3 border-t border-slate-800">
                          <span className="text-2xl font-extrabold font-mono-tech text-white">
                            ${kit.price}
                          </span>
                          <span className="text-xs text-slate-400">USD</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Finish */}
            <div>
              <label className="text-xs font-mono-tech font-bold text-slate-400 uppercase tracking-wider block mb-3">
                2. Select Aluminum Anodized Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FINISHES.map((finish) => {
                  const isSelected = selectedFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0d1c38] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className="w-5 h-5 rounded-full border-2 shadow-inner"
                        style={{ backgroundColor: finish.hex, borderColor: finish.borderHex }}
                      ></div>
                      <span className="text-xs font-mono-tech font-bold text-slate-200">
                        {finish.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Accessories */}
            <div>
              <label className="text-xs font-mono-tech font-bold text-slate-400 uppercase tracking-wider block mb-3">
                3. Optional Add-ons & Spares
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                  addExtraRings ? 'bg-cyan-950/40 border-cyan-500/40' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addExtraRings}
                      onChange={(e) => setAddExtraRings(e.target.checked)}
                      className="rounded accent-cyan-400 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <span className="text-white font-semibold block">2x Universal Ultra-Thin MagSafe Rings</span>
                      <span className="text-slate-400 text-[11px]">Attach to Android or non-MagSafe phone cases</span>
                    </div>
                  </div>
                  <span className="font-mono-tech text-cyan-300 font-bold">+$9</span>
                </label>

                <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                  addKickstand ? 'bg-cyan-950/40 border-cyan-500/40' : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addKickstand}
                      onChange={(e) => setAddKickstand(e.target.checked)}
                      className="rounded accent-cyan-400 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <span className="text-white font-semibold block">CNC Aluminum Kickstand Leg</span>
                      <span className="text-slate-400 text-[11px]">Propps phone at 65° for controller gaming</span>
                    </div>
                  </div>
                  <span className="font-mono-tech text-cyan-300 font-bold">+$14</span>
                </label>
              </div>
            </div>

            {/* Order Summary & Checkout Action */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">
                    TOTAL WITH WORLDWIDE SHIPPING
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black font-mono-tech text-white">
                      ${calculateTotal()}.00
                    </span>
                    <span className="text-xs font-mono-tech text-emerald-400 font-bold">
                      FREE EXPRESS FREIGHT
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-bold font-mono-tech uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCheckout}
                  className="w-1/2 sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-slate-950" />
                  COMPLETE ORDER
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
