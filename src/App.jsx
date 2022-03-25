import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Login from './components/Login'
import Register from './components/Register'
import Restaurants from './components/Restaurants'
import Display from './components/Display'
import Nav2 from './components/Nav2'
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Test from "./components/Test";
import CreateTrip from "./components/CreateTrip.jsx";
export default function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {

    
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/disp'>
          <Display />
          </Route>
          <Route path='/select-restaurant'>
          <Navbar />
            <Restaurants />
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
          <Route path='/create-trip'> 
          <Navbar />
            <CreateTrip />
          </Route>
          <Route path='/register'>
          <Nav2 />
              <Register />
          </Route>
          <Route path='/login'>
          <Nav2 />
    <Login />
          </Route>
          <Route path='/reviews'>
          <Navbar />
        <Testimonials />
          </Route>
          <Route path='/recommend'>
          <Navbar />
            <Recommend />
          </Route>
          <Route path='/'>
            <ScrollToTop />
                  <Navbar />
                  <Hero />
                  <Services />
                 
                  
                  <Footer />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}
