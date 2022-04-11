//creating object
const personMe =  {
    name: "Martin",
    age: 26,
    country: "Slovakia",
    favouriteFood: ["pizza", "hamburger", "noodles"]
};

//add all favourite food into ul
for (let i = 0; i < personMe.favouriteFood.length; i++) {
    const ul = document.querySelector(".me");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(personMe.favouriteFood[i]));
    ul.appendChild(li)
}




//Constructor Function to create a New Person
function Person (name, age, country, favouriteFood) {
    this.age = age;
    this.name = name;
    this.country = country;
    this.favouriteFood = favouriteFood;
}

    //Initialise Object
    const personSister = new Person("Tamara", 11, "Slovakia", ["onion", "chips"])
    console.log(personSister)


//just testing
document.querySelector(".sister").innerHTML = personSister.name;