import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { imagesData } from './data';

const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('#close-btn');

const tl = gsap.timeline({ paused: true, overwrite: 'auto' });

tl.to(overlay, {
  bottom: '0px',
  rotation: 0,
  duration: 0.5,
  transformOrigin: 'bottom center',
  ease: 'power3.inOut',
});

const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    updateOverlay(imagesData[index]);
    tl.play();
  });
});

closeBtn.addEventListener('click', () => {
  tl.reverse();
});

function updateOverlay(dataItem) {
  const itemName =
    document.querySelector('#item-category').previousElementSibling;
  const itemCategory = document.querySelector('#item-category');
  const itemLink = document.querySelector('#item-link');
  const itemCopy = document.querySelector('#item-copy');
  const itemImg = document.querySelector('#item-img');

  itemName.textContent = dataItem.itemName;
  itemCategory.textContent = dataItem.itemCategory;
  itemLink.href = dataItem.itemLink;
  itemCopy.textContent = dataItem.itemCopy;
  itemImg.src = dataItem.itemImg;
}

document.addEventListener('click', (e) => {
  if (!overlay.contains(e.target) && !isItem(e.target)) {
    tl.reverse();
  }
});

function isItem(target) {
  return target.closest('.item');
}
