//                    Object Assignment
var employee = {
    name: "Muhammad Hassan",
    department: "Information Technology",
    role: "Develper",
    contact: {
        phone: "03171087850",
        email: "hassanramzan211@gmail.com"
    },
    skills: ["Angular", "C#", "Python"],
};
console.log(employee.role);
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Black",
    engine: {
        horsePower: 610
    },
    getHorsePower: function () {
        console.log("My Car Speed is ".concat(this.engine.horsePower, " HorsePower."));
    }
};
myCar.getHorsePower();
var myTshirt = {
    name: "Cool T-Shirt",
    price: 20.00,
    color: "white",
    inventory: {
        stock: 100,
        colorOptions: ["white", "red", "blue", "green"],
        changeColor: function (newColor) {
            myTshirt.color = newColor;
            if (newColor === "white") {
                myTshirt.price *= 1.10; // Increase by 10%
            }
            else if (newColor === "blue") {
                myTshirt.price *= 0.95; // Decrease by 5%
            }
            else {
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
