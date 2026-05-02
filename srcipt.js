// ==========================
// 🌌 Matrix Background Effect + Language System
// ==========================

// Language data
const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, my name is",
    "hero.name": "Basem Al-Hersh.",
    "hero.tagline": "I build secure digital solutions.",
    "hero.description":
      "I'm an Information Technology student specializing in cybersecurity, Python development, and ethical hacking. I have built 45+ security-focused projects and I'm currently completing CompTIA Security+. Fluent in English (TESOL Certified) and available for remote security roles.",
    "hero.viewWork": "View My Work",
    "hero.getInTouch": "Get In Touch",

    // Stats Section
    "stats.projects": "Projects Completed",
    "stats.experience": "Years Experience",
    "stats.certifications": "Certifications",
    "stats.languages": "Languages",

    // About Section
    "about.title": "About Me",
    "about.description1":
      "I am a sophomore Information Technology student at Sana'a University with a strong passion for cybersecurity, ethical hacking, and Python development. I have built 45+ projects and I'm currently completing CompTIA Security+ to formalize my knowledge in threat analysis, network security, and vulnerability assessment.",
    "about.description2":
      "I run a Telegram channel (t.me/Cyber_Sentinel0) where I share cybersecurity content and programming tutorials. I also understand Docker containerization, networking fundamentals (CCNA), and use Kali Linux and Wazuh in my security practice.",
    "about.location": "Sana'a, Yemen",
    "about.education": "Education",
    "about.degree": "B.Sc. in Information Technology",
    "about.year": "Sophomore Year",
    "about.certifications": "Certifications",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.programming": "Programming",
    "skills.cybersecurity": "Cybersecurity",
    "skills.os": "Operating Systems",
    "skills.python": "Python Libraries",
    "skills.languages": "Languages",
    "skills.soft": "Soft Skills",
    "skills.devops": "DevOps & Tools",
    "skills.devopsDesc":
      "Docker (containers, images, volumes, networking), Git, GitHub, Bash Scripting, PowerShell, WSL2, Linux CLI",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.zenith":
      "Developed an e-commerce platform using Flask with user authentication, product management, and marketplace system.",
    "projects.hospital":
      "Built a complete desktop application with Tkinter featuring login/registration, admin dashboard, doctor dashboard, and patient dashboard.",
    "projects.firewall":
      "Command-line tool that detects suspicious IPs and blocks them via Windows Firewall.",
    "projects.scraper":
      "Scrapes data using requests and BeautifulSoup, then saves the information to CSV files.",
    "projects.viewGitHub": "View on GitHub",
    "projects.ransomware":
      "Python-based file encryption/decryption educational project demonstrating Fernet symmetric encryption. Built to understand ransomware mechanics for defensive and ethical research purposes.",
    "projects.cpuscheduler":
      "Educational desktop app simulating CPU scheduling algorithms: FCFS, SJF, Round Robin, and Priority scheduling — with correct calculations and visualizations for students.",
    "projects.aitexteditor":
      "Feature-rich Python text editor with voice recognition for dictation, text-to-speech output, and intelligent Arabic/English text direction detection. Powered by AI text processing.",
    "projects.mini":
      "I have completed 45+ mini projects with Python, HTML, and CSS. Samples available upon request.",
    "projects.viewAll": "View All Projects",

    // Experience Section
    "experience.title": "Experience",
    "experience.engteacher": "Online English Teacher",
    "experience.engteacherOrg": "Family Medicine Center",
    "experience.engteacherPeriod": "October 2025 – Present",
    "experience.engteacherDesc":
      "Deliver one-on-one and group English conversation lessons. Demonstrates professional English fluency for international collaboration.",
    "experience.tutorOrg": "Sana'a University – 2024",
    "experience.online": "Online English Teacher",
    "experience.current": "Current",
    "experience.onlineDesc":
      "Conducted one-on-one and group lessons in English conversation and fluency.",
    "experience.tutor": "Programming Tutor",
    "experience.tutorDesc":
      "Assisted students with C++ programming and English language skills.",
    "experience.teacher": "English Teacher",
    "experience.teacherDesc":
      "Taught English language courses to technical students.",
    "experience.teacherDesc2": "Taught English language to school students.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp: +967775882014",
    "contact.telegram": "Telegram",
    "contact.channel": "Channel: t.me/Cyber_Sentinel0",
    "contact.follow": "Follow Me",

    // Footer
    "footer.tagline":
      "IT Student | Cybersecurity Enthusiast | Python Developer | Security+ Candidate",
    "footer.copyright":
      "2026 Basem Mohammed Ali Al-Hersh. All Rights Reserved.",
  },
  ar: {
    // Navigation
    "nav.about": "عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.experience": "الخبرة",
    "nav.contact": "اتصل بي",

    // Hero Section
    "hero.greeting": "مرحباً، اسمي",
    "hero.name": "باسم الهرش.",
    "hero.tagline": "أبني حلول رقمية آمنة.",
    "hero.description":
      "أنا طالب تكنولوجيا معلومات متخصص في الأمن السيبراني وتطوير بايثون والاختراق الأخلاقي. قمت ببناء أكثر من 45 مشروعاً أمنياً وأنا حالياً أُكمل شهادة CompTIA Security+. أتحدث الإنجليزية بطلاقة (حاصل على TESOL) ومتاح للأدوار الأمنية عن بُعد.",
    "hero.viewWork": "شاهد أعمالي",
    "hero.getInTouch": "تواصل معي",

    // Stats Section
    "stats.projects": "مشروع مكتمل",
    "stats.experience": "سنوات خبرة",
    "stats.certifications": "شهادة",
    "stats.languages": "لغة",

    // About Section
    "about.title": "عني",
    "about.description1":
      "أنا طالب سنة ثانية في تكنولوجيا المعلومات بجامعة صنعاء، شغوف بالأمن السيبراني والاختراق الأخلاقي وتطوير بايثون. قمت ببناء أكثر من 45 مشروعاً وأنا حالياً أُكمل شهادة CompTIA Security+ لتعزيز معرفتي في تحليل التهديدات وأمن الشبكات وتقييم الثغرات.",
    "about.description2":
      "أدير قناة تيليجرام (t.me/Cyber_Sentinel0) حيث أشارك محتوى الأمن السيبراني ودروساً برمجية. كما أفهم تقنية حاويات Docker وأساسيات الشبكات (CCNA) وأستخدم Kali Linux و Wazuh في ممارستي الأمنية.",
    "about.location": "صنعاء، اليمن",
    "about.education": "التعليم",
    "about.degree": "بكالوريوس في تكنولوجيا المعلومات",
    "about.year": "السنة الثانية",
    "about.certifications": "الشهادات",

    // Skills Section
    "skills.title": "المهارات التقنية",
    "skills.programming": "البرمجة",
    "skills.cybersecurity": "الأمن السيبراني",
    "skills.os": "أنظمة التشغيل",
    "skills.python": "مكتبات بايثون",
    "skills.languages": "اللغات",
    "skills.soft": "المهارات الشخصية",
    "skills.devops": "أدوات DevOps",
    "skills.devopsDesc":
      "Docker (الحاويات، الصور، وحدات التخزين، الشبكات)، Git، GitHub، Bash Scripting، PowerShell، WSL2، Linux CLI",

    // Projects Section
    "projects.title": "أبرز المشاريع",
    "projects.zenith":
      "تم تطوير منصة تجارة إلكترونية باستخدام Flask مع نظام مصادقة المستخدم، وإدارة المنتجات، ونظام السوق.",
    "projects.hospital":
      "تم بناء تطبيق سطح مكتب كامل باستخدام Tkinter يتضمن تسجيل الدخول/التسجيل، لوحة تحكم المسؤول، لوحة تحكم الطبيب، ولوحة تحكم المريض.",
    "projects.firewall":
      "أداة سطر أوامر تكتشف عناوين IP المشبوهة وتحظرها عبر جدار حماية Windows.",
    "projects.scraper":
      "يقوم باستخراج البيانات باستخدام requests و BeautifulSoup، ثم يحفظ المعلومات في ملفات CSV.",
    "projects.viewGitHub": "عرض على GitHub",
    "projects.ransomware":
      "مشروع تعليمي لتشفير وفك تشفير الملفات باستخدام Python ومكتبة Fernet. تم بناؤه لفهم آليات الفدية لأغراض دفاعية وبحثية أخلاقية.",
    "projects.cpuscheduler":
      "تطبيق سطح مكتب تعليمي يحاكي خوارزميات جدولة المعالج: FCFS وSJF وRound Robin والأولوية — مع حسابات صحيحة ومرئيات للطلاب.",
    "projects.aitexteditor":
      "محرر نصوص Python غني بالميزات مع التعرف على الصوت للإملاء، وتحويل النص إلى كلام، وكشف اتجاه النص بالعربية أو الإنجليزية بذكاء. مدعوم بمعالجة النصوص الذكية.",
    "projects.mini":
      "لقد أكملت 45+ مشروعاً صغيراً باستخدام Python و HTML و CSS. العينات متاحة عند الطلب.",
    "projects.viewAll": "عرض جميع المشاريع",

    // Experience Section
    "experience.title": "الخبرة",
    "experience.engteacher": "مدرس لغة إنجليزية عبر الإنترنت",
    "experience.engteacherOrg": "مركز طب الأسرة",
    "experience.engteacherPeriod": "أكتوبر 2025 – حتى الآن",
    "experience.engteacherDesc":
      "تقديم دروس فردية وجماعية في محادثة اللغة الإنجليزية. يُظهر إتقاناً احترافياً للإنجليزية للتعاون الدولي.",
    "experience.tutorOrg": "جامعة صنعاء – 2024",
    "experience.online": "مدرس لغة إنجليزية عبر الإنترنت",
    "experience.current": "حالياً",
    "experience.onlineDesc":
      "أجريت دروس فردية وجماعية في المحادثة والطلاقة باللغة الإنجليزية.",
    "experience.tutor": "مدرس برمجة",
    "experience.tutorDesc":
      "ساعدت الطلاب في برمجة C++ ومهارات اللغة الإنجليزية.",
    "experience.teacher": "مدرس لغة إنجليزية",
    "experience.teacherDesc": "درست دورات اللغة الإنجليزية للطلاب التقنيين.",
    "experience.teacherDesc2": "درست اللغة الإنجليزية لطلاب المدارس.",

    // Contact Section
    "contact.title": "تواصل معي",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.whatsapp": "واتساب: 967775882014+",
    "contact.telegram": "تيليجرام",
    "contact.channel": "القناة: t.me/Cyber_Sentinel0",
    "contact.follow": "تابعني",

    // Footer
    "footer.tagline":
      "طالب تكنولوجيا معلومات | متحمس للأمن السيبراني | مطور بايثون | مرشح Security+",
    "footer.copyright": "2026 باسم محمد علي مقبل الهرش. كل الحقوق محفوظة",
  },
};

// ===============
// Language Switch
// ===============
document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("langToggle");
  const langText = document.querySelector(".lang-text");

  let currentLang = localStorage.getItem("language") || "en";
  updateLanguage(currentLang);

  langToggle.addEventListener("click", function () {
    currentLang = currentLang === "en" ? "ar" : "en";
    updateLanguage(currentLang);
    localStorage.setItem("language", currentLang);
  });

  function updateLanguage(lang) {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    langText.textContent = lang === "en" ? "العربية" : "English";
    langToggle.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    // Update bilingual attributes (like CV button)
    const bilingualElements = document.querySelectorAll("[data-ar][data-en]");
    bilingualElements.forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    const typewriterElement = document.querySelector(".typewriter");
    if (
      typewriterElement &&
      typewriterElement.getAttribute("data-key") === "hero.tagline"
    ) {
      typewriterElement.textContent = translations[lang]["hero.tagline"];
    }
  }

  // ==========================
  // Matrix Background Animation
  // ==========================
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = "01010101010101010101010101010101";
  const charArray = chars.split("");
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let x = 0; x < columns; x++) drops[x] = 1;

  function drawMatrix() {
    ctx.fillStyle = "rgba(10, 25, 47, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#64ffda";
    ctx.font = fontSize + "px Orbitron";

    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
        drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 35);

  // ==========================
  // Navbar Scroll Effect
  // ==========================
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(10, 25, 47, 0.98)";
    } else {
      navbar.style.backgroundColor = "rgba(10, 25, 47, 0.95)";
    }
  });

  // ==========================
  // Counter Animation - FIXED VERSION
  // ==========================
  function startCounter(counterElement) {
    const target = parseInt(counterElement.getAttribute("data-count"));
    let current = 0;
    const duration = 2000; // 2 seconds for animation
    const stepTime = 20; // update every 20ms
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counterElement.innerText = target;
        clearInterval(timer);
      } else {
        counterElement.innerText = Math.floor(current);
      }
    }, stepTime);
  }

  // Use Intersection Observer to trigger counters when visible
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find all counters inside this section
          const counters = entry.target.querySelectorAll(".counter");
          counters.forEach((counter) => {
            // Only start if it hasn't been counted yet (still shows 0)
            if (
              counter.innerText === "0" ||
              counter.getAttribute("data-started") !== "true"
            ) {
              counter.setAttribute("data-started", "true");
              startCounter(counter);
            }
          });
          // Keep observing in case there are multiple sections
        }
      });
    },
    { threshold: 0.3 },
  ); // Trigger when 30% visible

  // Watch each counter-item container
  document.querySelectorAll(".counter-item").forEach((item) => {
    counterObserver.observe(item);
  });

  // ==========================
  // Smooth Scrolling
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
