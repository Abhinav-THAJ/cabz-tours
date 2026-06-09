import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cabz Tours | #1 Tour Packages & Taxi Services in Kozhikode, Kerala",
  description: "Cabz Tours — Kerala's most trusted travel agency in Kozhikode. Book premium tour packages, pilgrimage tours, airport pickup, outstation taxi & group travel. Call +91 97443 12600.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/ai-logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
