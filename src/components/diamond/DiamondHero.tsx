"use client";

import React, { useState } from "react";

interface DiamondHeroProps {
  onBookClick: (source?: string) => void;
  onExploreClick: () => void;
}

export function DiamondHero({ onBookClick, onExploreClick }: DiamondHeroProps) {
  const [activeTab, setActiveTab] = useState<"script1" | "script2">("script1");

  const videoData = {
    script1: {
      caption: '"Mumbai Ki Garmi Aur Humidity Mein Breathable Luxury Lawn Ka Real Comfort!"',
      img: "/product/royal-violet-gold-embroidered-suit.webp",
      tag: "🛍️ Shoppers Ke Liye",
    },
    script2: {
      caption: '"Apna Boutique Chalana Sirf Kapde Bechna Nahi Hota... Sahi Quality Aur Genuine Fitting Zaroori Hai!"',
      img: "/product/sapphire-blue-luxury-lawn-suit.webp",
      tag: "📦 Retailers (Wholesale)",
    },
  };

  return (
    <section
      id="hero"
      className="relative text-white min-h-[92vh] flex flex-col justify-between py-6 sm:py-10 lg:py-14 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 20%, #3b0764 0%, #150430 60%, #0c021c 100%)",
      }}
    >
      {/* Ambient Glowing Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-2 sm:py-4">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left / Center Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col justify-center">
            {/* Prestige Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-[10px] sm:text-xs font-bold shadow-sm mx-auto lg:mx-0 max-w-fit">
              <i className="fa-solid fa-crown text-amber-400"></i>
              <span>LUXURY DESIGNER PAKISTANI SUITS & MASTER STITCHING</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
              Luxury Branded Pakistani Suits & Master Fitting—{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent block xs:inline">
                Sab Ek Hi Chhat Ke Neeche!
              </span>
            </h1>

            {/* Description in Hinglish */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Market mein bhatakna aur tailors ke peeche bhagna band karo. Mumbai Attar Gali mein paayein premium Pakistani lawn collections, in-house master tailor fitting, aur direct wholesale supply.
            </p>

            {/* Mobile Video Frame */}
            <div className="lg:hidden my-2">
              <div className="relative rounded-2xl overflow-hidden border border-purple-400/35 shadow-2xl bg-purple-950 max-w-xs mx-auto">
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden group">
                  <img
                    src={videoData[activeTab].img}
                    alt="Diamond Boutique Luxury Pakistani Collection Preview"
                    className="w-full h-full object-cover opacity-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 flex flex-col items-center justify-center text-center p-2">
                    <button
                      onClick={() => onBookClick("Featured Mobile Video Click")}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 text-sm shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:scale-110 active:scale-95 transition-all mb-1 cursor-pointer"
                    >
                      <i className="fa-solid fa-play ml-0.5"></i>
                    </button>
                    <span className="bg-black/75 text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded-full border border-amber-500/40 backdrop-blur-md">
                      <i className="fa-solid fa-film text-red-400 mr-1"></i> Store Tour & Premium Fabric Dekhein
                    </span>
                  </div>
                </div>

                <div className="p-2.5 bg-[#150430] border-t border-purple-500/25">
                  <p className="font-serif font-bold text-[11px] text-amber-300 text-center leading-snug">
                    {videoData[activeTab].caption}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 mt-2 pt-1.5 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveTab("script1")}
                      className={`font-bold py-1 px-1 rounded-lg text-[9.5px] transition-all text-center cursor-pointer ${
                        activeTab === "script1"
                          ? "bg-amber-500 text-slate-950 shadow"
                          : "bg-purple-900 border border-purple-500/30 text-purple-200"
                      }`}
                    >
                      🛍️ Shoppers Ke Liye
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("script2")}
                      className={`font-bold py-1 px-1 rounded-lg text-[9.5px] transition-all text-center cursor-pointer ${
                        activeTab === "script2"
                          ? "bg-amber-500 text-slate-950 shadow"
                          : "bg-purple-900 border border-purple-500/30 text-purple-200"
                      }`}
                    >
                      📦 Retailers (Wholesale)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Chips Matrix */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-center">
                <i className="fa-solid fa-certificate text-amber-400 text-xs sm:text-sm mb-0.5 block"></i>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">Premium Brands</div>
                <div className="text-[8px] sm:text-[9px] text-purple-200">Direct Brand Source</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-center">
                <i className="fa-solid fa-scissors text-purple-300 text-xs sm:text-sm mb-0.5 block"></i>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">Master Fitting</div>
                <div className="text-[8px] sm:text-[9px] text-purple-200">In-House Tailor</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-center">
                <i className="fa-solid fa-truck-ramp-box text-amber-400 text-xs sm:text-sm mb-0.5 block"></i>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">B2B Wholesale</div>
                <div className="text-[8px] sm:text-[9px] text-purple-200">Pan-India Supply</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 pt-1.5">
              <button
                onClick={onExploreClick}
                className="w-full xs:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:brightness-110 active:scale-95 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-bag-shopping"></i> EXPLORE CATALOGUE
              </button>
              <button
                onClick={() => onBookClick("Hero Distributorship Application")}
                className="w-full xs:w-auto bg-purple-900/90 hover:bg-purple-800 active:scale-95 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-400/50 hover:border-amber-400 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-handshake-angle text-amber-400"></i> BECOME A DISTRIBUTOR / RESELLER
              </button>
            </div>

            {/* Location & Store Timings */}
            <div className="text-[10px] sm:text-xs text-slate-300 flex items-center justify-center lg:justify-start gap-2 pt-0.5">
              <span>
                <i className="fa-solid fa-location-dot text-amber-400 mr-1"></i> Attar Gali, Mumbai
              </span>
              <span>•</span>
              <span>
                <i className="fa-solid fa-clock text-green-400 mr-1"></i> Khula Hai: 11 AM – 9:30 PM
              </span>
            </div>
          </div>

          {/* Desktop Right Video Card Frame */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-purple-400/40 shadow-2xl bg-purple-950 max-w-md mx-auto">
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden group">
                <img
                  src={videoData[activeTab].img}
                  alt="Diamond Boutique Luxury Pakistani Collection Preview"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 flex flex-col items-center justify-center text-center p-4">
                  <button
                    onClick={() => onBookClick("Desktop Featured Video Click")}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 text-xl shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:scale-110 active:scale-95 transition-all mb-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-play ml-1"></i>
                  </button>
                  <span className="bg-black/75 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-500/40 backdrop-blur-md">
                    <i className="fa-solid fa-film text-red-400 mr-1"></i> Store Tour &amp; Premium Fabric Dekhein
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#150430] border-t border-purple-500/25">
                <p className="font-serif font-bold text-xs sm:text-sm text-amber-300 text-center leading-snug">
                  {videoData[activeTab].caption}
                </p>
                <p className="text-[10.5px] text-purple-200 text-center mt-1">Siddiqui Coutures • Attar Gali, Mumbai</p>

                <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveTab("script1")}
                    className={`font-bold py-1.5 px-2 rounded-xl text-[11px] transition-all text-center cursor-pointer ${
                      activeTab === "script1"
                        ? "bg-amber-500 text-slate-950 shadow"
                        : "bg-purple-900 border border-purple-500/30 text-purple-200 hover:bg-amber-500 hover:text-slate-950"
                    }`}
                  >
                    🛍️ For Shoppers (Retail)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("script2")}
                    className={`font-bold py-1.5 px-2 rounded-xl text-[11px] transition-all text-center cursor-pointer ${
                      activeTab === "script2"
                        ? "bg-amber-500 text-slate-950 shadow"
                        : "bg-purple-900 border border-purple-500/30 text-purple-200 hover:bg-amber-500 hover:text-slate-950"
                    }`}
                  >
                    📦 For Retailers (B2B Bulk)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="text-center pt-1 pb-1 relative z-10">
        <button
          onClick={onExploreClick}
          className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-300 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
        >
          <span>Niche Scroll Karke Catalogue Dekhein</span>
          <i className="fa-solid fa-chevron-down animate-bounce text-[9px] text-amber-400"></i>
        </button>
      </div>
    </section>
  );
}
