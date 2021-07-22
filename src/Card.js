import React, { useState } from 'react'
import './Card.css'


function Card({src, title, description, price}) {

    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    
    return (
    
    <div className='card'>
        <img src={src} alt="" />
        <div className="card__info">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
        </div>
        <div className="card__button">
            <p> Cart :{counter} </p>
            <button onClick={increment}>Add to Cart</button>
            {" "}{" "}
            <button onClick={decrement}>Remove to Cart</button>
        </div>
        
  </div>
        
    )
}

export default Card
