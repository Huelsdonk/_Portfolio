import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css'
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
    <div>
    <body className="d-flex flex-column h-100">
    
    
    
      <Nav />
      <Switch>
        <Route exact path={["/", "/index"]}>
          <Index />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer/>
      </body>
    </div>
  </Router>
  );
}

export default App;
