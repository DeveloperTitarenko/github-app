import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Alert from "./components/Alert";
import React from "react";
import {Profile} from "./pages/Profile";


function App() {
  return (
      <>
        <Navbar/>
        <div className="container pt-4">
            <Alert text={'hello this is my alert'}/>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about'  component={About}/>
              <Route path="/profile/:name" component={Profile}/>
          </Switch>
        </div>
      </>

  );
}

export default App;
