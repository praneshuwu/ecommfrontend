import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { login } from '../store/apiCalls';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px auto;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-weight: 300;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector((state) => state.user);

  const loginHandler = async (event) => {
    event.preventDefault();

    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='Username or Email'
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            type='password'
            placeholder='Password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
          <Button onClick={loginHandler} disabled={isFetching}>
            LOGIN
          </Button>
          {isError && <Error>Something Went Wrong!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
