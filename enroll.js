const enrollmentForm = document.getElementById("enrollmentForm");
const enrollmentSuccess = document.getElementById("enrollmentSuccess");
const languageChoice = document.getElementById("languageChoice");

// --------------------------------------------------
// Get selected course language
// --------------------------------------------------

const params = new URLSearchParams(window.location.search);
const selectedLanguage = params.get("language");

const enrollmentTitle = document.getElementById("enrollmentTitle");
const learningGoal = document.getElementById("learningGoal");
const currentLevel = document.getElementById("currentLevel");


// --------------------------------------------------
// Enrollment translations
// --------------------------------------------------

const enrollmentTranslations = {

  en: {
    title: "You're applying for {language} coaching",

    learningPlaceholder:
      "For example: I want to improve my Business English for international job interviews.",

    selectLanguage: "Select a language",
    english: "English",
    spanish: "Spanish",
    portuguese: "Portuguese",
    french: "French — Coming Soon",

    selectLevel: "Select your level",
    completeBeginner: "Complete Beginner",
    beginner: "Beginner (A1–A2)",
    intermediate: "Intermediate (B1–B2)",
    advanced: "Advanced (C1–C2)"
  },

  es: {
    title: "Estás solicitando clases de {language}",

    learningPlaceholder:
      "Por ejemplo: Quiero mejorar mi inglés de negocios para entrevistas de trabajo internacionales.",

    selectLanguage: "Selecciona un idioma",
    english: "Inglés",
    spanish: "Español",
    portuguese: "Portugués",
    french: "Francés — Próximamente",

    selectLevel: "Selecciona tu nivel",
    completeBeginner: "Principiante absoluto",
    beginner: "Principiante (A1–A2)",
    intermediate: "Intermedio (B1–B2)",
    advanced: "Avanzado (C1–C2)"
  },

  pt: {
    title: "Você está se inscrevendo para aulas de {language}",

    learningPlaceholder:
      "Por exemplo: Quero melhorar meu inglês para entrevistas de emprego internacionais.",

    selectLanguage: "Selecione um idioma",
    english: "Inglês",
    spanish: "Espanhol",
    portuguese: "Português",
    french: "Francês — Em breve",

    selectLevel: "Selecione seu nível",
    completeBeginner: "Iniciante completo",
    beginner: "Iniciante (A1–A2)",
    intermediate: "Intermediário (B1–B2)",
    advanced: "Avançado (C1–C2)"
  },

  zh: {
    title: "您正在申请{language}语言课程",

    learningPlaceholder:
      "例如：我希望提高商务英语水平，以便参加国际工作面试。",

    selectLanguage: "选择语言",
    english: "英语",
    spanish: "西班牙语",
    portuguese: "葡萄牙语",
    french: "法语 — 即将推出",

    selectLevel: "选择您的水平",
    completeBeginner: "完全初学者",
    beginner: "初级 (A1–A2)",
    intermediate: "中级 (B1–B2)",
    advanced: "高级 (C1–C2)"
  }

};


// --------------------------------------------------
// Translate enrollment page
// --------------------------------------------------

function translateEnrollmentPage() {

  const currentLanguage =
    localStorage.getItem("language") || "en";

  const t =
    enrollmentTranslations[currentLanguage] ||
    enrollmentTranslations.en;


  // -------------------------
  // Course title
  // -------------------------

  if (selectedLanguage && enrollmentTitle) {

    let translatedCourseLanguage = selectedLanguage;

    if (currentLanguage === "es") {

      if (selectedLanguage === "English") {
        translatedCourseLanguage = "inglés";
      }

      if (selectedLanguage === "Spanish") {
        translatedCourseLanguage = "español";
      }

      if (selectedLanguage === "Portuguese") {
        translatedCourseLanguage = "portugués";
      }

      if (selectedLanguage === "French") {
        translatedCourseLanguage = "francés";
      }

    }

    if (currentLanguage === "pt") {

      if (selectedLanguage === "English") {
        translatedCourseLanguage = "inglês";
      }

      if (selectedLanguage === "Spanish") {
        translatedCourseLanguage = "espanhol";
      }

      if (selectedLanguage === "Portuguese") {
        translatedCourseLanguage = "português";
      }

      if (selectedLanguage === "French") {
        translatedCourseLanguage = "francês";
      }

    }

    if (currentLanguage === "zh") {

      if (selectedLanguage === "English") {
        translatedCourseLanguage = "英语";
      }

      if (selectedLanguage === "Spanish") {
        translatedCourseLanguage = "西班牙语";
      }

      if (selectedLanguage === "Portuguese") {
        translatedCourseLanguage = "葡萄牙语";
      }

      if (selectedLanguage === "French") {
        translatedCourseLanguage = "法语";
      }

    }

    enrollmentTitle.textContent =
      t.title.replace("{language}", translatedCourseLanguage);
  }


  // -------------------------
  // Learning goal placeholder
  // -------------------------

  if (learningGoal) {
    learningGoal.placeholder = t.learningPlaceholder;
  }


  // -------------------------
// Language dropdown
// -------------------------

if (languageChoice) {

  languageChoice.options[0].textContent = t.selectLanguage;
  languageChoice.options[1].textContent = t.english;
  languageChoice.options[2].textContent = t.spanish;
  languageChoice.options[3].textContent = t.portuguese;
  languageChoice.options[4].textContent = t.french;

}

}


// -------------------------
// Level dropdown
// -------------------------

if (currentLevel) {

  currentLevel.options[0].textContent = t.selectLevel;
  currentLevel.options[1].textContent = t.completeBeginner;
  currentLevel.options[2].textContent = t.beginner;
  currentLevel.options[3].textContent = t.intermediate;
  currentLevel.options[4].textContent = t.advanced;

}


// --------------------------------------------------
// Automatically select language from course page
// --------------------------------------------------

if (selectedLanguage && languageChoice) {
  languageChoice.value = selectedLanguage;
}


// --------------------------------------------------
// Submit application to Formspree
// --------------------------------------------------

if (enrollmentForm) {

  enrollmentForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton =
      enrollmentForm.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    const formData =
      new FormData(enrollmentForm);

    try {

      const response = await fetch(
        enrollmentForm.action,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );


      if (response.ok) {

        enrollmentForm.style.display = "none";

        enrollmentSuccess.classList.add("show");

      } else {

        submitButton.disabled = false;

        submitButton.textContent =
          "Submit Application";

        alert(
          "Something went wrong. Please try again."
        );

      }

    } catch (error) {

      submitButton.disabled = false;

      submitButton.textContent =
        "Submit Application";

      alert(
        "Unable to submit the application. Please check your connection and try again."
      );

    }

  });

}