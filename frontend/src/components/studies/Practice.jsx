import React, { useState } from 'react'

export default function Practice() {
    const [value,setValue] = useState();

    const refresh = ()=>{
        // it re-renders the component
       setValue({});
    }

  return (
    <div>
        <p>{Math.random()}</p>
      <button onClick={refresh}>Refresh component</button>
    </div>
  )
}
