import React, {useState} from 'react';
import {Table, Form} from 'react-bootstrap';
import './List.css';


export function List(){
  const [posts,setPosts]=useState([
    {id:1, title:"내용1"},
    {id:2, title:"내용2"},
    {id:3, title:"내용3"},
    {id:4, title:"내용4"},
    {id:5, title:"내용5"},
    {id:6, title:"내용6"}
  ]);

  const [post,setPost] = useState({
    id:'',
    title:'',
    content: ''
  });
  function handleWrite(){
    let post = {id:7, title:"인풋값"};
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
      </tbody>
      <Form>
        <input type="text" placeholder="제목을 입력하세요" value={post.title}/>
        <input className='content' type="text" placeholder="내용을 입력하세요" value={post.content}/>
        <button type='button' onClick={handleWrite}>글쓰기</button>
      </Form>
    </Table>
    
  </div>
  )
  
}

export default List;