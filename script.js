/* =========================================
   HAWAX — Premium Resume / script.js
   ========================================= */
(function () {
  'use strict';

  /* -------- i18n translations -------- */
  const T = {
    'nav.about': { ru: 'О себе', en: 'About' },
    'nav.experience': { ru: 'Опыт', en: 'Experience' },
    'nav.projects': { ru: 'Проекты', en: 'Projects' },
    'nav.skills': { ru: 'Навыки', en: 'Skills' },
    'nav.contact': { ru: 'Контакт', en: 'Contact' },
    'hero.btn1': { ru: 'Смотреть опыт', en: 'View Experience' },
    'hero.btn2': { ru: 'Связаться', en: 'Contact' },
    'hero.trust': { ru: 'Москва · Открыт к глобальным возможностям', en: 'Based in Moscow · Open to Global Opportunities' },
    'met.1': { ru: 'Активных пользователей в месяц после масштабирования', en: 'Monthly Active Users Scaled' },
    'met.2': { ru: 'Выручка от прямых продаж', en: 'Revenue from Direct Sales' },
    'met.3': { ru: 'KOL и амбассадоров в сети', en: 'KOL & Ambassadors in Network' },
    'met.4': { ru: 'Участников команды под руководством', en: 'Team Members Led' },
    'about.h': { ru: 'Что я\u00a0строю', en: 'What I\u00a0Build' },
    'about.p1': { ru: 'Строю системы, которые приносят деньги. Специализируюсь на прямых продажах, монетизации и масштабируемом привлечении пользователей — через KOL-сети, партнёрства и дистрибуцию.', en: 'I build systems that generate revenue. I specialize in direct sales, monetization, and scalable user acquisition channels (KOL networks, partnerships, distribution).' },
    'about.p2': { ru: '', en: '' },
    'about.p3': { ru: 'Опыт в digital-продуктах и Web3. Закрыл $175k+ в прямых продажах трафика, участвовал в развитии сети из 170+ KOL и амбассадоров, вместе с командой обеспечил рост MAU с 400k до 3.4M и создал условия для масштабирования с 1.8M до 6M+.', en: 'Experience across digital products and Web3. Closed $175k+ in direct traffic sales, contributed to building a 170+ KOL and ambassador network, helped drive MAU from 400k to 3.4M, and enabled scale from 1.8M to 6M+.' },
    'about.b2': { ru: 'Быстрая обучаемость', en: 'Fast learner' },
    'about.b3': { ru: 'Мышление продавца', en: 'Deal-driven mindset' },
    'about.b4': { ru: 'Спокойствие под давлением', en: 'Calm under pressure' },
    'about.b5': { ru: 'Фокус на выручку', en: 'Revenue execution focused' },
    'about.b6': { ru: 'Стратегическое мышление', en: 'Strategic thinking' },
    'about.b7': { ru: 'Лидерство и развитие команд', en: 'Team leadership' },
    'exp.h': { ru: 'Опыт', en: 'Experience' },
    'exp.2.role': { ru: 'Менеджер по развитию бизнеса', en: 'Business Development Manager' },
    'exp.2.period': { ru: 'Сен 2024 – Янв 2025', en: 'Sep 2024 – Jan 2025' },
    'exp.2.b1': { ru: 'Вёл закупку TMA-трафика по CPA: согласовывал стоимость привлечения пользователей, объёмы и условия.', en: 'Managed CPA-based TMA traffic acquisition: negotiated user acquisition costs and agreed volumes and terms.' },
    'exp.2.b2': { ru: 'Закрыл $150k+ в прямых продажах трафика.', en: 'Closed $150k+ in direct traffic sales.' },
    'exp.2.b3': { ru: 'Переупаковал коммерческое предложение, повысив прибыльность продаж.', en: 'Repackaged the commercial offer, increasing the profitability of the sales process.' },
    'exp.2.b4': { ru: 'Сформировал пул TMA-партнёров и оценивал предложения по цене, GEO, активности и D30.', en: 'Built a pool of TMA partners and evaluated offers by price, GEO, activity, and D30 retention.' },
    'exp.2.b5': { ru: 'Добился условий закупки, позволивших масштабировать MAU продукта с 1.8M до 6M+.', en: 'Negotiated acquisition terms that enabled the product to scale from 1.8M to 6M+ MAU.' },
    'exp.3.role': { ru: 'KOL-менеджер → Руководитель продаж', en: 'KOL Manager → Sales Lead' },
    'exp.3.period': { ru: 'Апр 2024 – Сен 2024', en: 'Apr 2024 – Sep 2024' },
    'exp.3.b1': { ru: 'Апрель–июнь: в составе команды развивал сеть из 170+ амбассадоров и KOL. Лично привлёк 48 амбассадоров: поиск, подключение, поддержка и контроль через реферальные ссылки.', en: 'Apr–Jun: contributed to developing a 170+ ambassador and KOL network. Personally recruited 48 ambassadors through sourcing, onboarding, support, and referral-link tracking.' },
    'exp.3.b2': { ru: 'Вместе с командой обеспечил рост продукта: DAU с 300k до 1.2M, MAU с 400k до 3.4M.', en: 'Together with the team, helped grow DAU from 300k to 1.2M and MAU from 400k to 3.4M.' },
    'exp.3.b3': { ru: 'Июнь–сентябрь: перешёл в продажи, стал лучшим продавцом по результату и лично закрыл $27k продаж трафика.', en: 'Jun–Sep: moved into sales, became the top seller by results, and personally closed $27k in traffic sales.' },
    'exp.3.b4': { ru: 'После повышения руководил командой из 12 менеджеров по продажам: обучение, поддержка, разбор ошибок и проверка результатов.', en: 'After promotion, led a team of 12 sales managers: training, support, error review, and performance checks.' },
    'exp.3.b5': { ru: 'Адаптировал CRM, внедрил рабочие таблицы, KPI-дашборды и систему обучения команды.', en: 'Adapted the CRM, introduced operating sheets and KPI dashboards, and built a team training system.' },
    'exp.5.role': { ru: 'Аналитик-исследователь', en: 'Research Analyst' },
    'exp.5.company': { ru: 'Braitling · закрытое криптосообщество', en: 'Braitling · Closed Crypto Community' },
    'exp.5.period': { ru: 'Июл 2023 – Апр 2024', en: 'Jul 2023 – Apr 2024' },
    'exp.5.b1': { ru: 'Подготовил 35+ углублённых аналитических разборов криптопроектов с оценкой механики, потенциала и основных рисков.', en: 'Produced 35+ in-depth crypto project analyses covering mechanics, potential, and key risks.' },
    'exp.5.b2': { ru: 'Сформировал исследовательскую базу из 70+ проектов, распределив их по стадии развития, потенциалу и уровню риска.', en: 'Built a research database of 70+ projects, classified by development stage, potential, and risk level.' },
    'exp.5.b3': { ru: 'Разработал практическую инструкцию по фармингу ликвидности в Meteora; участники сообщества получили доход от LP-позиций и впоследствии получили аирдроп.', en: 'Created a practical Meteora liquidity-farming guide; community members earned returns from LP positions and later received an airdrop.' },
    'comp.h': { ru: 'Ключевые компетенции', en: 'Revenue Competencies' },
    'comp.sub': { ru: 'Навыки, которые приносят деньги', en: 'Capabilities that generate revenue' },
    'comp.1.h': { ru: 'Монетизация и упаковка предложения', en: 'Monetization & Offer Packaging' },
    'comp.1.p': { ru: 'Коммерческие предложения · Пакетирование · Допродажи', en: 'Commercial offers · Packaging · Upsells' },
    'comp.2.h': { ru: 'Привлечение и масштабирование', en: 'Acquisition & Scaling' },
    'comp.2.p': { ru: 'Закупка трафика · CPA-модели · Масштабирование MAU', en: 'Traffic acquisition · CPA models · MAU scaling' },
    'comp.3.h': { ru: 'Операционное управление выручкой', en: 'Revenue Operations' },
    'comp.3.p': { ru: 'Закрытие сделок · CRM · KPI-отчётность', en: 'Deal closing · CRM · KPI reporting' },
    'comp.4.h': { ru: 'Партнёрства и KOL-сети', en: 'Partnerships & KOL Networks' },
    'comp.4.p': { ru: 'Сети амбассадоров · Работа с лидерами мнений · Партнёрская дистрибуция', en: 'Ambassador networks · KOL outreach · Partner distribution channels' },
    'comp.5.h': { ru: 'Аналитика и KPI', en: 'Revenue Analytics & KPI' },
    'comp.5.p': { ru: 'Юнит-экономика · KPI-дашборды · Решения на данных', en: 'Unit economics · KPI dashboards · Data-driven decisions' },
    'comp.6.h': { ru: 'Прямые продажи и закрытие сделок', en: 'Direct Sales & Deal Closing' },
    'comp.6.p': { ru: 'Прямые продажи · B2B-переговоры · Стратегические сделки', en: 'Direct sales · B2B negotiation · Strategic deal closing' },
    'wins.h': { ru: 'Ключевые результаты', en: 'Revenue Outcomes' },
    'wins.1': { ru: 'Создал условия для масштабирования MAU с 1.8M до 6M+', en: 'Enabled MAU growth from 1.8M to 6M+' },
    'wins.2': { ru: 'Закрыл $175k+ через прямые продажи и допродажи', en: 'Closed $175k+ through direct sales and upsells' },
    'wins.3': { ru: 'Лично привлёк 48 амбассадоров в рамках развития сети из 170+ KOL и амбассадоров — DAU с 300k до 1.2M, MAU с 400k до 3.4M', en: 'Personally recruited 48 ambassadors while helping develop a 170+ KOL and ambassador network — DAU from 300k to 1.2M, MAU from 400k to 3.4M' },
    'wins.4': { ru: 'Закрыл международную продажу приложения с ROI 300% и обеспечил повторную сделку', en: 'Closed an international application sale at 300% ROI and secured a repeat deal' },
    'wins.example': { ru: 'Пример', en: 'Example' },
    'wins.1.example': { ru: 'В Cherry Game находил и оценивал источники TMA-трафика, согласовывал стоимость привлечения пользователей, объёмы и условия. Добился условий закупки, позволивших за период работы масштабировать MAU продукта с 1.8M до 6M+.', en: 'At Cherry Game, sourced and evaluated TMA traffic, negotiated user acquisition costs, volumes, and terms. Negotiated acquisition terms that enabled the product to scale from 1.8M to 6M+ MAU during my time with the company.' },
    'wins.2.example': { ru: 'В Cherry Game закрыл $150k+ прямых продаж трафика, ведя цикл от поиска клиента до оплаты и расширения сотрудничества. В Diamore лично закрыл ещё $27k продаж трафика.', en: 'At Cherry Game, closed $150k+ in direct traffic sales, managing the cycle from prospecting to payment and account expansion. At Diamore, personally closed another $27k in traffic sales.' },
    'wins.3.example': { ru: 'В Diamore лично привлёк 48 амбассадоров; вместе с командой развивал сеть из 170+ амбассадоров и KOL, контролируя активность и результаты через реферальные ссылки.', en: 'At Diamore, personally recruited 48 ambassadors and helped the team develop a 170+ ambassador and KOL network, tracking activity and results through referral links.' },
    'wins.4.example': { ru: 'ThunderCoinAI: за два созвона закрыл продажу приложения южнокорейской команде — $4k при стоимости разработки $1k. ROI = ($4k − $1k) / $1k × 100% = 300%. Получил $500 предоплаты за следующий продукт, обеспечив повторную сделку.', en: 'ThunderCoinAI: closed the application sale to a South Korean team in two calls — $4k against a $1k development cost. ROI = ($4k − $1k) / $1k × 100% = 300%. Secured a $500 deposit for the next product, resulting in a repeat deal.' },
    'proj.h': { ru: 'Собственные проекты', en: 'Founder Projects' },
    'proj.1.label': { ru: 'Сооснователь · GameFi-стартап', en: 'Co-Founder · GameFi Startup' },
    'proj.1.b1': { ru: 'Привлёк $9k ангельских инвестиций', en: 'Raised $9k angel capital' },
    'proj.1.b2': { ru: 'Разработал токен-экономику и модель монетизации с нуля', en: 'Designed token economy and monetization model from scratch' },
    'proj.1.b3': { ru: 'Управлял производством для своевременного запуска по роадмапу монетизации', en: 'Drove production execution to hit revenue-launch milestones' },
    'proj.2.label': { ru: 'Сооснователь · Календарь с механикой D2E', en: 'Co-Founder · Calendar with D2E mechanics' },
    'proj.2.b1': { ru: 'Разработал концепцию монетизации на основе механики вознаграждений', en: 'Designed reward-driven monetization concept and revenue loop' },
    'proj.2.b2': { ru: 'Проработал UX и рыночное позиционирование с фокусом на конверсию в платящих', en: 'UX and market positioning optimized for paid user conversion' },
    'proj.3.label': { ru: 'Основатель · GameFi-стартап', en: 'Founder · GameFi Startup' },
    'proj.3.b1': { ru: 'Построил P2E-концепцию с встроенной моделью монетизации', en: 'Built P2E concept with embedded monetization and revenue model' },
    'proj.3.b2': { ru: 'Написал продуктовую документацию: механики монетизации, токен-экономика, потоки монетизации', en: 'Wrote product documentation covering revenue mechanics, token economy, and monetization flows' },
    'proj.3.b3': { ru: 'Руководил командой по достижению ключевых вех роадмапа', en: 'Led team execution against revenue roadmap milestones' },
    'lang.h': { ru: 'Языки', en: 'Languages' },
    'lang.1': { ru: 'Русский', en: 'Russian' },
    'lang.1v': { ru: 'Родной', en: 'Native' },
    'lang.2': { ru: 'Английский', en: 'English' },
    'lang.2v': { ru: 'B1', en: 'B1' },
    'cta.sub': { ru: 'Открыт к предложениям в сфере развития бизнеса, продаж и партнёрств — рассматриваю возможности по всему миру.', en: 'Open to business development, sales, and partnership opportunities worldwide.' },
    'footer': { ru: '© 2026 Hawax. Все права защищены.', en: '© 2026 Hawax. All rights reserved.' },
  };

  let currentLang = 'en';

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (T[key] && T[key][lang] !== undefined) {
        const val = T[key][lang];
        if (el.querySelector('strong') || (val && val.includes('<strong>'))) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });
    // update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* -------- Language toggle -------- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const lang = btn.dataset.lang;
    if (lang && lang !== currentLang) applyLang(lang);
  });

  // apply default language on load
  applyLang('en');

  /* -------- Avatar fallback -------- */
  const avatarImg = document.getElementById('avatarImg');
  if (avatarImg) {
    avatarImg.addEventListener('load', () => {
      avatarImg.dataset.loaded = 'true';
      avatarImg.closest('.avatar-wrap').classList.add('avatar-loaded');
    });
    avatarImg.addEventListener('error', () => { avatarImg.style.display = 'none'; });
  }

  /* -------- Intersection Observer — Reveal on Scroll -------- */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach(el => revealObserver.observe(el));

  /* -------- Mobile Menu Toggle -------- */
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  /* -------- Navbar scroll -------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 60 ? 'rgba(10,10,10,.92)' : 'rgba(10,10,10,.7)';
  }, { passive: true });

  /* -------- Active nav link -------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      if (scrollPos >= top && scrollPos < top + section.offsetHeight) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + id ? '#F5F5F5' : '';
        });
      }
    });
  }, { passive: true });

  /* -------- Metric counter animation -------- */
  const metricVals = document.querySelectorAll('.metric-val');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  metricVals.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const text = el.textContent.trim();
    const match = text.match(/([\d,.]+)/);
    if (!match) return;
    const rawNum = match[1].replace(/,/g, '');
    const target = parseFloat(rawNum);
    const prefix = text.slice(0, text.indexOf(match[1]));
    const suffix = text.slice(text.indexOf(match[1]) + match[1].length);
    const duration = 1600, startTime = performance.now();
    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      let display = Math.floor(target * ease);
      if (match[1].includes(',')) display = display.toLocaleString('en-US');
      el.textContent = prefix + display + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = text;
    }
    requestAnimationFrame(step);
  }

  /* -------- Cursor-reactive hero light -------- */
  const cursorLight = document.getElementById('heroCursorLight');
  const heroSection = document.getElementById('hero');

  if (cursorLight && heroSection) {
    let lightX = 0, lightY = 0, targetX = 0, targetY = 0;
    let rafId = null;
    let isActive = false;

    function updateLight() {
      lightX += (targetX - lightX) * 0.08;
      lightY += (targetY - lightY) * 0.08;
      cursorLight.style.left = lightX + 'px';
      cursorLight.style.top = lightY + 'px';
      if (isActive) rafId = requestAnimationFrame(updateLight);
    }

    heroSection.addEventListener('mouseenter', () => {
      isActive = true;
      cursorLight.classList.add('active');
      rafId = requestAnimationFrame(updateLight);
    });

    heroSection.addEventListener('mouseleave', () => {
      isActive = false;
      cursorLight.classList.remove('active');
      if (rafId) cancelAnimationFrame(rafId);
    });

    heroSection.addEventListener('mousemove', e => {
      const rect = heroSection.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    }, { passive: true });
  }

  /* -------- Wins Accordion -------- */
  function initWinsAccordion() {
    // Outer accordion (win items)
    document.querySelectorAll('.win-accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.win-accordion-item');
        const body = item.querySelector('.win-accordion-body');
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
          // Close
          body.style.maxHeight = body.scrollHeight + 'px';
          requestAnimationFrame(() => {
            body.style.maxHeight = '0';
          });
          trigger.setAttribute('aria-expanded', 'false');
          item.classList.remove('win-accordion-open');
        } else {
          // Open
          body.style.maxHeight = body.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded', 'true');
          item.classList.add('win-accordion-open');
          // After transition ends, set maxHeight to 'none' so nested content can expand
          body.addEventListener('transitionend', function onEnd() {
            if (trigger.getAttribute('aria-expanded') === 'true') {
              body.style.maxHeight = 'none';
            }
            body.removeEventListener('transitionend', onEnd);
          });
        }
      });
    });

    // Inner example toggles
    document.querySelectorAll('.win-example-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const example = trigger.closest('.win-example');
        const body = example.querySelector('.win-example-body');
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        const parentBody = trigger.closest('.win-accordion-body');

        if (isOpen) {
          body.style.maxHeight = body.scrollHeight + 'px';
          requestAnimationFrame(() => { body.style.maxHeight = '0'; });
          trigger.setAttribute('aria-expanded', 'false');
          example.classList.remove('win-example-open');
        } else {
          body.style.maxHeight = body.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded', 'true');
          example.classList.add('win-example-open');
          // Re-sync parent maxHeight so outer panel grows
          body.addEventListener('transitionend', function onEnd() {
            if (parentBody && parentBody.style.maxHeight !== 'none') {
              parentBody.style.maxHeight = parentBody.scrollHeight + 'px';
            }
            body.removeEventListener('transitionend', onEnd);
          });
        }
      });
    });
  }

  initWinsAccordion();

})();
