import customElement from './index.js';
function menu() {
    const menu = customElement('div', 'menu');

    const mHero = customElement('div', 'mHero', menu);

    //burgers
    const burgers = customElement('div', 'burgers', mHero);
    const burgerH = customElement('h1', 'burger-head', burgers, 'Burgers');

    const house = customElement('div', 'house', burgers);
    const houseH = customElement('h3', 'house-head', house, 'House Burger');
    const houseD = customElement('p', 'house-desc', house, '1/2 pound char-grilled Black Angus beef on a grilled artisan bun. Served with lettuce, tomato and pickle');
    const houseP = customElement('p', 'house-price', house, '$12');

    const rico = customElement('div', 'rico', burgers);
    const ricoH = customElement('h3', 'rico-head', rico, 'Rico Burger');
    const ricoD = customElement('p', 'rico-desc', rico, 'Fresh ground 2/3 pound char-grilled burger topped with your choice of cheese, lettuce, tomato and pickles on a grilled artisan bun');
    const ricoP = customElement('p', 'rico-price', rico, '$13.50');

    const western = customElement('div', 'western', burgers);
    const westernH = customElement('h3', 'western-head', western, 'Western Burger');
    const westernD = customElement('p', 'western-desc', western, '1/2 pound Black Angus beef, char-grilled with hickory smoked bacon, cheddar cheese and our own BBQ sauce. Served with fresh lettuce and tomato');
    const westernP = customElement('p', 'western-price', western, '$13.50');

    //sandiwches
    const sandwiches = customElement('div', 'sandwiches', mHero);
    const sandwichH = customElement('h1', 'sandwich-head', sandwiches, 'Sandwiches and Grinders');

    const italian = customElement('div', 'italian', sandwiches);
    const italianH = customElement('h3', 'italian-head', italian, 'Italian Grinder');
    const italianD = customElement('p', 'italian-desc', italian, 'Italian sausage, ham, pepperoni, provolone cheese, red onion, yellow peppers, lettuce, tomato, pickles and Italian dressing on our home made breads');
    const italianP = customElement('p', 'italian-price', italian, '$12');

    const pulledpork = customElement('div', 'pulledpork', sandwiches);
    const pulledporkH = customElement('h3', 'pulledpork-head', pulledpork, 'Pulled Pork Grinder');
    const pulledporkD = customElement('p', 'pulledpork-desc', pulledpork, 'Our slow roasted pulled pork, hickory bacon, melted cheddar cheese, green peppers and onions with bbq sauce on our homemade bread');
    const pulledporkP = customElement('p', 'pulledpork-price', pulledpork, '$12');

    const reuben = customElement('div', 'reuben', sandwiches);
    const reubenH = customElement('h3', 'reuben-head', reuben, 'Reuben Sandwich');
    const reubenD = customElement('p', 'reuben-desc', reuben, 'Thinly sliced lean corned beef topped with our signature sweet and sauerkraut, domestic Swiss and 1000 island dressing on grilled swirl rye bread');
    const reubenP = customElement('p', 'reuben-price', reuben, '$13.50');

    //dinner
    const dinner = customElement('div', 'dinner', mHero);
    const dinnerH = customElement('h1', 'dinner-head', dinner, 'Dinner Entrees');

    const chicken = customElement('div', 'chicken', dinner);
    const chickenH = customElement('h3', 'chicken-head', chicken, 'Smothered Grilled Chicken');
    const chickenD = customElement('p', 'chicken-desc', chicken, 'A 6 oz. marinated chicken breast grilled and smothered with sautéed mushrooms, onions and green peppers with melted provolone cheese on top');
    const chickenP = customElement('p', 'chicken-price', chicken, '$14');

    const tenders = customElement('div', 'tenders', dinner);
    const tendersH = customElement('h3', 'tenders-head', tenders, 'Chicken Tenders');
    const tendersD = customElement('p', 'tenders-desc', tenders, 'A favorite for the young and not so young! Breaded chicken tenders fried to a golden brown and served with French fries and ranch dressing');
    const tendersP = customElement('p', 'tenders-price', tenders, '$14');

    const roast = customElement('div', 'roast', dinner);
    const roastH = customElement('h3', 'roast-head', roast, 'Hot Roast Beef Sandwich');
    const roastD = customElement('p', 'roast-desc', roast, 'Our own home roasted beef, sliced thin and piled high between grilled sourdough with beef gravy');
    const roastP = customElement('p', 'roast-price', roast, '$16.50');

    return menu;
}

export default menu