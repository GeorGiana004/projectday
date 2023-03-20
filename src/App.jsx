import './stile/App.scss';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './componenst/Navbar';
import Home from './pagest/Home';
import Contatti from './pagest/Contatti';
import Footer from './componenst/Footer'
import Blog from './pagest/Blog';


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contatti' element={<Contatti />} />
          <Route exact path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
