function changeLanguage(language) {
  if (!translations[language]) return;

  // -------------------------
  // Navigation
  // -------------------------

  const home = document.getElementById("navHome");
  const courses = document.getElementById("navCourses");
  const about = document.getElementById("navAbout");
  const contact = document.getElementById("navContact");

  if (home) home.textContent = translations[language].navHome;
  if (courses) courses.textContent = translations[language].navCourses;
  if (about) about.textContent = translations[language].navAbout;
  if (contact) contact.textContent = translations[language].navContact;


  // -------------------------
  // Courses Hero
  // -------------------------

  const coursesTitle = document.getElementById("coursesTitle");
  const coursesSubtitle = document.getElementById("coursesSubtitle");

  if (coursesTitle) {
    coursesTitle.textContent = translations[language].coursesTitle;
  }

  if (coursesSubtitle) {
    coursesSubtitle.textContent = translations[language].coursesSubtitle;
  }


  // -------------------------
  // Course Cards
  // -------------------------

  const englishTitle = document.getElementById("englishTitle");
  const englishDescription = document.getElementById("englishDescription");

  if (englishTitle) {
    englishTitle.textContent = translations[language].englishTitle;
  }

  if (englishDescription) {
    englishDescription.textContent = translations[language].englishDescription;
  }


  const spanishTitle = document.getElementById("spanishTitle");
  const spanishDescription = document.getElementById("spanishDescription");

  if (spanishTitle) {
    spanishTitle.textContent = translations[language].spanishTitle;
  }

  if (spanishDescription) {
    spanishDescription.textContent = translations[language].spanishDescription;
  }


  const portugueseTitle = document.getElementById("portugueseTitle");
  const portugueseDescription = document.getElementById("portugueseDescription");

  if (portugueseTitle) {
    portugueseTitle.textContent = translations[language].portugueseTitle;
  }

  if (portugueseDescription) {
    portugueseDescription.textContent = translations[language].portugueseDescription;
  }


  const frenchTitle = document.getElementById("frenchTitle");
  const frenchDescription = document.getElementById("frenchDescription");

  if (frenchTitle) {
    frenchTitle.textContent = translations[language].frenchTitle;
  }

  if (frenchDescription) {
    frenchDescription.textContent = translations[language].frenchDescription;
  }


  // -------------------------
  // Course Buttons
  // -------------------------

  const viewCourseEnglish = document.getElementById("viewCourseEnglish");
  const viewCourseSpanish = document.getElementById("viewCourseSpanish");
  const viewCoursePortuguese = document.getElementById("viewCoursePortuguese");
  const waitingList = document.getElementById("waitingList");

  if (viewCourseEnglish) {
    viewCourseEnglish.textContent = translations[language].viewCourse;
  }

  if (viewCourseSpanish) {
    viewCourseSpanish.textContent = translations[language].viewCourse;
  }

  if (viewCoursePortuguese) {
    viewCoursePortuguese.textContent = translations[language].viewCourse;
  }

  if (waitingList) {
    waitingList.textContent = translations[language].waitingList;
  }


  // -------------------------
  // Trial Section
  // -------------------------

  const trialTitle = document.getElementById("trialTitle");
  const trialDescription = document.getElementById("trialDescription");
  const noPayment = document.getElementById("noPayment");
  const assessment = document.getElementById("assessment");
  const availableLanguages = document.getElementById("availableLanguages");
  const bookTrial = document.getElementById("bookTrial");

  if (trialTitle) {
    trialTitle.textContent = translations[language].trialTitle;
  }

  if (trialDescription) {
    trialDescription.textContent = translations[language].trialDescription;
  }

  if (noPayment) {
    noPayment.textContent = translations[language].noPayment;
  }

  if (assessment) {
    assessment.textContent = translations[language].assessment;
  }

  if (availableLanguages) {
    availableLanguages.textContent = translations[language].availableLanguages;
  }

  if (bookTrial) {
    bookTrial.textContent = translations[language].bookTrial;
  }


  // -------------------------
  // Trust Section
  // -------------------------

  const trustedStudents = document.getElementById("trustedStudents");

  if (trustedStudents) {
    trustedStudents.textContent = translations[language].trustedStudents;
  }


  const china = document.getElementById("china");
  const chinaDescription = document.getElementById("chinaDescription");

  if (china) {
    china.textContent = translations[language].china;
  }

  if (chinaDescription) {
    chinaDescription.textContent = translations[language].chinaDescription;
  }


  const nigeria = document.getElementById("nigeria");
  const nigeriaDescription = document.getElementById("nigeriaDescription");

  if (nigeria) {
    nigeria.textContent = translations[language].nigeria;
  }

  if (nigeriaDescription) {
    nigeriaDescription.textContent = translations[language].nigeriaDescription;
  }


  const brazil = document.getElementById("brazil");
  const brazilDescription = document.getElementById("brazilDescription");

  if (brazil) {
    brazil.textContent = translations[language].brazil;
  }

  if (brazilDescription) {
    brazilDescription.textContent = translations[language].brazilDescription;
  }


  const portugal = document.getElementById("portugal");
  const portugalDescription = document.getElementById("portugalDescription");

  if (portugal) {
    portugal.textContent = translations[language].portugal;
  }

  if (portugalDescription) {
    portugalDescription.textContent = translations[language].portugalDescription;
  }


  // -------------------------
  // Save Language
  // -------------------------

  localStorage.setItem("language", language);
}


// -----------------------------
// Scroll Reveal Animation
// -----------------------------

const courseRevealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(function (element) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
function changeLanguage(language) {
    localStorage.setItem("language", language);

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {
        const key = element.getAttribute("data-i18n");

        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

const languageSwitcher = document.getElementById("languageSwitcher");

if (languageSwitcher) {
    languageSwitcher.addEventListener("change", function () {
        changeLanguage(this.value);
    });
}

const savedLanguage = localStorage.getItem("language") || "en";

if (languageSwitcher) {
    languageSwitcher.value = savedLanguage;
}

changeLanguage(savedLanguage);