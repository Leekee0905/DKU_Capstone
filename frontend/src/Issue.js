import React from 'react';
import {List} from './boardpage/List';
import Write from './boardpage/Write'
import {Routes,Route,Link} from 'react-router-dom';


function Issue(){
  return(
      <div>
        <h2>Issue</h2>
        <List></List>
        <Link to = "/Issue/Write" >글쓰기</Link>
        <Routes>
          <Route path="/Write" element={<Write/>}></Route>
        </Routes>
      </div>
  )
}
export default Issue;