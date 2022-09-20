import React, { useState, useEffect } from 'react';
import '../css/App.css';

import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Login(){
  return(
    <div>
      <h1>로그인 화면</h1>
    </div>
  )
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Header() {
  return (
    <div style={{ flexDirection: 'column'}}>
      <div style={{ flexDirection: 'row', justifyContent: 'space-between', flex:1 ,backgroundColor: 'red', padding:25 }}>
        <span style={{padding:10}}>
          <Link to="/" style={{textDecoration:'none',fontSize:25, color:'black', fontWeight:'bold'}}>홈</Link>
        </span>
        <span style={{padding:10}}>
        <Link to="/About" style={{textDecoration:'none', fontSize:25, color:'black', fontWeight:'bold'}}>주문접수</Link>
        </span>
        <span style={{padding:10}}>
        <Link to="/Dashboard" style={{textDecoration:'none', fontSize:25, color:'black', fontWeight:'bold'}}>Dashboard</Link>
        </span>
      </div>
    </div>
  );
}

/**
 * s
 * 라우팅 최신정보  v6
 * https://velog.io/@soryeongk/ReactRouterDomV6
 * @returns {Component}
 */
export default function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLogedin(true);
    },3000);
  },[])

  if(isLogedin) {
    return (
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/*" element={<About />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    )
  }
  return (
    <>
      <Login/>
    </>
  )
}
