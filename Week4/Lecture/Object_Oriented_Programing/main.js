// Object Oriented Programing
//		Programming model based on the creation and manipulation of objects

// Why is it a good thing?
	//  - Communication Flow
			// - Allows better data / functionality abstraction
			// -  ORGANIZATION

// Objects have PROPERTIES
//     - Stores : primitive types, non-primitive types
//     - Also store METHODS (callable properties)
//			- Functions


// Within OOP we use the concept of CLASSES
// A CLASS is like a blueprint for an object

// CAT class
// name
// lives
// color
// hp
// hairLength
// ====
// meow
// sleep
// sneakAttack
// stalk


// Declaring our data in this manner dirties up the global namespace and it very difficult to maintain
// var name = "frank"
// var lives = 9

// var name2 = "alice"
// var lives2 = 5

// Instead we could create a CLASS to CONSTRUCT cat objects (more maintainable, fewer variables)

// Old, higher usage Syntax
function Cat (name, lives, color, hp, hairLength) {

	// We will attach information to the THIS object
	// When we are using a function as a CONSTRUCTOR, THIS represents the object being constructed

	this.name 		= name;
	this.lives 		= lives;
	this.color 		= color;
	this.hp 		= hp;
	this.hairLength = hairLength;

	// While this method works, it's not a best practice.  If we had 10k cats, we would be creating 10k copies of this function in memory
	// this.meow = function(){
	// 	return this.name + ' goes meow!';
	// }
}

// the BEST way to attach methods to our class INSTANCES is to use the PROTOTYPE object
// Every class has a PROTOTYPE and it is SHARED among INSTANCES

Cat.prototype.meow = function(){
	// This refers to the object that called this method
	console.log(this.name + ' says meow!');
}

// Constructing Instances
var rob = new Cat('Rob', 1, 'Purple', 50, 'Long');
var captainPuddinPaws = new Cat('Captain Puddin` Paws', 9, 'Tapioca', 200, 'No Hair');

// When we use the new keyword on a class constructor, we are creating new INSTANCES of a CLASS  - INSTANCES are the CONSTRUCTED objects


// the NEW keyword allows us to call functions as CONSTRUCTORS

// as a CONSTRUCTOR (new keyword)
//		- THIS starts off as an empty object {}
// 		- There is an implicit return of THIS

// NORMALLY (no new keyword)
//		- THIS refers to the object the function is attached to (or being called off of)


// CHALLENGE I
//	1. Create a class / constructor
//			- House class
//				- size
//				- bedrooms
//				- stories
//				- bathrooms
//	2. Construct 2 instances of the House class, log the results
//
// ================================ \\

function House (size, bedrooms, stories, bathrooms, value){

	this.size = size;
	this.bedrooms = bedrooms;
	this.stories = stories;
	this.bathrooms = bathrooms;
	this.value = value;
}
House.prototype.depreciate = function(amt){
	this.value -= amt;
	// this.value = this.value - amt;

	// if(this.value <= 0){
	// 	return 'Demo time!'
	// }
	// else{
	// 	return 'New Value : ' + this.value
	// }

	return this.value <= 0
		? 'Demo Time!'
			: 'New Value : ' + this.value

	// CONDITIONAL ? TRUE VALUE : FALSE VALUE
}
var studioTower = new House(1200, 1, 6, 0.5, 800000);
var superMansion = new House(5600, 35, 1, 105, 50000000);


// ========================== \\

// CHALLENGE II

// 1. Add a 'value' property to the House class (DONT FORGET TO UPDATE YOUR INSTANCES)
// 2. Create a prototype method called
// 		- depreciate
//		- This method should decrement a house's value by an amount specified as an argument
// 3. If a houses value falls below 0, log a message describing the demolition happening
