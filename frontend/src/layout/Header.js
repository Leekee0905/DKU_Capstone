import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDragon} from '@fortawesome/free-solid-svg-icons';

export function Header(){

  return(
    <header className="header">
      <nav className="header_navbar">
        <Link to="/Home"><FontAwesomeIcon icon={faDragon} size="3x"/></Link>
      <i class="fa-thin fa-teddy-bear"></i>
        <ul className="head_container">
          <li className="header_link">
            <Link className="page_link" to="/Info">정보/구인</Link>
          </li>
          <li className="header_link">
            <Link className="page_link" to="/Issue">질문/이슈</Link>
          </li>
          <li className="header_link">
            <Link className="page_link" to="/Free">자유</Link>
          </li>
          <li id = 'gitdrop' className="header_link">
            <Link className="page_link" to="/Git">깃허브</Link>
            <ul className='dropDownMenu'>
              <li><Link className='page_link' to='/Git'>툴 사용하기</Link></li>
              <li><a className='page_link' href='https://github.com/'>깃허브 바로가기</a></li>
            </ul>
          </li>
        </ul>

        <ul className='sign_in_up'>
          <li className='sign_box'>
            <Link className='signinup' to="/Login">로그인</Link>
          </li>
          <li className='sign_box'>
            <Link className='signinup' to='/Signup'>회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;