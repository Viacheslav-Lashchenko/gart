"use strict";
const burger = document.querySelectorAll('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

burger.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('closed');
  })
})


let kamaz1 = document.querySelector('#gt-kamaz-kamaz1');
let kamaz2 = document.querySelector('#gt-kamaz-kamaz2');
let checkKamaz = document.querySelector('#check-kamaz');

function showKamaz() {
  kamaz1.style.marginLeft = -54 + 'px';
  kamaz2.style.marginLeft = -306 + 'px';
  kamaz1.style.opacity = 1;
  kamaz2.style.opacity = 1;
};
function hideKamaz() {
  kamaz1.style.marginLeft = 500 + 'px';
  kamaz2.style.marginLeft = 500 + 'px';
  kamaz1.style.opacity = 0;
  kamaz2.style.opacity = 0;
};

let visible = function (target) {
  // Все позиции элемента
  let targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    showKamaz()
  } else {
    // Если элемент не видно, то запускаем этот код
    hideKamaz();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
  visible(checkKamaz);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
visible(checkKamaz);