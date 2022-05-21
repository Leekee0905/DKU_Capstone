import React, {useState} from 'react';
import {Table} from 'react-bootstrap';

export function List(){
  const [posts,setPosts]=useState([
    {id:1, title:"내용1"},
    {id:2, title:"내용2"},
    {id:3, title:"내용3"},
    {id:4, title:"내용4"},
    {id:5, title:"내용5"},
    {id:6, title:"내용6"}
  ]);
  return (
  <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          {posts.map((post)=><th>{post.id}</th>)}
          {posts.map((post)=><th>{post.title}</th>)}
          <th>Username</th>
          <th>time</th>
          <th>views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>hi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
  )
  
}

export default List;