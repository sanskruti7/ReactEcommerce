import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : 
      (
      <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )
      } 
    </div>
  );
}
// import React, { useEffect, useState } from "react";
// import axois from 'axios'
// import data from '../data';
// import Product from '../components/Product'; 
// import { useDispatch, useSelector } from 'react-redux';
// import { listProducts } from '../actions/productActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

// export default function HomeScreen(){
//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;
//   const dispatch = useDispatch();
//   useEffect(()=>{
//     dispatch(listProducts());
  
//   },[]);
//     return(
        
//       <div>
//       {loading ? (
//         <LoadingBox></LoadingBox>
//       ) : error ? (
//         <MessageBox variant="danger">{error}</MessageBox>
//       ) : (
//         <div className="row center">
//           {products.map((product) => (
//             <Product key={product._id} product={product}></Product>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
  
