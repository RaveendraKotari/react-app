import React from 'react'

export const CallbindApply = () => {
//Call invokes the function and allows you to pass in arguments one by one.
//Apply invokes the function and allows you to pass in arguments as an array.
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.

//Call
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

//Apply

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King

//Bind
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

//example:
function say(...m) {
    console.log(m);
}

var sayHelloJon = say.bind(person1, "ccc", "ddd");
var sayHelloKelly = say.bind(person2, "vvvv", "bbbb");

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King

const personOne = {name: "sham", lname: "hhh"}
function bindFunction() {
    return `Hello 123 mike testing ${this.name} ${this.lname}`;
}

const outputt = bindFunction.bind(personOne);
console.log(outputt);

  return (
    <div>CallbindApply</div>
  )
}
