import {
  EmailTwoTone,
  Facebook,
  Instagram,
  LocalPhoneTwoTone,
  Pinterest,
  RoomTwoTone,
  Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({flexDirection:'column'})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor:pointer;

  &:hover{
    opacity: 0.8;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:'none'})}

`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor:pointer;

  &:hover{
    text-decoration:underline;
    color: #696969;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:'#eee'})}

`;
const ContactItem = styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;
`;

// const Payment = styled.img`

// `

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PRIME.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ea
          quis nostrum, incidunt eum suscipit, pariatur est accusamus magni,
          ipsum dolor. Alias sequi reiciendis aspernatur maiores dolorem aut
          deleniti totam.
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomTwoTone style={{marginRight:'10px'}}/>
          622 Wallaby Way Sydney
        </ContactItem>
        <ContactItem>
          <LocalPhoneTwoTone style={{marginRight:'10px'}}/>
          +91-9876543210
        </ContactItem>
        <ContactItem>
          <EmailTwoTone style={{marginRight:'10px'}}/>
          contact@prime.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
