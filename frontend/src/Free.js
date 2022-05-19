import React from 'react';
import {Header} from './layout/Header';
import {List} from './boardpage/List';

function Free(){
  return(
      <div>
        <Header></Header>
        <List></List>
        <h2>Free</h2>
      </div>
  )
}

export default Free;