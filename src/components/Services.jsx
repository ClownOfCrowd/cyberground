import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/LanguageContext.jsx";

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  const { translations } = useI18n();
  const { title, subtitle, sections } = translations.services;

  return (
    <section id="services-section" className="relative z-10 py-12 sm:py-16">
      <div className="mb-8 sm:mb-10">
        <h2
          className="text-2xl sm:text-3xl font-mono text-[#00FF41]
                     drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]"
        >
          {title}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#a3ffb8] max-w-md font-mono">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="bg-black/85 border border-[#00FF41]/40 rounded-md
                       p-4 sm:p-5 font-mono
                       shadow-[0_0_18px_rgba(0,255,65,0.2)]
                       hover:border-[#00FF41]/70 transition-colors duration-150"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={index}
          >
            <h3 className="text-base sm:text-lg text-[#00FF41] mb-2">
              {section.title}
            </h3>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-[#e1ffe9]">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-[#00FF41] shadow-[0_0_6px_rgba(0,255,65,0.9)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

