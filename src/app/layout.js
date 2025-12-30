import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JeMotion Studio | Kinesitherapie & Osteopathie",
  description: "Herstel jouw natuurlijke balans. Een holistische benadering van beweging en welzijn. Wij combineren kinesitherapie en osteopathie voor duurzaam herstel.",

  openGraph: {
    title: "JeMotion Studio | Kinesitherapie & Osteopathie",
    description: "Herstel jouw natuurlijke balans. Een holistische benadering van beweging en welzijn.",
    url: "https://jemotionstudio.be",
    siteName: "JeMotion Studio",
    locale: "nl_BE",
    type: "website",
  },

  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
