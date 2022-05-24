import React from 'react';
import {List} from './boardpage/List';
import Write from './boardpage/Write'
import {Routes,Route,Link} from 'react-router-dom';


function Issue(){
  return(
      <div>
        <h2>Issue</h2>
        <List></List>
        <Link to = "/Write" >글쓰기</Link>
      </div>
  )
}
export default Issue;