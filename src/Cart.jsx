import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { addOrder, ClearCart, decCart, incCart, removeCart } from './store';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import emailjs from 'emailjs-com';


function Cart() {
  const cartObjects = useSelector(globalState => globalState.cart);
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const [customerEmail, setCustomerEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponName, setCouponName] = useState('');
  const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
  const couponCodeRef = useRef();
  const dispatch = useDispatch();

  const handlingCouponPer = () => {
    const couponCode = couponCodeRef.current.value.trim().toUpperCase();
    setCouponName(couponCode);

    switch (couponCode) {
      case 'DASARA10':
        setCouponCodeDiscountPer(10);
        break;
      case 'DASARA20':
        setCouponCodeDiscountPer(20);
        break;
      case 'DASARA30':
        setCouponCodeDiscountPer(30);
        break;
      default:
        alert('Invalid Coupon Code');
        setCouponCodeDiscountPer(0);
        setCouponName('');
    }
  };

  const countingAmount = () => {
    const totalPrice = cartObjects.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discount = (totalPrice * discountPercentage) / 100;
    const couponDiscount = (totalPrice * couponCodeDiscountPer) / 100;
    const priceAfterDiscount = totalPrice - discount;
    const taxPrice = (priceAfterDiscount * 5) / 100;
    const finalPrice = priceAfterDiscount + taxPrice - couponDiscount;
    return { totalPrice, discount, taxPrice, finalPrice, couponDiscount };
  };

  const { totalPrice, discount, taxPrice, finalPrice, couponDiscount } = countingAmount();

  const cartListItems = cartObjects.map((item, index) => (
    <li key={index} className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-details">
        <p><strong>{item.name}</strong></p>
        <p>Price: ₹{item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="cart-buttons">
        <button onClick={() => dispatch(incCart(item))}>+</button>
        <button onClick={() => dispatch(decCart(item))}>-</button>
        <button onClick={() => dispatch(removeCart(item))}>Remove</button>
      </div>
    </li>
  ));

  const handleCompletePurchase = () => {
    const orderId = Math.floor(100000 + Math.random() * 900000); // Random order ID

    const templateParams = {
      order_id: orderId,
      orders: cartObjects.map(item => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity
      })),
      cost: {
        shipping: 50,
        discount:discount.toFixed(2),
       couponDiscount: couponDiscount.toFixed(2),
        tax: taxPrice.toFixed(2),
        total: finalPrice.toFixed(2)
      },
      email: customerEmail
    };

    emailjs.send('service_ypvox2l', 'template_kgo5x4t', templateParams, 'JGAFC1B9XJKXxFSd5')
      .then(() => {
        alert("✅ Order confirmation email sent successfully!");
      })
      .catch((error) => {
        alert("❌ Email sending failed: " + (error.text || error.message));
      });
  };

  const handlingCart = () => {
    handleCompletePurchase();

    const productDate = new Date().toLocaleDateString();
    const purchaseDetails = {
      date: productDate,
      items: [...cartObjects],
      finalPrice: finalPrice
    };

    dispatch(ClearCart());
    dispatch(addOrder(purchaseDetails));
    setShowThankYou(true);

    setTimeout(() => {
      navigate("/Orders");
    }, 2000);
  };

  return (
    <div className="cart-container">
      <h1 style={{ margin: '0px' }}>Cart Items</h1>

      {showThankYou && (
        <h2 style={{ color: 'green' }}>Thank you for your purchase! Redirecting to Orders...</h2>
      )}

      {cartObjects.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          <h2>🛒 Your cart is empty.</h2>
          <img style={{ textAlign: 'center', height: '500px' }} src='public/Images/cartempty.avif' alt="Empty Cart" />
        </p>
      ) : (
        <>
          <ol className="cart-list">{cartListItems}</ol>

          <div className="cart-summary">
            <h1 style={{ color: 'black' }}>Order Summary</h1>
            <h2>💰Your Total Price is : ₹{totalPrice.toFixed(2)}</h2>
            <button onClick={() => setDiscountPercentage(10)}>Apply 10% Discount</button>
            <button onClick={() => setDiscountPercentage(20)}>Apply 20% Discount</button>
            <button onClick={() => setDiscountPercentage(30)}>Apply 30% Discount</button>
            <h2>💸Your Discount Price is : ₹{discount.toFixed(2)}</h2>

            <div className="coupon-section">
              <input type="text" ref={couponCodeRef} placeholder="Enter Coupon Code" />
              <button onClick={handlingCouponPer}>Add Coupon Code</button>
            </div>

            <p>Coupon <strong>{couponName}</strong> applied : {couponCodeDiscountPer}% off</p>
            <h2>🎟️Your Coupon Discount for {couponName} : ₹{couponDiscount.toFixed(2)}</h2>
            <h2>💼Your Tax Price is : ₹{taxPrice.toFixed(2)}</h2>
            <h2>💵Your Final Price is : ₹{finalPrice.toFixed(2)}</h2>

            <h2>Select payment method:</h2>
            <button onClick={() => setPaymentMethod('qr')}>QR Code</button>
            <button onClick={() => setPaymentMethod('card')}>Card</button>

           <div className="mb-4">
  <label htmlFor="customerEmail" className="form-label fw-semibold">
    Enter your Gmail to receive order confirmation :  
  </label>
  <div>
  <input
    type="email"
    id="customerEmail"
    ref={emailRef}
    onChange={(e) => setCustomerEmail(e.target.value)}
    placeholder="you@example.com"
    className="form-control"
    required
  />
  </div>
  <div className="form-text">We'll never share your email with anyone else.</div>
</div>

            {paymentMethod === 'qr' && (
              <>
                <h4>Scan UPI QR to pay ₹{finalPrice}</h4>
                <QRCode value={`upi://pay?pa=rmaniteja123@ybl&pn=Manistore&am=${finalPrice}&cu=INR`} />
                <p>UPI ID: rmaniteja123@ybl</p>
                <button className="btn btn-success mt-2" onClick={handlingCart}>Complete Purchase</button>
              </>
            )}

            {paymentMethod === 'card' && (
              <div className="card-form mt-3">
                <h4>Enter Card Details to pay ₹{finalPrice.toFixed(2)}</h4>
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Payment successful via Card!");
                    handlingCart();
                  }}
                >
                  <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input type="text" className="form-control" required placeholder="1234 5678 9012 3456" maxLength="19" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Card Holder Name</label>
                    <input type="text" className="form-control" required placeholder="Your Name" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Expiry</label>
                      <input type="text" className="form-control" required placeholder="MM/YY" maxLength="5" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">CVV</label>
                      <input type="password" className="form-control" required placeholder="123" maxLength="3" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success w-100">Pay ₹{finalPrice.toFixed(2)}</button>
                </form>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
