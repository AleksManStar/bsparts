// === Переводы ===
const translations = {
  ru: {
    hero: "Привет, ищешь оригинальные детали для авто? Скажи мне что тебя интересует и я помогу..",
    chat: "Чат-бот",
    form: "Форма обратной связи"
  },
  en: {
    hero: "Hi, looking for original auto parts? Tell me what you need and I will help you..",
    chat: "Chat Bot",
    form: "Contact Form"
  },
  fr: {
    hero: "Salut, tu cherches des pièces auto d'origine ? Dis-moi ce qui t'intéresse et je t'aiderai..",
    chat: "Chatbot",
    form: "Formulaire de contact"
  },
  es: {
    hero: "Hola, ¿buscas repuestos originales para autos? Dime qué necesitas y te ayudaré..",
    chat: "Chatbot",
    form: "Formulario de contacto"
  },
  de: {
    hero: "Hallo, suchst du Original-Autoteile? Sag mir, was dich interessiert, und ich helfe dir..",
    chat: "Chatbot",
    form: "Kontaktformular"
  }
};

function setLanguage(lang) {
  document.getElementById("hero-text").innerText = translations[lang].hero;
  document.getElementById("chat-title").innerText = translations[lang].chat;
  document.getElementById("form-title").innerText = translations[lang].form;
}

// === Чат-бот ===
function sendMessage() {
  const input = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");

  if (input.value.trim() === "") return;

  // Добавляем сообщение пользователя
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.innerText = "👤: " + input.value;
  chatWindow.appendChild(userMsg);

  // Простая имитация ответа
  const botMsg = document.createElement("div");
  botMsg.className = "chat-message bot";
  botMsg.innerText = "🤖: Я понял! Наш специалист свяжется с вами для уточнения деталей.";
  chatWindow.appendChild(botMsg);

  chatWindow.scrollTop = chatWindow.scrollHeight;
  input.value = "";
}

// === Форма обратной связи ===
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById("form-response").style.display = "block";
    }
  });
});
