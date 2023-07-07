import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

const UserInput = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
      const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`username: ${username}, password: ${password}`);
      };
  
  return (
    <LoginContainer>
    <LoginForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Full Name "
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        type="text"
        placeholder="profile"
        value={password}
        onChange={handlePasswordChange}
      />
          <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        />
        <Input type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
     
      <Button type="submit">Login</Button>
    </LoginForm>
  </LoginContainer>
  )
}

export default UserInput




const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:20px;
  height:20px;
  
  @media (max-width: 760px) {
    position: relative;
    
  }
 
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  position: absolute;


 // width:20%; 
 word-wrap:break-word;
 @media (max-width:768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  position: absolute;

  top:90px;
  
 }

 

`

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-size:12px;
  width:20px;
  height:20px;
 

`

const Button = styled.button`
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
