import React, {useState} from 'react';
import {Table, Form, Container, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './List.css';


export const List=()=>{
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

  function handleDelete(id){
    setPosts(posts.filter((post) => post.id !==id));
  }
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>

          {posts.map((post)=><th>{post.title}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
        </tr>
        <tr>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
        </tr>
        <tr>
          <td>8</td>
        </tr>
        <tr>
          <td>9</td>
        </tr>
        <tr>
          <td>10</td>
        </tr>
      </tbody>
      <Form className="writebutton">
        <input type="text" placeholder="제목을 입력하세요" value={post.title}/>
        <input className='content' type="text" placeholder="내용을 입력하세요" value={post.content}/>
        <button className="writebutton" type='button' onClick={handleWrite}>글쓰기</button>
      </Form>
    </Table>
    
  </div>
  )
}

  /*<div>
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
    <hr/>
    {posts.map((post) => <ListGroup><ListGroupItem>
      번호: {post.id} 제목: {post.title} 내용:{post.content}
      <Button onClick={()=>handleDelete(post.id)}>삭제</Button>
      </ListGroupItem></ListGroup>)}
    </Container>
  </div>
  )
  
}*/

export default List;