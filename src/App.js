import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/starship-list" element={<StarshipList />} />
      </Routes>
    </div>
  )
}

export default App
