import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
