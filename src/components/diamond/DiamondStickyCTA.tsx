"use client";

import React, { useState, useEffect } from "react";

interface DiamondStickyCTAProps {
  onBookClick: (source?: string) => void;
}

export function DiamondStickyCTA({ onBookClick }: DiamondStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Diamond%20Boutique,%20mujhe%20Pakistani%20Suits%20ke%20designs%20aur%20prices%20jaanne%20hain"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-[0_4px_25px_rgba(34,197,94,0.5)] z-40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        title="WhatsApp Support"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Sticky Mobile Floating Bottom Bar */}
      {isVisible && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#150430]/95 backdrop-blur-md border-t border-purple-500/30 p-2.5 px-3 flex items-center gap-2 shadow-[0_-8px_25px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom duration-200">
          <a
            href="https://wa.me/919876543210?text=Hi%20Diamond%20Boutique,%20please%20send%20me%20your%20latest%20collection%20catalogue"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 px-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>WhatsApp Order</span>
          </a>
          <button
            type="button"
            onClick={() => onBookClick("Sticky Mobile Bar Visit")}
            className="flex-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold py-2.5 px-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow"
          >
            <i className="fa-solid fa-calendar-check text-[11px]"></i>
            <span>Book Store Visit</span>
          </button>
        </div>
      )}
    </>
  );
}
