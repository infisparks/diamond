"use client";

import React, { useState } from "react";

interface DiamondWholesaleProps {
  onBookClick: (source?: string) => void;
}

export function DiamondWholesale({ onBookClick }: DiamondWholesaleProps) {
  const [businessType, setBusinessType] = useState("retailer");
  const [qty, setQty] = useState(30);

  const minProfit = qty * 600;
  const maxProfit = qty * 900;
  const formatCurrency = (amt: number) => "₹" + amt.toLocaleString("en-IN");

  return (
    <section
      id="wholesale"
      className="py-10 sm:py-16 text-white relative"
      style={{
        background: "radial-gradient(circle at 50% 20%, #3b0764 0%, #150430 60%, #0c021c 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Reseller Pitch */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-[10.5px] sm:text-xs font-bold border border-purple-400/40">
              <i className="fa-solid fa-store"></i> WHOLESALE &amp; RESELLER HUB
            </div>

            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Apne Boutique Ya Online Business Ko Badhaiye{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Original Pakistani Suits Ke Saath
              </span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Kya aap boutique owner hain, ghar se resell karte hain, ya retail shop chalate hain? Diamond Boutique aapko dega authentic Pakistani inventory, sabse saste bulk rate tiers, aur fastest Pan-India dispatch.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong>Kam Minimum Order (Low MOQ):</strong> Sirf 10 se 15 suits ke starter lot se shuruat karein.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong>Rozana WhatsApp Stock Updates:</strong> High-resolution photos &amp; video catalogues apne clients ko forward karne ke liye.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <strong>All-India Courier &amp; Attar Gali Store Pickup:</strong> Direct shop se aakar lein ya courier se deliver karwayen.
                </div>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => onBookClick("Wholesale Distributorship Portal")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <i className="fa-solid fa-handshake-angle text-base"></i> Apply For Direct Wholesale / Distributorship
              </button>
            </div>
          </div>

          {/* Right Column: Margin Calculator */}
          <div className="lg:col-span-5 bg-purple-950/90 border border-purple-400/40 rounded-2xl p-4 sm:p-7 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-purple-800">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-amber-300">
                  Bulk Margin Calculator
                </h3>
                <p className="text-[10px] sm:text-[11px] text-purple-200">
                  Apna retail profit check karein
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center text-base font-bold">
                <i className="fa-solid fa-calculator"></i>
              </div>
            </div>

            <div className="space-y-3.5 pt-3">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-200 mb-1">
                  Aapka Business Model:
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-purple-900 border border-purple-400/40 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-purple-300"
                >
                  <option value="retailer">Local Retail Cloth Shop</option>
                  <option value="home_boutique">Home Boutique Owner / Tailor</option>
                  <option value="reseller">Online Instagram / WhatsApp Reseller</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                  <span>Kitne Suits Chahiye (Volume):</span>
                  <span className="text-amber-400 font-extrabold text-xs sm:text-sm">{qty} Suits</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value, 10))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
                <div className="flex justify-between text-[9.5px] text-purple-300 mt-0.5">
                  <span>10 Suits (Trial)</span>
                  <span>150 Suits (Mega Lot)</span>
                </div>
              </div>

              {/* Profit Calculation Output */}
              <div className="bg-[#150430] p-3 sm:p-4 rounded-xl border border-purple-500/30 text-center space-y-1">
                <div className="text-[10.5px] sm:text-[11px] font-semibold text-slate-300">
                  Aapka Estimated Net Munafa (Profit):
                </div>
                <div className="font-serif text-xl sm:text-3xl font-extrabold text-amber-400">
                  {formatCurrency(minProfit)} – {formatCurrency(maxProfit)}
                </div>
                <div className="text-[9px] sm:text-[10px] text-purple-300 font-medium">
                  *Based on average Mumbai retail margin of ₹600–₹900 per suit
                </div>
              </div>

              <button
                onClick={() => onBookClick("Wholesale Calculator Quotation")}
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold py-3 rounded-xl text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                Wholesale Rate Card &amp; Samples Mangwayen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
