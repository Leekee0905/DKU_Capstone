import React from 'react';
import {List} from './boardpage/List';
import Write from './boardpage/Write'
import {Routes,Route,Link} from 'react-router-dom';
import Item from './boardpage/post';

function Board(){
  return(
      <div>
        <List></List>
        <h2>Board</h2>
        <Item></Item>
        <Link to = "/Free/Write" >글쓰기</Link>
        <Routes>
          <Route path="/Write" element={<Write/>}></Route>
        </Routes>
      </div>
  )
}
export default Board;