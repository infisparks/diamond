"use client";

import React from "react";

export function DiamondFooter() {
  return (
    <footer className="bg-[#12032b] text-slate-300 py-10 sm:py-12 border-t-2 border-purple-900/80 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 mb-8">
        {/* Brand column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-white font-serif font-bold text-base sm:text-lg">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-amber-400 flex items-center justify-center text-white text-sm shadow-md">
              <i className="fa-solid fa-gem"></i>
            </div>
            <span className="tracking-wide text-white">DIAMOND BOUTIQUE</span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Siddiqui Coutures — Mumbai&apos;s premier hub for 100% original Pakistani suits, luxury unstitched lawn, in-house master tailoring, and pan-India B2B wholesale supply in Attar Gali.
          </p>
          <div className="flex items-center gap-3 pt-1 text-amber-400 text-sm">
            <span className="inline-flex items-center gap-1.5 text-xs text-purple-200 bg-purple-950 px-2.5 py-1 rounded-lg border border-purple-800">
              <i className="fa-solid fa-shield-check text-amber-400"></i> Verified Wholesaler
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-white text-sm mb-3 text-amber-300 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-slate-300 font-medium">
            <li>
              <a href="#hero" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <i className="fa-solid fa-chevron-right text-[9px] text-purple-400"></i> Home &amp; Video Tour
              </a>
            </li>
            <li>
              <a href="#collections" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <i className="fa-solid fa-chevron-right text-[9px] text-purple-400"></i> Collections Catalogue
              </a>
            </li>
            <li>
              <a href="#wholesale" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <i className="fa-solid fa-chevron-right text-[9px] text-purple-400"></i> B2B Wholesale Portal
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <i className="fa-solid fa-chevron-right text-[9px] text-purple-400"></i> Attar Gali Store Directions
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-serif font-bold text-white text-sm mb-3 text-amber-300 uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="space-y-2 text-slate-300 font-medium">
            <li className="flex items-center gap-1.5">
              <i className="fa-solid fa-check text-[10px] text-purple-400"></i> 100% Original Pakistani Lawn
            </li>
            <li className="flex items-center gap-1.5">
              <i className="fa-solid fa-check text-[10px] text-purple-400"></i> Ready-Made Partywear Outfits
            </li>
            <li className="flex items-center gap-1.5">
              <i className="fa-solid fa-check text-[10px] text-purple-400"></i> In-House Master Stitching &amp; Fitting
            </li>
            <li className="flex items-center gap-1.5">
              <i className="fa-solid fa-check text-[10px] text-purple-400"></i> Pan-India Reseller Wholesale Lots
            </li>
          </ul>
        </div>

        {/* Visit Attar Gali Store */}
        <div>
          <h4 className="font-serif font-bold text-white text-sm mb-3 text-amber-300 uppercase tracking-wider">
            Visit Attar Gali Store
          </h4>
          <p className="leading-relaxed text-slate-300 text-xs">
            54/56, Shop No. 2, Ground Floor, Khatija Bai Bldg, Kambekar Street, Attar Gali, Mumbai – 400003.
          </p>
          <div className="mt-3 pt-2 border-t border-purple-900/60 space-y-1">
            <p className="text-amber-300 font-bold text-xs">
              <i className="fa-solid fa-phone text-amber-400 mr-1.5"></i> +91 77094 39688
            </p>
            <p className="text-purple-300 text-[11px]">
              <i className="fa-solid fa-clock mr-1.5 text-purple-400"></i> Mon–Sat: 11:00 AM – 9:30 PM
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 border-t border-purple-900 text-center flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-400">
        <div>© 2026 Diamond Boutique (Siddiqui Coutures). All Rights Reserved.</div>
        <div className="text-amber-400/90 font-medium">Attar Gali, Mumbai Fashion District</div>
      </div>
    </footer>
  );
}
