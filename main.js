function getPersonDetails(person) {
    if (person.age) {
        return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var nicolas = {
    firstName: "Nico",
    lastName: "Ri",
    age: 26
};
var add;
add = function (number1, number2) {
    var result = number1 + number2;
    return result;
};
var heading = document.createElement('h1');
var heading2 = document.createElement('h1');
heading.textContent = getPersonDetails(nicolas);
heading2.textContent = add(24, 84).toString();
// document.body.append(heading, heading2)
document.body.appendChild(heading);
document.body.appendChild(heading2);
//=====================================
var firstName = 'Nicolas';
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var wizard;
wizard = {
    health: 50,
    name: "azFYUzebC"
};
// let sayHello: (name: string) => string;
var sayHello = function (name) {
    return "Hello ".concat(name);
};
console.log(firstName);
console.log(numberList);
console.log(wizard);
console.log(sayHello('George'));
