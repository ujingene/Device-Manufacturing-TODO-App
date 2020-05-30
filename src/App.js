import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import DeviceList from './components/cdevices';
import AddDevice from './components/addDevice';
import EditDevice from './components/editDevice';
import ShowDevice from './components/showDevice';
import Footer from './components/Footer';
import addManufacturer from './components/addManufacturer';

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={DeviceList} />
          <Route exact path='/AddDevice' component={AddDevice} />
          <Route exact path='/editDevice/:serial' component={EditDevice} />
          <Route exact path='/showDevice/:serial'  component={ShowDevice} />
          <Route exact path='/addManufacturer' component={addManufacturer} />
          <Route render={() => <h1 className="notfound">Not found!</h1>} />
        </Switch>
      </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
