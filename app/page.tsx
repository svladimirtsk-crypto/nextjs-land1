import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Очное обучение маникюру в Москве — Елена (Paris Nail)",
  description:
    "2 курса: 7 дней «Топ-мастер маникюра» и 1 день «Повышение квалификации». Жёсткий гель, архитектура, опил после материала. Москва, Берёзовая аллея 7Б.",
};

const VK_LINK = "https://vk.me/yourcommunity";

const nav = [
  { label: "Курсы", href: "#courses" },
  { label: "Техника", href: "#tech" },
  { label: "Инструктор", href: "#instructor" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Адрес", href: "#location" },
];

const courses = [
  {
    tag: "Очный курс",
    title: '7 дней — «Топ-мастер маникюра»',
    price: "45 000 ₽",
    forWhom: "Для мастеров, которые хотят системно вырасти в технике, форме и уверенности.",
    bullets: [
      "Жёсткий гель и стабильная архитектура",
      "Опил формы ПОСЛЕ материала (правильная последовательность)",
      "Прочность свободного края и носибельность",
      "Чистота формы: боковые, торец, апекс",
      "Разбор ошибок и отработка на практике",
    ],
    accent: "from-violet-500/30 via-fuchsia-500/20 to-sky-500/20",
  },
  {
    tag: "Интенсив",
    title: "1 день — «Повышение квалификации»",
    price: "10 000 ₽",
    forWhom: "Для действующих мастеров: быстро подтянуть опил, форму и качество результата.",
    bullets: [
      "Опил после материала: логика и контроль формы",
      "Архитектура под носку, без «мягких костылей»",
      "Свободный край: жёсткость и стабильность",
      "Чистые линии: торец, боковые, симметрия",
      "Точечный разбор ваших ошибок",
    ],
    accent: "from-sky-500/25 via-violet-500/20 to-fuchsia-500/20",
  },
];

const features = [
  {
    title: "Жёсткий материал = форма держится",
    text: "Гель — не «мягкая история». Он держит архитектуру и делает результат стабильным.",
  },
  {
    title: "Сначала материал → потом опил",
    text: "Современная последовательность: выстраиваем, затем доводим форму — так носка сильнее.",
  },
  {
    title: "Свободный край становится крепче",
    text: "Правильная форма + опил после материала дают жёсткость там, где чаще всего ломается.",
  },
  {
    title: "Архитектура как у «дорогих» работ",
    text: "Апекс, торец, боковые — вы начинаете контролировать силуэт, а не «маскировать».",
  },
  {
    title: "Меньше зависимость от мягких баз",
    text: "Когда архитектура стоит на жёстком материале, у вас больше уверенности в результате.",
  },
  {
    title: "Очный формат = быстрый рост",
    text: "Практика, постановка рук, мгновенная корректировка — то, чего не даст видеоурок.",
  },
];

const steps = [
  {
    title: "Диагностика и цели",
    text: "Смотрим ваш уровень, типичные ошибки и задачи: форма, носка, скорость, чистота.",
  },
  {
    title: "Постановка техники",
    text: "Выкладка жёсткого геля, архитектура, контроль толщины и логика работы по шагам.",
  },
  {
    title: "Опил после материала",
    text: "Доводим форму: торец, боковые, апекс. Вы учитесь делать «собранный» силуэт.",
  },
  {
    title: "Финиш и стандарты качества",
    text: "Как оценивать результат, чтобы он был стабильным и выглядел профессионально.",
  },
];

const reviews = [
  {
    name: "Ученица (повышение)",
    text: "Наконец-то поняла, как делать опил после материала — форма стала ровнее, а носка стабильнее.",
  },
  {
    name: "Мастер из салона",
    text: "Разобрали ошибки по архитектуре. Теперь не «докладываю базу», а строю форму правильно.",
  },
  {
    name: "Ученица (7 дней)",
    text: "Очень много практики. После курса почувствовала уверенность — руки начали делать «дорогой» результат.",
  },
  {
    name: "Мастер 2+ года",
    text: "Сильнее всего зашло про свободный край: раньше часто были сколы, сейчас результат заметно крепче.",
  },
  {
    name: "Ученица",
    text: "Понравилась подача: по делу, без воды, с контролем каждого шага. Рекомендую очно.",
  },
  {
    name: "Мастер",
    text: "Городская школа с нормальным уровнем: чисто, структурно, современно. Забрала схему работы в голову.",
  },
];

const faqs = [
  {
    q: "Где проходит обучение?",
    a: "Москва, Берёзовая аллея 7Б. После записи пришлю ориентиры и как добраться.",
  },
  {
    q: "Какие курсы доступны?",
    a: "2 формата: 7 дней «Топ-мастер маникюра» — 45 000 ₽ и 1 день «Повышение квалификации» — 10 000 ₽.",
  },
  {
    q: "В чём главная идея техники?",
    a: "Работа жёстким гелем и правильная последовательность: сначала выстраиваем материал, затем делаем опил формы. Это даёт архитектуру и носибельность.",
  },
  {
    q: "Кому подойдёт 1 день повышения?",
    a: "Действующим мастерам, которые хотят быстро улучшить форму, архитектуру и чистоту опила.",
  },
  {
    q: "Как записаться?",
    a: "Нажмите «Записаться» и напишите в VK слово «КУРС». Отправлю программу и варианты дат.",
  },
];

function clsx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle(props: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {props.eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-300" />
          {props.eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {props.title}
      </h2>
      {props.text ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-white/75 md:text-lg">
          {props.text}
        </p>
      ) : null}
    </div>
  );
}

function GlowBG() {
  return (
    <>
      <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
    </>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#070713] text-white">
      {/* subtle city/grid texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.22] mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(167,139,250,0.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(232,121,249,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070713]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/35 via-fuchsia-500/25 to-sky-500/25 ring-1 ring-white/15">
              <span className="text-sm font-semibold tracking-tight">EN</span>
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-violet-300/40 transition group-hover:opacity-100" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Елена • Paris Nail</div>
              <div className="text-xs text-white/60">Очное обучение • Москва</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#courses"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10 md:inline-flex"
            >
              Курсы и цены
            </a>
            <a
              href={VK_LINK}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(167,139,250,0.25)] transition hover:brightness-110"
            >
              Записаться
            </a>
          </div>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <div className="no-scrollbar flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <GlowBG />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
              Москва • Берёзовая аллея 7Б • Очный формат
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Современная гелевая техника:
              <span className="block bg-gradient-to-r from-violet-200 via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">
                архитектура + опил после материала
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
              Инструктор <span className="font-semibold text-white">Елена</span> (Paris Nail), стаж 10+ лет.
              Делаем результат, который выглядит “дорого” и держится стабильно: жёсткий гель, правильная форма и
              последовательность “сначала материал → потом опил”.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={VK_LINK}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(232,121,249,0.18)] transition hover:brightness-110"
              >
                Записаться (VK)
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
              >
                Смотреть 2 курса
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { k: "2", v: "курса очно" },
                { k: "10+", v: "лет стажа" },
                { k: "Москва", v: "Берёзовая аллея 7Б" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-2xl font-semibold">{s.k}</div>
                  <div className="mt-1 text-xs text-white/70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-violet-500/25 via-fuchsia-500/15 to-sky-500/15 blur-2xl" />
            <div className="relative grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="h-44 w-full rounded-2xl object-cover ring-1 ring-white/10 md:h-52"
                  src="https://source.unsplash.com/900x900/?moscow,night,city"
                  alt="Москва — городской стиль"
                />
                <img
                  className="h-44 w-full rounded-2xl object-cover ring-1 ring-white/10 md:h-52"
                  src="https://source.unsplash.com/900x900/?manicure,studio"
                  alt="Студия маникюра — обучение"
                />
              </div>
              <img
                className="h-48 w-full rounded-2xl object-cover ring-1 ring-white/10 md:h-56"
                src="https://source.unsplash.com/1200x800/?nail,artist,classroom"
                alt="Процесс обучения маникюру"
              />

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Техника</div>
                  <div className="mt-1 text-sm text-white/70">
                    Жёсткий гель • Архитектура • Опил после материала
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Запись</div>
                  <div className="mt-1 text-sm text-white/70">
                    Напишите в VK слово <span className="font-semibold text-white">«КУРС»</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-white/55">
              Фото — заглушки Unsplash. На реальном лендинге заменим на ваши работы/класс.
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <SectionTitle
            eyebrow="2 формата очного обучения"
            title="Выберите курс под вашу задачу"
            text="7 дней — системный рост. 1 день — точечное повышение. В обоих форматах: современная последовательность и контроль архитектуры."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {courses.map((c) => (
              <div
                key={c.title}
                className={clsx(
                  "relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur",
                  "shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                )}
              >
                <div className={clsx("absolute inset-0 bg-gradient-to-br", c.accent)} />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/80">
                      {c.tag}
                    </div>
                    <div className="text-2xl font-semibold tracking-tight">{c.price}</div>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{c.forWhom}</p>

                  <div className="mt-5 grid gap-2">
                    {c.bullets.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
                      >
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300" />
                        <div className="text-sm text-white/80">{b}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={VK_LINK}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Записаться (VK)
                    </a>
                    <a
                      href="#tech"
                      className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
                    >
                      Почему эта техника
                    </a>
                  </div>

                  <div className="mt-4 text-xs text-white/60">
                    Москва • Берёзовая аллея 7Б • Напишите «КУРС»
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech / Features */}
      <section id="tech" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <SectionTitle
            eyebrow="Техника, которой работают сейчас"
            title="Почему жёсткий гель и опил после материала — это про носку и форму"
            text="Фокус на архитектуре и последовательности, а не на лишних слоях мягких материалов."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07]"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500/40 via-fuchsia-500/25 to-sky-500/25 ring-1 ring-white/15" />
                <div className="text-lg font-semibold">{f.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{f.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xl font-semibold">Ключевая последовательность</div>
              <div className="mt-3 grid gap-3">
                {[
                  "Подготовка",
                  "Выкладка жёсткого геля",
                  "Построение архитектуры",
                  "Опил формы ПОСЛЕ материала",
                  "Декоративное покрытие (при необходимости)",
                ].map((s, i) => (
                  <div key={s} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                    <div className="grid h-7 w-7 place-items-center rounded-xl bg-white/10 text-xs font-semibold text-white/85">
                      {i + 1}
                    </div>
                    <div className="text-sm text-white/80">{s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-sky-500/15" />
              <div className="relative p-6">
                <div className="text-xl font-semibold">Это обучение — про качество</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Вы не просто “делаете покрытие”, вы понимаете, как строится форма и почему результат держится.
                  На очном обучении быстрее формируется навык и уверенность в руках.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-semibold">Форма</div>
                    <div className="mt-1 text-sm text-white/70">контроль боковых и торца</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-semibold">Носка</div>
                    <div className="mt-1 text-sm text-white/70">жёсткость свободного края</div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={VK_LINK}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    Записаться и написать «КУРС»
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section id="instructor" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <SectionTitle
            eyebrow="Кто ведёт обучение"
            title="Елена — инструктор Paris Nail"
            text="Стаж 10+ лет • Диплом доп. образования: «Инструкторский курс. Преподаватель по маникюру» (Paris Nail)."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-sky-500/10" />
              <img
                className="relative h-72 w-full object-cover md:h-[420px]"
                src="https://source.unsplash.com/1200x900/?woman,teacher,studio"
                alt="Инструктор (заглушка Unsplash)"
              />
              <div className="relative p-5">
                <div className="text-lg font-semibold">Елена</div>
                <div className="mt-1 text-sm text-white/70">Инструктор Paris Nail • стаж 10+ лет</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xl font-semibold">Что важно в моём подходе</div>
              <div className="mt-4 grid gap-3">
                {[
                  "Ставлю логику работы: материал → опил, чтобы вы понимали «почему» и «как».",
                  "Показываю архитектуру на практике: апекс, боковые, торец — без хаоса в толщине.",
                  "Даю понятные критерии качества: вы видите ошибки сразу и знаете, как их исправлять.",
                  "Очный формат — это быстрый рост: корректировка по ходу и отработка до результата.",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Локация</div>
                  <div className="mt-1 text-sm text-white/70">Москва, Берёзовая аллея 7Б</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Запись</div>
                  <div className="mt-1 text-sm text-white/70">В VK: напишите «КУРС»</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={VK_LINK}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Написать в VK
                </a>
                <a
                  href="#location"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
                >
                  Посмотреть адрес
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <SectionTitle
            eyebrow="Как проходит обучение"
            title="Структурно, практично, с контролем результата"
            text="Без «воды». Вы понимаете шаги и отрабатываете их до уверенности."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/15 blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/40 via-fuchsia-500/25 to-sky-500/25 ring-1 ring-white/15">
                    <span className="text-sm font-semibold">{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{s.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_420px]">
              <div>
                <div className="text-xl font-semibold">Готовы выбрать формат?</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Напишите «КУРС» — отправлю программу и помогу выбрать: 7 дней (система) или 1 день (интенсив).
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={VK_LINK}
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    Записаться в VK
                  </a>
                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
                  >
                    Сравнить курсы
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black/20">
                <img
                  className="h-56 w-full object-cover"
                  src="https://source.unsplash.com/1200x800/?city,lights,purple"
                  alt="Городская атмосфера (заглушка Unsplash)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <SectionTitle
            eyebrow="Отзывы"
            title="Что говорят ученицы"
            text="Здесь — текстовые заглушки. На финальном лендинге заменим на ваши реальные отзывы/скрины."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-fuchsia-500/15 blur-2xl" />
                <div className="relative">
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="mt-3 text-sm leading-relaxed text-white/75">“{r.text}”</div>
                  <div className="mt-4 flex items-center gap-1 text-xs text-white/55">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-300" />
                    Очное обучение • Москва
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={VK_LINK}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Хочу так же — написать «КУРС»
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <SectionTitle
            eyebrow="FAQ"
            title="Частые вопросы"
            text="Коротко и по делу — чтобы вам было проще принять решение."
          />

          <div className="mx-auto grid max-w-3xl gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-sm font-semibold">{f.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-black/20 text-white/80 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <SectionTitle
            eyebrow="Локация"
            title="Москва, Берёзовая аллея 7Б"
            text="Очный формат. После записи пришлю ориентиры и удобный маршрут."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xl font-semibold">Как добраться</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Адрес: <span className="font-semibold text-white">Москва, Берёзовая аллея 7Б</span>.  
                Уточнения по входу/этажу/парковке — в сообщениях после записи.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Запись</div>
                  <div className="mt-1 text-sm text-white/70">VK: напишите «КУРС»</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">Формат</div>
                  <div className="mt-1 text-sm text-white/70">Очное обучение</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={VK_LINK}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Открыть VK и записаться
                </a>
                <a
                  href="#courses"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
                >
                  Вернуться к курсам
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-fuchsia-500/10" />
              <img
                className="relative h-80 w-full object-cover md:h-[420px]"
                src="https://source.unsplash.com/1200x900/?moscow,street,map"
                alt="Локация в Москве (заглушка Unsplash)"
              />
              <div className="relative p-5">
                <div className="text-sm font-semibold">Берёзовая аллея 7Б</div>
                <div className="mt-1 text-xs text-white/65">Фото/карта — заглушка Unsplash</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/25 via-fuchsia-500/15 to-sky-500/15" />
            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_360px]">
              <div>
                <h3 className="text-balance text-3xl font-semibold tracking-tight">
                  Хотите программу и ближайшие даты?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                  Нажмите кнопку и напишите в VK слово <span className="font-semibold text-white">«КУРС»</span>.
                  Я отвечу и помогу выбрать формат: 7 дней или 1 день.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={VK_LINK}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Записаться в VK
                </a>
                <div className="text-center text-xs text-white/60">
                  Москва • Берёзовая аллея 7Б
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#060611]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">Елена • Paris Nail</div>
              <div className="mt-2 text-sm text-white/65">
                Очное обучение маникюру в Москве.  
                Техника: жёсткий гель, архитектура, опил после материала.
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Адрес</div>
              <div className="mt-2 text-sm text-white/65">Москва, Берёзовая аллея 7Б</div>
            </div>
            <div>
              <div className="text-sm font-semibold">Контакты</div>
              <div className="mt-2 flex flex-col gap-2 text-sm">
                <a className="text-white/75 hover:text-white" href={VK_LINK}>
                  VK: написать «КУРС»
                </a>
                <a className="text-white/50 hover:text-white/70" href="#">
                  Политика конфиденциальности (заглушка)
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} • Лендинг-шаблон. Фото: Unsplash (заглушки).
          </div>
        </div>
      </footer>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
        <div className="mx-auto max-w-md">
          <a
            href={VK_LINK}
            className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_60px_rgba(167,139,250,0.25)]"
          >
            Записаться в VK
          </a>
          <div className="mt-2 text-center text-[11px] text-white/55">
            Напишите «КУРС» • Москва, Берёзовая аллея 7Б
          </div>
        </div>
      </div>
    </div>
  );
}
