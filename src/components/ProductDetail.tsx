import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the expected product structure
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate getting product ID from route (use real ID later)
    const productId = 1;

    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging log
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError('Failed to load product details');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', maxWidth: '400px' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="100%" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> ⭐{product.rating.rate} ({product.rating.count} reviews)</p>

      <button onClick={() => alert('Added to cart!')}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
