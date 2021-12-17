
import { useState } from 'react';

const Footer = () => {
  const [count, setCount] = useState(0)
  const oneUp = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>{ count }</p>
      <div>
        <button onClick={oneUp}>+1</button>
      </div>
      <p>Footer</p>
    </>
  )
}

export default Footer
