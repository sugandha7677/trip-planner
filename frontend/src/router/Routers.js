import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "../pages/Home.js";
import Tour from '../pages/Tour';
import TripPlanner from '../pages/TripPlanner.js';
import HowItWorks from '../pages/HowItWorks.js';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import MasonryImagesGallery from '../images-gallery/MasonryImagesGallery.js';
import Gallery from '../images-gallery/Gallery.js';
import ThankYou from '../pages/ThankYou.js';
import Footer from '../components/Footer/Footer.js';
import About from '../pages/About.js';



function Routers()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/trip-planner' element={<TripPlanner />} />
        <Route path='/contact-us' element = {<Footer />} />
        <Route path='/tours' element={<Tour />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/gallery' element = {<Gallery />} />
        

      </Routes>
    </>
  );
}

export default Routers;