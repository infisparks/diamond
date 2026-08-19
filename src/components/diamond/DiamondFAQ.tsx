"use client";

import React, { useState } from "react";

export function DiamondFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "1. Kya aapke paas 100% original branded Pakistani suits milte hain?",
      a: "Haan bilkul 100% genuine! Hum official distributors aur direct brand networks se stock laate hain. Har lawn, silk dupatta aur embroidery patch authentic aur heavy density fabric ka hota hai. Zero duplicate guarantee.",
    },
    {
      q: "2. Kya main dukan pe hi custom stitching karwa sakti hoon?",
      a: "Haan! Siddiqui Coutures ke in-house master tailors dukan pe hi available hote hain. Aap unstitched suit select karein aur turant neck design, lace attachment, inner lining aur perfect fitting ke liye naap de sakte hain.",
    },
    {
      q: "3. Resellers aur shops ke liye wholesale order kaise hota hai?",
      a: "Hum all-India boutique owners aur online resellers ko low MOQ (sirf 10–15 suits) se supply karte hain. Hamare distributor desk se connect karke rozana PDF catalogue, set-wise rate list aur bulk transport facility le sakte hain.",
    },
    {
      q: "4. Agar hum Mumbai ke bahar rehte hain toh kaise order karein?",
      a: "Aap WhatsApp video call ya digital catalogue se suits pasand kar sakte hain. Hum express courier tracking ke saath safe packing karke poore Bharat me delivery dete hain.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-purple-700 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            SAWAL &amp; JAWAB
          </span>
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-slate-900 mt-2">
            Aapke Sawal, Hamare Jawab
          </h2>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-3.5 sm:p-5 text-left font-serif font-bold text-xs sm:text-base text-slate-900 flex justify-between items-center cursor-pointer"
              >
                <span>{faq.q}</span>
                <i
                  className={`fa-solid fa-chevron-down text-purple-600 transition-transform duration-200 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {openIdx === idx && (
                <div className="p-3.5 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-200 leading-relaxed animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
