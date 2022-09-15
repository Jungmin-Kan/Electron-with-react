import React from 'react';
import '../css/App.css';

import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
      <div style={{flexDirection:'column', justifyContent: 'space-between', backgroundColor:'red'}}>
        <h2>Header</h2>
        <div style={{flexDirection:'row', justifyContent: 'space-between', backgroundColor:'blue'}}>
            <Link to="/">Go to Home</Link>
            <Link to="/About">Go to About</Link>
            <Link to="/Dashboard">Go to Dashboard</Link>
        </div>
      </div>
    );
  }

  /**
   * 라우팅 최신정보  v6
   * https://velog.io/@soryeongk/ReactRouterDomV6
   * @returns {Component}
   */
export default function App() {
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
