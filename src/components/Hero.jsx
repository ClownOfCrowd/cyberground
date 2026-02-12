import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/LanguageContext.jsx";

const Hero = () => {
  const { translations } = useI18n();
  const fullText = translations.hero.title;
  const [displayed, setDisplayed] = useState("");
  const [isTitleDone, setIsTitleDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const speed = 70;

    setDisplayed("");
    setIsTitleDone(false);

    const timer = setInterval(() => {
      setDisplayed((prev) => {
        if (index >= fullText.length) {
          clearInterval(timer);
          setIsTitleDone(true);
          return prev;
        }
        const next = fullText.slice(0, index + 1);
        index += 1;
        return next;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative z-10 min-h-[70vh] flex items-center">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-mono text-[#00FF41]
                       drop-shadow-[0_0_12px_rgba(0,255,65,0.8)]
                       leading-snug"
          >
            {displayed}
            <span className="inline-block w-[0.6ch] bg-[#00FF41] ml-1 animate-pulse h-[1.1em] align-middle" />
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg text-[#a3ffb8] max-w-xl
                       bg-black/60 border border-[#00FF41]/40 rounded-md
                       px-4 py-3 font-mono
                       shadow-[0_0_18px_rgba(0,255,65,0.25)]"
          >
            {translations.hero.description}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 18px rgba(0,255,65,0.9)",
              }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center
                         px-6 py-3 rounded-md font-mono text-sm sm:text-base
                         border border-[#00FF41] text-[#0d0d0d]
                         bg-[#00FF41]
                         shadow-[0_0_20px_rgba(0,255,65,0.7)]
                         focus:outline-none focus:ring-2 focus:ring-[#00FF41]/80
                         transition-colors duration-150"
              onClick={() => {
                const el = document.getElementById("services-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {translations.hero.cta}
            </motion.button>
            {isTitleDone && (
              <motion.span
                key={fullText}
                className="text-2xl sm:text-3xl"
                initial={{ opacity: 0, y: -40 }}
                animate={{
                  opacity: [0, 1, 1, 1],
                  y: [-40, -12, 0, -4],
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeOut",
                }}
              >
                🐇
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

