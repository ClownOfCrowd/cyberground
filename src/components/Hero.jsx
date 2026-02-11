import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fullText = "Technical Solutions. Cyber-Ready. Matrix-Level.";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 70;
    const timer = setInterval(() => {
      setDisplayed((prev) => {
        if (index >= fullText.length) {
          clearInterval(timer);
          return prev;
        }
        const next = fullText.slice(0, index + 1);
        index += 1;
        return next;
      });
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 min-h-[70vh] flex items-center">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
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
            Я разрабатываю высоконагруженные фронтенд‑интерфейсы, настраиваю
            DevOps‑процессы и создаю безопасные технические решения. Всё — как
            в системе, только без глюков.
          </p>

          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 18px rgba(0,255,65,0.9)",
            }}
            whileTap={{ scale: 0.96 }}
            className="mt-4 inline-flex items-center justify-center
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
            Enter the System
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

