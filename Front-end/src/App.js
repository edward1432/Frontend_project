import logo from './logo.svg';
import './App.css';
import Museums from './components/Museums/Museums';
import { useState } from "react";
import HomePage from './components/HomePage/HomePage';


function App() {

  const [page, setPage] = useState("")

  return (
    <>
      <HomePage />

    </>
  )
}

export default App;
