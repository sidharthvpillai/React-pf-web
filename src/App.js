import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Footer from "./Component/Footer";
import Home from './Component/Home';
import About from "./components/About/About";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/About" exact component={About}></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
/*import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About/About';
import Enquiry from './components/Enquiry/Enquiry';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

function App() {
  return (
    <>
     <Router>
      <Header/>
      <Route path="/" exact component={Home} /> 
      <Route path="/About" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/Projects" exact component={Projects} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Enquiry" component={Enquiry} /> 
     </Router>
    <Footer/> 
   </> 
  );
}

export default App;*/
