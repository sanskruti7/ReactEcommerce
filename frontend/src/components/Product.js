import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from 'react';
// import Rating from './Rating';
// import { Link } from 'react-router-dom';
// export default function Product(props) {
//   const { product } = props;
//   return (
//     <div className="products">
//     <li>
//     <div key={product._id}className="product">
//     <Link to={`/product/${product._id}`}>
//               <img className="product-image" src={product.image} alt={product.name} />
//               </Link>
//               <div className="product-name">
//               <Link to={`/product/${product._id}`}>{product.name}</Link>
//               </div>
//               <div className="product-brand">{product.brand}</div>
//               <div className="product-rating">
//                 <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
//               </div>
//               <div className="product-price">Rs.{product.price}</div>
//             </div>
//             </li>
            
//       </div>
    
//   );
// }