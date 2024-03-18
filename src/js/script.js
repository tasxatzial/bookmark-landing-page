import Tablist from "./Tablist.js";
import Accordion from "./Accordion.js";

const tabsContainer = document.getElementById('features-tabs');
const tablist = new Tablist(tabsContainer);

const accordionContainer = document.getElementById('faq-accordion');
const accordion = new Accordion(accordionContainer);

const headerNav = document.querySelector("nav[aria-label='primary']");
const toggleNavBtn = headerNav.querySelector('.toggle-nav-btn');
const twitterLink = headerNav.querySelector("a[aria-label='twitter']");
const mqList = window.matchMedia("(min-width: 45em)");
const headerNavLinks = headerNav.querySelector('.header-site-links');

let navShouldBeOpen = false;

toggleNavBtn.addEventListener('click', toggleNav);
mqList.addEventListener('change', toggleNavOnResize);

/* trap keyboard navigation inside menu when it is open */
headerNav.addEventListener('keydown', navigateMenu);

headerNavLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        closeNav();
    }
});

function navigateMenu(event) {
    if (!document.body.classList.contains('js-nav-open')) {
        return;
    }
    if (event.key === 'Tab' || event.keyCode === 9) {
        if (event.shiftKey) {
            if (document.activeElement === toggleNavBtn) {
                twitterLink.focus();
                event.preventDefault();
            }
        } else {
            if (document.activeElement === twitterLink) {
                toggleNavBtn.focus();
                event.preventDefault();
            }
        }
    }
}

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    if (document.body.classList.contains('js-nav-open')) {
        openNav();
    } else {
        closeNav();
    }
}

function closeNav() {
    document.body.classList.remove('js-nav-open', 'js-no-scroll');
    toggleNavBtn.innerHTML = `<img src="img/icon-hamburger.svg" alt="open menu icon">`;
    toggleNavBtn.setAttribute('aria-label', 'open navigation');
    toggleNavBtn.setAttribute('aria-expanded', 'false');
    navShouldBeOpen = false;
}

function openNav() {
    document.body.classList.add('js-nav-open');
    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
        document.body.classList.add('js-no-scroll');
    }
    toggleNavBtn.innerHTML = `<img src="img/icon-close.svg" alt="close menu icon">`;
    toggleNavBtn.setAttribute('aria-label', 'close navigation');
    toggleNavBtn.setAttribute('aria-expanded', 'true');
}

function toggleNavOnResize() {
    if (mqList.matches && document.body.classList.contains('js-nav-open')) {
        closeNav();
        navShouldBeOpen = true;
    } else if (navShouldBeOpen) {
        openNav();
    }
}
