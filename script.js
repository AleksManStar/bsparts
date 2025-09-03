const translations = {
  en: {
    home: "Welcome to Our Website!",
    about: "We are a modern company with a passion for design.",
    search: "Search...",
    contacts: "Contact us using the form below.",
  },
  ru: {
    home: "Добро пожаловать на наш сайт!",
    about: "Мы современная компания со страстью к дизайну.",
    search: "Поиск...",
    contacts: "Свяжитесь с нами через форму ниже.",
  },
  de: {
    home: "Willkommen auf unserer Website!",
    about: "Wir sind ein modernes Unternehmen mit Leidenschaft für Design.",
    search: "Suche...",
    contacts: "Kontaktieren Sie uns über das Formular unten.",
  },
};

const langSwitcher = document.getElementById("langSwitcher");
const welcome = document.getElementById("welcome");
const lead = document.getElementById("lead");

if (langSwitcher) {
  langSwitcher.addEventListener("change", (e) => {
    const lang = e.target.value;
    if (welcome && lead) {
      if (window.location.pathname.includes("about")) {
        welcome.textContent = "About";
        lead.textContent = translations[lang].about;
      } else if (window.location.pathname.includes("search")) {
        welcome.textContent = "Search";
        lead.placeholder = translations[lang].search;
      } else if (window.location.pathname.includes("contacts")) {
        welcome.textContent = "Contacts";
        lead.textContent = translations[lang].contacts;
      } else {
        welcome.textContent = translations[lang].home;
        lead.textContent = translations[lang].home;
      }
    }
  });
}
