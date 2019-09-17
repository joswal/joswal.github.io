// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const homeButton = document.querySelector('#homeButton');
const workButton = document.querySelector('#workButton');
const contactButton = document.querySelector('#contactButton');

const allBtn = $("#all");
const frontendBtn = $("#frontEnd");
const backendBtn = $("#backEnd");
const fullstackBtn = $("#fullStack");
const wordpressBtn = $("#wordPress");


// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
homeButton.addEventListener('click', toggleMenu);
workButton.addEventListener('click', toggleMenu);
contactButton.addEventListener('click', toggleMenu);

frontendBtn.click(function () {
  $(".frontend").show();
  $(".backend").hide();
  $(".fullstack").hide();
  $(".wordpress").hide();
});

backendBtn.click(function () {
  $(".backend").show();
  $(".frontend").hide();
  $(".fullstack").hide();
  $(".wordpress").hide();
});

fullstackBtn.click(function () {
  $(".backend").hide();
  $(".frontend").hide();
  $(".fullstack").show();
  $(".wordpress").hide();
});

wordpressBtn.click(function () {
  $(".frontend").hide();
  $(".backend").hide();
  $(".fullstack").hide();
  $(".wordpress").show();
});

allBtn.click(function () {
  $(".frontend").show();
  $(".backend").show();
  $(".fullstack").show();
  $(".wordpress").show();
})

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}