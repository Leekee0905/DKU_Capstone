import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import './Signup.css';

function Signup(){
  return (
  <div>
    <Container>
    <h3 className='signuptext'>회원가입</h3>
    <Form className='form'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>이메일</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>비밀번호 재확인</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>닉네임</Form.Label>
      <Form.Control type="nickname" placeholder="닉네임" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>학교 이메일</Form.Label>
      <Form.Control type="schoolemail" placeholder="학교 이메일" />
    </Form.Group>
    <span className='submit'>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </span>
  </Form>
  </Container>
    
  </div>
  )
};

export default Signup;