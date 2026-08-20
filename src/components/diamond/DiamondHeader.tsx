"use client";

import React from "react";

interface DiamondHeaderProps {
  onBookClick: (source?: string) => void;
}

export function DiamondHeader({ onBookClick }: DiamondHeaderProps) {
  return (
    <header className="w-full bg-[#13032d]/95 backdrop-blur-md sticky top-0 z-40 border-b border-purple-500/20 py-2.5 sm:py-3 transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-500 to-amber-400 flex items-center justify-center text-white font-extrabold shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <i className="fa-solid fa-gem text-xs sm:text-base"></i>
            </div>
            <div>
              <div className="font-serif font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                <span>DIAMOND</span>
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  BOUTIQUE
                </span>
              </div>
              <div className="text-[8px] sm:text-[9.5px] tracking-wider text-purple-300 font-semibold uppercase -mt-0.5">
                Siddiqui Coutures • Attar Gali, Mumbai
              </div>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+917709439688"
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-purple-950/80 border border-purple-400/30 text-purple-200 hover:bg-purple-900 hover:text-white transition-all text-[11px] sm:text-xs font-semibold flex items-center gap-1.5"
            >
              <i className="fa-solid fa-phone text-[10px] text-amber-400"></i>
              <span className="hidden xs:inline">Call Karein</span>
            </a>

            <button
              onClick={() => onBookClick("Top Bar Distributorship Inquiry")}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] sm:text-xs shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <i className="fa-solid fa-handshake text-[10px]"></i>
              <span>B2B Wholesale / Visit</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
