import React from 'react'

export const Promises = () => {
    Promise.all();
    Promise.allSettled();
    Promise.race();
    Promise.reject();
    Promise.resolve();
    Promise.then();
    Promise.catch();
    Promise.finally();

    //find max and min
    let ax =[3,5,6,7,87,88,98,56,4,3,5,66];
    let max = ax[0];
    for(let i=0; i<ax.length; i++) {
        if(max<ax[i]) {
            max = ax[i]
        }
    }
    console.log(max);


    let arr = ["mango", "apple", "orange", "mango","apple"];

    function removeDublicates(arr) {
        //using filter
        return arr.filter(function(item, index) {
            return arr.indexOf(item) === index
        });

        //using sets
        return [...new Set(arr)];

        //using foreach method
        let unique = [];
        arr.forEach((element) => {
            if(!unique.includes(element)) {
                unique.push(element);
            }
        })
        return unique;

        //using reduce
        let unique1 = arr.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        return unique1;

        //using indexOf
        let unique3 = [];
        for(let i =0; i<arr.length; i++) {
            if(unique3.indexOf(arr[i]) === -1) {
                unique3.push(arr[i])
            }
        }
        return unique3;
    }

    console.log(removeDuplicates(arr));

  return (
    <div>Promises</div>
  )
}
