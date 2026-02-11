import React from "react";
import MatrixBackground from "./components/MatrixBackground.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div
      className="relative min-h-screen bg-[#0d0d0d] text-[#00FF41]
                 font-mono overflow-x-hidden"
    >
      <MatrixBackground />

      <main className="relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-10">
        <header className="mb-10 flex items-center justify-between">
          <div
            className="text-sm sm:text-base text-[#00FF41]
                       drop-shadow-[0_0_10px_rgba(0,255,65,0.7)]"
          >
            &gt; /cyber/landing
          </div>
          <div className="hidden sm:flex gap-4 text-xs text-[#a3ffb8]">
            <span className="border border-[#00FF41]/50 px-2 py-0.5 rounded">
              status: ready
            </span>
            <span className="border border-[#00FF41]/50 px-2 py-0.5 rounded">
              stack: react-vite-tailwind
            </span>
          </div>
        </header>

        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default App;

