import { Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AboutusPage from './pages/about/aboutusPage';
import HomePage from './pages/home/homePage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutusPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
