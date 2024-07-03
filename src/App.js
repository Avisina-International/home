import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import PageNotFound from './pages/404';
import Products from './pages/products';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>          
            <Route path="/products" element={<Products />}></Route>
            <Route path="/page-not-found" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
