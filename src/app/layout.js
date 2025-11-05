
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata = {
  title: "Renovise",
  description: "Renovise coördineert alles zodat elk onderdeel perfect bij elkaar past. Met één aanspreekpunt en een doordacht traject bouwen we aan een woning die stijgt in comfort, daalt in energieverbruik en futureproof is voor de komende generaties.",

  openGraph: {
    title: "Renovise",
    description: "Renovise coördineert alles zodat elk onderdeel perfect bij elkaar past. Met één aanspreekpunt en een doordacht traject bouwen we aan een woning die stijgt in comfort, daalt in energieverbruik en futureproof is voor de komende generaties.",
    url: "https://renovise.be",
    siteName: "Renovise",
    locale: "nl_BE",
    type: "website",
  },

  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <Script
          id="intro-video-check"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var hasShown = sessionStorage.getItem('introVideoShown');
                  if (hasShown === 'true') {
                    document.documentElement.setAttribute('data-intro-shown', 'true');
                  } else {
                    document.documentElement.setAttribute('data-intro-shown', 'false');
                  }
                } catch (e) {
                  // Fallback if sessionStorage is not available
                  document.documentElement.setAttribute('data-intro-shown', 'false');
                }
              })();
            `,
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
