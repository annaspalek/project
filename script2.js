"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello");
    }
};

const john = Object.create(solder);
// const john = {
//     health: 100
// };

Object.setPrototypeOf(john, solder);

// console.log(john.armor);
john.sayHello();

// const obj = {
//     a: 5,
//     b: 1
// };

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(clone);
// console.log(add);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'gfuyfguyhg';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'lifejornal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'fasebook'];

// console.log(internet);

// const array = ["a", "b"];

// const newAarray = [...array];

// console.log(newAarray);

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(newObj);