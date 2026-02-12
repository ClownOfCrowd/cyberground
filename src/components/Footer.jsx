import React from "react";
import { useI18n } from "../i18n/LanguageContext.jsx";

const Footer = () => {
  const year = new Date().getFullYear();
  const { translations } = useI18n();

  return (
    <footer
      className="relative z-10 border-t border-[#00FF41]/40 mt-10 pt-4 pb-6
                 text-xs sm:text-sm text-[#a3ffb8] font-mono
                 bg-black/70"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[#00FF41]">
            {translations.footer.systemStatusLabel}{" "}
            <span className="text-[#a3ffb8]">
              {translations.footer.systemStatusOnline}
            </span>
          </span>
          <span className="text-[10px] sm:text-xs text-[#7adf9c]">
            © {year} {translations.footer.copyrightPrefix}
          </span>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1">
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#00FF41] transition-colors"
          >
            {translations.footer.emailLabel} youremail@example.com
          </a>
          <a
            href="https://t.me/your_handle"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FF41] transition-colors"
          >
            {translations.footer.telegramLabel} @your_handle
          </a>
          <a
            href="https://github.com/your_github"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FF41] transition-colors"
          >
            {translations.footer.githubLabel} your_github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


