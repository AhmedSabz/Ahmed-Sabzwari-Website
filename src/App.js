// import './App.scss';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import Home from './containers/home';
// import React, { useEffect } from 'react';

// import About from './containers/about';
// import Resume from './containers/resume';
// import Skills from './containers/skills';
// import Portfolio from './containers/portfolio';
// import Contact from './containers/contact';
// import Navbar from './components/navBar';
// import particlesConfig from './utils.js/particles';

// function App() {
//   const location = useLocation();

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };
// const renderParticleJsInHomePage = location.pathname === "/";
//   return (
//     <div className="App">
//       {/* {
//         renderParticleJsInHomePage && (      <Particles id="tsparticles" options={particlesConfig} init={particlesInit} />
//       )
//       } */}
//       <Navbar />
//       <div className="App__main-page-content">
//       <Routes>
//         <Route index path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       </div>
  
//     </div>
//   );
// }

// export default App;
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import particlesConfig from './utils.js/particles';
import React, { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Ahmed Sabzwari";
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";
  
  return (
    <div className="App">
      {/* {
        renderParticleJsInHomePage && (      
          <Particles id="tsparticles" options={particlesConfig} init={particlesInit} />
        )
      } */}
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
