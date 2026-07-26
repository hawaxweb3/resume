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
    'hero.label': { ru: 'РОСТ · ВЫРУЧКА · ПАРТНЁРСТВА', en: 'GROWTH · REVENUE · PARTNERSHIPS' },
    'hero.title': { ru: 'Менеджер по росту и монетизации', en: 'Growth & Revenue Manager' },
    'hero.sub': { ru: 'Строю и масштабирую системы роста и монетизации — через партнёрские сети, каналы дистрибуции и привлечение трафика. Опыт в digital-продуктах и Web3.', en: 'I build and scale growth and revenue systems — by structuring partnership networks, distribution channels, and traffic acquisition engines. Experience across digital products, growth systems, and Web3.' },
    'hero.btn1': { ru: 'Смотреть опыт', en: 'View Experience' },
    'hero.btn2': { ru: 'Связаться', en: 'Contact' },
    'hero.trust': { ru: 'Москва · Открыт к глобальным возможностям', en: 'Based in Moscow · Open to Global Opportunities' },
    'met.1': { ru: 'Привлечённых активных пользователей', en: 'Monthly Active Users Acquired' },
    'met.2': { ru: 'Напрямую сгенерированная выручка', en: 'Direct Revenue Generated' },
    'met.3': { ru: 'KOL и амбассадоров в сети', en: 'KOL & Ambassador Partners Built' },
    'met.4': { ru: 'Партнёров и членов команды под управлением', en: 'Partners & Team Members Managed' },
    'about.h': { ru: 'Что я\u00a0строю', en: 'What I\u00a0Build' },
    'about.p1': { ru: 'Строю системы, которые приносят деньги. Специализируюсь на прямых продажах, монетизации и масштабируемом привлечении пользователей — через KOL-сети, партнёрства и дистрибуцию.', en: 'I build systems that generate revenue. I specialize in direct sales, monetization, and scalable user acquisition channels (KOL networks, partnerships, distribution).' },
    'about.p2': { ru: '', en: '' },
    'about.p3': { ru: 'Опыт в digital-продуктах и Web3. Лично закрывал сделки, строил и монетизировал KOL-сети из 200+ партнёров, масштабировал аудиторию с 400k до 3.4M MAU и с 1.8M до 6M+ MAU. Сгенерировал $175k+ через продажи и партнёрские каналы.', en: 'Experience in digital products and Web3. Directly closed deals, built and monetized KOL networks of 200+ partners, scaled MAU from 400k to 3.4M and from 1.8M to 6M+. Generated $175k+ in revenue through sales and partnership channels.' },
    'about.b2': { ru: 'Быстрая обучаемость', en: 'Fast learner' },
    'about.b3': { ru: 'Мышление продавца', en: 'Deal-driven mindset' },
    'about.b4': { ru: 'Спокойствие под давлением', en: 'Calm under pressure' },
    'about.b5': { ru: 'Фокус на выручку', en: 'Revenue execution focused' },
    'about.b6': { ru: 'Стратегическое мышление', en: 'Strategic thinking' },
    'about.b7': { ru: 'Лидерство и развитие команд', en: 'Team leadership' },
    'exp.h': { ru: 'Опыт', en: 'Experience' },
    'exp.2.role': { ru: 'Менеджер по бизнес-развитию', en: 'Business Development Manager' },
    'exp.2.period': { ru: 'Сен 2024 – Дек 2024', en: 'Sep 2024 – Dec 2024' },
    'exp.2.b1': { ru: 'Масштабировал привлечение пользователей с 1.8M до 6M+ MAU через систему закупки трафика и KOL-партнёрств', en: 'Scaled paid acquisition from 1.8M to 6M+ MAU by building and running a traffic buying and KOL partnership system' },
    'exp.2.b2': { ru: 'Закрыл $150k+ в прямых продажах трафика', en: 'Closed $150k+ in direct traffic sales' },
    'exp.2.b3': { ru: 'Перестроил коммерческое предложение в многоуровневые пакеты, существенно повысив прибыльность', en: 'Restructured the commercial offering into tiered packages, substantially improving profitability.' },
    'exp.2.b4': { ru: 'Выстроил CPA-модель с лучшей юнит-экономикой на рынке', en: 'Built best-in-market CPA acquisition model by unit economics' },
    'exp.2.b5': { ru: 'Закрыл стратегическую партнёрскую сделку — 350% чистой прибыли', en: 'Closed strategic partnership deal — 350% net profit return' },
    'exp.3.role': { ru: 'Руководитель продаж и бизнес-развития', en: 'Head of Sales & Business Development Manager' },
    'exp.3.period': { ru: 'Май 2024 – Сен 2024', en: 'May 2024 – Sep 2024' },
    'exp.3.b1': { ru: 'Построил и масштабировал сеть из 170+ амбассадоров и KOL, руководя командой, отвечавшей за её развитие', en: 'Built and scaled a 170+ ambassador and KOL network by leading the team responsible for its growth' },
    'exp.3.b2': { ru: 'Поднял DAU с 300k до 1.2M, выстроив и масштабировав амбассадорскую сеть для ежедневного привлечения', en: 'Drove DAU from 300k to 1.2M by building and scaling an ambassador network for daily acquisition' },
    'exp.3.b3': { ru: 'Увеличил MAU с 400k до 3.4M, выстроив систему партнёрской дистрибуции и масштабировав амбассадорскую сеть', en: 'Scaled MAU from 400k to 3.4M by building a partner distribution system and scaling the ambassador network' },
    'exp.3.b4': { ru: 'Руководил и развивал отдел продаж, выстроил процессы продаж, лично закрыв $27k в прямых продажах.', en: 'Led and developed the sales team, establishing sales processes while personally closing $27k in direct sales.' },
    'exp.4.role': { ru: 'Менеджер по росту', en: 'Growth Manager' },
    'exp.4.period': { ru: 'Дек 2024 – Фев 2025', en: 'Dec 2024 – Feb 2025' },
    'exp.4.b1': { ru: 'Закрыл 30+ нишевых KOL-партнёрств', en: 'Closed 30+ niche KOL partnership deals' },
    'exp.4.b2': { ru: 'Удвоил аудиторию за счёт KOL-партнёрств в нишевых каналах дистрибуции', en: 'Doubled monetizable audience by executing KOL partnerships for paid distribution' },
    'exp.4.b3': { ru: 'Поднял ежедневную выручку на 25% через оптимизацию KOL-конверсии', en: 'Grew daily revenue +25% by optimizing KOL-driven conversion and monetization flow' },
    'exp.5.role': { ru: 'Аналитик-исследователь', en: 'Research Analyst' },
    'exp.5.company': { ru: 'Ранний опыт', en: 'Earlier Experience' },
    'exp.5.period': { ru: 'Jul 2023 – Apr 2024', en: 'Jul 2023 – Apr 2024' },
    'exp.5.b1': { ru: 'Построил внутренние системы — снизил операционные расходы и повысил эффективность команды', en: 'Built internal systems that reduced operational cost and improved team output' },
    'exp.5.b2': { ru: 'Упорядочил документацию — снизил нагрузку на поддержку и сократил время решения задач', en: 'Streamlined documentation — cut support load and reduced resolution time' },
    'exp.5.b3': { ru: 'Создал KPI-дашборды для отслеживания затрат, эффективности и метрик выручки', en: 'Built KPI dashboards tracking cost, efficiency, and revenue-impacting metrics' },
    'exp.5.b4': { ru: 'Сократил расходы и нагрузку на поддержку', en: 'Reduced costs and support load' },
    'comp.h': { ru: 'Ключевые компетенции', en: 'Revenue Competencies' },
    'comp.sub': { ru: 'Навыки, которые приносят деньги', en: 'Capabilities that generate revenue' },
    'comp.1.h': { ru: 'Монетизация и запуск продукта', en: 'Monetization & Product Launch' },
    'comp.1.p': { ru: 'MVP под монетизацию · Рост ARPU · Конверсионные системы', en: 'Revenue-ready MVP · ARPU optimization · Conversion systems' },
    'comp.2.h': { ru: 'Привлечение и масштабирование выручки', en: 'Acquisition & Revenue Scaling' },
    'comp.2.p': { ru: 'Закупка трафика · CPA-модели · Каналы монетизации', en: 'Traffic acquisition · CPA model building · Monetization channels' },
    'comp.3.h': { ru: 'Операционное управление выручкой', en: 'Revenue Operations' },
    'comp.3.p': { ru: 'Закрытие сделок · Управление пайплайном · Масштабирование систем', en: 'Deal execution · Pipeline management · Scaling revenue systems' },
    'comp.4.h': { ru: 'Партнёрства и KOL-сети', en: 'Partnerships & KOL Networks' },
    'comp.4.p': { ru: 'Сети амбассадоров · Работа с лидерами мнений · Партнёрская дистрибуция', en: 'Ambassador networks · KOL outreach · Partner distribution channels' },
    'comp.5.h': { ru: 'Аналитика и KPI', en: 'Revenue Analytics & KPI' },
    'comp.5.p': { ru: 'Юнит-экономика · A/B-тесты монетизации · Решения на данных', en: 'Unit economics · Monetization A/B · Revenue-driven decisions' },
    'comp.6.h': { ru: 'Прямые продажи и закрытие сделок', en: 'Direct Sales & Deal Closing' },
    'comp.6.p': { ru: 'Прямые продажи · B2B-переговоры · Стратегические сделки', en: 'Direct sales · B2B negotiation · Strategic deal closing' },
    'wins.h': { ru: 'Ключевые результаты', en: 'Revenue Outcomes' },
    'wins.1': { ru: 'Оптимизировал привлечение: снижал стоимость трафика и искал более дешёвые каналы', en: 'Optimized user acquisition by reducing traffic acquisition costs and sourcing cheaper traffic channels' },
    'wins.2': { ru: 'Закрыл $175k+ через прямые продажи и допродажи', en: 'Closed $175k+ through direct sales and upsells' },
    'wins.3': { ru: 'Построил сеть из 170+ KOL и амбассадоров — рост DAU с 300k до 1.2M, MAU с 400k до 3.4M.', en: 'Built a 170+ KOL and ambassador network that generated DAU growth from 300k to 1.2M and MAU from 400k to 3.4M.' },
    'wins.example': { ru: 'Пример', en: 'Example' },
    'wins.1.example': { ru: 'В Cherry Game управлял закупкой трафика и внедрял механики удержания — MAU вырос с 1.8M до 6M+ менее чем за 4 месяца. Монетизация строилась через CPA-модель, оптимизированную под качество аудитории.', en: 'In Cherry Game, managed user acquisition and implemented retention mechanics — increasing MAU from 1.8M to 6M+ in under 4 months and monetizing the audience through a CPA-optimized model.' },
    'wins.2.example': { ru: 'В Cherry Game сгенерировал $150k+ через продажи трафика. Параллельно участвовал в закрытии стратегического партнёрства — продажа приложения другой команде принесла ~350% чистой прибыли. В Diamore — $27k+ через прямые продажи.', en: 'In Cherry Game, generated $150k+ through traffic sales. Separately helped close a strategic partnership by selling the application to another team, achieving ~350% net profit. In Diamore — $27k+ through direct sales.' },
    'wins.3.example': { ru: 'В Diamore построил систему из 170+ амбассадоров и KOL, которая генерировала платный трафик. Структурированные стимулы и трекинг результатов: DAU вырос с 300k до 1.2M, MAU — с 400k до 3.4M.', en: 'At Diamore I built a 170+ ambassador and KOL partner system that generated paid acquisition traffic. Structured incentive tiers and revenue performance tracking drove DAU from 300k to 1.2M and MAU from 400k to 3.4M.' },
    'proj.h': { ru: 'Собственные проекты', en: 'Founder Projects' },
    'proj.1.label': { ru: 'Основатель · GameFi-стартап', en: 'Founder · GameFi Startup' },
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
    'cta.sub': { ru: 'Открыт к предложениям в сфере роста, монетизации и партнёрств — рассматриваю возможности по всему миру.', en: 'Open to growth, revenue, partnerships, and monetization opportunities worldwide.' },
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
