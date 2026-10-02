// =========================
// Sulan Language Academy v2
// Homepage Script
// =========================

// -------------------------
// Mobile Navigation
// -------------------------
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// -------------------------
// Animated Counters
// -------------------------
function animateCounter(id, target, suffix = "") {
  const element = document.getElementById(id);
  if (!element) return;

  let current = 0;
  const increment = Math.ceil(target / 60);

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.textContent = current + suffix;
  }, 20);
}

window.addEventListener("load", () => {
  animateCounter("studentStat", 120);
  animateCounter("languageStat", 4);
  animateCounter("successStat", 95, "%");
});

// -------------------------
// Testimonial Carousel
// -------------------------
const testimonials = [
  {
    text: "I loved being able to actually speak and practice, instead of just sitting through a regular class.",
    name: "- Camille, Canada"
  }
];

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");

if (testimonialText && testimonialName) {
  let currentTestimonial = 0;

  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;

    testimonialText.textContent = testimonials[currentTestimonial].text;
    testimonialName.textContent = testimonials[currentTestimonial].name;
  }, 4000);
}

// -------------------------
// Scroll Reveal Animation
// -------------------------
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// -------------------------
// Dark Mode
// -------------------------

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
  }

  darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      darkModeBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }

  });

}

// =========================
// LANGUAGE TRANSLATION
// =========================

function changeLanguage(language) {

  if (!translations[language]) return;

  localStorage.setItem("language", language);

  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(function (element) {

    const key = element.getAttribute("data-i18n");

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }

  });
}


// =========================
// LANGUAGE SWITCHER
// =========================

const languageSwitcher = document.getElementById("languageSwitcher");

if (languageSwitcher) {

  languageSwitcher.addEventListener("change", function () {

    changeLanguage(this.value);

  });

}

const languageBtn = document.getElementById("languageBtn");
const languageDropdown = document.getElementById("languageDropdown");

if (languageBtn && languageDropdown) {
  languageBtn.addEventListener("click", function () {
    languageDropdown.classList.toggle("show");

    const isOpen = languageDropdown.classList.contains("show");
    languageBtn.setAttribute("aria-expanded", isOpen);
  });

  languageDropdown.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.dataset.lang;

      languageSwitcher.value = lang;
      changeLanguage(lang);

      languageDropdown.classList.remove("show");
      languageBtn.setAttribute("aria-expanded", "false");
    });
  });
}


// =========================
// LOAD SAVED LANGUAGE
// =========================

const savedLanguage = localStorage.getItem("language") || "en";

if (languageSwitcher) {

  languageSwitcher.value = savedLanguage;

}

changeLanguage(savedLanguage);

