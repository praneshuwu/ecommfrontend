import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { publicRequest } from '../requestMethod';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { addProduct } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 90%;
  ${mobile({ height: '40vh', width: '100%' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line
  const [size, setSize] = useState('');
  // eslint-disable-next-line
  const [color, setColor] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const quantityHandler = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity(quantity - 1);
      }
    }
  };

  const addToCartHandler = () => {
    //Update Cart
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colour</FilterTitle>
              {product.color?.map((productColor) => {
                let color = productColor.toLowerCase();
                return (
                  <FilterColor
                    color={color}
                    key={color}
                    onClick={() => {
                      setColor(color);
                    }}
                  />
                );
              })}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(event) => setSize(event.target.value)}>
                {product.size?.map((size) => {
                  return <FilterSizeOption key={size}>{size}</FilterSizeOption>;
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => quantityHandler('decrease')}
                style={{ cursor: 'pointer' }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => quantityHandler('increase')}
                style={{ cursor: 'pointer' }}
              />
            </AmountContainer>
            <Button onClick={addToCartHandler}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
