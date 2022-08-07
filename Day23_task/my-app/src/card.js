import React from "react";

const card = (props) => {
  let functcall= props.buttonname==="Add to cart" ? props.handleCart : props.removeCart 
  
  return (

    <div className="card" id="cardbody" >
      <div className="card-body" >
        <img
          className="card-img-top" 
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <p className="productname">{props.name}</p>
        <p className="productprice">{props.price}</p>
        <button className="buttonname" onClick={functcall}>{props.buttonname}</button>
      </div>
    </div>
  );
};
export default card;
