let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}



const displayGroceries = ()=>{
    groceries.fruits.forEach((fruit) =>{
        console.log(fruit);
    } )
}

displayGroceries();

const cloneGroceries = () =>{
    let user = client; //user gets a copy of the value because strings are primitive types (copied by value)
    client = "Betty";
    console.log(user);// // Primitive values are copied by value, not by reference

    let shopping = groceries;
    groceries.totalPrice="35$";
    console.log(shopping); // yes value changed ,because object copied by reference 

    groceries.other.paid = false; // yes value changed ,because object copied by reference 
    console.log(shopping);
}

cloneGroceries()