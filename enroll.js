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
const studentCountry = document.getElementById("studentCountry");
const coachingType = document.getElementById("coachingType");
const lessonFrequency = document.getElementById("lessonFrequency");
const countryLabel = document.getElementById("countryLabel");
const coachingTypeLabel = document.getElementById("coachingTypeLabel");
const frequencyLabel = document.getElementById("frequencyLabel");


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
    advanced: "Advanced (C1–C2)",

    countryLabel: "What country are you currently in?",
countryPlaceholder: "For example: France, China, Nigeria...",

coachingTypeLabel: "What type of coaching are you interested in?",
selectCoachingType: "Select coaching type",
generalCoaching: "General Language Coaching",
businessCoaching: "Business & Professional Coaching",
personalizedCoaching: "Personalized Coaching",

frequencyLabel: "How often would you like to have lessons?",
selectFrequency: "Select lesson frequency",
onceWeekly: "Once per week",
twiceWeekly: "Twice per week",
threePlusWeekly: "3+ times per week",
notSure: "I'm not sure yet",
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
    advanced: "Avanzado (C1–C2)",

    countryLabel: "¿En qué país vives actualmente?",
countryPlaceholder: "Por ejemplo: Francia, China, Nigeria...",

coachingTypeLabel: "¿Qué tipo de clases te interesan?",
selectCoachingType: "Selecciona el tipo de clase",
generalCoaching: "Clases de idiomas generales",
businessCoaching: "Clases de idiomas para negocios y profesionales",
personalizedCoaching: "Clases personalizadas",

frequencyLabel: "¿Con qué frecuencia te gustaría tener clases?",
selectFrequency: "Selecciona la frecuencia",
onceWeekly: "Una vez por semana",
twiceWeekly: "Dos veces por semana",
threePlusWeekly: "3 o más veces por semana",
notSure: "Aún no estoy seguro/a",
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
    advanced: "Avançado (C1–C2)",

    countryLabel: "Em que país você mora atualmente?",
countryPlaceholder: "Por exemplo: França, China, Nigéria...",

coachingTypeLabel: "Que tipo de aulas você procura?",
selectCoachingType: "Selecione o tipo de aula",
generalCoaching: "Aulas de idiomas gerais",
businessCoaching: "Aulas de idiomas para negócios e profissionais",
personalizedCoaching: "Aulas personalizadas",

frequencyLabel: "Com que frequência você gostaria de ter aulas?",
selectFrequency: "Selecione a frequência",
onceWeekly: "Uma vez por semana",
twiceWeekly: "Duas vezes por semana",
threePlusWeekly: "3 ou mais vezes por semana",
notSure: "Ainda não tenho certeza",
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
    advanced: "高级 (C1–C2)",

    countryLabel: "您目前居住在哪个国家？",
countryPlaceholder: "例如：法国、中国、尼日利亚……",

coachingTypeLabel: "您对哪种类型的课程感兴趣？",
selectCoachingType: "请选择课程类型",
generalCoaching: "通用语言课程",
businessCoaching: "商务与职业语言课程",
personalizedCoaching: "个性化课程",

frequencyLabel: "您希望多久上一次课？",
selectFrequency: "请选择上课频率",
onceWeekly: "每周一次",
twiceWeekly: "每周两次",
threePlusWeekly: "每周三次或以上",
notSure: "暂时不确定",
  },

  fr: {
    title: "Vous vous inscrivez à des cours de {language}",

    learningPlaceholder:
      "Par exemple : Je souhaite améliorer mon anglais professionnel pour des entretiens d’embauche internationaux.",

    selectLanguage: "Sélectionnez une langue",
    english: "Anglais",
    spanish: "Espagnol",
    portuguese: "Portugais",
    french: "Français — Bientôt disponible",

    selectLevel: "Sélectionnez votre niveau",
    completeBeginner: "Débutant complet",
    beginner: "Débutant (A1–A2)",
    intermediate: "Intermédiaire (B1–B2)",
    advanced: "Avancé (C1–C2)",

    countryLabel: "Dans quel pays vivez-vous actuellement ?",
    countryPlaceholder: "Par exemple : France, Chine, Nigeria...",

    coachingTypeLabel: "Quel type de coaching vous intéresse ?",
    selectCoachingType: "Sélectionnez le type de coaching",
    generalCoaching: "Coaching linguistique général",
    businessCoaching: "Coaching professionnel et business",
    personalizedCoaching: "Coaching personnalisé",

    frequencyLabel: "À quelle fréquence souhaitez-vous avoir des cours ?",
    selectFrequency: "Sélectionnez la fréquence",
    onceWeekly: "Une fois par semaine",
    twiceWeekly: "Deux fois par semaine",
    threePlusWeekly: "3 fois ou plus par semaine",
    notSure: "Je ne suis pas encore sûr(e)",
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

      if (currentLanguage === "fr") {

  if (selectedLanguage === "English") {
    translatedCourseLanguage = "anglais";
  }

  if (selectedLanguage === "Spanish") {
    translatedCourseLanguage = "espagnol";
  }

  if (selectedLanguage === "Portuguese") {
    translatedCourseLanguage = "portugais";
  }

  if (selectedLanguage === "French") {
    translatedCourseLanguage = "français";
  }

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


// -------------------------
// Country
// -------------------------

if (countryLabel) {
  countryLabel.textContent = t.countryLabel;
}

if (studentCountry) {
  studentCountry.placeholder = t.countryPlaceholder;
}


// -------------------------
// Coaching type
// -------------------------

if (coachingTypeLabel) {
  coachingTypeLabel.textContent = t.coachingTypeLabel;
}

if (coachingType) {
  coachingType.options[0].textContent = t.selectCoachingType;
  coachingType.options[1].textContent = t.generalCoaching;
  coachingType.options[2].textContent = t.businessCoaching;
  coachingType.options[3].textContent = t.personalizedCoaching;
}


// -------------------------
// Lesson frequency
// -------------------------

if (frequencyLabel) {
  frequencyLabel.textContent = t.frequencyLabel;
}

if (lessonFrequency) {
  lessonFrequency.options[0].textContent = t.selectFrequency;
  lessonFrequency.options[1].textContent = t.onceWeekly;
  lessonFrequency.options[2].textContent = t.twiceWeekly;
  lessonFrequency.options[3].textContent = t.threePlusWeekly;
  lessonFrequency.options[4].textContent = t.notSure;
}

} // closes translateEnrollmentPage()

translateEnrollmentPage();

// Update enrollment translations when language changes
const enrollmentLanguageSwitcher = document.getElementById("languageSwitcher");

if (enrollmentLanguageSwitcher) {
  enrollmentLanguageSwitcher.addEventListener("change", function () {
    localStorage.setItem("language", this.value);
    translateEnrollmentPage();
  });

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

  // ==================================================
// FREE TRIAL BOOKING CALENDAR
// ==================================================

const calendarDays = document.getElementById("calendarDays");
const calendarMonth = document.getElementById("calendarMonth");
const previousMonthBtn = document.getElementById("previousMonth");
const nextMonthBtn = document.getElementById("nextMonth");

const trialTimeSlots = document.getElementById("trialTimeSlots");
const selectedDateLabel = document.getElementById("selectedDateLabel");
const studentTimezone = document.getElementById("studentTimezone");

const trialDateInput = document.getElementById("trialDate");
const trialTimeInput = document.getElementById("trialTime");
const trialTimezoneInput = document.getElementById("trialTimezone");

const trialSelectionText = document.getElementById("trialSelectionText");


// --------------------------------------------------
// STUDENT TIMEZONE
// --------------------------------------------------

const detectedTimezone =
  Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

if (studentTimezone) {
  studentTimezone.textContent = detectedTimezone;
}

if (trialTimezoneInput) {
  trialTimezoneInput.value = detectedTimezone;
}


// --------------------------------------------------
// CALENDAR STATE
// --------------------------------------------------

const today = new Date();

today.setHours(0, 0, 0, 0);

let displayedYear = today.getFullYear();
let displayedMonth = today.getMonth();

let selectedTrialDate = null;
let selectedTrialTime = null;


// --------------------------------------------------
// TEMPORARY TEST AVAILABILITY
//
// This is ONLY for building/testing the interface.
// We'll replace this with real availability later.
// --------------------------------------------------

function getTemporaryAvailability(date) {

  const day = date.getDay();

  // Sunday = unavailable
  if (day === 0) {
    return [];
  }

  // Example test slots
  if (day === 6) {
    return ["10:00", "12:00", "15:00"];
  }

  return ["10:00", "13:00", "16:00", "18:00"];
}


// --------------------------------------------------
// FORMAT MONTH
// --------------------------------------------------

function formatCalendarMonth(year, month) {

  const date = new Date(year, month, 1);

  return new Intl.DateTimeFormat(
    localStorage.getItem("language") || "en",
    {
      month: "long",
      year: "numeric"
    }
  ).format(date);
}


// --------------------------------------------------
// FORMAT DATE
// --------------------------------------------------

function formatSelectedDate(date) {

  return new Intl.DateTimeFormat(
    localStorage.getItem("language") || "en",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  ).format(date);
}


// --------------------------------------------------
// FORMAT TIME
// --------------------------------------------------

function formatTrialTime(time) {

  const [hour, minute] = time.split(":");

  const date = new Date();

  date.setHours(
    Number(hour),
    Number(minute),
    0,
    0
  );

  return new Intl.DateTimeFormat(
    localStorage.getItem("language") || "en",
    {
      hour: "numeric",
      minute: "2-digit"
    }
  ).format(date);
}


// --------------------------------------------------
// CREATE CALENDAR
// --------------------------------------------------

function renderTrialCalendar() {

  if (!calendarDays || !calendarMonth) {
    return;
  }

  calendarDays.innerHTML = "";

  calendarMonth.textContent =
    formatCalendarMonth(displayedYear, displayedMonth);


  const firstDay =
    new Date(displayedYear, displayedMonth, 1);

  const lastDay =
    new Date(displayedYear, displayedMonth + 1, 0);

  const daysInMonth =
    lastDay.getDate();


  // Convert Sunday-first JS numbering
  // to Monday-first calendar numbering.

  let startingPosition = firstDay.getDay();

  startingPosition =
    startingPosition === 0
      ? 6
      : startingPosition - 1;


  // Empty spaces before day 1

  for (let i = 0; i < startingPosition; i++) {

    const emptyDay =
      document.createElement("div");

    emptyDay.className =
      "calendar-day empty";

    calendarDays.appendChild(emptyDay);
  }


  // Actual month days

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {

    const date =
      new Date(
        displayedYear,
        displayedMonth,
        dayNumber
      );

    date.setHours(0, 0, 0, 0);


    const dayButton =
      document.createElement("button");

    dayButton.type = "button";
    dayButton.className = "calendar-day";
    dayButton.textContent = dayNumber;


    const availability =
      getTemporaryAvailability(date);


    // Past date

    if (date < today) {

      dayButton.classList.add("unavailable");
      dayButton.disabled = true;

    }

    // No availability

    else if (availability.length === 0) {

      dayButton.classList.add("unavailable");
      dayButton.disabled = true;

    }

    // Available

    else {

      dayButton.classList.add("available");

      dayButton.addEventListener(
        "click",
        function () {

          selectTrialDate(date);

        }
      );

    }


    // Keep selected day highlighted

    if (
      selectedTrialDate &&
      selectedTrialDate.getFullYear() === date.getFullYear() &&
      selectedTrialDate.getMonth() === date.getMonth() &&
      selectedTrialDate.getDate() === date.getDate()
    ) {

      dayButton.classList.add("selected");

    }


    calendarDays.appendChild(dayButton);
  }

}


// --------------------------------------------------
// SELECT DATE
// --------------------------------------------------

function selectTrialDate(date) {

  selectedTrialDate =
    new Date(date);

  selectedTrialTime = null;


  if (trialDateInput) {

    const year =
      selectedTrialDate.getFullYear();

    const month =
      String(
        selectedTrialDate.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        selectedTrialDate.getDate()
      ).padStart(2, "0");


    trialDateInput.value =
      `${year}-${month}-${day}`;

  }


  if (trialTimeInput) {
    trialTimeInput.value = "";
  }


  if (selectedDateLabel) {

    selectedDateLabel.textContent =
      formatSelectedDate(selectedTrialDate);

  }


  if (trialSelectionText) {

    trialSelectionText.textContent =
      "No time selected";

  }


  renderTrialCalendar();
  renderTrialTimes();

}


// --------------------------------------------------
// RENDER AVAILABLE TIMES
// --------------------------------------------------

function renderTrialTimes() {

  if (!trialTimeSlots || !selectedTrialDate) {
    return;
  }


  trialTimeSlots.innerHTML = "";


  const availableTimes =
    getTemporaryAvailability(
      selectedTrialDate
    );


  availableTimes.forEach(function (time) {

    const timeButton =
      document.createElement("button");

    timeButton.type = "button";

    timeButton.className =
      "trial-time-slot";

    timeButton.textContent =
      formatTrialTime(time);


    timeButton.addEventListener(
      "click",
      function () {

        selectTrialTime(
          time,
          timeButton
        );

      }
    );


    trialTimeSlots.appendChild(
      timeButton
    );

  });

}


// --------------------------------------------------
// SELECT TIME
// --------------------------------------------------

function selectTrialTime(time, clickedButton) {

  selectedTrialTime = time;


  document
    .querySelectorAll(".trial-time-slot")
    .forEach(function (button) {

      button.classList.remove("selected");

    });


  clickedButton.classList.add("selected");


  if (trialTimeInput) {
    trialTimeInput.value = time;
  }


  if (
    trialSelectionText &&
    selectedTrialDate
  ) {

    trialSelectionText.textContent =
      `${formatSelectedDate(selectedTrialDate)} · ${formatTrialTime(time)}`;

  }

}


// --------------------------------------------------
// PREVIOUS MONTH
// --------------------------------------------------

if (previousMonthBtn) {

  previousMonthBtn.addEventListener(
    "click",
    function () {

      const previousMonthDate =
        new Date(
          displayedYear,
          displayedMonth - 1,
          1
        );


      // Don't navigate to months
      // completely before the current month.

      const currentMonthStart =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          1
        );


      if (previousMonthDate < currentMonthStart) {
        return;
      }


      displayedMonth--;

      if (displayedMonth < 0) {

        displayedMonth = 11;
        displayedYear--;

      }


      renderTrialCalendar();

    }
  );

}


// --------------------------------------------------
// NEXT MONTH
// --------------------------------------------------

if (nextMonthBtn) {

  nextMonthBtn.addEventListener(
    "click",
    function () {

      displayedMonth++;

      if (displayedMonth > 11) {

        displayedMonth = 0;
        displayedYear++;

      }


      renderTrialCalendar();

    }
  );

}


// --------------------------------------------------
// INITIAL RENDER
// --------------------------------------------------

renderTrialCalendar();

}

// ==================================================
// FREE TRIAL BOOKING CALENDAR
// ==================================================

const calendarDays = document.getElementById("calendarDays");
const calendarMonth = document.getElementById("calendarMonth");
const previousMonthBtn = document.getElementById("previousMonth");
const nextMonthBtn = document.getElementById("nextMonth");

const trialTimeSlots = document.getElementById("trialTimeSlots");
const selectedDateLabel = document.getElementById("selectedDateLabel");
const studentTimezone = document.getElementById("studentTimezone");

const trialDateInput = document.getElementById("trialDate");
const trialTimeInput = document.getElementById("trialTime");
const trialTimezoneInput = document.getElementById("trialTimezone");

const trialSelectionText = document.getElementById("trialSelectionText");


// --------------------------------------------------
// STUDENT TIMEZONE
// --------------------------------------------------

const detectedTimezone =
  Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

if (studentTimezone) {
  studentTimezone.textContent = detectedTimezone;
}

if (trialTimezoneInput) {
  trialTimezoneInput.value = detectedTimezone;
}


// --------------------------------------------------
// CALENDAR STATE
// --------------------------------------------------

const today = new Date();

today.setHours(0, 0, 0, 0);

let displayedYear = today.getFullYear();
let displayedMonth = today.getMonth();

let selectedTrialDate = null;
let selectedTrialTime = null;


// --------------------------------------------------
// TEMPORARY TEST AVAILABILITY
//
// This is ONLY for building/testing the interface.
// We'll replace this with real availability later.
// --------------------------------------------------

function getTemporaryAvailability(date) {

  const day = date.getDay();

  // Sunday = unavailable
  if (day === 0) {
    return [];
  }

  // Example test slots
  if (day === 6) {
    return ["10:00", "12:00", "15:00"];
  }

  return ["10:00", "13:00", "16:00", "18:00"];
}


// --------------------------------------------------
// FORMAT MONTH
// --------------------------------------------------

function formatCalendarMonth(year, month) {

  const date = new Date(year, month, 1);

  return new Intl.DateTimeFormat(
    localStorage.getItem("language") || "en",
    {
      month: "long",
      year: "numeric"
    }
  ).format(date);
}


// --------------------------------------------------
// FORMAT DATE
// --------------------------------------------------

function formatSelectedDate(date) {

  return new Intl.DateTimeFormat(
    localStorage.getItem("language") || "en",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  ).format(date);
}


// --------------------------------------------------
// FORMAT TIME
// --------------------------------------------------

function formatTrialTime(time) {

  const [hour, minute] = time.split(":");

  const date = new Date();

  date.setHours(
    Number(hour),
    Number(minute),
    0,
    0
  );

  return new Intl.DateTimeFormat(
    localStorage.getItem("language") || "en",
    {
      hour: "numeric",
      minute: "2-digit"
    }
  ).format(date);
}


// --------------------------------------------------
// CREATE CALENDAR
// --------------------------------------------------

function renderTrialCalendar() {

  if (!calendarDays || !calendarMonth) {
    return;
  }

  calendarDays.innerHTML = "";

  calendarMonth.textContent =
    formatCalendarMonth(displayedYear, displayedMonth);


  const firstDay =
    new Date(displayedYear, displayedMonth, 1);

  const lastDay =
    new Date(displayedYear, displayedMonth + 1, 0);

  const daysInMonth =
    lastDay.getDate();


  // Convert Sunday-first JS numbering
  // to Monday-first calendar numbering.

  let startingPosition = firstDay.getDay();

  startingPosition =
    startingPosition === 0
      ? 6
      : startingPosition - 1;


  // Empty spaces before day 1

  for (let i = 0; i < startingPosition; i++) {

    const emptyDay =
      document.createElement("div");

    emptyDay.className =
      "calendar-day empty";

    calendarDays.appendChild(emptyDay);
  }


  // Actual month days

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {

    const date =
      new Date(
        displayedYear,
        displayedMonth,
        dayNumber
      );

    date.setHours(0, 0, 0, 0);


    const dayButton =
      document.createElement("button");

    dayButton.type = "button";
    dayButton.className = "calendar-day";
    dayButton.textContent = dayNumber;


    const availability =
      getTemporaryAvailability(date);


    // Past date

    if (date < today) {

      dayButton.classList.add("unavailable");
      dayButton.disabled = true;

    }

    // No availability

    else if (availability.length === 0) {

      dayButton.classList.add("unavailable");
      dayButton.disabled = true;

    }

    // Available

    else {

      dayButton.classList.add("available");

      dayButton.addEventListener(
        "click",
        function () {

          selectTrialDate(date);

        }
      );

    }


    // Keep selected day highlighted

    if (
      selectedTrialDate &&
      selectedTrialDate.getFullYear() === date.getFullYear() &&
      selectedTrialDate.getMonth() === date.getMonth() &&
      selectedTrialDate.getDate() === date.getDate()
    ) {

      dayButton.classList.add("selected");

    }


    calendarDays.appendChild(dayButton);
  }

}


// --------------------------------------------------
// SELECT DATE
// --------------------------------------------------

function selectTrialDate(date) {

  selectedTrialDate =
    new Date(date);

  selectedTrialTime = null;


  if (trialDateInput) {

    const year =
      selectedTrialDate.getFullYear();

    const month =
      String(
        selectedTrialDate.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        selectedTrialDate.getDate()
      ).padStart(2, "0");


    trialDateInput.value =
      `${year}-${month}-${day}`;

  }


  if (trialTimeInput) {
    trialTimeInput.value = "";
  }


  if (selectedDateLabel) {

    selectedDateLabel.textContent =
      formatSelectedDate(selectedTrialDate);

  }


  if (trialSelectionText) {

    trialSelectionText.textContent =
      "No time selected";

  }


  renderTrialCalendar();
  renderTrialTimes();

}


// --------------------------------------------------
// RENDER AVAILABLE TIMES
// --------------------------------------------------

function renderTrialTimes() {

  if (!trialTimeSlots || !selectedTrialDate) {
    return;
  }


  trialTimeSlots.innerHTML = "";


  const availableTimes =
    getTemporaryAvailability(
      selectedTrialDate
    );


  availableTimes.forEach(function (time) {

    const timeButton =
      document.createElement("button");

    timeButton.type = "button";

    timeButton.className =
      "trial-time-slot";

    timeButton.textContent =
      formatTrialTime(time);


    timeButton.addEventListener(
      "click",
      function () {

        selectTrialTime(
          time,
          timeButton
        );

      }
    );


    trialTimeSlots.appendChild(
      timeButton
    );

  });

}


// --------------------------------------------------
// SELECT TIME
// --------------------------------------------------

function selectTrialTime(time, clickedButton) {

  selectedTrialTime = time;


  document
    .querySelectorAll(".trial-time-slot")
    .forEach(function (button) {

      button.classList.remove("selected");

    });


  clickedButton.classList.add("selected");


  if (trialTimeInput) {
    trialTimeInput.value = time;
  }


  if (
    trialSelectionText &&
    selectedTrialDate
  ) {

    trialSelectionText.textContent =
      `${formatSelectedDate(selectedTrialDate)} · ${formatTrialTime(time)}`;

  }

}


// --------------------------------------------------
// PREVIOUS MONTH
// --------------------------------------------------

if (previousMonthBtn) {

  previousMonthBtn.addEventListener(
    "click",
    function () {

      const previousMonthDate =
        new Date(
          displayedYear,
          displayedMonth - 1,
          1
        );


      // Don't navigate to months
      // completely before the current month.

      const currentMonthStart =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          1
        );


      if (previousMonthDate < currentMonthStart) {
        return;
      }


      displayedMonth--;

      if (displayedMonth < 0) {

        displayedMonth = 11;
        displayedYear--;

      }


      renderTrialCalendar();

    }
  );

}


// --------------------------------------------------
// NEXT MONTH
// --------------------------------------------------

if (nextMonthBtn) {

  nextMonthBtn.addEventListener(
    "click",
    function () {

      displayedMonth++;

      if (displayedMonth > 11) {

        displayedMonth = 0;
        displayedYear++;

      }


      renderTrialCalendar();

    }
  );

}


// --------------------------------------------------
// INITIAL RENDER
// --------------------------------------------------

renderTrialCalendar();