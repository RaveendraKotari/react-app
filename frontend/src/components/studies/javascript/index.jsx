import React from 'react';

export const JavaScript = () => {

    const arr = [1,2,3,4,5];

    function isOdd(x) {
        return x % 2;
    }

    function isEven(x) {
        return x % 2 === 0;
    }

    const output = arr.filter((x) => x > 4);

    function findSum(arr) {
        let sum =0;
        for(let i=0; i<arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }
    //console.log(findSum(arr));

    const reduceOutputo = arr.reduce(function(acc, curr) {
        acc = acc + curr;
        return acc;
    }, 0);

    console.log(reduceOutputo);

    function findMax(x) {
        let max =0;
        for(let i=0; i<arr.length; i++) {
            if(max<arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }

    const maxArray = arr.reduce(function(acc, curr) {
        if(acc < curr) {
            acc = curr;
        }
        return acc;
    }, 0);

    //console.log('%cMyProject%cline:33%cfindMax', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(17, 63, 61);padding:3px;border-radius:2px', findMax(arr), maxArray)

    const users = [
        {firstName: "Sham", lastName: "Skatori", age: 30},
        {firstName: "Kiran", lastName: "Mijaka", age: 33},
        {firstName: "Hello", lastName: "tori", age: 30},
        {firstName: "Sheku", lastName: "Ska", age: 26},
        {firstName: "Deepak", lastName: "musk", age: 38},
    ];

    //{26:1, 30:2, 33:1, 38:1}

    const outputAge = users.reduce(function(acc, curr){
        if(acc[curr.age]) {
            acc[curr.age] = ++acc[curr.age];
        } else {
            acc[curr.age] = 1;
        }
        return acc;
        //return curr.age;
    }, {});

    console.log(outputAge);

    // function higherOrder(fun) {
    //     fun();
    //     return function () {

    //     };
    // }

    // function giveMeClosure() {
    //     let a =1;
    //     function returnMe () {
    //         a++;
    //         return a;
    //     }
    //     return returnMe;
    // }

    // function whtIsThis() {
    //     console.log("fff", this);
    // }
    // console.log(whtIsThis());

    //how this works
    // const person = {
    //     whtIsThis: function () {
    //         console.log(this);
    //     }
    // }
    // this.whtIsThis();


//bind methos
    // function functionName() {
    //     console.log(this);
    // }
    // const person1 = {name:"text"}
    // const calculate = functionName.bind(person1);
    // console.log(calculate);
    
setTimeout(() => {
    console.log("5 seconds in future")
}, 5000);

const promise = new Promise(
    (resolve, reject) => {
        let greatsuccess = 1;
        if(greatsuccess) {
            resolve("success");
        }
        else {
            reject("failed");
        }
    }
)
//console.log(promise);
//can handle then or catch method / async or await

// promise.then(
//     (res) => console.log(res)
// ).catch(
//     (err) => console.log(err)
// )

//can handle with async or await function

async function asyncFunctionName() {
    try {
        const result = await promise;
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}

asyncFunctionName();



  return (
    <div>JavaScript
        <br></br>
        <br></br>
        <>
        {/* {console.log(output)} */}
        </>
    </div>
  )
}
