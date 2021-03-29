var myPetsArray = [
    { animalType: "Dog", name: "Pujdo" },
    { animalType: "Cat", name: "Maca" },
    { animalType: "Bird", name: "Tweety" },
  ];
  function myPetsFunction(pets) {
      var myPets =[...pets];
      return pets[1].name;
  }
  // Only change code below this line

  // Only chanfe code above this line
  
  console.log(myPetsFunction(myPetsArray)); // Change this line
  module.exports = myPetsFunction;
  module.exports.myPets = myPetsArray;