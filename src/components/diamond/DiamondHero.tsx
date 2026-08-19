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
      caption: '"Mumbai Ki Garmi Mein Breathable Luxury Lawn Ka Real Comfort!"',
      img: "/product/royal-violet-gold-embroidered-suit.webp",
      tag: "🛍️ Shoppers Ke Liye",
    },
    script2: {
      caption: '"Boutique Chalana Sahi Quality Aur Genuine Fitting Se Hota Hai!"',
      img: "/product/sapphire-blue-luxury-lawn-suit.webp",
      tag: "📦 Retailers (Wholesale)",
    },
  };

  return (
    <section
      id="hero"
      className="relative text-white flex flex-col justify-between py-3.5 sm:py-6 lg:py-8 overflow-hidden min-h-fit"
      style={{
        background: "radial-gradient(circle at 50% 20%, #3b0764 0%, #150430 60%, #0c021c 100%)",
      }}
    >
      {/* Ambient Glowing Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Brand Header Centered in Hero */}
        <div className="flex flex-col items-center justify-center text-center pb-2.5 sm:pb-3 border-b border-purple-500/20 mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-500 to-amber-400 flex items-center justify-center text-white font-extrabold shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <i className="fa-solid fa-gem text-xs sm:text-sm"></i>
            </div>
            <div className="font-serif font-extrabold text-base sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              <span>DIAMOND</span>
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                BOUTIQUE
              </span>
            </div>
          </div>
          <div className="text-[8.5px] sm:text-[10px] tracking-wider text-purple-300 font-semibold uppercase mt-0.5">
            Siddiqui Coutures • Attar Gali, Mumbai
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-3.5 lg:gap-8 items-center">
          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 text-center lg:text-left flex flex-col justify-center">
            {/* Prestige Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 px-3 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-[9px] sm:text-xs font-bold shadow-sm mx-auto lg:mx-0 max-w-fit">
              <i className="fa-solid fa-crown text-amber-400 text-[10px]"></i>
              <span>LUXURY PAKISTANI SUITS &amp; MASTER STITCHING</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-lg xs:text-xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight">
              Luxury Branded Pakistani Suits &amp; Master Fitting—{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent block xs:inline">
                Sab Ek Hi Chhat Ke Neeche!
              </span>
            </h1>

            {/* Description in Hinglish */}
            <p className="text-slate-300 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
              Market mein bhatakna band karo. Mumbai Attar Gali mein paayein 100% original Pakistani lawn, in-house master tailor fitting, aur direct wholesale supply.
            </p>

            {/* Compact Mobile Image / Video Preview */}
            <div className="lg:hidden my-1">
              <div className="relative rounded-xl overflow-hidden border border-purple-400/35 shadow-xl bg-purple-950 max-w-[210px] xs:max-w-[240px] mx-auto">
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden group">
                  <img
                    src={videoData[activeTab].img}
                    alt="Diamond Boutique Luxury Collection Preview"
                    className="w-full h-full object-cover opacity-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 flex flex-col items-center justify-center text-center p-1.5">
                    <button
                      type="button"
                      onClick={() => onBookClick("Featured Mobile Video Click")}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 text-xs shadow-[0_0_12px_rgba(245,158,11,0.5)] hover:scale-110 active:scale-95 transition-all mb-0.5 cursor-pointer"
                    >
                      <i className="fa-solid fa-play ml-0.5 text-[10px]"></i>
                    </button>
                    <span className="bg-black/80 text-amber-300 text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-amber-500/40 backdrop-blur-md">
                      Store Tour &amp; Fabric Dekhein
                    </span>
                  </div>
                </div>

                <div className="p-1.5 bg-[#150430] border-t border-purple-500/25">
                  <p className="font-serif font-bold text-[9.5px] text-amber-300 text-center leading-snug line-clamp-1">
                    {videoData[activeTab].caption}
                  </p>
                  <div className="grid grid-cols-2 gap-1 mt-1 pt-1 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveTab("script1")}
                      className={`font-bold py-0.5 px-1 rounded-md text-[8.5px] transition-all text-center cursor-pointer ${
                        activeTab === "script1"
                          ? "bg-amber-500 text-slate-950 shadow"
                          : "bg-purple-900 border border-purple-500/30 text-purple-200"
                      }`}
                    >
                      🛍️ Shoppers
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("script2")}
                      className={`font-bold py-0.5 px-1 rounded-md text-[8.5px] transition-all text-center cursor-pointer ${
                        activeTab === "script2"
                          ? "bg-amber-500 text-slate-950 shadow"
                          : "bg-purple-900 border border-purple-500/30 text-purple-200"
                      }`}
                    >
                      📦 Retailers
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Chips Matrix */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 py-0.5 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-1.5 sm:p-2 rounded-lg bg-purple-950/70 border border-purple-500/30 text-center">
                <i className="fa-solid fa-certificate text-amber-400 text-[10px] sm:text-xs mb-0.5 block"></i>
                <div className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">Original Brand</div>
                <div className="text-[7.5px] sm:text-[8.5px] text-purple-200">Direct Source</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-purple-950/70 border border-purple-500/30 text-center">
                <i className="fa-solid fa-scissors text-purple-300 text-[10px] sm:text-xs mb-0.5 block"></i>
                <div className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">Master Fitting</div>
                <div className="text-[7.5px] sm:text-[8.5px] text-purple-200">In-House Tailor</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-purple-950/70 border border-purple-500/30 text-center">
                <i className="fa-solid fa-truck-ramp-box text-amber-400 text-[10px] sm:text-xs mb-0.5 block"></i>
                <div className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">B2B Wholesale</div>
                <div className="text-[7.5px] sm:text-[8.5px] text-purple-200">Pan-India Dispatch</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-2 pt-1">
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full xs:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold px-5 py-2.5 sm:py-3 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:brightness-110 active:scale-95 transition-all text-[11px] sm:text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <i className="fa-solid fa-bag-shopping"></i> EXPLORE CATALOGUE
              </button>
              <button
                type="button"
                onClick={() => onBookClick("Hero Distributorship Application")}
                className="w-full xs:w-auto bg-purple-900/90 hover:bg-purple-800 active:scale-95 text-white font-extrabold px-5 py-2.5 sm:py-3 rounded-xl shadow border border-purple-400/50 hover:border-amber-400 transition-all text-[11px] sm:text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <i className="fa-solid fa-handshake-angle text-amber-400"></i> BECOME A DISTRIBUTOR
              </button>
            </div>

            {/* Location & Store Timings */}
            <div className="text-[9.5px] sm:text-[11px] text-slate-300 flex items-center justify-center lg:justify-start gap-1.5 pt-0.5">
              <span>
                <i className="fa-solid fa-location-dot text-amber-400 mr-1"></i> Attar Gali, Mumbai
              </span>
              <span>•</span>
              <span>
                <i className="fa-solid fa-clock text-green-400 mr-1"></i> 11 AM – 9:30 PM
              </span>
            </div>
          </div>

          {/* Desktop Right Video Card Frame (Compact) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-purple-400/40 shadow-xl bg-purple-950 max-w-sm mx-auto">
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden group">
                <img
                  src={videoData[activeTab].img}
                  alt="Diamond Boutique Luxury Pakistani Collection Preview"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35 flex flex-col items-center justify-center text-center p-3">
                  <button
                    type="button"
                    onClick={() => onBookClick("Desktop Featured Video Click")}
                    className="w-11 h-11 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 text-base shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:scale-110 active:scale-95 transition-all mb-1.5 cursor-pointer"
                  >
                    <i className="fa-solid fa-play ml-0.5"></i>
                  </button>
                  <span className="bg-black/75 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-500/40 backdrop-blur-md">
                    <i className="fa-solid fa-film text-red-400 mr-1"></i> Store Tour &amp; Premium Fabric Dekhein
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#150430] border-t border-purple-500/25">
                <p className="font-serif font-bold text-xs text-amber-300 text-center leading-snug">
                  {videoData[activeTab].caption}
                </p>
                <p className="text-[10px] text-purple-200 text-center mt-0.5">Siddiqui Coutures • Attar Gali, Mumbai</p>

                <div className="grid grid-cols-2 gap-1.5 mt-2 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveTab("script1")}
                    className={`font-bold py-1 px-1.5 rounded-lg text-[10px] transition-all text-center cursor-pointer ${
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
                    className={`font-bold py-1 px-1.5 rounded-lg text-[10px] transition-all text-center cursor-pointer ${
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
    </section>
  );
}
