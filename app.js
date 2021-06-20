/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const navList = document.querySelector('#navbar__list')

const sects = document.getElementsByTagName('section')
// locate the section tags

for (let i = 0; i < sects.length; i++) {
  const navItem = document.createElement('li')

  navItem.classList.add('navbar__menu')

  const liText = document
    .querySelectorAll('section')
    [i].getAttribute('data-nav')
  const liId = document.querySelectorAll('section')[i].id
  navItem.innerHTML = `<a href='#${liId}' class='menu__link'>${liText}</a>`

  navList.appendChild(navItem)
  // adding a list item for every section element in the landing page '
}
const activeLinks = document.querySelectorAll('nav ul li')

activeLinks.forEach((link) => {
  link.addEventListener('click', function () {
    removeStyle(activeLinks, link)
    link.classList.add('active')
  })
})
function removeStyle(arr, index) {
  arr.forEach((index) => {
    index.classList.remove('active')
  })
}
// // Add class 'active' to section when near top of viewport
// for (x = 0; x < sects.length; x++) {
//   window.addEventListener('scroll', function () {
//     if (sect.classList.contains('your-active-class')) {
//       sects[x].classList.add('your-active-class')
//       sects[0].classList.remove('your-active-class')
//     }
//   })
// }

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
