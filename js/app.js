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
const navBar = document.querySelector('#navbar__list')
const sectsArr = document.getElementsByTagName('section')
const fragmentItem = document.createDocumentFragment()

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
let sectionId
// build the nav

for (let sect of sectsArr) {
  const navListItem = document.createElement('li')
  navListItem.className = 'menu__link'
  const sectionName = sect.getAttribute('data-nav')
  const sectionId = sect.getAttribute('id')
  navListItem.innerHTML = `<a href='#${sectionId}' data-nav='${sectionId}' class='menu__link'>${sectionName}</a>`
  fragmentItem.appendChild(navListItem)
}
navBar.appendChild(fragmentItem)

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', toggleActiveState())

function toggleActiveState() {
  let observer = new IntersectionObserver(
    (allSections) => {
      allSections.forEach((section) => {
        link = document.querySelector(`a[href='#${section.target.id}']`)
        if (!section.isIntersecting) {
          section.target.classList.remove('your-active-class')
          link.classList.remove('active')
        } else {
          section.target.classList.add('your-active-class')
          link.classList.add('active')
        }
      })
    },

    {
      rootMargin: '-40% 0% -45% 0%',
      /* changing the rootMargin Parameters affects the activation of the active style  "top left bottom right*/
    }
  )
  document.querySelectorAll('section').forEach((sect) => {
    observer.observe(sect)
  })
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const allLinks = document.querySelectorAll('nav ul li ')

allLinks.forEach((activeLink) => {
  var targetId = activeLink.firstChild.attributes

  var targetSection = document.querySelector(`${targetId}`)
  console.log(targetId)
  activeLink.addEventListener('click', function () {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  })
})
