"use client";

import React from "react";

export function DiamondReviews() {
  const reviews = [
    {
      initials: "AK",
      name: "Ayesha Khan",
      location: "Retail Shopper • Bandra, Mumbai",
      avatarBg: "bg-purple-900 text-amber-300",
      text: '"Pehle Crawford Market se suit leke Bandra ke tailors ke chakkar kaatne padte the. Diamond Boutique ne sab solve kar diya! Fabric 100% original lawn hai aur master tailor ne pehle trial me hi perfect fitting bana di."',
    },
    {
      initials: "RS",
      name: "Rukhsar Shaikh",
      location: "Boutique Owner • Pune Reseller",
      avatarBg: "bg-amber-600 text-slate-950",
      text: '"Hum Pune me online boutique chalate hain aur 1 saal se bulk lots mangwa rahe hain. Inke wholesale rates se hume achha margin milta hai aur video catalogue forward karke sell karna bohot aasan ho jata hai!"',
    },
    {
      initials: "FA",
      name: "Fatima Ansari",
      location: "Festive Shopper • South Mumbai",
      avatarBg: "bg-purple-950 text-amber-400",
      text: '"Mumbai ki garmi aur humidity me aisa breathable lawn milna bohot mushkil hota hai jo colour na chhodhe. Inke original suits ka fall aur look bilkul royal aata hai. Eid aur weddings ke liye best choice hai."',
    },
  ];

  return (
    <section id="reviews" className="py-10 sm:py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-purple-700 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            CUSTOMER FEEDBACK
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Shoppers Aur Resellers Ka Bharosa
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-1.5">
            Kyun log Diamond Boutique aur Siddiqui Coutures ko 4.9 rating dete hain?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-xs mb-2 sm:mb-3">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                  {rev.text}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-200">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-bold flex items-center justify-center text-xs ${rev.avatarBg}`}
                >
                  {rev.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{rev.name}</div>
                  <div className="text-[10px] text-slate-500">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
