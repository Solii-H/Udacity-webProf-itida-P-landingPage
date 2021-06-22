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
let navBar = document.querySelector('#navbar__list')
let sectsArr = document.getElementsByTagName('section')
let fragmentItem = document.createDocumentFragment()

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

for (const sect of sectsArr) {
  const navListItem = document.createElement('li')
  const sectionName = sect.getAttribute('data-nav')
  const sectionId = sect.getAttribute('id')
  navListItem.innerHTML = `<a href='#${sectionId}' class='menu__link'>${sectionName}</a>`
  fragmentItem.appendChild(navListItem)
}
navBar.appendChild(fragmentItem)

// toggle "active" class to list item
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
// Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

const observerOptions = {
  /* changing the rootMargin Parameters affects the activation of the active style  "top left bottom right*/
  rootMargin: '-10% 0% -20% 0%',
}

var locatActiveSections = new IntersectionObserver(function (
  elmnts,
  locatActiveSections
) {
  elmnts.forEach((elmnt) => {
    if (!elmnt.isIntersecting) {
      elmnt.target.classList.remove('your-active-class')
    } else {
      elmnt.target.classList.add('your-active-class')
    }
  })
},
observerOptions)

for (const activeSection of sectsArr) {
  locatActiveSections.observe(activeSection)
}
