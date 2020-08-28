import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    // const totlaPrice = cart.reduce((total, curs) => total + curs.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total+product.price;
        
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Ordered: {cart.length}</h3>
            <h4>Total Price: {total}</h4>
        </div>
    );
};

export default Cart;