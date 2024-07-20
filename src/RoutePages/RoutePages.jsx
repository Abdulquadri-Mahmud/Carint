import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Footer from '../Components/Footer';
import ServicesPage from '../pages/ServicesPage';

export default function RoutePages() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/services' element={<ServicesPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
