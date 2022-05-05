import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export function Header(){
  return(
    <header className="header">
      <nav className="header_navbar">
        <ul className="head_container">
          <li className="header_link">
            <Link className="page_link" to="/Info">정보/구인</Link>
          </li>
          <li className="header_link">
            <Link className="page_link" to="/Board">질문/이슈</Link>
          </li>
          <li className="header_link">
            <Link className="page_link" to="/Home">자유</Link>
          </li>
          <li className="header_link">
            <Link className="page_link" to="/Home">깃허브</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;