import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport = {
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://cabztours.com'),
  title: {
    default: "Cabz Tours | #1 Tour Packages & Taxi Services in Kozhikode, Kerala",
    template: "%s | Cabz Tours"
  },
  description: "Cabz Tours — Kerala's most trusted travel agency in Kozhikode. Book premium tour packages, pilgrimage tours, airport pickup, outstation taxi & group travel. Call +91 97443 12600.",
  keywords: ["tour packages Kerala", "cab service Kozhikode", "taxi Calicut", "Kerala pilgrimage tours", "airport pickup Kozhikode", "outstation taxi Kerala", "Cabz Tours", "holiday packages Kerala", "Munnar tour", "Alleppey backwater"],
  authors: [{ name: "Cabz Tours" }],
  creator: "Cabz Tours",
  publisher: "Cabz Tours",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cabztours.com/",
    title: "Cabz Tours | Best Tour Packages & Taxi in Kozhikode Kerala",
    description: "Kerala's most trusted travel agency. Premium tour packages, pilgrimage tours, airport pickup & outstation taxi from Kozhikode. Book now!",
    siteName: "Cabz Tours",
    images: [
      {
        url: "/images/ai-logo.png",
        width: 1200,
        height: 630,
        alt: "Cabz Tours Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cabz_tours",
    title: "Cabz Tours | Best Tour Packages & Taxi in Kerala",
    description: "Kerala's most trusted travel agency. Premium tour packages, pilgrimage tours, airport pickup & outstation taxi from Kozhikode.",
    images: ["/images/ai-logo.png"],
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kozhikode, Kerala, India",
    "geo.position": "11.2588;75.7804",
    "ICBM": "11.2588, 75.7804"
  }
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://cabztours.com/#business",
  "name": "Cabz Tours",
  "image": "https://cabztours.com/images/ai-logo.png",
  "logo": "https://cabztours.com/images/ai-logo.png",
  "url": "https://cabztours.com/",
  "telephone": "+919744312600",
  "email": "cabztours@gmail.com",
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 00:00-23:59",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "areaServed": ["Kerala", "Kozhikode", "Calicut", "South India"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "DOOR NO: 1613, 2/1149/A/104, HILITE BUISNESS PARK, IRINGALLUR",
    "addressLocality": "Kozhikode",
    "addressRegion": "Kerala",
    "postalCode": "673014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.2588,
    "longitude": 75.7804
  },
  "sameAs": [
    "https://www.instagram.com/cabz_tours/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cabz Tours Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kerala Tour Packages"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Airport Pickup & Drop"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pilgrimage Tours"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Outstation Taxi"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Group Travel"}}
    ]
  }
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cabztours.com/#website",
  "name": "Cabz Tours",
  "url": "https://cabztours.com/",
  "description": "Kerala's premier travel agency for tour packages, taxi services, and pilgrimage tours",
  "publisher": {"@id": "https://cabztours.com/#business"},
  "potentialAction": {
    "@type": "SearchAction",
    "target": {"@type": "EntryPoint", "urlTemplate": "https://cabztours.com/?q={search_term_string}"},
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/ai-logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
