import React, { useState, useEffect } from 'react';
import Write from './boardpage/Write'
import List from './boardpage/List'
import {Routes,Route,Link} from 'react-router-dom';
import BoardItem from './boardpage/BoardItem';
function Free(){
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/board/')
      .then((res) => res.json())
      .then((res) => {
        setBoards(res);
      }); // 비동기 함수
  }, []);
  return(
      <div>
        <h2>Free</h2>
        <List></List>
        <Link to = "/Write" >글쓰기</Link>
      </div>
  )
  /*return(
    <div>
      {boards.map((board)=>(
        <BoardItem key={board.id} board={board}/>
        ))}
    </div>
  )*/
}

export default Free;