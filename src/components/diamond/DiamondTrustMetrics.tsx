"use client";

import React from "react";

export function DiamondTrustMetrics() {
  return (
    <section className="bg-white py-6 sm:py-8 border-y border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {/* Stat 1 */}
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:shadow-md transition-all">
            <div className="text-xl sm:text-3xl font-extrabold font-serif text-purple-950 mb-0.5">100+</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-800">Retailers &amp; Boutiques</div>
            <div className="text-[9px] sm:text-[10px] text-purple-700 font-bold uppercase tracking-wider mt-0.5">
              <i className="fa-solid fa-truck-ramp-box mr-1"></i> Pan-India Wholesale
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:shadow-md transition-all">
            <div className="text-xl sm:text-3xl font-extrabold font-serif text-purple-950 mb-0.5">10,000+</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-800">Happy Mumbai Clients</div>
            <div className="text-[9px] sm:text-[10px] text-purple-700 font-bold uppercase tracking-wider mt-0.5">
              <i className="fa-solid fa-heart mr-1"></i> 5-Star Reviews
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:shadow-md transition-all">
            <div className="text-xl sm:text-3xl font-extrabold font-serif text-purple-950 mb-0.5">100%</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-800">Indian Pure Cotton</div>
            <div className="text-[9px] sm:text-[10px] text-purple-700 font-bold uppercase tracking-wider mt-0.5">
              <i className="fa-solid fa-shield-check mr-1"></i> Guaranteed Fabric
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:shadow-md transition-all">
            <div className="text-xl sm:text-3xl font-extrabold font-serif text-purple-950 mb-0.5">4.9 ★</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-800">Master Stitching</div>
            <div className="text-[9px] sm:text-[10px] text-purple-700 font-bold uppercase tracking-wider mt-0.5">
              <i className="fa-solid fa-scissors mr-1"></i> Perfect Fit
            </div>
          </div>
        </div>

        {/* Guarantee Ribbon */}
        <div className="mt-4 pt-3 sm:pt-4 border-t border-slate-200 flex flex-wrap justify-center items-center gap-3 sm:gap-8 text-slate-700 font-semibold text-[11px] sm:text-sm">
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-circle-check text-green-600"></i> No Replica / Duplicate
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-circle-check text-green-600"></i> Pure Breathable Fabric
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-circle-check text-green-600"></i> Attar Gali Physical Store
          </span>
        </div>
      </div>
    </section>
  );
}
