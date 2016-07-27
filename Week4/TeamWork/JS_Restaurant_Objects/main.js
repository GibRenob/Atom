////////////////////////
// FoodItem
////////////////////////
// Constructor Function
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}
// FoodItem Prototype Method
FoodItem.prototype.getDescription = function() {
    var description =  this.name + ' has ' + this.calories + ' calories! \nVegan friendly? ' + this.vegan + '\nGluten Free? ' + this.glutenFree + '\nCitrus Free? ' + this.citrusFree;
    return description;
}


// FoodItem Instances
var Bananas = new FoodItem('Bananas', 100, true, true, false);
var Pizza = new FoodItem('Pizza', 180, false, false, false);
var Snickers = new FoodItem('Snickers', 5000, true, true, true);

// Print Three FoodItems and their description
console.log(Bananas);
console.log(Pizza);
console.log(Snickers);



////////////////////////
// Ingredients
////////////////////////
var tequila = new FoodItem('tequila', 100, true, true, true);
var orangeJuice = new FoodItem('orangeJuice', 800, true, true, false);
var lime = new FoodItem('lime', 150, true, false, true);
var cherry = new FoodItem('cherry', 250, true, true, true);
var pineapple = new FoodItem('pineapple', 500, true, true, true);
var whiteRum = new FoodItem('whiteRum', 50, true, true, true);
var limeJuice = new FoodItem('limeJuice', 200, true, true, true);
var chicken = new FoodItem('chicken', 500, true, false, false);
var BBQSauce = new FoodItem('BBQSauce', false, false, false);




////////////////////////
// Drink
////////////////////////
var Drink = function(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Drink.prototype.getDescription = function(){
    var ingredients = _.pluck(this.ingredients, 'name').join(', ');
    return this.name + ': ' + this.description + '. Ingredients: ' + ingredients + '. Price: $' + this.price + '.00';
}

// Drink Instances
var MaiTai = new Drink('MaiTai', 'Delicious Island Cocktail', 14.00, [tequila, orangeJuice, whiteRum, limeJuice]);
var tequilaSunrise = new Drink('Tequila Sunrise', 'Fabulous Mixed Citrus Drink', 9.00, [tequila, orangeJuice, pineapple]);
console.log(MaiTai);



////////////////////////
// Plates
////////////////////////
var Plate = function(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Plate.prototype.getDescription = function(){
    var ingredients = _.pluck(this.ingredients, 'name').join(', ');
    return this.name + ': ' + this.description + '. Ingredients: ' + ingredients + '. Price: $' + this.price + '.00';
}
Plate.prototype.isVegan = function(){
    var pluck = _.pluck(this.ingredients, 'vegan');
    return _.uniq(pluck).length === 1 ? true : false;
}
Plate.prototype.isGlutenFree = function(){
    var pluck = _.pluck(this.ingredients, 'glutenFree');
    return _.uniq(pluck).length === 1 ? true : false;
}
Plate.prototype.isCitrusFree = function(){
    var pluck = _.pluck(this.ingredients, 'citrusFree');
    return _.uniq(pluck).length === 1 ? true : false;
}


// Plate Instances
var BBQ = new Plate('BBQ Plate', 'Sweet BBQ', 3.00, [Chicken, Sauce]);
console.log(BBQ);

var guacamole = new Plate('Guacamole Plate', 'Refreshing, Homemade Guacamole and Chips', 8.00, [avacado, jalepeno, chips]);
console.log(guacamole);



////////////////////////
// Order
////////////////////////
var Order = function(items) {
    this.items = items
}
Order.prototype.getDescription = function(){
    var items = this.items;
    var menuString = '';

    for (var i = 0; i < items.length; i++) {
        menuString = menuString + '\n' + items[i].name + ': ' + ' Price: $' + items[i].price + '.00';
    }

    return menuString;
}


// Order Instances
var sethOrder = new Order([burrito, margarita]);



////////////////////////
// Menu
////////////////////////
var Menu = function(items) {
    this.items = items;
}
Menu.prototype.getMenu = function(){
    var items = this.items;
    var menuString = '';

    for (var i = 0; i < items.length; i++) {
        var ingredients = _.pluck(items[i].ingredients, 'name').join(', ');
        menuString = menuString + '\n' + items[i].name + ': ' + items[i].description + '. Ingredients: ' + ingredients + '. Price: $' + items[i].price + '.00';
    }

    return menuString;
}


// Menu Instances
var panchosMenu = new Menu([burrito, guacamole, margarita, tequilaSunrise]);



////////////////////////
// Restaurant
////////////////////////

var Restaurant = function(name, description, menu){
    this.name = name;
    this.description = description;
    this.menu = menu;
}
Restaurant.prototype.getDescription = function(){
    return this.name + ': ' + this.description + '\n' + this.menu.getMenu();
}


// Restaurant Instances
var panchosTaqueria = new Restaurant('Panchos Taqueria', 'Best Tacos in Town!', panchosMenu)



////////////////////////
// Customer
////////////////////////

var Customer = function(dietaryPreference){
    this.dietaryPreference = dietaryPreference;
}
Customer.prototype.getDescription = function(){
    return 'Dietary Preference is ' + this.dietaryPreference;
}


// Customer Instances
var seth = new Customer('vegan')
