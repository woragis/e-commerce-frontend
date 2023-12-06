import React from "react";
import { CartItem } from "../../components/Item";

const Cart = () => {
  return (
    <div>
      <CartItem key={1} name='ps5' price={5000} old_price={3000} />
      <CartItem key={2} name='ps5' price={5000} old_price={3000} />
      <CartItem key={3} name='ps5' price={5000} old_price={3000} />
      <CartItem key={4} name='ps5' price={5000} old_price={3000} />
    </div>
  );
};

export default Cart;
