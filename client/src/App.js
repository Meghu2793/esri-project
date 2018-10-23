import React from 'react';
import logo from './logo.svg';
import './App.css';
import EsriLoaderReact from 'esri-loader-react';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Readme from './components/Readme/Readme';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {

    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop backClick={this.backDropClickHandler} />;
    }
    return (
      <div className="App" style={{ height: '100%' }}>
        <BrowserRouter>
          <div>
            <Navbar drawerClickHandle={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />;
            {backDrop}
            <Switch>
              <Route path="/StoryPage" component = {HomePage} exact/>
              <Route path="/Readme" component = {Readme} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
