import React from 'react';
import {Header} from '../layout/Header';
import {Form, Button, Container} from 'react-bootstrap';
import './Login.css'


function Login(){
  return (
  <div>
    <Header></Header>
    <Container>
      <h3 className='logintext'>로그인</h3>
    <Form className='form'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control className="tocenter" type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">

      <Form.Control className="tocenter" type="password" placeholder="Password" />
    </Form.Group>
    
    <span className='submit'>
    <Button className="loginbtn" variant="primary" type="submit">
      로그인
    </Button>
    </span>
  </Form>
  </Container>
  </div>
  )
};

export default Login;