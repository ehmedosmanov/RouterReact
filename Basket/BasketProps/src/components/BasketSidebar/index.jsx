import React from 'react'
import './index.scss'
const BaskerSidebar = ({props}) => {
  const {sum,handleInc,handleDec,removeFromBasket,basket} = props
  return (
    <div>Basket:
      Sum: {sum}

      {basket && basket.map(item=> (
        <ul>
        {console.log(item)}

          <li>{item.title}</li>
          <li>{item.count}</li>
          <li><button onClick={() => removeFromBasket(item.id)}>Remove</button></li>
          <li><button onClick={() => handleInc(item.id)}>+</button></li>
          <li><button onClick={() => handleDec(item.id)}>-</button></li>
        </ul>
      ))}
    </div>
  )
}

export default BaskerSidebar