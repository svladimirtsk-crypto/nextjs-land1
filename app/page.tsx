"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

/* ───────────────────────── Scroll-reveal hook ───────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────── Main page ──────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const vkLink = "https://vk.me/yourcommunity";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── helpers ─── */
  const StarRow = () => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, j) => (
        <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden antialiased">
      {/* ════════════════ Ambient background blobs ════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-52 -left-52 w-[750px] h-[750px] rounded-full bg-violet-600/20 blur-[160px] animate-pulse" />
        <div className="absolute top-1/4 -right-72 w-[600px] h-[600px] rounded-full bg-fuchsia-500/15 blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[800px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute top-2/3 right-1/3 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      {/* ════════════════ Sticky glass header ════════════════ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-gray-950/60 shadow-[0_8px_32px_rgba(124,58,237,0.12)] border-b border-violet-500/10"
            : "backdrop-blur-xl bg-gray-950/30 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
              NM
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="font-bold text-lg bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                Nail Master
              </span>
              <span className="text-[11px] text-gray-500 block -mt-0.5 tracking-wide">
                Школа маникюра · Москва
              </span>
            </div>
            <span className="sm:hidden font-bold text-lg bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              Nail Master
            </span>
          </a>

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-gray-400">
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
                className="relative py-1 hover:text-violet-300 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-violet-400 after:to-fuchsia-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={vkLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50 hover:-translate-y-0.5"
            >
              Записаться
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-violet-500/10 transition-colors"
              aria-label="Меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="backdrop-blur-2xl bg-gray-950/80 border-t border-violet-500/10 px-4 py-5">
            <nav className="flex flex-col gap-1 text-sm text-gray-300">
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
                  className="py-2.5 px-4 rounded-xl hover:bg-violet-500/10 hover:text-violet-300 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-center py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-violet-600/20"
              >
                Записаться
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ════════════════ Hero ════════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-7 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Очное обучение в Москве
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] mb-7 tracking-tight">
              <span className="bg-gradient-to-r from-white via-violet-100 to-fuchsia-100 bg-clip-text text-transparent">
                Станьте мастером маникюра
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                с нуля за 7 дней
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-9 max-w-xl">
              Авторская программа от инструктора с&nbsp;10‑летним стажем.
              Жёсткий гель, архитектура, правильный опил&nbsp;— техники,
              которые дают стабильную носку и очередь из&nbsp;клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-9 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-xl shadow-violet-600/30 hover:shadow-violet-500/50 hover:-translate-y-0.5"
              >
                Записаться
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full border border-violet-500/25 text-violet-300 font-semibold hover:bg-violet-500/10 hover:border-violet-500/40 transition-all"
              >
                Посмотреть курсы
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-11 text-sm text-gray-500">
              {[
                ["📍", "Москва"],
                ["🎓", "Сертификат"],
                ["✨", "10+ лет опыта"],
              ].map(([icon, text], i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-violet-500/15 flex items-center justify-center text-base backdrop-blur-sm">
                    {icon}
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/25 to-fuchsia-600/25 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-violet-500/15 shadow-2xl shadow-violet-900/30">
                {/* PROMPT для Hero-картинки:
                  ─ NanoBanana / GPT-4o Image: «Elegant manicure workspace in a modern Moscow loft studio. Soft violet neon accent lighting, white marble table, professional nail tools arranged neatly, a woman's hand with perfect glossy manicure resting on the table. Shallow depth of field, warm mood, editorial beauty photography.»
                  ─ Reve / Vidu / Photon: «Cinematic close-up of a luxury nail salon in Moscow: violet ambient glow, glass shelves with nail polish bottles, bokeh city lights through floor-to-ceiling windows at dusk. Hyper-realistic, 8k, soft shadows.»
                  ─ SeedReam / Ideogram: «Premium manicure studio interior, purple neon signage reading 'Nail Master', modern minimalist design, marble and gold accents, evening city skyline visible through large windows. Professional product photography style.»
                  ─ Lucid: «Overhead flat-lay of manicure tools on a violet velvet surface: UV lamp, gel polish bottles, nail files, cuticle pusher, gold accents. Luxury beauty branding photo, soft directional light.»
                */}
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop"
                  alt="Маникюр в Москве"
                  className="w-full h-[360px] md:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="backdrop-blur-2xl bg-white/5 rounded-2xl p-4 border border-white/10 shadow-xl">
                    <p className="text-sm text-violet-200 font-semibold">
                      Берёзовая аллея 7Б, Москва
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Современная студия с полным оснащением
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ Courses ════════════════ */}
      <section id="courses" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 backdrop-blur-md">
              Программы обучения
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
              2 курса — 2 уровня
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам: с нуля до профессионала или апгрейд навыков за 1 день
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Course 1 */}
          <Reveal delay={100}>
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative backdrop-blur-xl bg-white/[0.03] rounded-[2rem] border border-violet-500/15 p-8 md:p-10 hover:border-violet-400/30 transition-all duration-500 shadow-xl shadow-violet-950/20 hover:shadow-2xl hover:shadow-violet-900/30 h-full flex flex-col">
                <div className="flex items-center justify-between mb-7">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold shadow-md shadow-violet-600/30">
                    ⭐ ПОПУЛЯРНЫЙ
                  </span>
                  <span className="text-sm text-gray-500 font-medium">7 дней</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Топ-мастер маникюра
                </h3>
                <div className="flex items-baseline gap-2 mb-7">
                  <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                    45 000 ₽
                  </span>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-violet-300 font-semibold mb-2">Кому подходит:</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Новичкам без опыта и начинающим мастерам, которые хотят освоить профессию с нуля по авторской методике.
                  </p>
                </div>
                <div className="mb-9 flex-1">
                  <p className="text-sm text-violet-300 font-semibold mb-3">Результаты:</p>
                  <ul className="space-y-3">
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
                          <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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
                  className="block text-center py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
                >
                  Записаться на курс
                </a>
              </div>
            </div>
          </Reveal>

          {/* Course 2 */}
          <Reveal delay={250}>
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative backdrop-blur-xl bg-white/[0.03] rounded-[2rem] border border-violet-500/15 p-8 md:p-10 hover:border-violet-400/30 transition-all duration-500 shadow-xl shadow-violet-950/20 hover:shadow-2xl hover:shadow-violet-900/30 h-full flex flex-col">
                <div className="flex items-center justify-between mb-7">
                  <span className="px-4 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs font-bold">
                    ⚡ ЭКСПРЕСС
                  </span>
                  <span className="text-sm text-gray-500 font-medium">1 день</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Повышение квалификации
                </h3>
                <div className="flex items-baseline gap-2 mb-7">
                  <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                    10 000 ₽
                  </span>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-violet-300 font-semibold mb-2">Кому подходит:</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Практикующим мастерам, которые хотят освоить технику жёсткого геля, архитектуру и авторский опил за 1 интенсивный день.
                  </p>
                </div>
                <div className="mb-9 flex-1">
                  <p className="text-sm text-violet-300 font-semibold mb-3">Результаты:</p>
                  <ul className="space-y-3">
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
                          <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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
                  className="block text-center py-4 rounded-2xl border-2 border-violet-500/30 text-violet-300 font-bold hover:bg-violet-500/10 hover:border-violet-400/50 transition-all hover:-translate-y-0.5"
                >
                  Записаться на курс
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ Technique ════════════════ */}
      <section id="technique" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 backdrop-blur-md">
              Авторская методика
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
              Почему жёсткий гель и опил после материала?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Техники, которые отличают профессионала от «очередного мастера»
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {/* PROMPT для иконок карточек:
            ─ Lucid / Ideogram: «Minimal 3D icon on transparent background: [faceted diamond / architectural blueprint / precision scissors / shield with checkmark / clock with sparkle / rocket launch]. Soft violet glass material, subtle glow, isometric view, 512x512.»
            ─ NanoBanana / GPT-4o: «Glossy 3D emoji-style icon of a [diamond / drafting compass / scissors cutting precisely / protective shield / stopwatch / rocket], purple glass material with inner glow, dark background, centered, icon design.»
          */}
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
            <Reveal key={i} delay={i * 100}>
              <div className="group backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-violet-500/10 p-7 hover:border-violet-400/25 transition-all duration-500 shadow-xl shadow-violet-950/10 hover:shadow-2xl hover:shadow-violet-900/20 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-500 border border-violet-500/10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════ Instructor ════════════════ */}
      <section id="instructor" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="backdrop-blur-xl bg-white/[0.02] rounded-[2rem] border border-violet-500/15 overflow-hidden shadow-2xl shadow-violet-950/20">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                {/* PROMPT для фото инструктора:
                  ─ Reve / Vidu / Photon: «Professional portrait of a confident female nail instructor in her 30s, wearing a white lab coat, standing in a modern nail studio. Soft violet ambient lighting, blurred nail tools in background. Editorial beauty photography, natural skin, warm smile, shallow DOF.»
                  ─ NanoBanana / GPT-4o: «Studio portrait of an elegant Russian woman manicure instructor, professional white uniform, soft purple lighting, modern beauty salon background with violet neon accents. Photorealistic, 4k.»
                  ─ SeedReam: «Waist-up photo of a female beauty instructor holding a nail file, confident pose, clean modern salon environment, soft purple and white color palette, professional headshot style.»
                */}
                <img
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=700&h=800&fit=crop&crop=face"
                  alt="Инструктор Елена"
                  className="w-full h-[420px] lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/50 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent lg:hidden" />
              </div>
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-7 w-fit backdrop-blur-md">
                  Ваш инструктор
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Елена</h2>
                <div className="flex flex-wrap gap-2.5 mb-7">
                  {["10+ лет в индустрии", "Paris Nail", "Инструктор"].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Сертифицированный инструктор с дипломом{" "}
                  <span className="text-violet-300 font-medium">
                    «Инструкторский курс. Преподаватель по маникюру»
                  </span>{" "}
                  от школы Paris Nail. Более 10 лет практики и преподавания.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Елена обучила сотни мастеров авторской технике жёсткого геля и правильного опила. Каждый ученик получает персональное внимание, разбор ошибок и поддержку после окончания курса.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    ["500+", "Учеников"],
                    ["10+", "Лет опыта"],
                    ["4.9", "Рейтинг"],
                  ].map(([value, label], i) => (
                    <div
                      key={i}
                      className="text-center p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 backdrop-blur-sm"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════ Process / Steps ════════════════ */}
      <section id="process" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 backdrop-blur-md">
              Этапы обучения
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
              Как проходит обучение
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Структурированная программа с&nbsp;упором на практику
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {[
            {
              step: "01",
              title: "Теоретическая база",
              desc: "Изучаете строение ногтя, типы кожи, материалы и инструменты. Разбираете гигиену и безопасность.",
              gradient: "from-violet-500 to-indigo-500",
            },
            {
              step: "02",
              title: "Практика на типсах",
              desc: "Отрабатываете технику аппаратного маникюра и нанесения жёсткого геля на учебных моделях.",
              gradient: "from-indigo-500 to-violet-500",
            },
            {
              step: "03",
              title: "Работа на моделях",
              desc: "Практикуетесь на реальных руках под наблюдением инструктора с мгновенной обратной связью.",
              gradient: "from-violet-500 to-fuchsia-500",
            },
            {
              step: "04",
              title: "Экзамен и сертификат",
              desc: "Сдаёте финальную работу, получаете сертификат и рекомендации по старту карьеры.",
              gradient: "from-fuchsia-500 to-violet-500",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="relative group h-full">
                <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-violet-500/10 p-7 hover:border-violet-400/25 transition-all duration-500 shadow-xl shadow-violet-950/10 hover:shadow-2xl hover:shadow-violet-900/20 hover:-translate-y-1 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white font-extrabold text-xl mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/30 transition-all duration-500`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-7 text-violet-500/25 -translate-y-1/2">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════ Reviews ════════════════ */}
      <section id="reviews" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 backdrop-blur-md">
              Отзывы выпускников
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
              Что говорят ученицы
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {[
            {
              name: "Анастасия М.",
              text: "Пришла вообще без опыта — за 7 дней научилась делать маникюр, который держится у клиенток по 4 недели. Елена объясняет так, что даже сложные вещи становятся понятными.",
              course: "Топ-мастер",
            },
            {
              name: "Дарья К.",
              text: "Я уже работала мастером 2 года, но после повышения квалификации поняла, что делала кучу ошибок. Техника опила после материала — это game changer!",
              course: "Повышение",
            },
            {
              name: "Мария В.",
              text: "Студия оборудована на высшем уровне: всё новое, все материалы предоставляются. Атмосфера очень дружелюбная, нет ощущения, что тебя будут ругать за ошибки.",
              course: "Топ-мастер",
            },
            {
              name: "Ольга С.",
              text: "Через месяц после курса у меня уже была полная запись. Клиентки в восторге от носки — теперь я рекомендую этот курс всем подругам-мастерам.",
              course: "Топ-мастер",
            },
            {
              name: "Екатерина Л.",
              text: "Один день — и я полностью пересмотрела свой подход к архитектуре. Жёсткий гель реально меняет качество работы. Спасибо Елене за терпение!",
              course: "Повышение",
            },
            {
              name: "Виктория Н.",
              text: "Лучшие инвестиции в себя. Уже окупила курс за первый месяц работы. Техника жёсткого геля и правильный опил — это то, чему не учат на обычных курсах.",
              course: "Топ-мастер",
            },
          ].map((review, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-violet-500/10 p-7 hover:border-violet-400/25 transition-all duration-500 shadow-xl shadow-violet-950/10 hover:shadow-2xl hover:shadow-violet-900/20 hover:-translate-y-1 h-full flex flex-col">
                <StarRow />
                <p className="text-gray-300 text-sm leading-relaxed my-5 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-violet-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-violet-500/20">
                      {review.name.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-white">{review.name}</span>
                  </div>
                  <span className="text-xs text-violet-400/50 font-medium">{review.course}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════ FAQ ════════════════ */}
      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 backdrop-blur-md">
              Частые вопросы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
              FAQ
            </h2>
          </div>
        </Reveal>

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
            <Reveal key={i} delay={i * 60}>
              <details className="group backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-violet-500/10 hover:border-violet-400/25 transition-all duration-300 shadow-lg shadow-violet-950/5">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-semibold select-none">
                  <span className="pr-4">{item.q}</span>
                  <svg
                    className="w-5 h-5 text-violet-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{item.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════ Location ════════════════ */}
      <section id="location" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 backdrop-blur-md">
              Где мы находимся
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-4">
              Локация
            </h2>
            <p className="text-gray-400 text-lg">Москва, Берёзовая аллея 7Б</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal delay={100}>
            <div className="relative rounded-[2rem] overflow-hidden border border-violet-500/15 shadow-2xl shadow-violet-950/20 h-full min-h-[320px]">
              {/* PROMPT для фото локации:
                ─ Reve / Photon / Vidu: «Aerial twilight photo of a Moscow residential area with birch-lined avenue, modern apartment buildings, warm streetlights, violet dusk sky. Cinematic drone photography, soft focus on greenery.»
                ─ NanoBanana / GPT-4o: «Modern Moscow neighborhood at golden hour, tree-lined street with birch trees, contemporary buildings, cozy urban atmosphere, purple-orange sky. Photorealistic cityscape.»
                ─ Ideogram: «Map-style illustration of Moscow's SVAO district, stylized buildings and streets, highlighted pin at "Berezovaya Alleya 7B", purple and white color scheme, clean vector aesthetic.»
              */}
              <img
                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&h=500&fit=crop"
                alt="Москва"
                className="w-full h-full min-h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-2xl bg-white/5 rounded-2xl p-5 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
                      📍
                    </div>
                    <div>
                      <p className="text-white font-bold">Nail Master Studio</p>
                      <p className="text-violet-200 text-sm">Берёзовая аллея 7Б</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="backdrop-blur-xl bg-white/[0.03] rounded-[2rem] border border-violet-500/15 p-8 md:p-10 shadow-xl shadow-violet-950/15 h-full">
              <h3 className="text-xl font-bold text-white mb-7">Как добраться</h3>
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
                    className="flex items-start gap-4 p-4 rounded-xl bg-violet-500/5 border border-violet-500/8 hover:border-violet-500/20 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-violet-500/8 to-fuchsia-500/8 border border-violet-500/15">
                <p className="text-violet-300 text-sm font-medium mb-1">🕐 Время работы студии</p>
                <p className="text-gray-400 text-sm">Пн–Сб: 10:00 – 20:00 · Вс: по записи</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ Final CTA ════════════════ */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-violet-900/30">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700" />
            <div className="absolute inset-0 opacity-30" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='rotate(30)'%3E%3Cpath d='M0 30h60' stroke='rgba(255,255,255,0.07)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3C/svg%3E\")"}} />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 blur-2xl translate-y-1/2 -translate-x-1/3" />
            <div className="relative px-8 py-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
                Готовы начать?
              </h2>
              <p className="text-violet-100 text-lg md:text-xl mb-9 max-w-xl mx-auto leading-relaxed">
                Напишите <span className="font-bold text-white px-2 py-0.5 rounded-md bg-white/10">«КУРС»</span> в сообщения нашей группы, и мы подберём ближайшую дату обучения
              </p>
              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-violet-700 font-bold text-lg hover:bg-violet-50 transition-all shadow-2xl shadow-violet-900/40 hover:-translate-y-1"
              >
                Написать в VK
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-violet-200/50 text-sm mt-7">
                Ответим в течение 30 минут в рабочее время
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════ Footer (dark & structured) ════════════════ */}
      <footer className="relative z-10 bg-gray-950 border-t border-violet-500/10">
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main footer grid */}
          <div className="py-14 md:py-20 grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand col */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-violet-500/20">
                  NM
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Nail Master
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                Школа профессионального маникюра в&nbsp;Москве. Обучаем технике жёсткого геля и авторскому опилу с&nbsp;2014 года.
              </p>
              <div className="flex gap-3">
                <a
                  href={vkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-400 hover:bg-violet-500/20 hover:text-violet-300 transition-all"
                  aria-label="VK"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.183 1.815.616.42 1.084.328 1.084.328l2.175-.03s1.14-.07.599-.964c-.044-.073-.314-.662-1.618-1.872-1.365-1.268-1.182-1.062.462-3.254.999-1.333 1.398-2.147 1.273-2.496-.119-.332-.856-.244-.856-.244l-2.449.015s-.182-.025-.316.056c-.131.079-.216.264-.216.264s-.387 1.032-.903 1.91c-1.088 1.848-1.524 1.946-1.702 1.832-.415-.266-.311-1.07-.311-1.641 0-1.784.27-2.527-.527-2.719-.265-.064-.46-.106-1.138-.113-.869-.009-1.604.003-2.02.207-.277.136-.49.438-.36.455.161.02.525.098.718.361.249.34.24 1.104.24 1.104s.143 2.098-.334 2.358c-.327.179-.775-.186-1.738-1.854-.493-.854-.866-1.798-.866-1.798s-.072-.176-.2-.271c-.155-.115-.372-.151-.372-.151l-2.327.015s-.349.01-.477.162c-.114.135-.009.414-.009.414s1.817 4.258 3.875 6.405c1.886 1.968 4.029 1.838 4.029 1.838h.971z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Courses col */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Курсы</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#courses" className="hover:text-violet-300 transition-colors">Топ-мастер · 7 дней</a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-violet-300 transition-colors">Повышение · 1 день</a>
                </li>
              </ul>
            </div>

            {/* Nav col */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Навигация</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                {[
                  ["#technique", "Техника"],
                  ["#instructor", "Инструктор"],
                  ["#reviews", "Отзывы"],
                  ["#faq", "FAQ"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="hover:text-violet-300 transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts col */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2.5">
                  <span className="text-violet-400">📍</span>
                  Москва, Берёзовая аллея 7Б
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-violet-400">🕐</span>
                  Пн–Сб: 10:00 – 20:00
                </li>
                <li>
                  <a href={vkLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-violet-300 transition-colors">
                    <span className="text-violet-400">💬</span>
                    Написать в VK
                  </a>
                </li>
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                <p className="text-xs text-gray-600">
                  Нажимая «Записаться», вы соглашаетесь с{" "}
                  <a href="#" className="text-violet-400/70 hover:text-violet-300 underline transition-colors">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800/80 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">© 2024 Nail Master. Все права защищены.</p>
            <div className="flex items-center gap-5 text-xs text-gray-600">
              <a href="#" className="hover:text-violet-400 transition-colors">Политика конфиденциальности</a>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <a href="#" className="hover:text-violet-400 transition-colors">Договор оферты</a>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <a href="#" className="hover:text-violet-400 transition-colors">Реквизиты</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ════════════════ Mobile fixed CTA ════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3">
        <div className="backdrop-blur-2xl bg-gray-950/80 rounded-2xl p-2 border border-violet-500/15 shadow-2xl shadow-violet-900/40">
          <a
            href={vkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-base shadow-lg shadow-violet-600/30"
          >
            Записаться в VK
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* spacer for mobile fixed CTA */}
      <div className="h-24 md:h-0" />
    </div>
  );
}
