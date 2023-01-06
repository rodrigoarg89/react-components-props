import React from "react";

const CardGral = ({title, item1, item2, item3, bg}) => {
  
  const alertTitle = () => alert(`${title}`)

  return (
    <div onClick={alertTitle} className={`card ${bg}`} >
      <h2>{title}</h2>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>

    </div>

  )
}

export default CardGral;