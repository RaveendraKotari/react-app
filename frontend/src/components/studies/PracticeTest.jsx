import React from "react";
import axios from "axios";

// const PracticeTest = () => {
//   const [val, setValue] = React.useState("test");
//   const setValu = (e) => {
//     setValue(e.target.value)
//   }
//   return (
//     <>
//     <input placeholder="write something" onChange={(e) => setValue(e.target.value)} ></input>
//     <div>{val}</div>
//     </>
//   )
// }


// useReducer
// const initialState = {
//   count: 0,
//   showText: true
// }

// const reducerFunction = (state, action) => {
//   console.log("hereee", state, action)
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1
//       };
//     case "showText":
//       return {
//         ...state,
//         showText: !state.showText
//       };
//     default:
//       return state
//   }
// }

// const PracticeTest = () => {
//   const [state, dispatch] = React.useReducer(reducerFunction, initialState);

//   return (
//     <>
//      <div>{state.count}</div>
//      <button onClick={(e) => {
//       dispatch(
//         {
//           type: "increment",
//           //payload: e.timeStamp
//         }
//       );
//       dispatch({type: "showText"});
//      }}>Increment</button>

//      {state.showText && <p>This is a text</p>} 
//     </>
//   )
// }

//useffects

const PracticeTest = () => {

  const [val, setData] = React.useState("");
  const [count, setCount] = React.useState(0);
  // React.useEffect( () => {
  //   async function getProducts() {
  //     await axios.get("http://localhost:3000/products")
  //       .then( (res) => {
  //         setData(res.data)
  //       })
  //       .catch( (err) => {
  //         console.log(err)
  //     })
  //   }
  //   getProducts();
  // }, [count]);

  const names =[
    {_id: '64592f2b7f6aaccb99e6b9bb', name: 'brush1', quantity: 3, price: 4, createdAt: '2023-05-08T17:19:39.515Z'},
    {_id: '645d1278c839412dd60027a5', name: 'ffdf', quantity: 0, price: 0, createdAt: '2023-05-11T16:06:16.233Z'},
    {_id: '645d1423c839412dd60027dd', name: 'ffdf', quantity: 0, price: 0, createdAt: '2023-05-11T16:13:23.604Z'}, 
    {_id: '645d1426c839412dd60027e0', name: 'ffdf', quantity: 0, price: 0, createdAt: '2023-05-11T16:13:26.366Z'},
    {_id: '645dad9dc839412dd60027f2', name: 'ffdf', quantity: 0, price: 0, createdAt: '2023-05-12T03:08:13.975Z'}, 
    {_id: '645dae07c839412dd60027f5', name: 'ac', quantity: 3, price: 4, createdAt: '2023-05-12T03:09:59.333Z'},
    {_id: '645dae1dc839412dd60027f9', name: 'ac1', quantity: 3, price: 4, createdAt: '2023-05-12T03:10:21.103Z'}
];

  const findLargestname = (names) => {
    if(!names) return null;
    let longestName = "";

    for(let i=0; i<=names.length; i++) {
      console.log("hhhh", names[i].name);
      let currentName = names[i].name;
      if(currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    return longestName;
  }

    const getLongestName = React.useMemo(() => findLargestname(names), [names]);
  return (
    <>
      <div>
      {/* {console.log(val)} */}
      <br></br>
      {getLongestName}
      <button onClick={() => setCount(count+1)}>{count} Call API</button>
      </div>
    </>
  )
}

export default PracticeTest;