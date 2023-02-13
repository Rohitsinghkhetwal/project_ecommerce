import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './Components/DetailPage';
import HomePage from './Components/HomePage';
import JourneyPage from './Components/JourneyPage';
import TeamPage from './Components/TeamPage';
import './index.css';
import Nav from './Navbar/Nav';
function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/journey" element={<JourneyPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/home/:id" element={<DetailPage/>}/>
      </Routes>
      
   
    </Router>
    
    
    </>
      
     
        
        
     
    
  );
}

export default App;
