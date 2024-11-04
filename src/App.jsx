import { Routes, Route, Link } from 'react-router-dom';
import Red from "./componenets/Red.jsx";
import Blue from "./componenets/Blue.jsx";
import Home from "./componenets/Home.jsx"

const App = () => {

  return (
    <div id="container" className="home">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/red" element={<Red /> }/>
          <Route path="/blue" element={<Blue />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
