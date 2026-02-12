import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const SUPPORTED_LANGS = ["es", "en", "ru"];

const translations = {
  es: {
    header: {
      path: "/ciber/landing",
      status: "estado: listo",
      stack: "stack: react-vite-tailwind",
    },
    hero: {
      title: "Cyberground. Soluciones cibernéticas para ti y tu negocio. Sigue al conejo blanco.",
      description:
        "Desarrollo interfaces frontend de alto rendimiento, configuro procesos DevOps y diseño soluciones técnicas seguras. Todo funciona como en el sistema, pero sin glitches.",
      cta: "Entrar en el sistema",
    },
    services: {
      title: "Servicios disponibles_",
      subtitle:
        "Tres bloques clave: desarrollo web, ciberseguridad y automatización con IA.",
      sections: [
        {
          title: "Desarrollo web",
          items: [
            "Sitios de una sola página (landings)",
            "Sitios multipágina",
            "Blogs",
            "Tiendas online (e‑commerce)",
            "Integración de pasarelas de pago",
          ],
        },
        {
          title: "Ciberseguridad",
          items: [
            "Auditoría de vulnerabilidades",
            "Informe detallado de vulnerabilidades y plan de mitigación",
            "Pentesting legal de intrusión con autorización oficial (white hat)",
          ],
        },
        {
          title: "Automatización de procesos de negocio con IA",
          items: [
            "Autoposting y programación de contenidos",
            "Chatbots y auto‑respuestas",
            "Gestión de redes sociales",
            "Informes y estadísticas sobre clientes y negocio",
            "Integración de soluciones de IA listas o a medida según tu caso",
          ],
        },
      ],
    },
    footer: {
      systemStatusLabel: "> Estado del sistema:",
      systemStatusOnline: "ONLINE",
      copyrightPrefix: "Cyber Tech Services. Todos los derechos reservados.",
      emailLabel: "email:",
      telegramLabel: "telegram:",
      githubLabel: "github:",
    },
  },
  en: {
    header: {
      path: "/cyber/landing",
      status: "status: ready",
      stack: "stack: react-vite-tailwind",
    },
    hero: {
      title:
        "Cyberground. Cyber solutions for you and your business. Follow the white rabbit.",
      description:
        "I build high‑performance frontend interfaces, set up DevOps pipelines and design secure technical solutions. Everything runs like a system, without glitches.",
      cta: "Enter the System",
    },
    services: {
      title: "Available Services_",
      subtitle:
        "Three core blocks: web development, cybersecurity and AI‑powered automation.",
      sections: [
        {
          title: "Web Development",
          items: [
            "Single‑page sites (landing pages)",
            "Multi‑page websites",
            "Blogs",
            "Online stores (e‑commerce)",
            "Payment gateway integration",
          ],
        },
        {
          title: "Cybersecurity",
          items: [
            "Vulnerability assessment",
            "Detailed vulnerability report and remediation plan",
            "Legal penetration testing with official authorization (white hat)",
          ],
        },
        {
          title: "Business Process Automation with AI",
          items: [
            "Autoposting and content scheduling",
            "Chatbots and auto‑replies",
            "Social media management",
            "Client and business analytics & reporting",
            "Integration of ready‑made or custom AI solutions",
          ],
        },
      ],
    },
    footer: {
      systemStatusLabel: "> System Status:",
      systemStatusOnline: "ONLINE",
      copyrightPrefix: "Cyber Tech Services. All rights reserved.",
      emailLabel: "email:",
      telegramLabel: "telegram:",
      githubLabel: "github:",
    },
  },
  ru: {
    header: {
      path: "/cyber/landing",
      status: "статус: готово",
      stack: "стек: react-vite-tailwind",
    },
    hero: {
      title:
        "Cyberground. Кибер‑решения для вас и вашего бизнеса. Следуйте за белым кроликом.",
      description:
        "Я разрабатываю высоконагруженные фронтенд‑интерфейсы, настраиваю DevOps‑процессы и создаю безопасные технические решения. Всё — как в системе, только без глюков.",
      cta: "Войти в систему",
    },
    services: {
      title: "Доступные услуги_",
      subtitle:
        "Три основных блока: веб‑разработка, кибербезопасность и автоматизация с ИИ.",
      sections: [
        {
          title: "Веб‑разработка",
          items: [
            "Одностраничные сайты (лендинги)",
            "Многостраничные сайты",
            "Блоги",
            "Интернет‑магазины",
            "Интеграция платёжных систем",
          ],
        },
        {
          title: "Кибербезопасность",
          items: [
            "Аудит на наличие уязвимостей",
            "Подробный отчёт об уязвимостях и план их устранения",
            "Легальный пентест на проникновение в систему с официального разрешения (white hacker)",
          ],
        },
        {
          title: "Автоматизация бизнес‑процессов с ИИ",
          items: [
            "Автопостинг и планирование контента",
            "Чат‑боты и автоответы",
            "Ведение социальных сетей",
            "Отчёты и статистика по клиентам и бизнесу",
            "Интеграция ИИ‑решений (готовых или кастомных под ваш запрос)",
          ],
        },
      ],
    },
    footer: {
      systemStatusLabel: "> Статус системы:",
      systemStatusOnline: "ONLINE",
      copyrightPrefix:
        "Cyber Tech Services. Все права защищены.",
      emailLabel: "email:",
      telegramLabel: "telegram:",
      githubLabel: "github:",
    },
  },
};

const detectInitialLanguage = () => {
  if (typeof window === "undefined") return "es";
  try {
    const stored = window.localStorage.getItem("lang");
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      return stored;
    }
  } catch {
    // ignore
  }

  const nav =
    (typeof navigator !== "undefined" && navigator.language?.toLowerCase()) ||
    "";

  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("ru")) return "ru";
  return "es";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = {
    lang,
    setLang,
    translations: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
};

