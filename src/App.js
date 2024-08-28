import React from 'react';
import ScoreElement from './components/ui/score';
import BidScoreItem from './components/ui/bidScore/bidScoreItem';
import BidScore from './components/ui/bidScore/bidScore';
import NavBar from './components/navBar/navBar';
import Arena from './components/arena';
import MainMenu from './components/levels/mainMenu';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import DashBoard from './components/levels/dashBoard';
import Options from './components/levels/options';

function GameDashBoard() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainMenu/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          {/* <Route path='/dashboard' element={<Options/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default GameDashBoard;