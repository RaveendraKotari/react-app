import React from 'react'

export const FlattenArray = () => {
    let arr = [1, [2,3], 4, 5, [4,5,[6,7,8,[8,9,9]]]];
    let output = [];

    function flatten(arr) {
        for(let i=0; i<arr.length;i++) {
            if(Array.isArray(arr[i])){
                flatten(arr[i]);
            } else {
                output.push(arr[i]);
            }
        }
        return output;
    }
    console.log(flatten(arr));

  return (
    <div>FlattenArray</div>
  )
}
