"use client";

import React, { useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { event as fbEvent, customEvent as fbCustomEvent, getPreservedQueryString } from "@/lib/fpixel";
import { DiamondHeader } from "@/components/diamond/DiamondHeader";
import { DiamondHero } from "@/components/diamond/DiamondHero";
import { DiamondTrustMetrics } from "@/components/diamond/DiamondTrustMetrics";
import { DiamondCollections, ProductItem } from "@/components/diamond/DiamondCollections";
import { DiamondComparison } from "@/components/diamond/DiamondComparison";
import { DiamondWholesale } from "@/components/diamond/DiamondWholesale";
import { DiamondProcess } from "@/components/diamond/DiamondProcess";
import { DiamondReviews } from "@/components/diamond/DiamondReviews";
import { DiamondLocation } from "@/components/diamond/DiamondLocation";
import { DiamondFAQ } from "@/components/diamond/DiamondFAQ";
import { DiamondFinalCTA } from "@/components/diamond/DiamondFinalCTA";
import { DiamondFooter } from "@/components/diamond/DiamondFooter";
import { DiamondQuickViewModal } from "@/components/diamond/DiamondQuickViewModal";
import { DiamondStickyCTA } from "@/components/diamond/DiamondStickyCTA";
import { BookingModal } from "@/components/BookingModal";

function URLParamsHandler({
  onConfigureBooking,
  onCountryChange,
}: {
  onConfigureBooking: (config: {
    isOpen: boolean;
    step: 1 | 2 | 3 | 4;
    leadId: string | null;
    createdDate: string | null;
    campaignName: string | null;
  }) => void;
  onCountryChange: (isUS: boolean) => void;
}) {
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const countryParam = (searchParams.get("c") || searchParams.get("country") || "").toLowerCase();
    onCountryChange(countryParam === "us");

    const pathname = window.location.pathname;
    const stepParam = searchParams.get("step");
    const bookingParam =
      searchParams.get("booking") ||
      searchParams.get("book") ||
      searchParams.get("form") ||
      searchParams.get("openBooking");
    const leadIdParam = searchParams.get("leadId");
    const createdDateParam = searchParams.get("createdDate");
    const campaignParam = searchParams.get("campaign");

    let targetStep: 1 | 2 | 3 | 4 | null = null;

    if (pathname === "/form") targetStep = 1;
    else if (pathname === "/survey") targetStep = 2;
    else if (pathname === "/meeting") targetStep = 3;
    else if (pathname === "/success") targetStep = 4;
    else if (stepParam === "survey" || stepParam === "2") targetStep = 2;
    else if (stepParam === "meeting" || stepParam === "3") targetStep = 3;
    else if (stepParam === "4" || stepParam === "success") targetStep = 4;
    else if (
      stepParam === "1" ||
      stepParam === "contact" ||
      stepParam === "form" ||
      stepParam === "book" ||
      bookingParam
    )
      targetStep = 1;
    else if (campaignParam) targetStep = 1;

    if (targetStep !== null) {
      onConfigureBooking({
        isOpen: true,
        step: targetStep,
        leadId: leadIdParam,
        createdDate: createdDateParam,
        campaignName: campaignParam,
      });
    }
  }, [searchParams, onConfigureBooking, onCountryChange]);

  return null;
}

export default function Home({
  defaultStep,
  defaultOpen = false,
}: {
  defaultStep?: 1 | 2 | 3 | 4;
  defaultOpen?: boolean;
} = {}) {
  const [isUS, setIsUS] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [bookingConfig, setBookingConfig] = useState<{
    isOpen: boolean;
    step: 1 | 2 | 3 | 4;
    leadId: string | null;
    createdDate: string | null;
    campaignName: string | null;
  }>({
    isOpen: defaultOpen || !!defaultStep,
    step: defaultStep || 1,
    leadId: null,
    createdDate: null,
    campaignName: null,
  });

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  }, []);

  const handleOpenBooking = useCallback(
    (source?: string) => {
      if (typeof window !== "undefined") {
        const preserved = getPreservedQueryString();
        window.history.replaceState({}, "", window.location.pathname + preserved);
      }

      fbEvent("Lead", {
        content_name: source || "CTA Button Click",
        currency: isUS ? "USD" : "INR",
        value: 0,
      });
      fbCustomEvent("ButtonClick", {
        button_name: source || "Book Store Session CTA",
      });

      setBookingConfig({
        isOpen: true,
        step: 1,
        leadId: null,
        createdDate: null,
        campaignName: null,
      });
    },
    [isUS]
  );

  const handleCloseBooking = useCallback(() => {
    setBookingConfig({
      isOpen: false,
      step: 1,
      leadId: null,
      createdDate: null,
      campaignName: null,
    });
  }, []);

  const handleConfigureBooking = useCallback(
    (config: {
      isOpen: boolean;
      step: 1 | 2 | 3 | 4;
      leadId: string | null;
      createdDate: string | null;
      campaignName: string | null;
    }) => {
      setBookingConfig((prev) => {
        if (
          prev.isOpen === config.isOpen &&
          prev.step === config.step &&
          prev.leadId === config.leadId &&
          prev.createdDate === config.createdDate &&
          prev.campaignName === config.campaignName
        ) {
          return prev;
        }
        return config;
      });
    },
    []
  );

  const handleCountryChange = useCallback((usState: boolean) => {
    setIsUS(usState);
  }, []);

  const scrollToSection = (id: string) => {
    if (typeof document !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full text-slate-900 bg-slate-50 min-h-screen antialiased selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      {/* URL Parameter & Country Handler */}
      <Suspense fallback={null}>
        <URLParamsHandler
          onConfigureBooking={handleConfigureBooking}
          onCountryChange={handleCountryChange}
        />
      </Suspense>

      {/* Header */}
      <DiamondHeader onBookClick={handleOpenBooking} />

      {/* Hero Section */}
      <DiamondHero
        onBookClick={handleOpenBooking}
        onExploreClick={() => scrollToSection("collections")}
      />

      {/* Trust & Social Proof Strip */}
      <DiamondTrustMetrics />

      {/* Collections Catalogue */}
      <DiamondCollections onSelectProduct={(prod) => setSelectedProduct(prod)} />

      {/* Market Problem vs Diamond Boutique Standard */}
      <DiamondComparison />

      {/* Wholesale Portal & Margin Calculator */}
      <DiamondWholesale onBookClick={handleOpenBooking} />

      {/* 4-Step Process */}
      <DiamondProcess />

      {/* Customer Reviews */}
      <DiamondReviews />

      {/* Physical Store Location */}
      <DiamondLocation onBookClick={handleOpenBooking} onShowToast={showToast} />

      {/* FAQ Accordion */}
      <DiamondFAQ />

      {/* Final Call to Action */}
      <DiamondFinalCTA onBookClick={handleOpenBooking} />

      {/* Footer */}
      <DiamondFooter />

      {/* Sticky Mobile Bar & Floating WhatsApp Button */}
      <DiamondStickyCTA onBookClick={handleOpenBooking} />

      {/* Full Dress Quick View Modal */}
      <DiamondQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBookTrial={(productName) => handleOpenBooking(`Trial for ${productName}`)}
      />

      {/* Multi-Step Booking & Consultation Modal */}
      <BookingModal
        isOpen={bookingConfig.isOpen}
        onClose={handleCloseBooking}
        initialStep={bookingConfig.step}
        initialLeadId={bookingConfig.leadId}
        initialCreatedDate={bookingConfig.createdDate}
        campaignName={bookingConfig.campaignName || "selflance"}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white px-5 py-3 rounded-full text-xs font-bold shadow-2xl border border-purple-400/40 z-50 flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <i className="fa-solid fa-circle-check text-amber-400"></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
