const translations = {
  en: {
    "nav.about": "About",
    "nav.disclosure": "AppSec & CVEs",
    "nav.skills": "Arsenal",
    "nav.projects": "Security Tools",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.cv": "CV",

    "hero.badge": "CompTIA Security+ & CCNA Certified • Available for Security Roles",
    "hero.greeting": "root@basem-sec:~# whoami",
    "hero.name": "Basem Mohammed Ali Al-Hersh",
    "hero.tagline": "Cybersecurity & Application Security Engineer",
    "hero.description":
      "Nearly 4 years building and securing web, mobile, and desktop systems. Certified in CompTIA Security+ and CCNA, experienced in OWASP Top 10 production hardening, authorized vulnerability assessments with responsible CVE disclosure, and AI-powered security tooling in Python & C#.",
    "hero.viewWork": "Explore Security Work",
    "hero.downloadCV": "Download Cyber CV (EN / AR)",
    "hero.fullstackLink": "Full-Stack Portfolio",
    "hero.term1": "audit --scope web-apps --owasp top10",
    "hero.term2": "wifi-harness --protocols 5 --advisor gemini",
    "hero.term3": "track --portswigger 274/labs --status active",

    "stats.projects": "Security & Dev Projects",
    "stats.experience": "Years Building & Securing",
    "stats.labs": "PortSwigger Labs Tracked",
    "stats.certifications": "Credentials & Programs",

    "about.title": "About & Credentials",
    "about.subtitle": "Bridging offensive security mindset with production Full-Stack engineering.",
    "about.description1":
      "I am an Information Technology specialist at Sana'a University with nearly 4 years of hands-on experience in Application Security, ethical hacking, and building resilient systems in Python, C#, Node.js, and React/Next.js.",
    "about.description2":
      "I run the t.me/Cyber_Sentinel0 Telegram channel sharing cybersecurity insights and secure coding tutorials, and I integrate Docker, Kali Linux, Wazuh SIEM, and AI-assisted defense into my daily workflow.",
    "about.location": "Sana'a, Yemen (Remote)",
    "about.langVal": "Arabic (Native) · English (TESOL)",
    "about.certifications": "Verified Certifications & Training",

    "disclosure.title": "AppSec Hardening & Responsible Disclosure",
    "disclosure.subtitle": "Real-world defensive hardening and authorized security testing under strict ethical boundaries.",
    "disclosure.hardenTitle": "Production Website Hardening",
    "disclosure.hardenDesc":
      "Audited and hardened live deployed web applications (React, Next.js, Node.js, and PHP platforms) before and after release — securing authentication flows, role-based access control, HTTP security headers, input sanitization, and XSS/CSRF defenses.",
    "disclosure.cveTitle": "Responsible CVE & Vulnerability Disclosure",
    "disclosure.cveDesc":
      "Performed authorized black-box and grey-box security assessments across external web applications and responsibly reported verified vulnerabilities and CVEs to site owners and security teams under private scope and non-disclosure agreements.",

    "skills.title": "Security & Engineering Arsenal",
    "skills.cybersecurity": "Offensive & Defensive Security",
    "skills.cyberDesc":
      "OWASP Top 10 auditing, PortSwigger Academy labs, Wazuh SIEM, Shodan, ARP/ICMP discovery, PowerShell Firewall rules, Kali Linux.",
    "skills.programming": "Security Tooling & Code",
    "skills.progDesc":
      "Python (Fernet, Requests, BeautifulSoup, FastAPI, Flask), C# (.NET / WPF / WinForms), TypeScript, JavaScript, Node.js, PHP, C++.",
    "skills.devops": "Systems, Cloud & AI Defense",
    "skills.devopsDesc":
      "Docker containerization, Linux (Kali, Ubuntu, WSL2), Google Cloud (Cloud Run), Git/GitHub, Google Gemini AI & local LLMs (Ollama).",

    "projects.title": "Security Tools & Flagship Projects",
    "projects.subtitle": "Network auditors, AppSec trackers, hardened full-stack platforms, and defensive research.",
    "filter.all": "All",
    "filter.network": "Network & Tools",
    "filter.appsec": "AppSec & Web",
    "filter.python": "Python & Research",
    "projects.wifiharness":
      "C# (.NET) Windows desktop auditor scanning /24 subnets via ARP & ICMP, fingerprinting devices across 5 protocols (NetBIOS, mDNS, SSDP, HTTP, ARP), and integrating a Google Gemini AI Security Advisor.",
    "projects.pwntracker":
      "Interactive web security study dashboard tracking progress across all 274 PortSwigger Web Security Academy labs — deployed live on both Vercel and Netlify.",
    "projects.firewall":
      "Automated command-line defensive utility that fetches and detects suspicious threat IPs and dynamically blocks them via Windows Firewall rules.",
    "projects.ransomware":
      "Python-based symmetric cryptography study demonstrating Fernet file encryption/decryption mechanics built strictly for defensive analysis and incident readiness.",
    "projects.it3bot":
      "Open-source academic platform syncing a Telegram Bot and Web Mini App in real time with Supabase PostgreSQL and a FastAPI backend on Vercel.",
    "projects.unique":
      "Production Next.js & TypeScript student exam platform hardened with strict validation, protected flows, and responsive Arabic/English UX.",
    "projects.schoolms":
      "Multi-role institutional system built with Laravel, PostgreSQL, React, Flutter, and Docker — enforcing role-based access across admins, teachers, and students.",
    "projects.pythonsuite":
      "Suite of Python applications including ZenithBazaar (Flask + Auth), role-based Hospital Management System (Tkinter/SQLite), CPU Scheduling Simulator, and AI Voice Text Editor.",
    "projects.fullstackdesc":
      "Explore my full suite of 50+ web & mobile projects (React Native, Flutter, Next.js, NestJS) on my dedicated Full-Stack portfolio hosted on Netlify.",
    "projects.viewGitHub": "View on GitHub",

    "experience.title": "Experience Timeline",
    "experience.secdev": "Security Researcher & Full-Stack Engineer",
    "experience.secdevMeta": "Nearly 4 Years (2023 – Present) • Independent & Remote",
    "experience.secdevDesc":
      "Built and hardened 50+ applications, developed C# & Python security tools (WiFi Harness, Firewall CLI), and conducted authorized web vulnerability testing with responsible CVE disclosure.",
    "experience.engteacher": "English Language Instructor (3 Years — Ongoing)",
    "experience.engteacherMeta": "Family Medicine Center (Online), Technical Industrial Institute & Egra School",
    "experience.engteacherDesc":
      "3 continuous years teaching technical and conversational English, demonstrating fluent international communication for global security & engineering teams.",
    "experience.tutor": "Programming Teaching Assistant",
    "experience.tutorOrg": "Sana'a University • 2024",
    "experience.tutorDesc":
      "Mentored IT students in C++ fundamentals, debugging, and secure coding principles.",

    "contact.title": "Establish Secure Contact",
    "contact.email": "Email",
    "contact.phone": "Phone & WhatsApp",
    "contact.telegram": "Telegram & Channel",

    "cv.title": "Download Cybersecurity CV",
    "cv.subtitle": "Updated 2026 Security+ & AppSec Edition (English & Arabic PDF)",
    "footer.copyright": "Basem Mohammed Ali Al-Hersh. All Rights Reserved.",
    "footer.tagline": "Cybersecurity & AppSec Engineer | CompTIA Security+ | CCNA | Python & C#",
  },

  ar: {
    "nav.about": "عنّي",
    "nav.disclosure": "الأمان و CVEs",
    "nav.skills": "الترسانة التقنية",
    "nav.projects": "الأدوات والمشاريع",
    "nav.experience": "الخبرات",
    "nav.contact": "تواصل معي",
    "nav.cv": "السيرة الذاتية",

    "hero.badge": "حاصل على CompTIA Security+ و CCNA • متاح لأدوار الأمن السيبراني",
    "hero.greeting": "root@basem-sec:~# whoami",
    "hero.name": "باسم محمد علي الهرش",
    "hero.tagline": "مهندس أمن سيبراني وأمان تطبيقات (AppSec)",
    "hero.description":
      "خبرة تقارب 4 سنوات في بناء وتحصين أنظمة الويب والموبايل وسطح المكتب. حاصل على شهادتي CompTIA Security+ و CCNA، مع خبرة عملية في تحصين المواقع وفق OWASP Top 10، وفحص الثغرات المصرح به والإبلاغ المسؤول عن CVEs، وتطوير أدوات الأمان بالذكاء الاصطناعي في Python و C#.",
    "hero.viewWork": "استكشف المشاريع الأمنية",
    "hero.downloadCV": "تحميل السيرة الذاتية الأمنية (EN / AR)",
    "hero.fullstackLink": "معرض Full-Stack",
    "hero.term1": "audit --scope web-apps --owasp top10",
    "hero.term2": "wifi-harness --protocols 5 --advisor gemini",
    "hero.term3": "track --portswigger 274/labs --status active",

    "stats.projects": "مشروعاً أمنياً وبرمجياً",
    "stats.experience": "سنوات في البناء والتأمين",
    "stats.labs": "مختبراً في PortSwigger",
    "stats.certifications": "شهادات وبرامج",

    "about.title": "نبذة والشهادات المعتمدة",
    "about.subtitle": "الجمع بين عقلية الاختبار الهجومي والهندسة الدفاعية لتطبيقات الإنتاج.",
    "about.description1":
      "متخصص في تقنية المعلومات بجامعة صنعاء بخبرة عملية تقارب 4 سنوات في أمان التطبيقات والاختراق الأخلاقي وبناء الأنظمة المحصّنة بلغات Python و C# و Node.js و React/Next.js.",
    "about.description2":
      "أدير قناة تيليجرام t.me/Cyber_Sentinel0 لنشر محتوى الأمن السيبراني والبرمجة الآمنة، وأستخدم Docker و Kali Linux و Wazuh SIEM والذكاء الاصطناعي في العمل الأمني اليومي.",
    "about.location": "صنعاء، اليمن (عن بُعد)",
    "about.langVal": "العربية (الأم) · الإنجليزية (TESOL)",
    "about.certifications": "الشهادات والبرامج التدريبية المعتمدة",

    "disclosure.title": "تحصين التطبيقات والإبلاغ المسؤول عن الثغرات",
    "disclosure.subtitle": "عمل أمني حقيقي وفق ضوابط أخلاقية واتفاقيات سرية صارمة.",
    "disclosure.hardenTitle": "تحصين المواقع والمنصات الإنتاجية",
    "disclosure.hardenDesc":
      "فحص وتحصين منصات ويب منشورة (React و Next.js و Node.js و PHP) قبل النشر وبعده — وتأمين مسارات المصادقة، الصلاحيات، ترويسات الأمان HTTP، وتنقية المدخلات ضد XSS و CSRF.",
    "disclosure.cveTitle": "الإبلاغ المسؤول عن ثغرات CVEs",
    "disclosure.cveDesc":
      "إجراء اختبارات اختراق مصرح بها على تطبيقات ويب خارجية والإبلاغ المسؤول عن الثغرات الحقيقية و CVEs للجهات المالكة ضمن نطاق خاص واتفاقيات عدم إفشاء.",

    "skills.title": "الترسانة الأمنية والهندسية",
    "skills.cybersecurity": "الأمن الهجومي والدفاعي",
    "skills.cyberDesc":
      "مراجعة OWASP Top 10، مختبرات PortSwigger، Wazuh SIEM، Shodan، فحص الشبكات ARP/ICMP، جدار حماية ويندوز، و Kali Linux.",
    "skills.programming": "تطوير الأدوات والبرمجة",
    "skills.progDesc":
      "Python (Fernet و Requests و FastAPI و Flask)، C# (.NET / WPF / WinForms)، TypeScript، JavaScript، Node.js، PHP، و C++.",
    "skills.devops": "الأنظمة والسحابة والأمان الذكي",
    "skills.devopsDesc":
      "حاويات Docker، لينكس (Kali و Ubuntu و WSL2)، سحابة Google Cloud، Git/GitHub، ودمج Google Gemini AI ونماذج Ollama المحلية.",

    "projects.title": "أدوات الأمان والمشاريع الرائدة",
    "projects.subtitle": "مدققات الشبكات، متتبعات AppSec، المنصات المحصّنة، والبحوث الدفاعية.",
    "filter.all": "الكل",
    "filter.network": "الشبكات والأدوات",
    "filter.appsec": "أمان الويب",
    "filter.python": "Python والبحوث",
    "projects.wifiharness":
      "تطبيق سطح مكتب بـ C# يفحص الشبكات المحلية عبر ARP و ICMP ويبصم الأجهزة بـ 5 بروتوكولات مع مستشار أمان مدمج مدعوم بـ Google Gemini AI.",
    "projects.pwntracker":
      "لوحة تفاعلية لتتبع التقدم في جميع مختبرات PortSwigger Web Security Academy البالغ عددها 274 مختبراً — منشورة على Vercel و Netlify.",
    "projects.firewall":
      "أداة سطر أوامر دفاعية ترصد عناوين IP المشبوهة وتحظرها تلقائياً عبر قواعد جدار حماية ويندوز.",
    "projects.ransomware":
      "بحث دفاعي في التشفير المتماثل بلغة Python ومكتبة Fernet لفهم آليات التشفير وفك التشفير لأغراض الاستجابة للحوادث.",
    "projects.it3bot":
      "منظومة جامعية مفتوحة المصدر تربط بوت تيليجرام وتطبيق Mini App لحظياً بقاعدة Supabase PostgreSQL وخادم FastAPI.",
    "projects.unique":
      "منصة تعليمية حية بـ Next.js و TypeScript محصّنة بالتحقق الصارم من المدخلات وتدفقات استخدام محمية.",
    "projects.schoolms":
      "نظام إدارة مدارس متعدد الصلاحيات بـ Laravel و PostgreSQL و React و Flutter مع Docker وتطبيق صارم للصلاحيات.",
    "projects.pythonsuite":
      "مجموعة تطبيقات Python تضم ZenithBazaar (Flask + Auth)، نظام إدارة المستشفيات (Tkinter/SQLite)، محاكي جدولة المعالج، ومحرر النصوص الذكي.",
    "projects.fullstackdesc":
      "استكشف أكثر من 50 مشروع ويب وموبايل (React Native و Flutter و Next.js و NestJS) في معرض Full-Stack المستضاف على Netlify.",
    "projects.viewGitHub": "عرض على GitHub",

    "experience.title": "المسيرة والخبرات",
    "experience.secdev": "باحث أمني ومهندس Full-Stack",
    "experience.secdevMeta": "قرابة 4 سنوات (2023 – حتى الآن) • عمل مستقل وعن بُعد",
    "experience.secdevDesc":
      "بناء وتحصين أكثر من 50 تطبيقاً، وتطوير أدوات أمان بـ C# و Python، وإجراء اختبارات ثغرات مصرح بها مع الإبلاغ المسؤول عن CVEs.",
    "experience.engteacher": "مدرس لغة إنجليزية (3 سنوات — مستمر)",
    "experience.engteacherMeta": "مركز طب الأسرة (أونلاين)، المعهد التقني الصناعي ومدرسة إقرأ",
    "experience.engteacherDesc":
      "ثلاث سنوات متواصلة في تدريس اللغة الإنجليزية التقنية والمحادثة، مما يعكس قدرة تواصل دولية عالية.",
    "experience.tutor": "مساعد تدريس برمجة",
    "experience.tutorOrg": "جامعة صنعاء • 2024",
    "experience.tutorDesc":
      "إرشاد طلاب تقنية المعلومات في أساسيات C++ وتصحيح الأخطاء ومبادئ البرمجة الآمنة.",

    "contact.title": "قنوات التواصل الآمن",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف وواتساب",
    "contact.telegram": "تيليجرام والقناة",

    "cv.title": "تحميل السيرة الذاتية للأمن السيبراني",
    "cv.subtitle": "النسخة المحدثة 2026 (Security+ & AppSec — PDF عربي وإنجليزي)",
    "footer.copyright": "باسم محمد علي الهرش. جميع الحقوق محفوظة.",
    "footer.tagline": "مهندس أمن سيبراني وأمان تطبيقات | CompTIA Security+ | CCNA | Python & C#",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // Language switcher
  const langToggle = document.getElementById("langToggle");
  const langText = langToggle?.querySelector(".lang-text");
  let currentLang = "en";
  try {
    currentLang = localStorage.getItem("cyber_lang") || "en";
  } catch {
    currentLang = "en";
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (langText) langText.textContent = lang === "en" ? "العربية" : "English";

    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (dict[key]) el.textContent = dict[key];
    });
  }

  applyLanguage(currentLang);
  langToggle?.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    applyLanguage(currentLang);
    try {
      localStorage.setItem("cyber_lang", currentLang);
    } catch {
      /* noop */
    }
  });

  // Project filter tabs
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-filter");
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      projectItems.forEach((item) => {
        const cats = (item.getAttribute("data-category") || "").split(/\s+/);
        item.classList.toggle("d-none", target !== "all" && !cats.includes(target));
      });
    });
  });

  // Native <dialog> CV Modal with light-dismiss fallback
  const cvDialog = document.getElementById("cvDialog");
  const openCvBtns = [document.getElementById("openCvBtn"), document.getElementById("heroCvBtn")];
  const closeCvBtn = document.getElementById("closeCvBtn");

  openCvBtns.forEach((btn) => btn?.addEventListener("click", () => cvDialog?.showModal()));
  closeCvBtn?.addEventListener("click", () => cvDialog?.close());
  cvDialog?.addEventListener("close", () => {
    cvDialog.returnValue = "";
  });

  if (cvDialog && !("closedBy" in HTMLDialogElement.prototype)) {
    let pressedOutside = false;
    const isOutside = (e) => {
      const r = cvDialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    cvDialog.addEventListener("pointerdown", (e) => {
      pressedOutside = isOutside(e);
    });
    cvDialog.addEventListener("pointerup", (e) => {
      if (pressedOutside && isOutside(e)) cvDialog.close();
    });
  }

  // Counters
  const counters = document.querySelectorAll(".counter");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.done) return;
        el.dataset.done = "1";
        const target = parseInt(el.getAttribute("data-count") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        if (reducedMotionQuery.matches) {
          el.textContent = `${target}${suffix}`;
          return;
        }
        let val = 0;
        const step = Math.max(1, Math.ceil(target / 45));
        const tick = () => {
          val += step;
          if (val >= target) {
            el.textContent = `${target}${suffix}`;
          } else {
            el.textContent = `${val}${suffix}`;
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.35 }
  );
  counters.forEach((c) => counterObserver.observe(c));

  // Battery-aware Matrix Rain Canvas
  const matrixRegion = document.getElementById("matrix-region");
  const canvas = document.getElementById("matrix");
  if (canvas && matrixRegion) {
    const ctx = canvas.getContext("2d");
    const fontSize = 15;
    const chars = "01アイウエオカキクケコABCDEF";
    let drops = [];
    let rafId = null;
    let lastDraw = 0;
    let isSkipped = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.max(1, Math.floor(canvas.width / fontSize));
      drops = Array.from({ length: cols }, () => Math.floor(Math.random() * 25));
    };

    const drawStep = (ts) => {
      if (isSkipped || reducedMotionQuery.matches || document.hidden) {
        rafId = null;
        return;
      }
      if (ts - lastDraw > 50) {
        lastDraw = ts;
        ctx.fillStyle = "rgba(4, 8, 18, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00f5d4";
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        for (let i = 0; i < drops.length; i++) {
          const ch = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      rafId = requestAnimationFrame(drawStep);
    };

    const startMatrix = () => {
      if (reducedMotionQuery.matches || isSkipped || document.hidden) return;
      if (!rafId) rafId = requestAnimationFrame(drawStep);
    };

    const stopMatrix = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    resizeCanvas();
    if (!reducedMotionQuery.matches) startMatrix();

    window.addEventListener("resize", resizeCanvas, { passive: true });
    document.addEventListener("visibilitychange", () => (document.hidden ? stopMatrix() : startMatrix()));
    reducedMotionQuery.addEventListener("change", (e) => (e.matches ? stopMatrix() : startMatrix()));

    if ("contentVisibility" in document.documentElement.style) {
      matrixRegion.addEventListener("contentvisibilityautostatechange", (e) => {
        isSkipped = e.skipped;
        if (e.skipped) stopMatrix();
        else startMatrix();
      });
    }
  }
});
