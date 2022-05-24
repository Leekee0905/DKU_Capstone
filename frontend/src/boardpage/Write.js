import React,{useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap'

function Write(){

  const [post,setPost] = useState({
    id:0,
    title: "",
    content: "",
  });

  
  const [posts,setPosts]=useState([

  ]);

  function handleWrite(e){
    e.preventDefault();
    setPosts([...posts, {...post, id: post.id+1}]);
    setPost({...post, id: post.id+1});
  };

  function handleForm(e){
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <Container>
        <h3>글쓰기</h3>
        <Form onSubmit={handleWrite}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control type='text' placeholder='제목을 입력하세요' value={post.title} onChange={handleForm} name='title' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Control type='text'
          placeholder='내용을 입력하세요...'
          value={post.content}
          onChange={handleForm}
          name='content'/>
        </Form.Group>
        
        <span className='submit'>
        <Button variant="primary" type="submit">
          작성하기
        </Button>
        </span>
      </Form>
    </Container>
    </div>
  )
}
export default Write;