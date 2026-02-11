import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Engineering",
    description:
      "React, Vite, Tailwind. Оптимизированные интерфейсы, мгновенная загрузка, продуманный UX.",
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD, контейнеризация, инфраструктура как код. Ваш код разворачивается, как по скрипту.",
  },
  {
    title: "Security & Performance",
    description:
      "Аудит, защита, профилирование. Сервисы работают быстро и не пробиваются с первого запроса.",
  },
  {
    title: "API & Integrations",
    description:
      "Проектирование REST/GraphQL API, интеграции со сторонними сервисами и платёжными системами.",
  },
  {
    title: "Architecture Consulting",
    description:
      "Помощь в выборе стеков, дизайне архитектуры и построении масштабируемых решений.",
  },
  {
    title: "Tech Leadership",
    description:
      "Настройка процессов, код‑ревью, менторство команды и повышение качества разработки.",
  },
];

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
  return (
    <section id="services-section" className="relative z-10 py-12 sm:py-16">
      <div className="mb-8 sm:mb-10">
        <h2
          className="text-2xl sm:text-3xl font-mono text-[#00FF41]
                     drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]"
        >
          Available Services_
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#a3ffb8] max-w-md font-mono">
          Выбирайте нужный вам уровень доступа: от быстрого прототипа до
          продакшн‑инфраструктуры.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
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
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#e1ffe9]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

