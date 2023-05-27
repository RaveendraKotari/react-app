// function a() {
//     var output = 10;
//     function b() {
//         console.log(output, "am here");
//     }
//     return b;
// }

// console.log(a());


// // function x() {
// //     var a =10;
// //     function y() { 
// //         console.log(a);
// //     }
// //     return y;
// // }
// // var z = x();
// // console.log(z);
// // z();

// // function x() {
// //     console.log("check heree")
// // }
// // x();

// // const radius = [3,1,2,4];

// // const area = function(radius) {
// //     return Math.PI * radius * radius;
// // };

// // const calculate = function(radius, logic) {
// //     const output = [];
// //     for(let i=0; i<radius.length; i++) {
// //         output.push(logic(radius[i]));
// //     } 
// //     return output;
// // }

// // console.log(radius.map(radius));

// // console.log(calculate(radius, area));

 

// //const radius = [3,1,2,4];
// const calculateArea = function (radius) {
//     const output = [];
//     for(let i=0; i<radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for(let i=0; i<radius.length; i++) {
//         output.push(Math.PI * radius[i]);
//     }
//     return output;
// }