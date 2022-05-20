import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from './layout/Header'

function Home() {
  return (
    <div>
      <Header></Header>
      <h1>home</h1>
      <Link to={'/'}><button>메인화면으로</button></Link>
      <Link to={'/Info'}><button>정보</button></Link>
      <Link to={'/Free'}><button>게시판</button></Link>
    </div>
  );
}

export default Home;