// Main
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// CSS
import './Cart.css';
// Components
import { Navbar } from "../../components/Navbar/Navbar";
// Cart
import { CartContext } from "./context";
import { removeFromCart } from "./actions";

export function Cart() {
    const { state, dispatch } = useContext(CartContext);
    function handleProductRemove(productId) {
        const actionResult = removeFromCart(productId);
        dispatch(actionResult);
    };
    return (
        <>
            <Navbar />
            <div className="title">Cart</div>
            <div className="cart">
                { state.products.length === 0 ? (
                    <>
                        <p className="no-products">No products added</p>
                    </>
                ) : (
                    state.products.map((product) => {
                        const totalProductPrice = product.productPrice * product.quantity;
                        return (
                            <>
                                <div key={product.productId} className="product-cart">
                                    <img src={product.productImage} alt="" />
                                    <div className="information">
                                        <p className="name">{product.productName}</p>
                                        <select>
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                            <option>XXL</option>
                                        </select>
                                        <p className="price">Price | ${totalProductPrice}</p>
                                        <p className="quantity">Quantity | {product.quantity}</p>
                                    </div>
                                    <button onClick={() => {handleProductRemove(product.productId)}}>
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </>
                        )
                    })
                )}
                <div className="options-cart">
                    <Link to='/merch' className="go-back">
                        <p>Back To Merch</p>
                    </Link>
                </div>
            </div>
        </>
    );
};