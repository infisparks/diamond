"use client";

import React from "react";

interface DiamondFinalCTAProps {
  onBookClick: (source?: string) => void;
}

export function DiamondFinalCTA({ onBookClick }: DiamondFinalCTAProps) {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-6 sm:p-10 text-center text-white border-2 border-purple-400/40 shadow-2xl relative overflow-hidden"
          style={{
            background: "radial-gradient(circle at 50% 20%, #3b0764 0%, #150430 60%, #0c021c 100%)",
          }}
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <span className="bg-amber-500 text-slate-950 font-extrabold text-[9.5px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-widest">
              SHOPPING YA RESELLING START KAREIN
            </span>
            <h2 className="font-serif text-xl sm:text-3xl font-extrabold text-white">
              Apna Wardrobe Upgrade Karein Ya Apna Boutique Grow Karein
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Niche diye button par click karein aur direct VIP store appointment ya distributorship quotation paayein!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2.5 pt-1.5">
              <button
                onClick={() => onBookClick("Final Banner VIP Visit")}
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-calendar-check"></i> BOOK STORE VISIT NOW
              </button>
              <button
                onClick={() => onBookClick("Final Banner Distributor Application")}
                className="bg-purple-900/90 hover:bg-purple-800 text-white font-extrabold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl shadow-lg border border-purple-400/50 hover:border-amber-400 active:scale-95 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-handshake text-amber-400"></i> APPLY FOR DISTRIBUTORSHIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
