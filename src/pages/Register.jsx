import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { register } from '../store/apiCalls';

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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px auto;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;

const Register = () => {
  // const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [confirmPassword, setConfirmPassword] = useState();
  const [toast, setToast] = useState();
  const dispatch = useDispatch();
  // const registeredUsername = useSelector(state=>state?.user?.currentUser?.username)

  const inputChangeHandler = (event) => {
    setInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const createAccountHandler = (event) => {
    event.preventDefault();
    if (!inputs.firstName || !inputs.lastName) {
      setToast('Enter a valid First Name and Last Name');
    } else if (!inputs.email) {
      setToast('Enter a valid email');
    } else if (!inputs.username) {
      setToast('Username cannot be empty');
    } else if (!inputs.password) {
      setToast('Enter a valid password');
    } else if (inputs?.password === confirmPassword) {
      register(dispatch, inputs);
      // navigate('/',{state: 'Registration Successful'})
    } else {
      setToast('Passwords do not match!');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder='First Name'
            name='firstName'
            type='text'
            onChange={inputChangeHandler}
          />
          <Input
            placeholder='Last Name'
            name='lastName'
            type='text'
            onChange={inputChangeHandler}
          />
          <Input
            placeholder='Username'
            name='username'
            type='text'
            onChange={inputChangeHandler}
          />
          <Input
            placeholder='Email'
            name='email'
            type='email'
            onChange={inputChangeHandler}
          />
          <Input
            placeholder='Password'
            name='password'
            type='password'
            onChange={inputChangeHandler}
          />
          <Input
            placeholder='Confirm Password'
            type='password'
            onChange={confirmPasswordHandler}
          />

          <Agreement>
            By creating an account, I consent to the processing of my data in
            accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {toast && <div style={{ color: 'red',marginBottom:'1rem' }}>{toast}<br></br></div>}
          <Button onClick={createAccountHandler}>CREATE AN ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
