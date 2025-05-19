import { useSelector } from "react-redux";
import './Order.css';

function Orders() {
  const orderProduct = useSelector(globalState => globalState.orders);

  const orderListItems = orderProduct.map((order, index) => (
    <li key={index} className="order-card">
      <p className="order-date"><strong>Order Date:</strong> {order.date}</p>
      <ul className="order-items">
        {order.items.map((item, idx) => (
          <li key={idx}>
            <img src={item.image} alt={item.name} />
            {item.name} – ₹{item.price} × {item.quantity}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="orders-container">
  <h2 className="orders-heading">🛍️ Purchase History</h2>

  {orderProduct.length === 0 ? (
    <p className="empty-message">No purchase history available.</p>
  ) : (
    <div className="order-grid">
      {orderProduct.map((order, index) => (
        <div key={index} className="order-card">
          <div className="order-date">📅 {order.date}</div>
          <div className="order-items">
            {order.items.map((item, idx) => (
              <div key={idx} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  {item.name}<br />
                  ₹{item.price} × {item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
}

export default Orders;
