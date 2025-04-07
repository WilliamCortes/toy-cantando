import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

// Tipografía personalizada
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos del sitio
export const metadata: Metadata = {
  title: "Los Mejores Cuentos Infantiles para leer en familia",
  description:
    "Los mejores cuentos infantiles para niños y niñas. Cuentos clásicos para dormir y muchos más que tiene Toy Cantando",
  metadataBase: new URL("https://toycantando.com"),
  alternates: {
    canonical: "/cuentos-infantiles-para-ninos/",
  },
  openGraph: {
    title: "Los Mejores Cuentos Infantiles para leer en familia",
    description:
      "Los mejores cuentos infantiles para niños y niñas. Cuentos clásicos para dormir y muchos más que tiene Toy Cantando",
    url: "https://toycantando.com/cuentos-infantiles-para-ninos/",
    siteName: "Toy Cantando canciones infantiles - La Vaca Lola",
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: "https://toycantando.com/wp-content/uploads/2022/12/LOGO-TOY.png",
        width: 1200,
        height: 630,
        alt: "Toy Cantando - La Vaca Lola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Mejores Cuentos Infantiles para leer en familia",
    description:
      "Los mejores cuentos infantiles para niños y niñas. Cuentos clásicos para dormir y muchos más que tiene Toy Cantando",
    images: ["https://toycantando.com/wp-content/uploads/2022/12/LOGO-TOY.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "cuentos infantiles",
    "cuentos para niños",
    "cuentos para dormir",
    "toy cantando",
  ],
  applicationName: "Toy Cantando - Canciones infantiles",
  authors: [{ name: "Toy Cantando" }],
  generator: "Next.js",
  other: {
    "twitter:label1": "Tiempo de lectura",
    "twitter:data1": "1 minuto",
    "article:publisher": "https://www.facebook.com/ToyCantando",
    "article:modified_time": "2025-02-13T00:44:51+00:00",
  },
  verification: {
    other: {
      "facebook-domain-verification": ["your-verification-code"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Marcado estructurado JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id":
                    "https://toycantando.com/cuentos-infantiles-para-ninos/",
                  url: "https://toycantando.com/cuentos-infantiles-para-ninos/",
                  name: "Los Mejores Cuentos Infantiles para leer en familia",
                  isPartOf: {
                    "@id": "https://toycantando.com/#website",
                  },
                  datePublished: "2023-01-11T19:47:03+00:00",
                  dateModified: "2025-02-13T00:44:51+00:00",
                  description:
                    "Los mejores cuentos infantiles para niños y niñas. Cuentos clásicos para dormir y muchos más que tiene Toy Cantando",
                  breadcrumb: {
                    "@id":
                      "https://toycantando.com/cuentos-infantiles-para-ninos/#breadcrumb",
                  },
                  inLanguage: "es",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: [
                        "https://toycantando.com/cuentos-infantiles-para-ninos/",
                      ],
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id":
                    "https://toycantando.com/cuentos-infantiles-para-ninos/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Portada",
                      item: "https://toycantando.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Cuentos Mágicos",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://toycantando.com/#website",
                  url: "https://toycantando.com/",
                  name: "Toy Cantando canciones infantiles - La Vaca Lola",
                  publisher: {
                    "@id": "https://toycantando.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://toycantando.com/?s={search_term_string}",
                    },
                    "query-input": {
                      "@type": "PropertyValueSpecification",
                      valueRequired: true,
                      valueName: "search_term_string",
                    },
                  },
                  inLanguage: "es",
                },
                {
                  "@type": "Organization",
                  "@id": "https://toycantando.com/#organization",
                  name: "Toy Cantando - Canciones infantiles",
                  url: "https://toycantando.com/",
                  logo: {
                    "@type": "ImageObject",
                    inLanguage: "es",
                    "@id": "https://toycantando.com/#/schema/logo/image/",
                    url: "https://toycantando.com/wp-content/uploads/2022/12/LOGO-TOY.png",
                    contentUrl:
                      "https://toycantando.com/wp-content/uploads/2022/12/LOGO-TOY.png",
                    width: 192,
                    height: 80,
                    caption: "Toy Cantando - Canciones infantiles",
                  },
                  image: {
                    "@id": "https://toycantando.com/#/schema/logo/image/",
                  },
                  sameAs: [
                    "https://www.facebook.com/ToyCantando",
                    "https://www.instagram.com/toy_cantando/",
                    "https://www.youtube.com/user/toycantando",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
