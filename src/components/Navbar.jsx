import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from '../responsive'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({height: '50px'})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: '10px 0px'})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({flex: '0'})}

`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: 'none'})}

`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  padding: 3px;
  ${mobile({display: 'none'})}

`;
const Input = styled.input`
  border: none;

`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({fontSize: '24px'})}

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex:2, justifyContent: 'center'})}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: '12px', marginLeft:'10px'})}

`;


const Navbar = () => {
  
  const quantity = useSelector(state=>state.cart.cartQuantity)

  

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{color:'gray',fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>PRIME.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <Link to='/login' className='link'> 
          <MenuItem>LOG IN</MenuItem>
          </Link>
          <Link to='/cart' className='link'>
          <MenuItem>
            <Badge badgeContent={quantity} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;