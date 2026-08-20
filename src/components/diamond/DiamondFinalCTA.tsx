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

            <div className="flex justify-center pt-1.5">
              <button
                onClick={() => onBookClick("Final Banner Wholesale Catalogue CTA")}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <i className="fa-solid fa-file-pdf text-sm sm:text-base"></i>
                <span>GET WHOLESALE CATALOGUE &amp; BEST RATE LIST</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
