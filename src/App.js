import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CulinaryClicks from './Components/Projects/CulinaryClicks';
import LocationTracker from './Components/Projects/LocationTracker';
import ZamioculcasZamiifolia from './Components/Projects/ZamioculcasZamiifolia';
import MemoryChef from './Components/Projects/MemoryChef';
import UXResearch from './Components/Projects/UXResearch';
import {Routes, Route} from 'react-router-dom';
import Footer from 'rjs-sticky-footer/Footer';
import FooterBody from './Components/Footer/FooterBody';

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
      name: "Zamioculcas Zamiifolia",
      id: "zamioculcaszamiifolia",
      url: "/zamioculcas-zamiifolia",
      image: "zamioculcaszamiifolia.jpg",
      category: "Creative",
      component: ZamioculcasZamiifolia,
      description: "3D Model of the Zamioculcas Zamiifolia plant."
    },
    {
      name: "UX Research",
      id: "uxresearch",
      url: "/ux-research",
      image: "uxresearch.jpg",
      category: "Interpretive",
      component: UXResearch,
      description: "Craigslist Redesign User Experience Research Project"
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
