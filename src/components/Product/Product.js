import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Redux/reducers/cartslice";
import { Link } from "react-router-dom";
const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);

  return (
    <>
      <div>
        {product.map((shoe) => {
          return (
            <div key={shoe.id}>
              <Link to={`/product/${shoe.id}`}>
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={150} alt="shoe" />
                <br />
              </Link>

              <h1>{shoe.quantity}</h1>

              <button
                onClick={() => dispatch(add(shoe))}
                style={{ marginTop: "20px" }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Product;
