/* =========================================
   1. FAQ INTERATIVO (Acordeão)
   ========================================= */
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        
        // (Opcional) Fecha as outras respostas se abrir uma nova
        const currentlyActive = document.querySelector('.faq-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.faq-answer').style.maxHeight = null;
        }

        // Alterna o estado da pergunta clicada
        item.classList.toggle('active');
        
        // Calcula a altura exata do texto para a animação ser suave
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

/* =========================================
   2. ANIMAÇÕES AO FAZER SCROLL (Reveal)
   ========================================= */
// Seleciona todos os elementos que têm a classe 'reveal'
const reveals = document.querySelectorAll('.reveal');

// Cria o observador que verifica quando o elemento aparece no ecrã
const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Se o elemento estiver visível no ecrã
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Deixa de observar depois de animar a primeira vez (opcional)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // Dispara quando 15% do elemento estiver visível
});

// Aplica o observador a cada elemento
reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});