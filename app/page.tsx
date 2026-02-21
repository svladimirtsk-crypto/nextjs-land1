"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const vkLink = "https://vk.me/yourcommunity";

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      {/* Background decorative shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-fuchsia-500/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute top-2/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px]" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/70 border-b border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
              NM
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Nail Master
              </span>
              <span className="text-xs text-gray-400 block -mt-1">
                Школа маникюра · Москва
              </span>
            </div>
            <span className="sm:hidden font-bold text-lg bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Nail Master
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
            <a href="#courses" className="hover:text-violet-300 transition-colors">
              Курсы
            </a>
            <a href="#technique" className="hover:text-violet-300 transition-colors">
              Техника
            </a>
            <a href="#instructor" className="hover:text-violet-300 transition-colors">
              Инструктор
            </a>
            <a href="#process" className="hover:text-violet-300 transition-colors">
              Обучение
            </a>
            <a href="#reviews" className="hover:text-violet-300 transition-colors">
              Отзывы
            </a>
            <a href="#faq" className="hover:text-violet-300 transition-colors">
              FAQ
            </a>
            <a href="#location" className="hover:text-violet-300 transition-colors">
              Локация
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={vkLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25"
            >
              Записаться
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-violet-500/10 transition-colors"
              aria-label="Меню"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div className="lg:hidden backdrop-blur-xl bg-gray-950/90 border-t border-violet-500/20 px-4 py-4">
            <nav className="flex flex-col gap-3 text-sm text-gray-300">
              {[
                ["#courses", "Курсы"],
                ["#technique", "Техника"],
                ["#instructor", "Инструктор"],
                ["#process", "Обучение"],
                ["#reviews", "Отзывы"],
                ["#faq", "FAQ"],
                ["#location", "Локация"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-violet-500/10 hover:text-violet-300 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold"
              >
                Записаться
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Очное обучение в Москве
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                Станьте мастером маникюра
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                с нуля за 7 дней
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Авторская программа обучения от инструктора с 10‑летним стажем.
              Жёсткий гель, архитектура, правильный опил — техники, которые
              дают стабильную носку и очередь из клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50"
              >
                Записаться
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-violet-500/30 text-violet-300 font-semibold hover:bg-violet-500/10 transition-all"
              >
                Посмотреть курсы
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 text-xs">📍</span>
                </div>
                Москва
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 text-xs">🎓</span>
                </div>
                Сертификат
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 text-xs">✨</span>
                </div>
                10+ лет опыта
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-500/10">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop"
                alt="Маникюр в Москве"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-xl bg-gray-950/50 rounded-2xl p-4 border border-violet-500/20">
                  <p className="text-sm text-violet-300 font-medium">
                    Берёзовая аллея 7Б, Москва
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Современная студия с полным оснащением
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
            Программы обучения
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
            2 курса — 2 уровня
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Выберите программу, которая подходит именно вам: с нуля до
            профессионала или апгрейд навыков за 1 день
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Course 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative backdrop-blur-xl bg-gray-900/60 rounded-3xl border border-violet-500/20 p-8 hover:border-violet-500/40 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold">
                  ПОПУЛЯРНЫЙ
                </span>
                <span className="text-sm text-gray-500">7 дней</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Топ-мастер маникюра
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  45 000 ₽
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-violet-300 font-semibold mb-2">
                  Кому подходит:
                </p>
                <p className="text-gray-400 text-sm">
                  Новичкам без опыта и начинающим мастерам, которые хотят
                  освоить профессию с нуля по авторской методике.
                </p>
              </div>

              <div className="mb-8 flex-1">
                <p className="text-sm text-violet-300 font-semibold mb-3">
                  Результаты:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Правильная постановка руки и инструмента",
                    "Аппаратный маникюр под любой тип кожи",
                    "Архитектура ногтя жёстким гелем",
                    "Опил формы ПОСЛЕ нанесения материала",
                    "Жёсткость свободного края = носка 4+ нед.",
                    "Работа с проблемными ногтями",
                    "Цветовое покрытие и дизайн",
                    "Сертификат об окончании курса",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-violet-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25"
              >
                Записаться на курс
              </a>
            </div>
          </div>

          {/* Course 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative backdrop-blur-xl bg-gray-900/60 rounded-3xl border border-violet-500/20 p-8 hover:border-violet-500/40 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-bold">
                  ЭКСПРЕСС
                </span>
                <span className="text-sm text-gray-500">1 день</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Повышение квалификации
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  10 000 ₽
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-violet-300 font-semibold mb-2">
                  Кому подходит:
                </p>
                <p className="text-gray-400 text-sm">
                  Практикующим мастерам, которые хотят освоить технику жёсткого
                  геля, архитектуру и авторский опил за 1 интенсивный день.
                </p>
              </div>

              <div className="mb-8 flex-1">
                <p className="text-sm text-violet-300 font-semibold mb-3">
                  Результаты:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Техника жёсткого геля на практике",
                    "Опил формы после нанесения материала",
                    "Идеальная архитектура и апекс",
                    "Разбор ваших ошибок с обратной связью",
                    "Увеличение носки покрытия у клиентов",
                    "Сертификат о повышении квалификации",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-violet-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 rounded-2xl border-2 border-violet-500/40 text-violet-300 font-bold hover:bg-violet-500/10 transition-all"
              >
                Записаться на курс
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technique */}
      <section
        id="technique"
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
            Авторская методика
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
            Почему жёсткий гель и опил после материала?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Техники, которые отличают профессионала от «очередного мастера»
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "💎",
              title: "Жёсткий гель",
              desc: "Создаёт прочную структуру ногтя, которая не прогибается и не ломается. Идеальная основа для любого дизайна.",
            },
            {
              icon: "📐",
              title: "Архитектура ногтя",
              desc: "Правильный апекс, ровная арка и С‑изгиб — три кита, на которых держится идеальная форма и носка.",
            },
            {
              icon: "✂️",
              title: "Опил ПОСЛЕ материала",
              desc: "Форма задаётся не до, а после нанесения геля. Это даёт ювелирную точность и симметрию каждого ногтя.",
            },
            {
              icon: "🛡️",
              title: "Жёсткость свободного края",
              desc: "Свободный край не гнётся и не отслаивается. Клиенты ходят 4–5 недель без сколов и отслоек.",
            },
            {
              icon: "⏰",
              title: "Стабильная носка 4+ недель",
              desc: "Правильная техника = довольный клиент, который возвращается и рекомендует вас подругам.",
            },
            {
              icon: "🚀",
              title: "Конкурентное преимущество",
              desc: "Менее 10% мастеров владеют этой техникой. Вы будете выделяться на рынке с первого дня.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group backdrop-blur-xl bg-gray-900/40 rounded-2xl border border-violet-500/10 p-6 hover:border-violet-500/30 hover:bg-gray-900/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section
        id="instructor"
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
      >
        <div className="backdrop-blur-xl bg-gray-900/40 rounded-3xl border border-violet-500/20 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=700&h=800&fit=crop&crop=face"
                alt="Инструктор Елена"
                className="w-full h-[400px] lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/40 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent lg:hidden" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6 w-fit">
                Ваш инструктор
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Елена
              </h2>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                  10+ лет в индустрии
                </span>
                <span className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                  Paris Nail
                </span>
                <span className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                  Инструктор
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Сертифицированный инструктор с дипломом{" "}
                <span className="text-violet-300 font-medium">
                  «Инструкторский курс. Преподаватель по маникюру»
                </span>{" "}
                от школы Paris Nail. Более 10 лет практики и преподавания.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Елена обучила сотни мастеров авторской технике жёсткого геля и
                правильного опила. Каждый ученик получает персональное
                внимание, разбор ошибок и поддержку после окончания курса.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  ["500+", "Учеников"],
                  ["10+", "Лет опыта"],
                  ["4.9", "Рейтинг"],
                ].map(([value, label], i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-xl bg-violet-500/5 border border-violet-500/10"
                  >
                    <div className="text-2xl font-extrabold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
            Этапы обучения
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
            Как проходит обучение
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Структурированная программа с упором на практику
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Теоретическая база",
              desc: "Изучаете строение ногтя, типы кожи, материалы и инструменты. Разбираете гигиену и безопасность.",
              color: "from-violet-500 to-indigo-500",
            },
            {
              step: "02",
              title: "Практика на типсах",
              desc: "Отрабатываете технику аппаратного маникюра и нанесения жёсткого геля на учебных моделях.",
              color: "from-indigo-500 to-violet-500",
            },
            {
              step: "03",
              title: "Работа на моделях",
              desc: "Практикуетесь на реальных руках под наблюдением инструктора с мгновенной обратной связью.",
              color: "from-violet-500 to-fuchsia-500",
            },
            {
              step: "04",
              title: "Экзамен и сертификат",
              desc: "Сдаёте финальную работу, получаете сертификат и рекомендации по старту карьеры.",
              color: "from-fuchsia-500 to-violet-500",
            },
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="backdrop-blur-xl bg-gray-900/40 rounded-2xl border border-violet-500/10 p-6 hover:border-violet-500/30 transition-all duration-300 h-full">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white font-extrabold text-xl mb-5 group-hover:scale-110 transition-transform`}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-violet-500/30">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
            Отзывы выпускников
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
            Что говорят ученицы
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Анастасия М.",
              text: "Пришла вообще без опыта — за 7 дней научилась делать маникюр, который держится у клиенток по 4 недели. Елена объясняет так, что даже сложные вещи становятся понятными.",
              course: "Топ-мастер маникюра",
            },
            {
              name: "Дарья К.",
              text: "Я уже работала мастером 2 года, но после повышения квалификации поняла, что делала кучу ошибок. Техника опила после материала — это game changer!",
              course: "Повышение квалификации",
            },
            {
              name: "Мария В.",
              text: "Студия оборудована на высшем уровне: всё новое, все материалы предоставляются. Атмосфера очень дружелюбная, нет ощущения, что тебя будут ругать за ошибки.",
              course: "Топ-мастер маникюра",
            },
            {
              name: "Ольга С.",
              text: "Через месяц после курса у меня уже была полная запись. Клиентки в восторге от носки — теперь я рекомендую этот курс всем подругам-мастерам.",
              course: "Топ-мастер маникюра",
            },
            {
              name: "Екатерина Л.",
              text: "Один день — и я полностью пересмотрела свой подход к архитектуре. Жёсткий гель реально меняет качество работы. Спасибо Елене за терпение!",
              course: "Повышение квалификации",
            },
            {
              name: "Виктория Н.",
              text: "Лучшие инвестиции в себя. Уже окупила курс за первый месяц работы. Техника жёсткого геля и правильный опил — это то, чему не учат на обычных курсах.",
              course: "Топ-мастер маникюра",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-gray-900/40 rounded-2xl border border-violet-500/10 p-6 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-violet-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-white">
                    {review.name}
                  </span>
                </div>
                <span className="text-xs text-violet-400/60 font-medium">
                  {review.course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
            Частые вопросы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Нужен ли опыт для курса «Топ-мастер маникюра»?",
              a: "Нет! Курс рассчитан на новичков без какого-либо опыта. Мы начинаем с самых основ — строения ногтя, работы с инструментом — и постепенно переходим к сложным техникам.",
            },
            {
              q: "Все материалы и инструменты предоставляются?",
              a: "Да, на время обучения мы предоставляем все необходимые материалы и инструменты. Также вы получите список рекомендаций для самостоятельной закупки после курса.",
            },
            {
              q: "Можно ли оплатить курс в рассрочку?",
              a: "Да, мы предлагаем рассрочку на курс «Топ-мастер маникюра». Напишите нам в VK для уточнения условий.",
            },
            {
              q: "Какой документ я получу?",
              a: "По окончании курса вы получите именной сертификат от школы с указанием пройденной программы и количества часов обучения.",
            },
            {
              q: "Сколько человек в группе?",
              a: "Мы набираем мини-группы до 4 человек, чтобы каждый ученик получил максимум внимания и персональную обратную связь от инструктора.",
            },
            {
              q: "Есть ли поддержка после обучения?",
              a: "Конечно! Все выпускники получают доступ в закрытый чат, где можно задать вопросы Елене, получить обратную связь по своим работам и найти моделей для практики.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group backdrop-blur-xl bg-gray-900/40 rounded-2xl border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-semibold">
                <span className="pr-4">{item.q}</span>
                <svg
                  className="w-5 h-5 text-violet-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Location */}
      <section
        id="location"
        className="relative z-10 max-w-7xl mx-auto px-4 py-20"
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
            Где мы находимся
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
            Локация
          </h2>
          <p className="text-gray-400 text-lg">
            Москва, Берёзовая аллея 7Б
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden border border-violet-500/20">
            <img
              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&h=500&fit=crop"
              alt="Москва"
              className="w-full h-[300px] lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="backdrop-blur-xl bg-gray-950/50 rounded-2xl p-5 border border-violet-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <p className="text-white font-bold">Nail Master Studio</p>
                    <p className="text-violet-300 text-sm">
                      Берёзовая аллея 7Б
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-gray-900/40 rounded-3xl border border-violet-500/20 p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              Как добраться
            </h3>
            <div className="space-y-5">
              {[
                {
                  icon: "🚇",
                  title: "На метро",
                  desc: "Станция «Отрадное» или «Владыкино» — далее 10 минут пешком или 1 остановка на автобусе.",
                },
                {
                  icon: "🚗",
                  title: "На автомобиле",
                  desc: "Берёзовая аллея 7Б, рядом есть бесплатная парковка во дворе и на прилегающих улицах.",
                },
                {
                  icon: "🚌",
                  title: "На автобусе",
                  desc: "Остановка «Берёзовая аллея» — маршруты 605, 628. Студия в 2 минутах ходьбы.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20">
              <p className="text-violet-300 text-sm font-medium mb-1">
                🕐 Время работы студии
              </p>
              <p className="text-gray-400 text-sm">
                Пн–Сб: 10:00 – 20:00 · Вс: по записи
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
          <div className="relative px-8 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Готовы начать?
            </h2>
            <p className="text-violet-100 text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Напишите <span className="font-bold text-white">«КУРС»</span> в
              сообщения нашей группы, и мы подберём ближайшую дату обучения
            </p>
            <a
              href={vkLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-violet-700 font-bold text-lg hover:bg-violet-50 transition-all shadow-2xl shadow-violet-900/30"
            >
              Написать в VK
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <p className="text-violet-200/60 text-sm mt-6">
              Ответим в течение 30 минут в рабочее время
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-violet-500/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                  NM
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Nail Master
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Школа профессионального маникюра в Москве. Обучаем технике
                жёсткого геля и авторскому опилу с 2014 года.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#courses" className="hover:text-violet-300 transition-colors">
                    Топ-мастер маникюра · 7 дней
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-violet-300 transition-colors">
                    Повышение квалификации · 1 день
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>📍 Москва, Берёзовая аллея 7Б</li>
                <li>🕐 Пн–Сб: 10:00 – 20:00</li>
                <li>
                  <a
                    href={vkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-300 transition-colors"
                  >
                    💬 Написать в VK
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-violet-300 transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300 transition-colors">
                    Договор оферты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300 transition-colors">
                    Реквизиты
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-violet-500/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© 2024 Nail Master. Все права защищены.</p>
            <p>Москва, Берёзовая аллея 7Б</p>
          </div>
        </div>
      </footer>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-gradient-to-t from-gray-950 via-gray-950/95 to-transparent">
        <a
          href={vkLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-base shadow-xl shadow-violet-500/30"
        >
          Записаться в VK
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Bottom padding for mobile fixed CTA */}
      <div className="h-20 md:h-0" />
    </div>
  );
}
