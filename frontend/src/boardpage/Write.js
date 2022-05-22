import React from 'react';
import {Container, Form, Button} from 'react-bootstrap'

function Write(){
  return (
    <div>
      <Container>
        <h3>글쓰기</h3>
        <Form className='form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="tocenter" type="title" placeholder="제목을 입력하세요." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control className="tocenter" type="content" placeholder="내용을 입력하세요." />
        </Form.Group>
        
        <span className='submit'>
        <Button className="loginbtn" variant="primary" type="submit">
          작성하기
        </Button>
        </span>
      </Form>
    </Container>
    </div>
  )
}

export default Write;