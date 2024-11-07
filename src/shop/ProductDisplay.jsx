import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import { addToCart } from './Actions';
import 'react-toastify/dist/ReactToastify.css';

const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template."

const ProductDisplay = ({item}) => {

    const {name,id,price,seller,ratingsCount,quantity,img} = item;
    const [prequantity,setQuantity] = useState(quantity);

    const [coupon,setCoupon] = useState("");
    const [size,setSize] = useState("Select Size");
    const [color,setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleDecrease = ()=>{
        if(prequantity > 1){
            setQuantity(prequantity - 1)
        }
    }
    const handleIncrease = ()=>{
        setQuantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id : id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size:size,
            color : color,
            coupon: coupon,
        }

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }


        localStorage.setItem("cart", JSON.stringify(existingCart));

        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }

    const handleAddToCart =(item)=>{
        toast.success("Added To Cart",{
          position :"bottom-right"
        })
        dispatch(addToCart(item));
      }



  return (
   <>
   <div className="">
    <div className="">
        <h4 className="">{name}</h4>
        <p className="rating">
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingsCount} review</span>
        </p>
        <h4>{price} Rs</h4>
        <p>{desc}</p>
    </div>

    <div>
        <form onSubmit={handleSubmit}>
            <div className="select-product size">
                <select value={size} onChange={handleSizeChange}>
                    <option>Select Size</option>
                    <option value="SM">SM (5)</option>
                    <option value="MD">MD (6)</option>
                    <option value="LG">LG (7)</option>
                    <option value="XL">XL (8)</option>
                    <option value="XXL">XXL (9)</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>
            <div className="select-product color">
                <select value={color} onChange={handleColorChange}>
                    <option>Select Color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Gray">Gray</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>

            <div className="cart-plus-minus">
                <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                <input type="text" name='qtybutton' id='qtybutton' value={prequantity} className='cart-plus-minus-box'
                onChange={(e) => setQuantity(parseInt(e.target.value,10))}
                />
                <div className='inc qtybutton' onClick={handleIncrease}>+</div>
            </div>

            <div className="discount-code mb-2">
                <input type="text" name="" id="" placeholder='Enter Discount Code' 
                onChange={(e)=> setCoupon(e.target.value)}
                />
            </div>

                <button type='submit' className='lab-btn' onClick={()=>{handleAddToCart(item)}} > 
                    <span>Add to Cart</span>
                </button>

                <Link to={"/cart-page"} className='lab-btn bg-primary'> 
                    <span>Check Out</span>
                </Link>

        </form>
    </div>

    

   </div>

   <ToastContainer />
   </>
  )
}

export default ProductDisplay;