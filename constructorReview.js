//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  function Animal(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }



//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  function Person(name, age, height, gender) {
    return  {
      name: name,
      age: age,
      height: height,
      gender: gender
    };
  }


//Create a animal array and a person array.

var animalArr = [];
var personArr = [];


//Create two instances of Animal and push those into your animal array

var cat = new Animal('feline', 'bob', 4, 'black', ['pureina', 'mice']);
var dog = new Animal('canine', 'susane', 9, 'yellow', ['dog chow', 'chicken']);

animalArr.push(cat, dog);

//Create two instances of person and push those into your person array.

var person1 = new Person('tom', 26, '6 feet','male');
var person2 = new Person('jake', 37, '5.5 feet','male');

personArr.push(person1, person2);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

function eat() {
  var lastFoodIndex = this.food.length;
  var randoFoodIndex = Math.floor(Math.random()*(lastFoodIndex - 0) + 0);
  var foodEaten = this.food[randoFoodIndex];

  console.log(this.name + ' ate ' + foodEaten);
}

Animal.prototype.eat = eat

cat.eat();

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
