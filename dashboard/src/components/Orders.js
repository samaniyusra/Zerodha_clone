import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const Orders = () => {
  let [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
  }, [])
  return (
    <div>
      {orders.length == 0 ? <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div> :
        <div className="order-table">
          <table className="table">
            <tr>
              <th> Name</th>
              <th> Qty</th>
              <th> price</th>
              <th> mode</th>
            </tr>
            {orders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td> {stock.name}</td>
                  <td> {stock.qty}</td>
                  <td>{stock.price}</td>
                  <td className= {stock.mode == "buy" ? "buy" : "Sell"}> {stock.mode}</td>
                </tr>
              )
            })}

          </table>
        </div>

      }
    </div>

  );
};

export default Orders;