import React from "react";
import { useDispatch } from "react-redux";
import "./Like.css";
import { MdOutlineHeartBroken } from "react-icons/md";
import { useSelector } from "react-redux";
import { removeLike } from "../../redux/likeSlice";
const Like = () => {
  const dispatch = useDispatch();
  const likedata = useSelector((state) => state.likes.likes);

  const removeFromLike = (product) => {
    dispatch(removeLike({ id: product.id }));
  };

  return (
    <div className="container">
      <div className="liked-product">
        {likedata.map((product) => (
          <div className="liked-products-card" key={product.id}>
            <img
              src={product.api_featured_image}
              onError={(e) =>
                (e.target.src =
                  "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")
              }
              alt=""
              width={"290px"}
              height={"290px"}
            />
            <div className="liked-products-card-content">
              <h3 className="liked-products-card-title">{product.name}</h3>

              <div className="liked-products-card-action-bar">
                <span className="liked-products-card-price">
                  {product.price_sign}
                  {product.price}
                </span>
                <button
                  className="liked-products-card-add-btn"
                  onClick={() => removeFromLike(product)}
                >
                  <MdOutlineHeartBroken />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
