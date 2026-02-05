// ===== Exercise 1

const person1 = {
  fullName: "Alice Johnson",
  mass: 68,
  height: 1.65,
calculateBodyMass : function (){//BMI = mass/height * height
    return this.mass/(this.height * this.height);
  }
};

const person2 = {
  fullName: "Bob Smith",
  mass: 85,
  height: 1.8,
  calculateBodyMass : function (){//BMI = mass/height * height
    return this.mass/(this.height * this.height);
  }
};

function maxBMI(){
    if(person1.calculateBodyMass() > person2.calculateBodyMass())
        console.log(`BMI of person1 is higher than person2. Name: ${person1.fullName}`);
    else
        console.log(`BMI of person2 is higher than person1. Name: ${person2.fullName}`);
}
maxBMI();
// ===== Exercise 2

function findAvg(gradesList){
    let sum = 0;
    for(let i = 0;i< gradesList.length ; i++)
    {
        sum += gradesList[i];
    }
    let average = sum / gradesList.length;
    console.log(" the average: ",average);
    if(average > 65)
    {
        console.log("you are succes average");
    }
    else{
        console.log("your average not valid");
    }
}
findAvg([80, 77, 88, 95, 68]);

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...