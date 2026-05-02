:root {
  --primary: #0a192f;
  --secondary: #64ffda;
  --accent: #e63946;
  --light: #ccd6f6;
  --dark: #112240;
  --text: #8892b0;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--text);
  background-color: var(--primary);
  scroll-behavior: smooth;
  line-height: 1.6;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Orbitron", sans-serif;
  color: var(--light);
  font-weight: 600;
  letter-spacing: -0.02em;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--primary);
}

::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4cd8c0;
}

/* Navigation */
.cyber-border {
  position: relative;
  overflow: hidden;
}

.cyber-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--secondary), transparent);
}

.navbar {
  background-color: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  padding: 1rem 0;
}

.navbar-brand {
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  color: var(--secondary) !important;
  font-size: 1.5rem;
  letter-spacing: -0.5px;
}

.navbar-brand:hover {
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
}

.nav-link {
  color: var(--light) !important;
  position: relative;
  margin: 0 10px;
  transition: var(--transition);
  font-weight: 500;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--secondary);
  transition: width 0.3s;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--secondary) !important;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 80%, rgba(100, 255, 218, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(100, 255, 218, 0.08) 0%, transparent 50%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-element {
  position: absolute;
  background: rgba(100, 255, 218, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(1) {
  width: 100px;
  height: 100px;
  top: 15%;
  left: 5%;
  animation-delay: 0s;
}

.floating-element:nth-child(2) {
  width: 70px;
  height: 70px;
  top: 70%;
  left: 85%;
  animation-delay: 2s;
}

.floating-element:nth-child(3) {
  width: 120px;
  height: 120px;
  bottom: 10%;
  left: 15%;
  animation-delay: 4s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* Buttons */
.cyber-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--secondary);
  border: 1px solid var(--secondary);
  padding: 12px 28px;
  border-radius: 4px;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
}

.cyber-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--secondary);
  transition: all 0.3s;
  z-index: -1;
}

.cyber-btn:hover {
  color: var(--primary);
  text-decoration: none;
  transform: translateY(-2px);
}

.cyber-btn:hover::before {
  left: 0;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  border: 2px solid var(--secondary);
  background: transparent;
  color: var(--secondary);
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  font-size: 0.9rem;
}

.btn-secondary:hover {
  background: var(--secondary);
  color: var(--primary);
  transform: translateY(-2px);
  text-decoration: none;
}

/* Section Titles */
.section-title {
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  font-size: 2rem;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--secondary);
  transition: width 0.3s;
}

.section-title:hover::after {
  width: 100%;
}

.text-center .section-title::after {
  left: 50%;
  transform: translateX(-50%);
}

/* Skills Cards */
.skill-card {
  background-color: var(--dark);
  border-radius: 8px;
  padding: 1.5rem;
  height: 100%;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--secondary);
  transform: scaleY(0);
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: var(--secondary);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

.skill-card:hover::before {
  transform: scaleY(1);
}

.skill-card h4 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.skill-card p {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  background: rgba(100, 255, 218, 0.1);
  color: var(--secondary);
  padding: 4px 12px;
  border-radius: 20px;
  margin: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(100, 255, 218, 0.2);
  transition: var(--transition);
  white-space: nowrap;
}

.skill-tag:hover {
  background: rgba(100, 255, 218, 0.2);
  transform: translateY(-1px);
}

/* Projects Cards */
.project-card {
  background-color: var(--dark);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--secondary);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.15);
}

.project-img {
  height: 160px;
  background: linear-gradient(135deg, var(--secondary), #4cd8c0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 3rem;
  position: relative;
  overflow: hidden;
}

.project-img::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.project-card:hover .project-img::after {
  left: 100%;
}

.project-card .card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card .card-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.project-card .card-text {
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex: 1;
}

/* Cert Badges */
.cert-badge {
  background-color: var(--dark);
  border-left: 4px solid var(--secondary);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0 8px 8px 0;
  transition: var(--transition);
  cursor: pointer;
}

.cert-badge:hover {
  transform: translateX(5px);
  background-color: rgba(17, 34, 64, 0.8);
  border-left-width: 6px;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--secondary), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -2rem;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--secondary);
  border: 2px solid var(--dark);
  box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.2);
  transition: var(--transition);
}

.timeline-item:hover::before {
  transform: scale(1.3);
  box-shadow: 0 0 0 5px rgba(100, 255, 218, 0.3);
}

.timeline-item h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.timeline-item p {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

/* Contact Info */
.contact-info {
  background-color: var(--dark);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: var(--transition);
}

.contact-info:hover {
  border-color: var(--secondary);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--secondary);
  transition: var(--transition);
  border: 1px solid rgba(100, 255, 218, 0.2);
  text-decoration: none;
  font-size: 1.2rem;
}

.social-links a:hover {
  background-color: var(--secondary);
  color: var(--primary);
  transform: translateY(-3px);
  border-color: var(--secondary);
}

/* Footer */
footer {
  background-color: var(--dark);
  color: var(--text);
  padding: 2rem 0;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

/* Counters */
.counter {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary);
  font-family: "Orbitron", sans-serif;
  line-height: 1;
}

.counter-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(17, 34, 64, 0.5);
  border-radius: 12px;
  transition: var(--transition);
  border: 1px solid rgba(100, 255, 218, 0.05);
}

.counter-item:hover {
  transform: translateY(-3px);
  border-color: rgba(100, 255, 218, 0.2);
}

.counter-item p {
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Dark Section */
.dark-section {
  background-color: var(--dark);
}

/* Sections Padding */
section {
  padding: 5rem 0;
}

/* Typewriter Effect */
.typewriter {
  overflow: hidden;
  border-right: 2px solid var(--secondary);
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
  display: inline-block;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: var(--secondary);
  }
}

/* Language Switcher */
.language-switcher {
  display: flex;
  align-items: center;
  margin-left: 15px;
}

.lang-btn {
  background: transparent;
  color: var(--light);
  border: 1px solid var(--secondary);
  padding: 6px 15px;
  border-radius: 4px;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.85rem;
}

.lang-btn:hover {
  background-color: rgba(100, 255, 218, 0.1);
  transform: translateY(-1px);
}

/* Matrix Canvas */
#matrix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.08;
}

/* All content above matrix */
.navbar,
section,
footer {
  position: relative;
  z-index: 1;
}

/* ============================================ */
/* RESPONSIVE DESIGN - COMPLETE FIXES */
/* ============================================ */

/* Tablet (768px - 991px) */
@media (max-width: 991px) {
  section {
    padding: 3rem 0;
  }

  .hero-section {
    padding: 100px 0 60px;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .skill-card {
    padding: 1.25rem;
  }

  .project-img {
    height: 140px;
  }

  .timeline {
    padding-left: 1.5rem;
  }
}

/* Mobile (576px - 767px) */
@media (max-width: 767px) {
  section {
    padding: 2.5rem 0;
  }

  .hero-section {
    padding: 80px 0 40px;
    text-align: center;
  }

  .hero-content {
    text-align: center;
  }

  .display-2 {
    font-size: 2rem !important;
  }

  .display-4 {
    font-size: 1.25rem !important;
  }

  .typewriter {
    white-space: normal;
    border-right: none;
    display: block;
  }

  .section-title {
    font-size: 1.5rem;
    text-align: center;
    display: block;
  }

  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .counter {
    font-size: 2rem;
  }

  .counter-item {
    padding: 1rem;
  }

  .skill-card h4 {
    font-size: 1.1rem;
  }

  .skill-tag {
    font-size: 0.7rem;
    padding: 3px 10px;
  }

  .project-card .card-title {
    font-size: 1.1rem;
  }

  .project-img {
    height: 120px;
    font-size: 2rem;
  }

  .cyber-btn,
  .btn-secondary {
    padding: 8px 20px;
    font-size: 0.85rem;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline-item::before {
    left: -1rem;
  }

  .social-links a {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .cert-badge {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }

  .contact-info {
    padding: 1.5rem;
  }
}

/* Small Mobile (below 576px) */
@media (max-width: 576px) {
  section {
    padding: 2rem 0;
  }

  .hero-section {
    padding: 60px 0 30px;
  }

  .display-2 {
    font-size: 1.75rem !important;
  }

  .hero-content .lead {
    font-size: 0.9rem;
  }

  .counter {
    font-size: 1.75rem;
  }

  .counter-item p {
    font-size: 0.75rem;
  }

  .skill-card {
    padding: 1rem;
  }

  .skill-card p {
    font-size: 0.8rem;
  }

  .project-card .card-body {
    padding: 1rem;
  }

  .project-card .card-text {
    font-size: 0.8rem;
  }

  .cyber-btn,
  .btn-secondary {
    padding: 6px 16px;
    font-size: 0.8rem;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .d-flex.flex-wrap.gap-3 {
    flex-direction: column;
  }

  .timeline-item h4 {
    font-size: 1rem;
  }

  .cert-badge {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }

  footer p {
    font-size: 0.75rem;
  }
}

/* ============================================ */
/* RTL (Arabic) SPECIFIC FIXES */
/* ============================================ */

html[dir="rtl"] body {
  text-align: right;
}

html[dir="rtl"] .section-title::after {
  left: auto;
  right: 0;
}

html[dir="rtl"] .text-center .section-title::after {
  left: 50%;
  right: auto;
  transform: translateX(50%);
}

html[dir="rtl"] .navbar-nav {
  padding-right: 0;
}

html[dir="rtl"] .ms-auto {
  margin-left: 0 !important;
  margin-right: auto !important;
}

html[dir="rtl"] .me-2,
html[dir="rtl"] .me-3 {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}

html[dir="rtl"] .timeline {
  padding-left: 0;
  padding-right: 2rem;
}

html[dir="rtl"] .timeline::before {
  left: auto;
  right: 7px;
}

html[dir="rtl"] .timeline-item::before {
  left: auto;
  right: -2rem;
}

html[dir="rtl"] .cert-badge {
  border-left: none;
  border-right: 4px solid var(--secondary);
  border-radius: 8px 0 0 8px;
}

html[dir="rtl"] .cert-badge:hover {
  transform: translateX(-5px);
}

html[dir="rtl"] .skill-card::before {
  left: auto;
  right: 0;
}

html[dir="rtl"] .social-links a {
  margin-right: 0;
  margin-left: 15px;
}

/* RTL Mobile Adjustments */
@media (max-width: 767px) {
  html[dir="rtl"] .hero-content {
    text-align: center;
  }

  html[dir="rtl"] .section-title::after {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  html[dir="rtl"] .timeline {
    padding-right: 1rem;
    padding-left: 0;
  }

  html[dir="rtl"] .timeline-item::before {
    right: -1rem;
    left: auto;
  }
}

/* Utility Classes */
.text-secondary {
  color: var(--secondary) !important;
}

.bg-dark {
  background-color: var(--dark) !important;
}

.border-secondary {
  border-color: var(--secondary) !important;
}

.gap-3 {
  gap: 1rem;
}

.flex-wrap {
  flex-wrap: wrap;
}

/* Smooth hover effects for all interactive elements */
a,
button,
.project-card,
.skill-card,
.cert-badge,
.social-links a {
  transition: var(--transition);
}

/* Fix for Bootstrap button overrides */
.btn {
  font-family: "Orbitron", sans-serif;
}

.btn:focus,
.btn:active {
  outline: none;
  box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.3);
}

/* Fix for project card buttons */
.project-card .row {
  margin-top: auto;
}

.project-card .cyber-btn {
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
}

/* Make sure text doesn't overflow on small screens */
.skill-tag {
  white-space: normal;
  word-break: keep-all;
}

/* Improve readability */
p,
li,
.card-text {
  line-height: 1.6;
}

/* Fix for floating elements on mobile */
@media (max-width: 768px) {
  .floating-element {
    display: none;
  }
}

/* Fix for counter animation container */
.counter-item {
  min-width: 120px;
}

/* Fix for language button in mobile navbar */
@media (max-width: 991px) {
  .language-switcher {
    margin: 10px 0;
    justify-content: center;
  }

  .navbar-nav {
    align-items: center;
  }
}

/* Fix for typewriter on RTL */
html[dir="rtl"] .typewriter {
  direction: ltr;
  display: inline-block;
}
