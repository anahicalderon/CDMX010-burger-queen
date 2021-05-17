import React from 'react'

const OrderView = (props) => {
    return (
        <div>
            {props.order.items.map((e) => {
                return (
                    <ul>
                <li className="btn btn-warning btn-sm m-0" >{e.name}</li>
                </ul>
                )
            })}
        </div>
    )
}

export default OrderView
