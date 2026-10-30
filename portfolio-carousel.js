const carouselProjects = [
  {
    name: 'Vôlei Core',
    category: 'Esporte · Treinamento',
    image: 'assets/site-volei-core.jpg',
    alt: 'Prévia do site Vôlei Core',
    url: 'https://volei-core.vercel.app/',
  },
  {
    name: 'Chapa Quente',
    category: 'Hamburgueria · Pedidos',
    image: 'assets/site-chapa-quente.jpg',
    alt: 'Prévia do site Chapa Quente',
    url: 'https://chapa-quente-dncore.vercel.app/',
  },
  {
    name: 'DN Store',
    category: 'Loja online · Catálogo',
    image: 'assets/site-dn-store.jpg',
    alt: 'Prévia do site DN Store',
    url: 'https://dnstores.vercel.app/',
  },
];

const carousel = document.querySelector('.hero-showcase');

if (carousel) {
  const image = carousel.querySelector('[data-carousel-image]');
  const category = carousel.querySelector('[data-carousel-category]');
  const title = carousel.querySelector('[data-carousel-title]');
  const link = carousel.querySelector('[data-carousel-link]');
  const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
  let currentProject = 0;

  function showProject(index) {
    currentProject = (index + carouselProjects.length) % carouselProjects.length;
    const project = carouselProjects[currentProject];

    image.style.opacity = '0';
    window.setTimeout(() => {
      image.src = project.image;
      image.alt = project.alt;
      category.textContent = project.category;
      title.textContent = project.name;
      link.href = project.url;
      image.style.opacity = '1';
    }, 130);

    dots.forEach((dot, dotIndex) => {
      const selected = dotIndex === currentProject;
      dot.classList.toggle('active', selected);
      dot.setAttribute('aria-selected', String(selected));
      dot.tabIndex = selected ? 0 : -1;
    });
  }

  carousel.querySelector('[data-carousel-previous]').addEventListener('click', () => showProject(currentProject - 1));
  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => showProject(currentProject + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => showProject(Number(dot.dataset.carouselDot))));
  carousel.querySelector('.showcase-stage').addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showProject(currentProject - 1);
    if (event.key === 'ArrowRight') showProject(currentProject + 1);
  });
}
