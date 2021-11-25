import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { publicRequest } from '../requestMethod';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          category
            ? `/products?category=${category}`
            : '/products'
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          );
        })
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
