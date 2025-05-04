import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('https://admin.refabry.com/api/all/product/get')
      .then(res => {
        const found = res.data.data.data.find(p => p.id === parseInt(productId));
        setProduct(found);
        setLoading(false); // ✅ Move this inside the .then
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false); // ✅ Also stop loading if there's an error
      });
  }, [productId]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (!product) return <div className="text-center p-8 text-red-600">Product not found</div>;

  const imgUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <div className="max-w-4xl mx-auto p-4 mt-24">
      <img src={imgUrl} alt={product.name} className="w-full h-80 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2 whitespace-pre-wrap">{product.short_desc}</p>
      <p className="text-xl font-semibold mt-4 text-blue-600">৳ {product.price}</p>
      
      {/* Optional: Back to products button */}
      <Link to="/products" className="inline-block mt-6 text-blue-600 hover:underline">← Back to Products</Link>
    </div>
  )
}

export default Product
