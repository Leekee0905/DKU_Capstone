import React from 'react';
import {Header} from './layout/Header';
import {List} from './boardpage/List';
import {Write} from './boardpage/Write'

import {Routes,Route,Link} from 'react-router-dom';
function Free(){
  return(
      <div>
        <Header></Header>
        <List></List>
        <h2>Free</h2>
        <Link to = "/Free/Write" >글쓰기</Link>
        <Routes>
          <Route path='/List' element={<List />}></Route>
          <Route path='/Write' element={<Write />}></Route>
        </Routes>
      </div>
  )
}

export default Free;