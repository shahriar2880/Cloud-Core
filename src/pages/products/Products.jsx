import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../component/productcard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://admin.refabry.com/api/all/product/get')
      .then(res => {
        setProducts(res.data.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 mt-24">
      <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
