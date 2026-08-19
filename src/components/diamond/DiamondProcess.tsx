"use client";

import React from "react";

export function DiamondProcess() {
  const steps = [
    {
      num: 1,
      title: "Shop Visit Ya Contact",
      desc: "Attar Gali store pe aaiye ya WhatsApp video catalogue dekhein.",
      isGold: false,
    },
    {
      num: 2,
      title: "Design Pasand Karein",
      desc: "Ready-made, pure lawn ya silk dupattas select karein.",
      isGold: false,
    },
    {
      num: 3,
      title: "Master Stitching",
      desc: "In-house master tailor se perfect fitting karwayen.",
      isGold: false,
    },
    {
      num: 4,
      title: "Flawless Delivery",
      desc: "Shop se collect karein ya courier delivery paayein.",
      isGold: true,
    },
  ];

  return (
    <section id="process" className="py-10 sm:py-16 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-purple-700 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            BILKUL EASY &amp; SIMPLE
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Shopping &amp; Custom Stitching Kaise Kaam Karta Hai?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-1.5">
            Original suit select karne se lekar perfect fitting tak bas 4 aasan steps.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-3.5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center group hover:border-purple-600 hover:shadow-md transition-all"
            >
              <div
                className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full font-bold text-sm sm:text-lg flex items-center justify-center mx-auto mb-2 sm:mb-3.5 group-hover:scale-110 transition-transform ${
                  step.isGold
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-md"
                    : "bg-purple-900 text-amber-300"
                }`}
              >
                {step.num}
              </div>
              <h3 className="font-serif font-bold text-xs sm:text-base text-slate-900 mb-1">
                {step.title}
              </h3>
              <p className="text-[10.5px] sm:text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
