///////////////////////////////////////////////////////////////////// Exercie1 ///////////////////////////////////////////////////////////////////////
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`); // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

///////////////////////////////////////////////////////////////////// Exercie2 ///////////////////////////////////////////////////////////////////////
function displayStudentInfo(objUser){
    //destructuring
    console.log(`Your full name is ${objUser.first} ${objUser.last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

///////////////////////////////////////////////////////////////////// Exercie3 ///////////////////////////////////////////////////////////////////////

const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);
console.log(usersArray);

usersArray.map((user)=>{
    return user[1] = user[1] * 2;
})

console.log(usersArray);

///////////////////////////////////////////////////////////////////// Exercie4 ///////////////////////////////////////////////////////////////////////
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // object

///////////////////////////////////////////////////////////////////// Exercie5 ///////////////////////////////////////////////////////////////////////
class Dog {
  constructor(name) {
    this.name = name;
  }
};

//1 return error because not call super class (Always call super() first)

class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};
//2 that's extend successfully
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//  // 3 that's extend successfully
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

// 4 return error because not call super class (Always call super() first)
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};


///////////////////////////////////////////////////////////////////// Exercie6 ///////////////////////////////////////////////////////////////////////
// ([2] === [2]) // return false because object compared by reference not value
// {} === {}  // return false because object compared by reference not value


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //=> object2 copy of object1 return 4 => object copied by reference 
console.log(object3.number) //=> object3 copy of object2 return 4 => object copied by reference
console.log(object4.number) // => return 5


class Animal{
    constructor(name,type,color)
    {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    }
    sound(sound){
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mammal('Lily','crow',"brown and white");

console.log(farmerCow.sound('moos'));