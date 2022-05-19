import React from 'react';
import {Header} from './layout/Header'
import {List} from './boardpage/List'

function Board(){

  return(
      <div>
        <Header></Header>
        <List></List>
        <h2>Board</h2>
        
      </div>
  )
}

export default Board;