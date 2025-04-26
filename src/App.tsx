import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AchievementSection from './components/AchievementSection';
import Features from './components/Features';
import Customers from './components/Customers';
import ProductGallery from './components/ProductGallery';
import ContactForm from './components/ContactForm';
import Products from './components/Products';
import Contact_us from './components/Contact_us';

import History from './About_us/History';
import Vision from './About_us/Vision';
import Values from './About_us/Values';
import Certification from './About_us/Certification';

import Fuel_tanks from './Products_Services/Fuel_tanks';
import Battery_boxes from './Products_Services/Battery_boxes';
import Sheet_metal_parts from './Products_Services/Sheet_metal_parts';
import Deepdrawn_boxes from './Products_Services/Deepdrawn_boxes';

import Capabilities from './Manufacturing_location/Capabilities';
import Location from './Manufacturing_location/Location';
import Quality from './Manufacturing_location/Quality';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Routes>
          {/* Home route with all components */}
          <Route path="/" element={
            <>
              <Hero />
              <AchievementSection />
              <Features />
              <Customers />
              <ProductGallery />
              <ContactForm />
            </>
          } />
          
          {/* Other routes */}
          <Route path="/history" element={<History />} />
          <Route path="/vision" element={<Vision/>}/>
          <Route path="/values" element={<Values/>}/>
          <Route path="/certification" element={<Certification/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact_us/>}/>

          <Route path="/fuel_tanks" element={<Fuel_tanks/>}/>
          <Route path="/battery_boxes" element={<Battery_boxes/>}/>
          <Route path="/sheet_metal_parts" element={<Sheet_metal_parts/>}/>
          <Route path="/deepdrawn_boxes" element={<Deepdrawn_boxes/>}/>

          <Route path="/capabilities" element={<Capabilities/>}/>
          <Route path="/quality" element={<Quality/>}/>
          <Route path="/location" element={<Location/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;