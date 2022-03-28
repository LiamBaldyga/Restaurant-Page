import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import './style.css';
export default customElement;

const header = document.querySelector('header');
const footer = document.querySelector('footer');

function customElement(elem, _class, parent, text) {
    const element = document.createElement(elem);
    element.classList.add(_class);
    if(parent) {
        parent.appendChild(element);
    }
    if(text) {
        element.textContent = text;
    }

    return element;
}

function switchTab(tab) {
    document.body.removeChild(footer.previousElementSibling)
    document.body.insertBefore(tab(), footer);
}

function initContent() {
    document.body.insertBefore(home(), footer);
    initHeader();
}

function initHeader() {
    const nav = customElement('nav', 'nav', header);
    const homeB = customElement('button', 'nav-home', nav, 'Home'); 
    const menuB = customElement('button', 'nav-menu', nav, 'Menu'); 
    const aboutB = customElement('button', 'nav-about', nav, 'About'); 
    setCurrentTab(homeB);

    homeB.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        switchTab(home);
        setCurrentTab(homeB);
    })
    menuB.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        switchTab(menu);
        setCurrentTab(menuB);
    })
    aboutB.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        switchTab(about);
        setCurrentTab(aboutB);
    })
}

function setCurrentTab(tab) {
    const tabs = document.querySelector('nav').children;
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    tab.classList.add('active');
}


initContent();
