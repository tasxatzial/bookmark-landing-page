import Tablist from "./Tablist.js";
import Accordion from "./Accordion.js";

const tabsContainer = document.getElementById('features-tabs');
const tablist = new Tablist(tabsContainer);

const accordionContainer = document.getElementById('faq-accordion');
const accordion = new Accordion(accordionContainer);
