import React from 'react';
import Banner from './pages/Banner/banner';
import Navbar from './pages/Navbar/navbar';
import TemplatePages from './pages/TemplatePages/Tmain.jsx';
import Banner2 from './pages/Banner2/banner2';
import Services from './pages/OurServices/services';
import Followme from './pages/Followme/follow';
import Newsletter from './pages/Newsletter/newsletter';
import Footer from './pages/Footer/footer';


function App() {
  return (
    <div className="App">

    <Navbar/>
    <Banner/>
    <TemplatePages/>
    <Banner2/>
    <Services/>
    <Followme/>
    <Newsletter/>
    <Footer/>
    </div>
  );
}

export default App;
