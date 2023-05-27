import React, { useEffect, useState } from 'react'

function ComponentWillbeUnmounted() {

    const [display, setDisplay] = useState(true);
  return (
    <>
        <div>ComponentWillbeUnmounted</div>
        <button onClick={() => setDisplay(!display)}>Click me</button>
        {display && <HookMouse />}
    </>
  )
}

function HookMouse () {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("mouse event is happening")
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect( () => {
        console.log("useeffect is called");
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log("unmounting code");
            window.removeEventListener('mousemove', logMousePosition);
        }

    }, []);

    return (
        <>
        <div>Hook X - {x} - {y} </div>
        </>
    )
}

export default ComponentWillbeUnmounted;