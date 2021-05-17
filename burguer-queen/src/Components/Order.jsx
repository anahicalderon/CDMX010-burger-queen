import React, { Fragment, useState, useEffect } from "react";
import Carts from "./Carts";
import OrderView from "./OrderView";
import "./Carts.css"
import Logo from "../Assets/LogoQueen.png"

const Order = () => {
  const [menu, setMenu] = useState();
  const [order, setOrder] = useState({
      items:[],
      total:0
  });

  const handleGetData = async () => {
    let url = "http://localhost:3000/menu";
    const getData = await fetch(url).then((result) => result.json());
    setMenu(getData);
  };

  const handleAddItem = (item) => {
    setOrder({...order, 
      items:[...order.items, item],
      total: order.total+= parseInt(item.price)}) 
    
  }

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <Fragment>
        <div className="container">
        <img src={Logo} class="Logo" alt="Logo"></img>
        <div className="row">
        <div className="col">
        <h2>Productos</h2>
      {menu && menu.map((product) => <Carts key={product.id} product={product} handleAddItem={handleAddItem}/>)}
      </div>
      <div className="col">
        <h2 id="Header">Pedido</h2>
        <OrderView order={order}/>
        <div>
        <h3>Total: {order.total}</h3>
        </div>
      </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Order;
