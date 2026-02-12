import React, { useState } from "react";
import { useI18n } from "../i18n/LanguageContext.jsx";

const LANG_OPTIONS = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full
                   border border-[#00FF41]/70 bg-black/80
                   shadow-[0_0_10px_rgba(0,255,65,0.6)]
                   hover:border-[#00FF41] hover:shadow-[0_0_14px_rgba(0,255,65,0.9)]
                   transition-colors duration-150"
        aria-label="Change language"
      >
        <span className="text-base sm:text-lg leading-none text-[#00FF41] drop-shadow-[0_0_8px_rgba(0,255,65,0.9)]">
          🌐
        </span>
      </button>

      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 max-w-[80vw]
                     sm:left-auto sm:right-0 sm:translate-x-0
                     rounded-md border border-[#00FF41]/60
                     bg-black/95 shadow-[0_0_22px_rgba(0,255,65,0.8)]
                     backdrop-blur-sm overflow-hidden text-xs font-mono z-30"
        >
          {LANG_OPTIONS.map((option) => {
            const isActive = option.code === lang;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2
                            text-left transition-colors duration-150
                            ${
                              isActive
                                ? "bg-[#00FF41] text-[#0d0d0d]"
                                : "text-[#e1ffe9] hover:bg-[#00FF41]/10"
                            }`}
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className={`h-[6px] w-[6px] rounded-full
                                ${
                                  isActive
                                    ? "bg-[#0d0d0d]"
                                    : "bg-[#00FF41] shadow-[0_0_8px_rgba(0,255,65,0.9)]"
                                }`}
                  />
                  <span>{option.name}</span>
                </span>
                <span
                  className={`text-[10px]
                              ${
                                isActive ? "text-[#0d0d0d]" : "text-[#7adf9c]"
                              }`}
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;



