// ==========================================
// PILAR 1: SELECIONAR ELEMENTOS (getElementById)
// ==========================================

// 1. Dark Mode
const themeToggleBtn = document.getElementById('themeToggleBtn');

// 2. Curiosidade Oculta
const secretToggleBtn = document.getElementById('secretToggleBtn');
const secretBox = document.getElementById('secretBox');
const secretBtnText = document.getElementById('secretBtnText');

// 3. Contador de Curtidas
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

// Variável de controle do contador
let likes = 0;


// ==========================================
// PILAR 2 & 3: ESCUTAR EVENTOS E ALTERAR PROPRIEDADES/CLASSES
// ==========================================

// --- FUNCIONALIDADE 01: Dark Mode ---
themeToggleBtn.addEventListener('click', () => {
  // Alterna a classe 'dark-mode' no elemento <body>
  document.body.classList.toggle('dark-mode');

  // Atualiza o texto e ícone do botão
  const isDarkMode = document.body.classList.contains('dark-mode');
  const icon = themeToggleBtn.querySelector('i');
  const span = themeToggleBtn.querySelector('span');

  if (isDarkMode) {
    icon.className = 'fa-solid fa-sun';
    span.textContent = 'Modo Claro';
  } else {
    icon.className = 'fa-solid fa-moon';
    span.textContent = 'Modo Escuro';
  }
});


// --- FUNCIONALIDADE 02: Curiosidade Oculta ---
secretToggleBtn.addEventListener('click', () => {
  // Alterna a visibilidade adicionando/removendo a classe 'hidden'
  secretBox.classList.toggle('hidden');

  const isHidden = secretBox.classList.contains('hidden');
  const icon = secretToggleBtn.querySelector('i');

  if (isHidden) {
    secretBtnText.textContent = 'Revelar Curiosidade';
    icon.className = 'fa-solid fa-eye';
  } else {
    secretBtnText.textContent = 'Ocultar Curiosidade';
    icon.className = 'fa-solid fa-eye-slash';
  }
});


// --- FUNCIONALIDADE 03: Contador de Curtidas ---
likeBtn.addEventListener('click', () => {
  // Incrementa a contagem de curtidas
  likes++;

  // Altera o conteúdo textual na tela
  likeCount.textContent = likes;

  // Efeito de animação de pulso
  likeBtn.classList.add('pulse');
  setTimeout(() => {
    likeBtn.classList.remove('pulse');
  }, 300);
});