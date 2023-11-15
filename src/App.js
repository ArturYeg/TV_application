import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
