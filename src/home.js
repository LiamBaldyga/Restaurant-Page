import customElement from './index.js';

function home() {
    const home = customElement('div', 'home');

     
    const hero = customElement('div', 'hero', home);
    const heroLogo = customElement('img', 'hero-logo', hero)
    heroLogo.src = 'images/ricos.png';


    const info = customElement('div', 'info', hero);
    const heroTitle = customElement('h1', 'hero-title', info, 'Hungry for a Burger?');
    const heroP = customElement('p', 'hero-p', info, 'Come stop by Rico\'s Cafe and Pizzeria!');
    const location = customElement('p', 'locaiton', info, '5790 US 31 South • Grawn, Michigan 49637')

    const schedule = customElement('ul', 'schedule', info);
    const MTT = customElement('li', 'MTT', schedule)
    const mttDays = customElement('span', 'mtt-days', MTT, 'Monday, Tuesday, Thursday')
    const monHours = customElement('span', 'mtt-hours', MTT, '9AM - 9PM');

    const FSS = customElement('li', 'FSS', schedule);
    const fssDays = customElement('span', 'fss-days', FSS, 'Friday, Saturday, Sunday');
    const fssHours = customElement('span', 'fss-hours', FSS, '8AM - 9PM');
    
    const wed = customElement('li', 'wed', schedule);
    const wedDays = customElement('span', 'wed-Days', wed, 'Wednesday');
    const wedHours = customElement('span', 'wed-hours', wed, 'Closed');
    return home;
}

export default home;