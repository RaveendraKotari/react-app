import React from 'react'

export const UseImperative = () => {
    const childButtonRef = React.useRef(null);
  return (

    <>
        <div>UseImperative</div>
        <button onClick={(
            () => childButtonRef.current.alterToggle({"name": "text"})  
        )}>Parent button</button>
        <br></br>
        <ChildComponent ref={childButtonRef} />
    </>
  )
}

const ChildComponent = React.forwardRef((props, ref) => {
    const [toggle, setToggle] = React.useState(true);

    React.useImperativeHandle(ref, () => ({
        alterToggle(e) {
            console.log("mmm", e)
            setToggle(!toggle);
        }
    }));
    return (
        <div>
            <button>Child button</button>
            {toggle && ( <div>I'm toggle</div> )}
        </div>
    )
});
