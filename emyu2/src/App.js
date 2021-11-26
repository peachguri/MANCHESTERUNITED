import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom"
import { CgUser } from "react-icons/cg"
import { MdOutlinePlace } from "react-icons/md"
import { CgInfo } from "react-icons/cg"
import { BiFootball } from "react-icons/bi"
import { HiOutlineUserCircle } from "react-icons/hi"
import logoemyu from './logoemyu.svg'
import './App.css';
import Player from "./pages/Player.js"
import Profile from "./pages/Profile.js"
import Sponsor from "./pages/Sponsor.js"
import Info from "./pages/Info.js"
import PlayerDetail from "./pages/Detail.js"
import DetailSponsor from "./pages/DetailSponsor"
import Navbar from "./Component/NavBar"


function App() {
  return (
    <div className="app">
    <BrowserRouter>

      <header>
      <Navbar>
      <div className='pic'>
          <img src="./logoemyu.svg" alt=''></img>
        </div>
      </Navbar>
        <NavLink to="/Player" className="iconWrapper">
          <CgUser className="icon"/>
          Player
        </NavLink>
        <NavLink to="/Profile" className="iconWrapper">
          <HiOutlineUserCircle className="icon"/>
          Profile
        </NavLink>
        <NavLink to="/Sponsor" className="iconWrapper">
          <MdOutlinePlace className="icon"/>
          Sponsor
        </NavLink>
        <NavLink to="/Info" className="iconWrapper">
          <CgInfo className="icon"/>
          Info
        </NavLink>
      </header>
        <p>WELCOME TO EMYU</p>
        <p>GLORY GLORY MAN UNITED</p>
      
      <Routes>
        <Route path="/Player" element={<Player />}></Route>
        <Route path="/Player/detail" element={<PlayerDetail />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Sponsor" element={<Sponsor />}></Route>
        <Route path="/Sponsor/DetailSponsor" element={<DetailSponsor />}></Route>
        <Route path="/Info" element={<Info />}></Route>
      </Routes>
      <footer>
        <NavLink to="/Player" className="iconWrapper">
          <CgUser className="icon"/>
          Player
        </NavLink>
        <NavLink to="/Profile" className="iconWrapper">
          <HiOutlineUserCircle className="icon"/>
          Profile
        </NavLink>
        <NavLink to="/Sponsor" className="iconWrapper">
          <MdOutlinePlace className="icon"/>
          Sponsor
        </NavLink>
        <NavLink to="/Info" className="iconWrapper">
          <CgInfo className="icon"/>
          Info
        </NavLink>
      </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
