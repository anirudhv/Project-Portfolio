import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CulinaryClicks from './Components/Projects/CulinaryClicks';
import LocationTracker from './Components/Projects/LocationTracker';
import ZamioculcasZamiifolia from './Components/Projects/ZamioculcasZamiifolia';
import MemoryChef from './Components/Projects/MemoryChef';
import UXResearch from './Components/Projects/UXResearch';
import tornadosimulationvisualization from './Components/Projects/TornadoSimulation';
import {Routes, Route} from 'react-router-dom';
import Footer from 'rjs-sticky-footer/Footer';
import FooterBody from './Components/Footer/FooterBody';
//Purdue
const App = () => {
  const projectList = [{
      name: "Culinary Clicks",
      id: "culinaryclicks",
      url: "/culinary-clicks",
      image: "culinaryclicks.jpg",
      category: "Technical",
      component: CulinaryClicks,
      description: "Food Photo Gallery Full-Stack Website."
    },
    {
      name: "Location Tracker",
      id: "locationtracker",
      url: "/location-tracker",
      image: "locationtracker.jpg",
      category: "Technical",
      component: LocationTracker,
      description: "Android App that tracks the user's location as they move and shows markings of all tracked locations on a map."
    },
    {
      name: "Memory Chef",
      id: "memorychef",
      url: "memory-chef",
      image: "memorychef.jpg",
      category: "Technical",
      component: MemoryChef,
      description: "Desktop Game that has players memorize a pizza order under a timer and then create that pizza from scratch."
    },
    {
      name: "Realistic Tornado Simulation Visualization",
      id: "tornadosimulationvisualization",
      url: "/tornado-simulation-visualization",
      image: "tornadosimulation.jpg",
      category: "Creative",
      component: TornadoSimulation,
      description: "Realistic Tornado Simulation Animation."
    }];

  return (
    <div className="App">
      <Header />
      <br />
      <Routes>
        <Route exact path = "/" element = {<Home proj = {projectList} />} />
        {projectList.map(project => {
          const RenderThis = project.component;
          return (
          <Route exact path = {project.url} key = {project.id} element = {<RenderThis name = {project.name} category = {project.category} />} />
          )})}
      </Routes>
      <Footer
  background={'black'}
  opacity={1}
  footerBody={<FooterBody/>}
  isSticky={true}
/>
    </div>
  );
}


export default App;
