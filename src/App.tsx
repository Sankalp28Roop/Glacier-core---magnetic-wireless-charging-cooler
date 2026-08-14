import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EvolutionSection } from './components/EvolutionSection';
import { StealthFeatures } from './components/StealthFeatures';
import { ActiveCoolingSection } from './components/ActiveCoolingSection';
import { ThermalSimulator } from './components/ThermalSimulator';
import { ExplodedBuildSection } from './components/ExplodedBuildSection';
import { Footer } from './components/Footer';
import { BuyModal } from './components/BuyModal';
import { DiyGuideModal } from './components/DiyGuideModal';
import { TechSpecsModal } from './components/TechSpecsModal';
import { AssemblyVideoModal } from './components/AssemblyVideoModal';

export function App() {
  const [buyModalOpen, setBuyModalOpen] = useState<boolean>(false);
  const [diyGuideModalOpen, setDiyGuideModalOpen] = useState<boolean>(false);
  const [techSpecsModalOpen, setTechSpecsModalOpen] = useState<boolean>(false);
  const [assemblyVideoModalOpen, setAssemblyVideoModalOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (item: any) => {
    setCartItems((prev) => [...prev, item]);
    showToast(`Added ${item.kit} (${item.finish}) to reservation cart!`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans relative selection:bg-cyan-400 selection:text-slate-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-cyan-950/95 border border-cyan-400 text-cyan-200 text-xs font-mono-tech font-bold shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-in slide-in-from-bottom-5 duration-300 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        onOpenBuy={() => setBuyModalOpen(true)}
        onOpenSpecs={() => setTechSpecsModalOpen(true)}
        onOpenGuide={() => setDiyGuideModalOpen(true)}
        onOpenVideo={() => setAssemblyVideoModalOpen(true)}
        cartCount={cartItems.length}
      />

      {/* Hero Section */}
      <Hero
        onOpenBuy={() => setBuyModalOpen(true)}
        onOpenVideo={() => setAssemblyVideoModalOpen(true)}
      />

      {/* Evolution Section ("Ditch the Bulk. Embrace the Magnet.") */}
      <EvolutionSection />

      {/* Stealth Features Section ("Form Meets Function: Engineered for Stealth") */}
      <StealthFeatures />

      {/* Active Cooling Architecture ("The Science of Absolute Zero.") */}
      <ActiveCoolingSection />

      {/* Thermal Simulator Lab (Interactive Benchmarks) */}
      <ThermalSimulator />

      {/* Exploded Blueprint Section ("Build It Better. DIY Magnetic Wireless Charging Cooler") */}
      <ExplodedBuildSection
        onOpenBuy={() => setBuyModalOpen(true)}
        onOpenGuide={() => setDiyGuideModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenSpecs={() => setTechSpecsModalOpen(true)}
        onOpenGuide={() => setDiyGuideModalOpen(true)}
      />

      {/* Modals */}
      <BuyModal
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <DiyGuideModal
        isOpen={diyGuideModalOpen}
        onClose={() => setDiyGuideModalOpen(false)}
      />

      <TechSpecsModal
        isOpen={techSpecsModalOpen}
        onClose={() => setTechSpecsModalOpen(false)}
      />

      <AssemblyVideoModal
        isOpen={assemblyVideoModalOpen}
        onClose={() => setAssemblyVideoModalOpen(false)}
      />

    </div>
  );
}

export default App;
