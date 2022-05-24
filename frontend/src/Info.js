import React from 'react';
import {List} from './boardpage/List';
import Write from './boardpage/Write'
import {Routes,Route,Link} from 'react-router-dom';

function Info(){
  return(
    <div>
    <h2>Info</h2>
    <List></List>
    <Link to = "/Info/Write" >글쓰기</Link>
    <Routes>
      <Route path="/Write" element={<Write/>}></Route>
    </Routes>
  </div>
  )
}

export default Info;