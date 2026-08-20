"use client";

import React, { useState } from "react";

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  tag: string;
  desc: string;
  fabric: string;
  dupatta: string;
  bottom: string;
  stitching: string;
  img: string;
  types: string[];
}

export const PRODUCTS_DATA: Record<string, ProductItem> = {
  violet: {
    id: "violet",
    title: "Royal Violet & Gold Resham Lawn Suit",
    category: "Heavy Resham • 3-Piece",
    badge: "Pure Cotton",
    tag: "Hot Seller",
    desc: "Deep royal violet pure lawn featuring intricate antique gold Resham threadwork on the neckline and sleeves, scalloped embroidered daman, luxury botanical printed silk dupatta, and structured violet cigarette trousers.",
    fabric: "High-Density 80x80 Pure Lawn",
    dupatta: "Premium Digital Printed Silk Dupatta (2.5 Mtr)",
    bottom: "Dyed Lawn Cigarette Trouser (2.5 Mtr)",
    stitching: "In-House Master Stitching Available at Counter",
    img: "/product/royal-violet-gold-embroidered-suit.webp",
    types: ["unstitched", "readymade"],
  },
  ivory: {
    id: "ivory",
    title: "Ivory Schiffli Lawn & Pink Floral Dupatta",
    category: "Chikankari • 3-Piece",
    badge: "Schiffli Cutwork",
    tag: "Summer Best",
    desc: "Breathable pure white lawn with all-over delicate schiffli chikankari cutwork, pastel pink floral resham embroidery on neck and sleeves, baby pink scalloped lace hem, floral printed pure chiffon dupatta & tailored white trousers.",
    fabric: "Pure Schiffli Cutwork 80x80 Lawn",
    dupatta: "Soft Floral Printed Chiffon Dupatta (2.5 Mtr)",
    bottom: "Solid White Pure Lawn Trouser (2.5 Mtr)",
    stitching: "Custom Neck Pattern & Trouser Fitting Available",
    img: "/product/ivory-pink-schiffli-lawn-suit.webp",
    types: ["unstitched", "readymade"],
  },
  crimson: {
    id: "crimson",
    title: "Cream & Crimson Red Resham Suit",
    category: "Ruby Resham • 3-Piece",
    badge: "Festive Edition",
    tag: "Tailor Fit",
    desc: "Regal off-white breathable lawn with rich crimson ruby red floral threadwork along the center panel and sleeves, contrast red hem piping, designer ruby red trousers, and matching border-finished printed dupatta.",
    fabric: "Luxury Breathable Lawn with Fine Weave",
    dupatta: "Contrast Border Heavy Lawn Dupatta (2.5 Mtr)",
    bottom: "Crimson Red Solid Trouser (2.5 Mtr)",
    stitching: "Master Tailor In-House Fitting Guarantee",
    img: "/product/crimson-ruby-embroidered-suit.webp",
    types: ["unstitched", "stitching"],
  },
  blue: {
    id: "blue",
    title: "Sapphire Royal Blue Cutwork Lawn Suit",
    category: "Digital Lawn • 3-Piece",
    badge: "Trending Blue",
    tag: "Wholesale",
    desc: "Royal sapphire blue 80x80 pure lawn adorned with intricate white floral booti work, decorative sleeve cuff lace, scalloped daman border, matching blue cigarette trousers, and a lightweight printed dupatta.",
    fabric: "High-Density 80x80 Premium Lawn",
    dupatta: "Digital Printed Lightweight Lawn Dupatta",
    bottom: "Sapphire Blue Matching Trouser (2.5 Mtr)",
    stitching: "Custom Sleeves & Daman Lace Finishing",
    img: "/product/sapphire-blue-luxury-lawn-suit.webp",
    types: ["unstitched", "wholesale"],
  },
  wine: {
    id: "wine",
    title: "Deep Wine Maroon Heavy Embroidered Suit",
    category: "Tone-on-Tone • 3-Piece",
    badge: "Partywear",
    tag: "Heavy Work",
    desc: "Opulent deep wine maroon lawn fabric with dense all-over tone-on-tone and pink resham floral embroidery, cutwork hem borders, matching dyed trousers, and a printed floral silk dupatta designed for weddings and festive evenings.",
    fabric: "Dense Heavy Embroidered Luxury Lawn",
    dupatta: "Floral Botanical Silk Dupatta (2.5 Mtr)",
    bottom: "Deep Maroon Tailored Trouser (2.5 Mtr)",
    stitching: "Lining & Inner Attachment Available",
    img: "/product/wine-maroon-heavy-embroidered-suit.webp",
    types: ["readymade", "stitching"],
  },
  lavender: {
    id: "lavender",
    title: "Lavender Lilac Botanical Lawn Suit",
    category: "Pastel Lawn • 3-Piece",
    badge: "Pastel Luxury",
    tag: "2026 Lot",
    desc: "Soothing pastel lavender lilac lawn with vertical schiffli embroidered stripes, botanical floral garden motifs, delicate triangle lace trims on sleeves and daman, pure printed silk dupatta, and matching lilac bottoms.",
    fabric: "Ultra-Soft Pastel Summer Lawn",
    dupatta: "Botanical Garden Printed Silk Dupatta (2.5 Mtr)",
    bottom: "Lavender Lilac Pure Cotton Trouser (2.5 Mtr)",
    stitching: "In-House Master Stitching Available at Counter",
    img: "/product/lavender-lilac-botanical-lawn-suit.webp",
    types: ["unstitched", "wholesale"],
  },
};

interface DiamondCollectionsProps {
  onSelectProduct: (product: ProductItem) => void;
}

export function DiamondCollections({ onSelectProduct }: DiamondCollectionsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Sabhi (6)" },
    { id: "readymade", label: "👗 Ready-Made" },
    { id: "unstitched", label: "🧵 Pure Cotton Lawn" },
    { id: "stitching", label: "✂️ Master Stitching" },
    { id: "wholesale", label: "📦 Wholesale Lots" },
  ];

  const productList = Object.values(PRODUCTS_DATA);
  const filteredProducts =
    activeCategory === "all"
      ? productList
      : productList.filter((item) => item.types.includes(activeCategory));

  return (
    <section id="collections" className="py-10 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <span className="text-purple-700 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            2026 LATEST DESIGNER ARRIVALS
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Pakistani Style Indian Pure Cotton Suits &amp; Stitching
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-1.5">
            Dress par click karein aur full look, fabric details aur master fitting options dekhein.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2.5 mb-6 sm:mb-8 justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 font-bold text-[11px] sm:text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "border-purple-700 bg-purple-700 text-white shadow-sm"
                  : "border-slate-300 bg-white text-slate-700 hover:border-purple-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid: 2 columns on Mobile, 3 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 flex flex-col group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Product Image & Badges */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute top-2 left-2 right-2 flex justify-between items-start pointer-events-none">
                  <span className="bg-purple-950/90 backdrop-blur-md text-amber-300 font-extrabold text-[8px] sm:text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider border border-purple-400/40 shadow-sm">
                    {product.badge}
                  </span>
                  <span className="bg-purple-700 text-white font-bold text-[7.5px] sm:text-[9.5px] px-1.5 py-0.5 rounded-md uppercase shadow-sm">
                    {product.tag}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur-md text-purple-950 font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <i className="fa-solid fa-eye text-purple-700"></i> Full Dress Dekhein
                  </span>
                </div>
              </div>

              {/* Details & WhatsApp CTA */}
              <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[9px] sm:text-[11px] font-bold text-purple-700 uppercase tracking-wider line-clamp-1">
                    {product.category}
                  </div>
                  <h3 className="font-serif font-bold text-xs sm:text-base text-slate-900 mt-0.5 line-clamp-2 leading-snug group-hover:text-purple-700 transition-colors">
                    {product.title}
                  </h3>
                  <div className="mt-1.5 hidden xs:flex items-center gap-1 text-[9.5px] sm:text-xs text-slate-500 line-clamp-1">
                    <i className="fa-solid fa-circle-check text-green-600 text-[9px]"></i>
                    <span>{product.fabric}</span>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between gap-1.5">
                  <span className="text-[10px] sm:text-xs font-extrabold text-purple-900 flex items-center gap-1">
                    <i className="fa-solid fa-eye text-purple-600"></i> Details
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const msg = encodeURIComponent(
                        `Hi Diamond Boutique, mujhe ${product.title} order karna hai.`
                      );
                      window.open(`https://wa.me/917709439688?text=${msg}`, "_blank");
                    }}
                    className="bg-green-600 hover:bg-green-500 text-white font-bold p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    <span className="hidden sm:inline">Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Full Catalogue Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="https://wa.me/917709439688?text=Hi%20Diamond%20Boutique,%20please%20send%20me%20your%20complete%20PDF%20catalog%20with%20prices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-950 hover:bg-purple-900 text-amber-300 font-bold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl border border-purple-500/40 text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <i className="fa-solid fa-file-pdf text-red-400"></i> Full WhatsApp PDF Catalogue &amp; Price List Mangwayen →
          </a>
        </div>
      </div>
    </section>
  );
}
