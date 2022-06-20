import logo from './logo.svg';
import './App.css';
import Museums from './components/Museums/Museums';
import { useState } from "react";


function App() {

  const [page, setPage] = useState("")

  return (
    <>
      {/* <div>
        { "" !== page && <button onClick={() => setPage('')}>Home</button>}
       {page}<br/> </div>
      {'museums' === page &&
      <Museums />
      }
      { "" === page && <div>

      <button onClick={() => setPage('museums')}>Museums</button><br></br>
      <button onClick={() => setPage('exhibitions')}>Exhibitions</button><br></br>
      <button onClick={() => setPage('artefacts')}>Artefacts</button><br></br>
      <button onClick={() => setPage('staff')}>Staff</button><br></br>
      </div> */}
}
    

    </>
  )
}

export default App;
