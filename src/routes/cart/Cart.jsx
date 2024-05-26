import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../redux/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart.cart);
  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="container">
      <div className="cart-product">
        {cartdata.map((product) => (
          <div className="cart-products-card" key={product.id}>
            <img
              src={product.api_featured_image}
              onError={(e) =>
                (e.target.src =
                  "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")
              }
              alt=""
              width={"290px"}
            />
            <div className="cart-products-card-content">
              <h3 className="cart-products-card-title">{product.name}</h3>

              <div className="cart-products-card-action-bar">
                <span className="cart-products-card-price">
                  {product.price_sign}
                  {product.price}
                </span>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
