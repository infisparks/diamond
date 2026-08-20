"use client";

import React, { useState, useEffect } from "react";

interface DiamondHeroProps {
  onBookClick: (source?: string) => void;
  onExploreClick: () => void;
}

const YOUTUBE_VIDEO_ID = "dojh5hOuryE";

export function DiamondHero({ onBookClick, onExploreClick }: DiamondHeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const videoData = {
    caption: '"Mumbai Ki Garmi Mein Breathable Luxury Lawn Ka Real Comfort!"',
    img: "/herothumbnial.png",
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  return (
    <section
      id="hero"
      className="relative text-white flex flex-col justify-between py-4 sm:py-8 lg:py-12 overflow-hidden min-h-[100svh] sm:min-h-0"
      style={{
        background: "radial-gradient(ellipse 90% 70% at 50% 10%, #2f0452 0%, #150228 50%, #090114 100%)",
      }}
    >
      {/* Ambient Lighting & Luxury Grid Accents */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e9d5ff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-purple-600/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between flex-1">
        
        {/* Prestige Brand Crest (Centered Top) */}
        <div className="flex flex-col items-center justify-center text-center pb-2.5 sm:pb-3.5 border-b border-purple-500/25 mb-3 sm:mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-purple-950/80 border border-amber-400/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-[0_0_12px_rgba(245,158,11,0.5)]">
              <i className="fa-solid fa-gem text-sm"></i>
            </div>
            <div className="text-left">
              <div className="font-serif font-black text-base sm:text-xl tracking-wider text-white flex items-center gap-1.5 leading-none">
                <span>DIAMOND</span>
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  BOUTIQUE
                </span>
              </div>
              <div className="text-[8.5px] sm:text-[10px] tracking-widest text-amber-200/90 font-semibold uppercase mt-0.5">
                Diamond Boutique • Attar Gali, Mumbai
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Body Grid */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-10 items-center flex-1 my-auto">
          
          {/* Left Column: Headline, Trust Chips, CTAs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col justify-center">
            
            {/* Prestige Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-900/80 to-purple-950/80 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.2)] mx-auto lg:mx-0 max-w-fit backdrop-blur-md">
              <i className="fa-solid fa-crown text-amber-400 text-xs"></i>
              <span className="tracking-wide">PAKISTANI STYLE INDIAN PURE COTTON SUITS &amp; MASTER FITTING</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.18] text-white tracking-tight">
              Pakistani Style Pure Cotton Suits &amp; Master Fitting—{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent block xs:inline">
                Sab Ek Hi Chhat Ke Neeche!
              </span>
            </h1>

            {/* Description in Relatable Hinglish */}
            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Market mein bhatakna aur tailors ke chakkar band karo. Mumbai Attar Gali mein paayein <strong className="text-amber-300 font-semibold">Pakistani style Indian pure cotton lawn collections</strong>, in-house master tailor fitting, aur direct wholesale supply.
            </p>

            {/* Mobile-Only Clean Showcase Thumbnail Card */}
            <div className="lg:hidden my-2">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl bg-gradient-to-b from-purple-900/90 to-purple-980/95 w-full max-w-sm mx-auto backdrop-blur-md cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                  <img
                    src={videoData.img}
                    alt="Diamond Boutique Collection Preview"
                    className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 right-2 flex justify-between items-center pointer-events-none">
                    <span className="bg-black/75 backdrop-blur-md text-amber-300 text-[9.5px] font-extrabold px-2.5 py-0.5 rounded-full border border-amber-500/40 flex items-center gap-1 shadow">
                      <i className="fa-solid fa-play text-amber-400 text-[9px]"></i> Watch Video
                    </span>
                    <span className="bg-purple-950/80 backdrop-blur-md text-purple-200 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full border border-purple-400/40 shadow">
                      Pure Cotton Lawn
                    </span>
                  </div>

                  {/* Centered Glowing Play Button */}
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600 text-slate-950 flex items-center justify-center text-sm shadow-[0_0_20px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-transform border-2 border-white/70">
                      <i className="fa-solid fa-play ml-0.5 text-xs"></i>
                    </div>
                  </div>
                </div>

                {/* Clean Caption Bar */}
                <div className="p-2.5 bg-[#120224] border-t border-purple-500/30 text-center">
                  <p className="font-serif font-bold text-xs text-amber-300 leading-snug">
                    {videoData.caption}
                  </p>
                  <p className="text-[10px] text-purple-300 mt-1 flex items-center justify-center gap-1">
                    <i className="fa-brands fa-youtube text-red-500"></i> Tap to play store tour video
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Chips Matrix */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-center backdrop-blur-sm hover:border-amber-400/50 transition-colors">
                <i className="fa-solid fa-certificate text-amber-400 text-xs sm:text-sm mb-0.5 block"></i>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">Indian Pure Cotton</div>
                <div className="text-[8px] sm:text-[9px] text-purple-200">Direct Wholesaler</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-center backdrop-blur-sm hover:border-amber-400/50 transition-colors">
                <i className="fa-solid fa-scissors text-purple-300 text-xs sm:text-sm mb-0.5 block"></i>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">Master Fitting</div>
                <div className="text-[8px] sm:text-[9px] text-purple-200">In-House Tailor</div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-center backdrop-blur-sm hover:border-amber-400/50 transition-colors">
                <i className="fa-solid fa-truck-ramp-box text-amber-400 text-xs sm:text-sm mb-0.5 block"></i>
                <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">B2B Wholesale</div>
                <div className="text-[8px] sm:text-[9px] text-purple-200">Pan-India Supply</div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="flex items-center justify-center lg:justify-start pt-1">
              <button
                type="button"
                onClick={() => onBookClick("Hero Wholesale Catalogue CTA")}
                className="w-full xs:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-xs sm:text-sm shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <i className="fa-solid fa-file-pdf text-sm sm:text-base"></i>
                <span>Get Wholesale Catalogue &amp; Best Rate List</span>
              </button>
            </div>

            {/* Micro Sub-copy Trust Note */}
            <p className="text-[10.5px] sm:text-[11px] text-purple-300/80 italic text-center lg:text-left">
              ⭐ 4.9 Rating (10,000+ Happy Customers) • Attar Gali, Mumbai Ki Mashhoor Dukan
            </p>

          </div>

          {/* Desktop Right Video Card Frame */}
          <div className="hidden lg:block lg:col-span-5">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative rounded-3xl overflow-hidden border border-amber-400/35 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(168,85,247,0.25)] bg-gradient-to-b from-purple-900/90 to-purple-980/95 max-w-md mx-auto backdrop-blur-md cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                <img
                  src={videoData.img}
                  alt="Diamond Boutique Luxury Collection Preview"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                  <span className="bg-black/75 backdrop-blur-md text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-amber-500/40 flex items-center gap-1 shadow">
                    <i className="fa-solid fa-play text-amber-400 text-[9px]"></i> Watch Video
                  </span>
                  <span className="bg-purple-950/80 backdrop-blur-md text-purple-200 text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-400/40 shadow">
                    Pure Cotton Lawn
                  </span>
                </div>

                {/* Centered Glowing Play Button */}
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600 text-slate-950 flex items-center justify-center text-lg shadow-[0_0_25px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-transform border-2 border-white/70">
                    <i className="fa-solid fa-play ml-0.5"></i>
                  </div>
                </div>
              </div>

              {/* Clean Lower Panel */}
              <div className="p-4 bg-[#120224] border-t border-purple-500/30 text-center">
                <p className="font-serif font-bold text-xs sm:text-sm text-amber-300 leading-snug">
                  {videoData.caption}
                </p>
                <p className="text-[10.5px] text-purple-200 mt-1 flex items-center justify-center gap-1.5">
                  <i className="fa-brands fa-youtube text-red-500"></i> Click to play store tour video
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Scroll Indicator */}
        <div className="text-center pt-2 pb-1 relative z-10">
          <button
            type="button"
            onClick={onExploreClick}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-300 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Niche Scroll Karke Catalogue Dekhein</span>
            <i className="fa-solid fa-chevron-down animate-bounce text-[9px] text-amber-400"></i>
          </button>
        </div>

      </div>

      {/* YouTube Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="bg-[#120224] border border-amber-400/40 rounded-3xl w-full max-w-sm sm:max-w-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.25)] relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 bg-purple-950/90 border-b border-purple-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xs">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <div>
                  <h3 className="font-serif font-black text-xs sm:text-sm text-white tracking-wide">
                    DIAMOND BOUTIQUE
                  </h3>
                  <p className="text-[9px] text-amber-300">Store Tour &amp; Fabric Showcase</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            {/* Video Player (Shorts 9:16 optimized aspect ratio) */}
            <div className="relative w-full aspect-[9/16] max-h-[65vh] sm:max-h-[70vh] bg-black flex items-center justify-center">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="Diamond Boutique Store Tour Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Footer / Action CTA */}
            <div className="p-3.5 sm:p-4 bg-gradient-to-t from-purple-980 to-[#120224] border-t border-purple-500/30 text-center space-y-2.5">
              <p className="text-slate-200 text-xs font-serif font-bold text-amber-200">
                {videoData.caption}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onBookClick("Hero Video Modal Booking CTA");
                }}
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Store Visit / Suit Book Karein</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

