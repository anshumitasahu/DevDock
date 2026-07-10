import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home.jsx';
import Tools from './components/Tools.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tools" element={<Tools />} />
      </Routes>
    </>
  )
}

export default App
