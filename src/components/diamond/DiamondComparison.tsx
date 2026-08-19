"use client";

import React from "react";

export function DiamondComparison() {
  return (
    <section className="py-10 sm:py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-red-400 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest bg-red-950/60 px-3 py-1 rounded-full border border-red-500/30">
            <i className="fa-solid fa-triangle-exclamation mr-1"></i> MARKET KA REAL SACH
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold mt-2">
            Aam Market Ka Dhoka vs Diamond Boutique Ka Bharosa
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-1.5">
            Kyun regular bazaar mein shopping aur tailoring dono mein log pareshan hote hain?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Aam Bazaar */}
          <div className="bg-slate-800/90 border border-red-500/30 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-700">
              <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 font-bold flex items-center justify-center text-sm">
                ✕
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-red-300">
                Aam Bazaar Ki Roz Ki Pareshani
              </h3>
            </div>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-xmark text-red-400 mt-1"></i>
                <span>
                  <strong>Duplicate Saste Fabrics:</strong> Photos mein achha dikhta hai par 2 wash ke baad rang utar jaata hai aur fabric phat jaata hai.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-xmark text-red-400 mt-1"></i>
                <span>
                  <strong>Tailor Ke Chakkar:</strong> Suit lene ke baad dusre tailor ke paas jao, hafte bhar delay aur fitting kharab kar dete hain.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-xmark text-red-400 mt-1"></i>
                <span>
                  <strong>Resellers Ka Dead Stock:</strong> Purane out of fashion designs milte hain jisse boutique owners ka paisa atak jaata hai.
                </span>
              </li>
            </ul>
          </div>

          {/* Diamond Boutique */}
          <div className="bg-purple-950/90 border border-purple-400/40 rounded-2xl p-4 sm:p-7 space-y-3 sm:space-y-4 shadow-[0_0_25px_rgba(147,51,234,0.25)]">
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-purple-900">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                ✓
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-amber-300">
                Diamond Boutique Ka Premium Standard
              </h3>
            </div>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-slate-200">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-amber-400 mt-1"></i>
                <span>
                  <strong>100% Original Pakistani Brands:</strong> Pure luxury lawn, real silk dupattas aur authentic embroidery direct brand sources se.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-amber-400 mt-1"></i>
                <span>
                  <strong>Counter Pe In-House Master Tailoring:</strong> Suit pasand karo aur wahin master tailor se perfect fitting karwao.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-amber-400 mt-1"></i>
                <span>
                  <strong>Superfast Selling Wholesale Lots:</strong> Boutique owners ke liye daily fresh trending stock WhatsApp broadcast pe.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
