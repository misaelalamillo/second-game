import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/BackDrop/Backdrop'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Home from "./pages/home"
import Search from "./pages/search"
import SignUp from "./pages/signUp"
import User from "./pages/user"

class App extends Component {
  state = {
    sideDrawerOpen: false 
  };

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  })
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
};

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop  click={this.backdropClickHandler} />
    }
    return (
      <Router>
      <div style={{height:'100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <p>this is the page content</p>
        </main>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/search"}>
            <Search />
          </Route>
          <Route exact path={"/signup"}>
            <SignUp />
          </Route>
          <Route exact path={"/user/:id"}>
            <User />
          </Route>
          <Route exact path={"/forum/:id"}>
            <Forum />
          </Route>
        </Switch>
        </div>
        </Router>
  
    );
  }
}

export default App;
