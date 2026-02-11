import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t border-[#00FF41]/40 mt-10 pt-4 pb-6
                 text-xs sm:text-sm text-[#a3ffb8] font-mono
                 bg-black/70"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[#00FF41]">
            &gt; System Status: <span className="text-[#a3ffb8]">ONLINE</span>
          </span>
          <span className="text-[10px] sm:text-xs text-[#7adf9c]">
            © {year} Cyber Tech Services. All rights reserved.
          </span>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1">
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#00FF41] transition-colors"
          >
            email: youremail@example.com
          </a>
          <a
            href="https://t.me/your_handle"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FF41] transition-colors"
          >
            telegram: @your_handle
          </a>
          <a
            href="https://github.com/your_github"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FF41] transition-colors"
          >
            github: your_github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

