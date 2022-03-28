import customElement from './index.js';
function about() {
    const about = customElement('div', 'about');
    
    const aboutHero = customElement('div', 'about-hero', about);

    const aboutHead = customElement('h1', 'about-head', aboutHero, 'About Us');
    const p1 = customElement('p', 'about-p', aboutHero, 'Rick Dubro purchased his first Pizzeria in 1978 in Roseville Mi. with his high school friend Tom Griffin.');
    const p2 = customElement('p', 'about-p', aboutHero, 'Together over the next few years Tom and Rick opened 6 locations under the name of Kings Pizzeria in Detroit, St. Clair Shores, Roseville, East Detroit and Warren.');
    const p3 = customElement('p', 'about-p', aboutHero, 'Upon moving north to Traverse City in 1990, Rick worked managing a sports restaurant in Traverse City. At the same time running one of his restaurants downstate. After managing a full service restaurant Rick decided it was time to own his own again.');
    const p4 = customElement('p', 'about-p', aboutHero, 'In 1996 Rick & Lori purchased a Carry out, Deli, Delivery location known as Papa J’s & Roosters Chicken in Grawn. After managing a full service restaurant, Rick decided to remodel Papa J’s & Roosters Chicken in 1998 and become a full service Restaurant which is now Rico’s Cafe’.');
    const p5 = customElement('p', 'about-p', aboutHero, 'The pizza recipe has not changed since 1978!');
    const p6 = customElement('p', 'about-p', aboutHero, 'Rico’s Cafe’ is a supporter of many athletic teams in the area. Including Youth Hockey, Baseball and Football. One of the largest Community events at Rico’s Cafe’ is “Veterans Day”. All Veteran’s are invited to enjoy a complimentary meal at Rico’s every Nov. 11th since 2001. This is our way of “Thanking” our Veterans for our freedom and showing our appreciation to them. It is a day for gratitude, friendships, stories and tears. We have grown from serving 240 Complimentary Meals in 2001 to over 500 in 2006. Rick and Lori are honored to serve our Vet’s for serving our country.');
    

    return about;
}
export default about