import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Smartphones from './components/Smartphones'
import SkinCare from './components/SkinCare'
import Laptops from './components/Laptops';
import Fragrances from './components/Fragrances';
import Groceries from './components/Groceries';
import Decoration from './components/Decoration';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ShowNavBar from './components/ShowNavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <ShowNavBar>
          <Navbar />
        </ShowNavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/laptops' element={<Laptops />} ></Route>
          <Route path='/smartphones' element={<Smartphones />} ></Route>
          <Route path='/fragrances' element={<Fragrances />} ></Route>
          <Route path='/skincare' element={<SkinCare />} ></Route>
          <Route path='/groceries' element={<Groceries />} ></Route>
          <Route path='/decoration' element={<Decoration />} ></Route>
          <Route path='/cart' element={<Cart />} ></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
