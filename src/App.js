import './App.css';
import DashBoardPage from './Pages/DashboardPage/DashboardPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import PublicProfilePage from './Pages/PublicProfilePage/PublicProfilePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
