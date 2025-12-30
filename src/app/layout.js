import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JE Motion Studio | Kinesitherapie & Osteopathie in Gent",
  description:
    "Herstel jouw natuurlijke balans. Een holistische benadering van beweging en welzijn. Wij combineren kinesitherapie en osteopathie voor duurzaam herstel.",
  metadataBase: new URL("https://jemotionstudio.be"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JE Motion Studio | Kinesitherapie & Osteopathie in Gent",
    description:
      "Herstel jouw natuurlijke balans. Een holistische benadering van beweging en welzijn.",
    url: "https://jemotionstudio.be",
    siteName: "JE Motion Studio",
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JE Motion Studio | Kinesitherapie & Osteopathie in Gent",
    description:
      "Herstel jouw natuurlijke balans. Een holistische benadering van beweging en welzijn.",
  },
  robots: {
    index: true,
    follow: true,
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
