import React from 'react';

export const UseCallback = () => {

    const [data, setData] = React.useState("");

    const returnElement = React.useCallback((name) => {
        return data + name;
    }, [data]);

  return (
    <>
        <div>UseCallback</div>
        <Child result={returnElement} />
    </>
  )
}

const Child = ({ result }) => {

    React.useEffect( ()=> {
        console.log("function was called");
    }, [result]);
    
    return (
        <div>
            { result }
        </div>
    );
}
