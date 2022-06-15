"use strict";
const burger = document.querySelectorAll('.burger');
const navLinks = document.querySelector('.nav-links');

burger.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  })
})
