import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
