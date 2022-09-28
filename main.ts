interface Person {
    firstName: string
    lastName: string
    age?: number
}

function getPersonDetails(person: Person) {
    if (person.age) {
        return `${person.firstName} ${person.lastName} ${person.age}`;

    }
    return `${person.firstName} ${person.lastName}`;
}

let nicolas = {
    firstName: "Nico",
    lastName: "Ri",
    age: 26,
};

//=====================================

interface AddTwoNumbers {
    (number1: number, number2: number): number
}

let add: AddTwoNumbers

add = function (number1: number, number2: number) {
    const result = number1 + number2
    return result;
}


const heading = document.createElement('h1')
const heading2 = document.createElement('h1')
heading.textContent = getPersonDetails(nicolas)
heading2.textContent = add(24, 84).toString()
// document.body.append(heading, heading2)

document.body.appendChild(heading)
document.body.appendChild(heading2)

//=====================================

const firstName: string = 'Nicolas';
const numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let wizard: {
    health: number;
    attack?: number;
    name: string;
};
wizard = {
    health: 50,
    name: "azFYUzebC"
};

// let sayHello: (name: string) => string;

const sayHello = function(name: string) {
    return `Hello ${name}`;
};

console.log(firstName);
console.log(numberList);
console.log(wizard);
console.log(sayHello('George'));
