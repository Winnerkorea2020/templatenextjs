import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Ticker from "@/components/Ticker";

export const metadata = {
  title: `CSI-Play `,
  description: "Generated by CSI-Play",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen pt-16 bg-gray-300/70 ">
        <Header />

        <main className="flex-1 mb-2">
          <div className="mt-2">
            <Ticker />
          </div>
          <section className="section h-full">
            {/* Left Side Section Level 1*/}
            {children}
            {/* Right Side Section */}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
