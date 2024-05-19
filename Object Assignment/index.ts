//                    Object Assignment

// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if 
// any).

type Contact = {
    phone?: string;
    email?: string

}
type Role = "Cybersecurity Analyst" | "Data Scientist" | "Develper";

type Employee = {
    name: string;
    department: string;
    role: Role;
    contact?: Contact;
    skills?: string[];
}

let employee: Employee = {
    name: "Muhammad Hassan",
    department: "Information Technology",
    role: "Develper",
    contact: {
        phone: "03171087850",
        email: "hassanramzan211@gmail.com"

    },
    skills: ["Angular", "C#", "Python"],
}

console.log(employee.role);

//                   XXXXXXXXXXXXXXXXXXXXX

// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower.

type Engine = {
    horsePower: number;
};

type Car = {
    make: string;
    model: string;
    year: number;
    color: string;
    engine: Engine;
    getHorsePower: () => void;
};

let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Black",
    engine: {
        horsePower: 610
    },
    getHorsePower() {
        console.log(`My Car Speed is ${this.engine.horsePower} HorsePower.`);

    }
};

myCar.getHorsePower();

//                        XXXXXXXXXXXXXXXXXXXXX

// Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object
// should have two properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function
// accepts a new color string as an argument. When called, it should:
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g.,
// increase by 10% for red, decrease by 5% for blue)

type Inventory = {
    stock: number;
    colorOptions?: string[];
    changeColor: (newColor: string) => void;
}

type Product = {
    name: string;
    price: number;
    color: string;
    inventory: Inventory;
};

let myTshirt: Product = {
    name: "Cool T-Shirt",
    price: 20.00,
    color: "white",
    inventory: {
        stock: 100,
        colorOptions: ["white", "red", "blue", "green"],
        changeColor: function (newColor: string) {
            myTshirt.color = newColor;
            if (newColor === "white") {
                myTshirt.price *= 1.10; // Increase by 10%
            } else if (newColor === "blue") {
                myTshirt.price *= 0.95; // Decrease by 5%
            } else {
                myTshirt.price = 20.00;
            }
        }
    }
};
console.log(myTshirt);
myTshirt.inventory.changeColor("red");
console.log(myTshirt);
myTshirt.inventory.changeColor("blue");
console.log(myTshirt);

//                        XXXXXXXXXXXXXXXXXXXXX