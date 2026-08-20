import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { FB_PIXEL_ID } from "@/lib/fpixel";

const siteDomain = "https://diamons.infiplus.in";
const ogImageUrl = `${siteDomain}/product/royal-violet-gold-embroidered-suit.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteDomain),
  title: "Diamond Boutique | Pakistani Style Indian Pure Cotton Suits & In-House Master Tailoring Mumbai",
  description:
    "Mumbai ki premier destination for Pakistani style Indian pure cotton suits, luxury unstitched lawn, ready-made designer collections, in-house master stitching, aur B2B wholesale distributorship in Attar Gali.",
  keywords:
    "Diamond Boutique, Pakistani style suits Mumbai, Indian pure cotton lawn, master tailor Attar Gali, wholesale Pakistani style suits, lawn suits Mumbai",
  openGraph: {
    title: "Diamond Boutique | Pakistani Style Indian Pure Cotton Suits & In-House Master Tailoring Mumbai",
    description:
      "Mumbai ki premier destination for Pakistani style Indian pure cotton suits, luxury unstitched lawn, in-house master stitching, aur B2B wholesale distributorship in Attar Gali.",
    url: siteDomain,
    siteName: "Diamond Boutique",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Diamond Boutique – Pakistani Style Indian Pure Cotton Suits Mumbai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Boutique | Pakistani Style Indian Pure Cotton Suits & In-House Master Tailoring Mumbai",
    description:
      "Mumbai ki premier destination for Pakistani style Indian pure cotton suits, in-house master stitching, aur B2B wholesale distributorship in Attar Gali.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <head>
        {/* Google Fonts: Inter & Playfair Display */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        {/* FontAwesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="w-full min-h-full bg-slate-50 text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
        {children}

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
