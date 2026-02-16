import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Boost Fixter LLC",
  description: "BoostFixter - Your awesome website",
  icons: {
    icon: "/BoostFixtericon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased primaryText font-nunito  bg-white">
  
          <header className="fixed top-0 left-0 z-50 w-full bg-white">
            <Navbar />
          </header>
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
      </body>
    </html>
  );
}


