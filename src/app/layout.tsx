import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Katpana Desert - Cold Desert of Skardu | Tourism & Beauty',
  description: 'Explore the breathtaking beauty of Katpana Desert in Skardu, Pakistan. One of the highest cold deserts in the world at 2,226 meters. Experience the unique landscape where desert meets snow-capped mountains. Get information about tours, travel tips, and the surreal beauty of this hidden gem in Gilgit-Baltistan.',
  keywords: 'Katpana Desert, Skardu tourism, Cold Desert Pakistan, Skardu travel, Gilgit-Baltistan tourism, Pakistan tourism, highest cold desert, Skardu beauty, Katpana Desert tour, Skardu travel guide, Pakistan desert tourism, Skardu attractions, Katpana Desert photos, Skardu valley, Pakistan tourism guide',
  openGraph: {
    title: 'Katpana Desert - Cold Desert of Skardu | Tourism & Beauty',
    description: 'Discover the surreal beauty of Katpana Desert in Skardu, Pakistan. Experience the unique landscape where desert meets snow-capped mountains. Get information about tours and travel tips.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg/800px-Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg',
        width: 800,
        height: 600,
        alt: 'Katpana Desert Skardu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katpana Desert - Cold Desert of Skardu | Tourism & Beauty',
    description: 'Discover the surreal beauty of Katpana Desert in Skardu, Pakistan. Experience the unique landscape where desert meets snow-capped mountains.',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg/800px-Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg'],
  },
  alternates: {
    canonical: 'https://katpanadesert.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="KN_23B6Yy7IgUYqPaRbbDqujUTPOk6yBIVThhW4lQ0Q"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              name: "Katpana Desert",
              description:
                "Katpana Desert is a unique cold desert in Skardu, Pakistan, situated at an altitude of 2,226 meters above sea level. It is one of the highest deserts in the world, featuring pristine white sand dunes surrounded by snow-capped mountains.",
              image: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg/800px-Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Skardu_Katpana_Desert.jpg/1280px-Skardu_Katpana_Desert.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Desert%2C_Water_and_Moutain_in_Katpana_Skardu_Baltitsan.jpg/800px-Desert%2C_Water_and_Moutain_in_Katpana_Skardu_Baltitsan.jpg",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Skardu",
                addressRegion: "Gilgit-Baltistan",
                addressCountry: "Pakistan",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "35.2971",
                longitude: "75.6333",
              },
              touristType: [
                "Nature Lovers",
                "Photography Enthusiasts",
                "Adventure Seekers",
              ],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Altitude",
                  value: "2,226 meters above sea level",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Best Time to Visit",
                  value: "April to October",
                },
              ],
              potentialAction: {
                "@type": "TourAction",
                name: "Visit Katpana Desert",
                url: "https://katpanadesert.com",
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {children}
        <Script
          id="tawk-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {};
              Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script");
                var s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/682b067e6392a3190c780a1b/1irk12o62";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
} 