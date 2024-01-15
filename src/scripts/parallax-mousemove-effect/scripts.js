import { gsap } from 'gsap';

const items = [
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.065,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.005,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.008,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.1,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.07,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.085,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.08,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.04,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.1,
  },
  {
    img: `https://source.unsplash.com/random/500x500?sig=${Math.random()}`,
    parallaxSpeed: 0.065,
  },
];

const itemPositions = [
  { top: '-5%', left: '5%' },
  { top: '40%', left: '-5%' },
  { top: '25%', left: '20%' },
  { top: '60%', left: '40%' },
  { top: '70%', left: '10%' },
  { top: '-10%', left: '65%' },
  { top: '10%', left: '85%' },
  { top: '40%', left: '60%' },
  { top: '80%', left: '70%' },
  { top: '50%', left: '95%' },
];

const gallery = document.querySelector('.gallery');

items.forEach((itemData, index) => {
  const item = document.createElement('div');
  item.classList.add('item');

  const position = itemPositions[index];
  item.style.top = position.top;
  item.style.left = position.left;

  const img = document.createElement('img');
  img.src = itemData.img;
  item.appendChild(img);

  gallery.appendChild(item);
});

document.addEventListener('mousemove', (e) => {
  gallery.querySelectorAll('.item').forEach((item, index) => {
    const animationFactor = items[index].parallaxSpeed;

    const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
    const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;

    gsap.to(item, { x: deltaX, y: deltaY });
  });
});
