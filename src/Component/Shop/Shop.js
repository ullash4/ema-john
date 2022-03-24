import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = ({increaseCart}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json()) 
        .then(data=>setProducts(data))
    },[])
    

    return (
        <div>
               <div className="row g-2">
               {
                   products.map(product=> <Product product={product} key={product.id} increaseCart={increaseCart} ></Product>)
               }
               </div>
        </div>
    );
};

export default Shop;