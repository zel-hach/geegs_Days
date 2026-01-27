// ===== Exercise 1

const person1 = {
  fullName: "Alice Johnson",
  mass: 68,
  height: 1.65,
calculateBodyMass : function (){//BMI = mass/height * height
    return mass/(this.height * this.height);
  }
};

const person2 = {
  fullName: "Bob Smith",
  mass: 85,
  height: 1.8,
  calculateBodyMass : function (){//BMI = mass/height * height
    return mass/(this.height * this.height);
  }
};

function maxBMI(){
    if(person1.calculateBodyMass > person2.calculateBodyMass)
        console.log(`BMI of person1 is higher than person2. Name: ${person1.fullName}`);
    else
        console.log(`BMI of person2 is higher than person1. Name: ${person2.fullName}`);
}
// ===== Exercise 2

function findAvg(gradesList){
    const sum = 0;
    for(let i = 0;i<gradesList.lenght ; i++)
    {
        sum +=gradesList[i];
    }
    let evrage = sum /gradesList.lengh;
    console.log(" the average: ",evrage);
    if(evrage > 65)
    {
        console.log("you are succes average");
    }
    else{
        console.log("your average not valid");
    }
}

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...