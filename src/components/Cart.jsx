import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDownList from "./DropDownList";
import { clearCartItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  //   console.log(cartItem.map((ele) => console.log(ele.card.info.id)));
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearCartItem());
  };
  return (
    <>
      <h1 className=" container font-paraFont text-center text-white mt-24 m-auto ">
        Cart
      </h1>
      <div className="flex justify-center">
        <button
          className="font-paraFont text-center text-black border-primary bg-white m-5 p-2 rounded-sm"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="container  flex justify-center align-center p-5 ">
        <div className="w-3/4">
          <DropDownList
            togglelistItem={cartItem}
            visible={true}
            cart={true}
          ></DropDownList>
        </div>
      </div>
    </>
  );
};

export default Cart;
