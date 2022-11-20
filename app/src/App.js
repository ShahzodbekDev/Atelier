import React from 'react';
import Banner from './pages/Banner/banner';
import Navbar from './pages/Navbar/navbar';
import TemplatePages from './pages/TemplatePages/Tmain.jsx';
import Banner2 from './pages/Banner2/banner2';
import Services from './pages/OurServices/services';


function App() {
  return (
    <div className="App">

    <Navbar/>
    <Banner/>
    <TemplatePages/>
    <Banner2/>
    <Services/>
    </div>
  );
}

export default App;
