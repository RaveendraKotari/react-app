import { CheckIcon } from '@heroicons/react/24/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

import { useState} from 'react';


export default function Example() {

  let [count, setCount] = useState(0);
  return (
    <div className='to-blue-800'> 
    {count}
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button className="fff" node='' onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  )
}
