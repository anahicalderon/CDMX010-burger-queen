import React, { Fragment } from "react";


const Carts = (props) => {
    const products = props.product;
  return (
      <Fragment>
    <div className="col">
        
      <button onClick={()=> props.handleAddItem(props.product)} type="button" class="btn btn-success btn-sm m-1" >{products.name + " " + "$" + products.price}</button>
    </div>
    </Fragment>
  );
};

export default Carts;
