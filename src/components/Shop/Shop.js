import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';



const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [Products, setProducts] = useState( first10)
    
    return (
        <div className="shop-container">
            
         <div className="prodact-container">
          
                {
                    Products.map(Pd => <Product Product={Pd}></Product>)
                }
       
         </div>
         <div className="cart-container">
             <h1>this is a cart</h1>
         </div>
        </div>
    );
};

export default Shop;