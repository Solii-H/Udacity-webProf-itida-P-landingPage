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

//
navBar.classList.add('topnav')
function burgerMenu() {
  if (navBar.className === 'topnav') {
    navBar.className += ' responsive'
  } else {
    navBar.className = 'topnav'
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let sect of sectsArr) {
  const navListItem = document.createElement('li')
  navListItem.className = 'menu__link'
  const sectionName = sect.getAttribute('data-nav')
  const sectionId = sect.getAttribute('id')
  navListItem.innerHTML = `<a  data-nav='${sectionId}' class='menu__link'>${sectionName}</a>`

  fragmentItem.appendChild(navListItem)

  // Scroll to section on link click using event listner
  navListItem.addEventListener('click', function () {
    sect.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

// Build menu
navBar.appendChild(fragmentItem)

// Add class 'active' to section when near top of viewport
function toggleActiveState() {
  let observer = new IntersectionObserver(
    (allSections) => {
      allSections.forEach((section) => {
        link = document.querySelector(`a[data-nav='${section.target.id}']`)
        if (!section.isIntersecting) {
          section.target.classList.remove('your-active-class')
          link.classList.remove('active__link')
        } else {
          section.target.classList.add('your-active-class')
          link.classList.add('active__link')
        }
      })
    },

    {
      rootMargin: '-40% 0% -45% 0%',
      /* changing the rootMargin Parameters affects the activation of the active style  "top left bottom right*/
    }
  )
  //observe the section location in the screen during scroll
  document.querySelectorAll('section').forEach((sect) => {
    observer.observe(sect)
  })
}
/**
 * End Main Functions
 * Begin Events
 *
 */

window.addEventListener('scroll', toggleActiveState())
