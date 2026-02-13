// Tema o'zgartirish (dark / light)
const themeToggle = document.getElementById('theme-toggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.style.background = isDark ? '#0d001a' : '#f0e8ff';
  document.body.style.color = isDark ? '#e0e0ff' : '#1a0033';
  themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// Loyihalar ro'yxati (masalan)
const projects = [
  { title: "Neon Landing", desc: "To'liq neon estetikasi bilan landing page", link: "#" },
  { title: "3D Card Hover", desc: "3D effektli interaktiv kartalar", link: "#" },
  { title: "AI Chat UI", desc: "Zamonaviy chat interfeysi", link: "#" },
  { title: "Music Player", desc: "Neon dizaynli musiqa pleeri", link: "#" }
];

const projectList = document.getElementById('project-list');

projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.desc}</p>
    <a href="${proj.link}" class="neon-btn small">Ko'rish →</a>
  `;
  projectList.appendChild(card);
});

// Forma submit (demo)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Xabaringiz yuborildi! (demo)');
  e.target.reset();
});

// Sahifa yuklanganda glitch animatsiyasini biroz kechiktirish
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.glitch').style.animation = 'glitch 4s infinite';
  }, 800);
});