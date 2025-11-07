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
    "hero.tagline": "I build secure digital solutions.",
    "hero.description":
      "I'm an Information Technology student specializing in cybersecurity and Python development. I create secure, efficient digital solutions and have built 60+ projects focusing on ethical hacking principles.",
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
      "I am a sophomore Information Technology student at Sana'a University with a strong passion for cybersecurity and Python development. I have built over 60 personal projects and continuously expand my knowledge in ethical hacking and software development.",
    "about.description2":
      "I run a Telegram channel where I share content about cybersecurity and programming, demonstrating my commitment to both learning and contributing to the tech community.",
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
    "projects.mini":
      "I have completed 60+ mini projects with Python, HTML, and CSS. Samples available upon request.",
    "projects.viewAll": "View All Projects",

    // Experience Section
    "experience.title": "Teaching Experience",
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
      "IT Student | Future Ethical Hacker | Python Developer",
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
    "hero.tagline": "أبني حلول رقمية آمنة.",
    "hero.description":
      "أنا طالب تكنولوجيا معلومات متخصص في الأمن السيبراني وتطوير بايثون. أصمم حلول رقمية آمنة وفعالة وقمت ببناء أكثر من 60 مشروعاً تركز على مبادئ الاختراق الأخلاقي.",
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
      "أنا طالب سنة ثانية في تكنولوجيا المعلومات بجامعة صنعاء، شغوف بالأمن السيبراني وتطوير بايثون. قمت ببناء أكثر من 60 مشروعاً شخصياً وأوسع معرفتي باستمرار في الاختراق الأخلاقي وتطوير البرمجيات.",
    "about.description2":
      "أدير قناة على التليجرام حيث أشارك محتوى حول الأمن السيبراني والبرمجة، مما يظهر التزامي بالتعلم والمساهمة في المجتمع التقني.",
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
    "projects.mini":
      "لقد أكملت 60+ مشروعاً صغيراً باستخدام Python و HTML و CSS. العينات متاحة عند الطلب.",
    "projects.viewAll": "عرض جميع المشاريع",

    // Experience Section
    "experience.title": "الخبرة في التدريس",
    "experience.online": "مدرس لغة إنجليزية عبر الإنترنت",
    "experience.current": "حالياً",
    "experience.onlineDesc":
      "أجريت دروس فردية وجماعية في المحادثة والطلاقة باللغة الإنجليزية.",
    "experience.tutor": "مدرس برمجة",
    "experience.tutorDesc":
      "ساعدت الطلاب في برمجة C++ ومهارات اللغة الإنجليزية.",
    "experience.teacher": "مدرس لغة إنجليزية",
    "experience.teacherDesc":
      "درست دورات اللغة الإنجليزية للطلاب التقنيين.",
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
      "طالب تكنولوجيا معلومات | مخترق أخلاقي مستقبلي | مطور بايثون",
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
const bilingualElements = document.querySelectorAll('[data-ar][data-en]');
bilingualElements.forEach(el => {
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
  // Counter Animation
  // ==========================
  function animateCounter() {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const increment = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounter, 1);
      } else {
        counter.innerText = target;
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter();
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".counter-item").forEach((item) => {
    observer.observe(item);
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
