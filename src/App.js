import './App.css';
// import Header from '../src/components/Header';
import DashBoardPage from './pages/DashboardPage/DashboardPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PublicProfilePage from './pages/PublicProfilePage/PublicProfilePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardPage/>}/>
          <Route path="/" element={<ProfilePage/>}/>
          <Route path="/" element={<PublicProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
