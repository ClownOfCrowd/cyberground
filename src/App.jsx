import React from "react";
import MatrixBackground from "./components/MatrixBackground.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import { useI18n } from "./i18n/LanguageContext.jsx";

const App = () => {
  const { translations } = useI18n();

  return (
    <div
      className="relative min-h-screen bg-[#0d0d0d] text-[#00FF41]
                 font-mono overflow-x-hidden"
    >
      <MatrixBackground />

      <main className="relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-10">
        <header className="mb-10 flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div
              className="text-sm sm:text-base text-[#00FF41]
                         drop-shadow-[0_0_10px_rgba(0,255,65,0.7)]"
            >
              &gt; {translations.header.path}
            </div>
            <div className="flex sm:hidden gap-2 text-[10px] text-[#a3ffb8]">
              <span className="border border-[#00FF41]/40 px-2 py-0.5 rounded">
                {translations.header.status}
              </span>
            </div>
          </div>
          <div className="relative flex items-center gap-3">
            <div className="hidden sm:flex gap-2 text-xs text-[#a3ffb8]">
              <span className="border border-[#00FF41]/50 px-2 py-0.5 rounded">
                {translations.header.status}
              </span>
              <span className="border border-[#00FF41]/50 px-2 py-0.5 rounded">
                {translations.header.stack}
              </span>
            </div>
            <LanguageSwitcher />
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

