"use client";

import React from "react";
import { ProductItem } from "./DiamondCollections";

interface DiamondQuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onBookTrial: (productName: string) => void;
}

export function DiamondQuickViewModal({
  product,
  onClose,
  onBookTrial,
}: DiamondQuickViewModalProps) {
  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hi Diamond Boutique,\nMujhe is suit ke baare mein order/inquire karna hai:\n*${product.title}*\nPhoto: ${product.img}\nDetails send karein.`
  );
  const waUrl = `https://wa.me/917709439688?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] sm:max-h-[88vh] overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-slate-100 bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="bg-purple-100 text-purple-900 font-extrabold text-[9.5px] sm:text-[10.5px] px-2.5 py-0.5 rounded-full uppercase border border-purple-200">
              Indian Pure Cotton
            </span>
            <span className="text-[10px] text-green-700 font-bold hidden xs:inline">
              <i className="fa-solid fa-circle-check mr-1"></i> In-Stock Attar Gali
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 grid sm:grid-cols-12 gap-5 items-start">
          {/* Dress Image */}
          <div className="sm:col-span-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner group relative aspect-[4/5] sm:aspect-square">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
              <i className="fa-solid fa-magnifying-glass-plus mr-1 text-amber-400"></i> Full 3-Piece Look
            </div>
          </div>

          {/* Details & Action */}
          <div className="sm:col-span-6 space-y-3.5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] sm:text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                {product.category}
              </div>
              <h3 className="font-serif font-bold text-base sm:text-xl text-slate-900 mt-0.5 leading-snug">
                {product.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {product.desc}
              </p>

              {/* Specifications Box */}
              <div className="mt-3.5 p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs space-y-1.5">
                <div className="font-bold text-purple-950 text-[11px] border-b border-purple-200/60 pb-1 mb-1 flex items-center gap-1.5">
                  <i className="fa-solid fa-gem text-amber-600"></i> Fabric &amp; Design Specs:
                </div>
                <div className="text-slate-700 text-[11px] flex items-start gap-1.5">
                  <span className="font-semibold text-purple-900 shrink-0">🧵 Fabric:</span>
                  <span>{product.fabric}</span>
                </div>
                <div className="text-slate-700 text-[11px] flex items-start gap-1.5">
                  <span className="font-semibold text-purple-900 shrink-0">🌸 Dupatta:</span>
                  <span>{product.dupatta}</span>
                </div>
                <div className="text-slate-700 text-[11px] flex items-start gap-1.5">
                  <span className="font-semibold text-purple-900 shrink-0">👖 Bottom:</span>
                  <span>{product.bottom}</span>
                </div>
                <div className="text-slate-700 text-[11px] flex items-start gap-1.5">
                  <span className="font-semibold text-purple-900 shrink-0">✂️ Fitting:</span>
                  <span>{product.stitching}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-500 active:scale-95 text-white font-extrabold py-3 rounded-xl text-xs text-center flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-base"></i> Direct WhatsApp Pe Order Karein
              </a>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookTrial(product.title);
                }}
                className="w-full bg-purple-950 hover:bg-purple-900 text-amber-300 font-bold py-2.5 rounded-xl text-xs text-center transition-all flex items-center justify-center gap-1.5 border border-purple-400/30 cursor-pointer"
              >
                <i className="fa-solid fa-calendar-check text-[11px]"></i> Shop Pe Trial / Fitting Book Karein
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
