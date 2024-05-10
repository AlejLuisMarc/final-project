// Main
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// CSS
import './Merch.css';
// Components
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Socials } from "../../components/Socials/Socials";
// Products
import { Products } from './Products';
// Cart
import { CartContext } from "../Cart/context";
import { addToCart } from "../Cart/actions";

export function Merch() {
    const { dispatch } = useContext(CartContext);
    function handleAddToCart(product) {
        const actionResult = addToCart(product);
        dispatch(actionResult);
    };
    return (
        <>
            <Navbar />
            <Link to='/cart' className="cart-icon"><span class="material-symbols-outlined">shopping_cart</span></Link>
            <div className="title">Merch</div>
            <div className="products">
                {Products.map((product) => (
                    <div key={product.id} className="product">
                        <p className="name">{product.name}</p>
                        <div className="image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <p className="price">${product.price}</p>
                        <button onClick={() => {
                            handleAddToCart({
                                productId: product.id,
                                productImage: product.image,
                                productName: product.name,
                                productPrice: product.price,
                            })
                        }}>Add To Cart</button>
                    </div>
                ))}
            </div>
            <Socials />
            <Footer />
        </>
    );
};