import React, { useEffect, useLayoutEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';
import { toast,ToastContainer } from 'react-toastify';
import { removeFromCart } from './Actions';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        // fetch item from local storage 
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];

        setCartItem(storedCartItems);


    }, []);

    // calculate Total price 
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItem([...cartItem]);

        localStorage.setItem("cart", JSON.stringify(cartItem));
    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItem([...cartItem]);

            localStorage.setItem("cart", JSON.stringify(cartItem));
        }
    };

    const handleRemoveItem = (item) => {
        const updateCart = cartItem.filter((cartItem) => cartItem.id !== item.id);

        setCartItem(updateCart);

        updateLocalStorage(updateCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const cartSubtotal = cartItem.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    const orderTotal = cartSubtotal;

    const handleAddToCart =(item)=>{
        toast.error("Remove from Cart",{
          position :"bottom-right"
        })
        dispatch(addToCart(item));
      }

      useLayoutEffect(() => {
        window.scrollTo(0, 0)
      })


    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItem.map((item, i) => (
                                            <tr key={i}>
                                                <td className="product-item cat-product">
                                                    <div className="p-thumb">
                                                        <Link to={"/shop"} >
                                                            <img src={item.img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to={"/shop"}>{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>
                                                    {item.price} Rs
                                                </td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>

                                                    </div>
                                                </td>

                                                <td className='cat-toprice'>
                                                    {calculateTotalPrice(item)} Rs
                                                </td>
                                                <td className='cat-edit' onClick={()=>{handleAddToCart(item)}}>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}><img src={delImgUrl} alt="" /></a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form className='coupon'>
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon code....' />
                                    <input type="submit" value={"Apply Coupon"} />
                                </form>

                                <form className='cart-checkout'>
                                    <input type="submit" value={"Update Cart"} />
                                    <div>
                                        <CheckOutPage />
                                    </div>
                                </form>
                            </div>

                            <div className="shiping-box">
                                <div className="row g-3">
                                    <div className="col-md-6 col-12">
                                        <div className='calculate-shiping'>
                                            <h3>Calculate Shiping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk">United Kingdom (UK)</option>
                                                    <option value="us">United State (USA)</option>
                                                    <option value="bd">Bangladesh (BD)</option>
                                                    <option value="pak">Pakistan (PAK)</option>
                                                    <option value="ind">India (IND)</option>
                                                    <option value="np">Nepal (NP)</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="uk">New York</option>
                                                    <option value="us">London</option>
                                                    <option value="bd">Dhaka</option>
                                                    <option value="pak">Korachi</option>
                                                    <option value="ind">New Delhi</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' id='postalCode' placeholder='Postocode/ZIP *' className='cart-page-input-text' />
                                            <button type='submit'>Update Address</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">

                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>{cartSubtotal} Rs</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right text-success'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>{orderTotal.toFixed(2)} Rs</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CartPage;