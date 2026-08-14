import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X, Cpu, Wrench, BarChart2 } from 'lucide-react';

interface NavbarProps {
  onOpenBuy: () => void;
  onOpenSpecs: () => void;
  onOpenGuide: () => void;
  onOpenVideo: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBuy,
  onOpenSpecs,
  onOpenGuide,
  cartCount,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/85 backdrop-blur-md border-b border-cyan-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
          id="nav-logo"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
            {/* Custom Snowflake Vector */}
            <svg
              className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"></line>
              <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-75"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-wider text-base sm:text-lg text-white flex items-center gap-1.5">
              GLACIER <span className="text-cyan-400 font-light">CORE</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-slate-300">
          <button
            onClick={() => scrollTo('features')}
            className="hover:text-cyan-400 transition-colors uppercase cursor-pointer"
            id="nav-link-features"
          >
            Features
          </button>
          <button
            onClick={onOpenSpecs}
            className="hover:text-cyan-400 transition-colors uppercase flex items-center gap-1.5 cursor-pointer"
            id="nav-link-tech-specs"
          >
            Tech Specs
          </button>
          <button
            onClick={onOpenGuide}
            className="hover:text-cyan-400 transition-colors uppercase flex items-center gap-1.5 cursor-pointer"
            id="nav-link-diy-guide"
          >
            DIY Guide
          </button>
          <button
            onClick={() => scrollTo('thermal-sim')}
            className="hover:text-cyan-400 transition-colors uppercase flex items-center gap-1 text-slate-400 hover:text-cyan-300"
            id="nav-link-benchmarks"
          >
            <BarChart2 className="w-3.5 h-3.5 text-cyan-500" />
            Thermal Lab
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBuy}
            id="nav-buy-now-btn"
            className="relative group px-5 py-2 rounded-full text-xs font-bold tracking-wider text-cyan-200 uppercase overflow-hidden border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 to-blue-950/60 hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              BUY NOW
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={onOpenBuy}
            id="nav-cart-btn"
            aria-label="View Cart"
            className="relative w-9 h-9 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 text-black text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBuy}
            className="px-3 py-1.5 rounded-full text-xs font-bold text-cyan-300 border border-cyan-500/40 bg-cyan-950/40"
          >
            BUY
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Menu"
            className="p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070c18] border-b border-cyan-900/40 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 font-semibold text-sm">
            <button
              onClick={() => scrollTo('features')}
              className="text-left py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
            >
              Features
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpecs();
              }}
              className="text-left py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>Tech Specs</span>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="text-left py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>DIY Assembly Guide</span>
              <Wrench className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => scrollTo('thermal-sim')}
              className="text-left py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>Thermal Benchmark Lab</span>
              <BarChart2 className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuy();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold tracking-wider uppercase text-center shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Buy Glacier Core Kit ($49)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
