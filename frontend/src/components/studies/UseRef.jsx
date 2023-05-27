import React from 'react'

export const UseRef = () => {

    const inputRef = React.useRef(null);

    const onClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    React.useLayoutEffect( () => {
        console.log("layout")
    }, []);

    React.useEffect(() => {
        console.log("useEffct")
        inputRef.current.value = "Hello";
    }, []);

  return (
    <div>
        <h2>UseRef</h2>
        <br></br>
        <input placeholder='Write something' ref={inputRef}></input>
        <button onClick={onClick}>Submit</button>
    </div>
  )
}
