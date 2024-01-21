import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.burger');
  let isOpen = false;

  const timeline = gsap.timeline({ paused: true });

  timeline.to('.block', {
    duration: 1,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    stagger: 0.075,
    ease: 'power3.inOut',
  });

  timeline.to(
    '.menu-title, .menu-item',
    {
      duration: 0.3,
      opacity: 1,
      stagger: 0.05,
    },
    '-=0.5',
  );

  toggleButton.addEventListener('click', () => {
    isOpen ? timeline.reverse() : timeline.play();
    isOpen = !isOpen;
  });
});
