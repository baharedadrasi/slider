import people from './data.js';

const container = document.querySelector('.slide-container');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

container.innerHTML = people
  .map(({ img, name, job, text }, slideIndex) => {
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }
    return `<article class="slide ${position}">
          <img src="${img}" alt="${name}" class="img" />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join('');

const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;

  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(['active']);
  last.classList.remove(['last']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    console.log(next);
    if (!next) {
      next = container.lastElementChild;
    }

    next.classList.remove(['next']);
    next.classList.add('last');
    return;
  }

  next.classList.remove(['next']);

  active.classList.add('last');
  next.classList.add('active');
  last.classList.add('next');
};

prevBtn.addEventListener('click', () => {
  startSlider('prev');
});
nextBtn.addEventListener('click', () => {
  startSlider();
});
