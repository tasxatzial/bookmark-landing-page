import Tablist from "./Tablist.js";
import Accordion from "./Accordion.js";

const tabsContainer = document.querySelector('.js-features-tablist-container');
const tablist = new Tablist(tabsContainer);

const accordionContainer = document.querySelector('.js-faq-accordion');
const accordion = new Accordion(accordionContainer);

const spritePath = new URL('../img/sprites.svg', import.meta.url).pathname;
const headerNav = document.querySelector("nav[aria-label='header primary']");
const toggleNavBtn = headerNav.querySelector('.toggle-nav-btn');
const toggleNavBtnImg = toggleNavBtn.querySelector('svg');
const toggleNavBtnIcon = toggleNavBtn.querySelector('use');
const twitterLink = headerNav.querySelector("a[aria-label='twitter']");
const mqList = window.matchMedia("(min-width: 47em)");
const headerNavLinks = headerNav.querySelector('.header-site-links');
const ctaForm = document.querySelector('.cta-form');
const ctaEmailInput = ctaForm.querySelector('[data-email]');
const emailErrorMsg = ctaForm.querySelector('.cta-email-error-msg');
const emailErrorIcon = ctaForm.querySelector('.cta-email-error-icon');

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

ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = ctaEmailInput.value;

    //w3 html regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

    if (!emailRegex.test(email)) {
        emailErrorMsg.classList.remove('hidden');
        emailErrorIcon.classList.remove('hidden');
        ctaEmailInput.focus();
    }
});

ctaEmailInput.addEventListener('input', () => {
    emailErrorMsg.classList.add('hidden');
    emailErrorIcon.classList.add('hidden');
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
    toggleNavBtnIcon.setAttribute('xlink:href', `${spritePath}#icon-hamburger`);
    toggleNavBtnImg.setAttribute('width', '18');
    toggleNavBtnImg.setAttribute('height', '15');
    toggleNavBtn.setAttribute('aria-label', 'open navigation');
    toggleNavBtn.setAttribute('aria-expanded', 'false');
    navShouldBeOpen = false;
}

function openNav() {
    document.body.classList.add('js-nav-open');
    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
        document.body.classList.add('js-no-scroll');
    }
    toggleNavBtnIcon.setAttribute('xlink:href', `${spritePath}#icon-close`);
    toggleNavBtnImg.setAttribute('width', '16');
    toggleNavBtnImg.setAttribute('height', '15');
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

