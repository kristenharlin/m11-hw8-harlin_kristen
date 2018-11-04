// Homework 11
// step 4e

class Desserts {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

class IceCream extends Desserts {
  constructor(type, calories, flavor, scoops){
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }

  includeSpoon (){
    if(this.scoops === 3) {
      console.log('Here is your spoon!');
    }
  }
}

// test work code
//let myDessert = new IceCream ('icy', 200, 'vanilla', 3);
//
