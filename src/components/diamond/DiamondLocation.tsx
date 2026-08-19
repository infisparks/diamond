"use client";

import React, { useState } from "react";

interface DiamondLocationProps {
  onBookClick: (source?: string) => void;
  onShowToast: (msg: string) => void;
}

export function DiamondLocation({ onBookClick, onShowToast }: DiamondLocationProps) {
  const storeAddress =
    "Diamond Boutique / Siddiqui Coutures, 54/56, Shop No. 2, Khatija Bai Building, Kambekar Street, Attar Gali, Mumbai – 400003";

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(storeAddress).then(() => {
        onShowToast("📍 Store Address copy ho gaya!");
      }).catch(() => {
        onShowToast("📍 Store Address: Attar Gali, Mumbai - 400003");
      });
    } else {
      onShowToast("📍 Store Address: Attar Gali, Mumbai - 400003");
    }
  };

  return (
    <section id="location" className="py-10 sm:py-16 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-purple-700 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            DUKAAN PE DIRECT AAO
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Attar Gali, Mumbai Store Pe Visit Karein
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-1.5">
            Fabric ko haath lagakar quality dekhein, aur master tailor se apna naap karwayen.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          {/* Address & Info */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-950 text-amber-400 flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-md">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-xl text-slate-900">
                  Diamond Boutique / Siddiqui Coutures
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  54/56, Shop No. 2, Ground Floor, Khatija Bai Building,<br />
                  Next to Doctor Iqbal Lodhia, Kambekar Street,<br />
                  Attar Gali, Mumbai – 400003, Maharashtra, India.
                </p>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="mt-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <i className="fa-solid fa-copy text-amber-600"></i> Address Copy Karein
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <i className="fa-solid fa-clock text-amber-600"></i> Dukan Ki Timings
                </div>
                <div className="text-xs text-slate-600">
                  Mon – Sat: 11:00 AM – 9:30 PM<br />
                  <span className="text-green-700 font-semibold">🟢 Aaj Khula Hai</span>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <i className="fa-solid fa-phone text-amber-600"></i> Direct Phone Line
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  +91 98765 43210<br />
                  +91 98200 12345
                </div>
              </div>
            </div>

            {/* Directions & VIP Visit CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href="https://maps.google.com/?q=Attar+Gali+Mumbai+Diamond+Boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-map-location-dot"></i> Google Maps Me Rasta Dekhein
              </a>
              <button
                type="button"
                onClick={() => onBookClick("VIP Store Appointment")}
                className="bg-purple-950 hover:bg-purple-900 text-white font-bold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-purple-400/30 cursor-pointer"
              >
                <i className="fa-solid fa-calendar-check"></i> VIP Shop Visit Book Karein
              </button>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-300 shadow-inner h-64 sm:h-80 bg-slate-100 relative">
            <iframe
              title="Diamond Boutique Attar Gali Mumbai Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.71971775704!2d72.8315!3d18.9550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzE4LjAiTiA3MsKwNDknNTMuNCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
