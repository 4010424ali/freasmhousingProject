import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import Gellery from './components/Gellery';
import About from './components/About';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import UploadImage from './admin/UploadPhoto';
import UploadDocuments from './admin/UploadDocuments';
import Download from './components/Download';
import Contact from './components/Contact';
import Register from './admin/Register';

import reportWebVitals from './reportWebVitals';
import UserInfo from './components/UserInfo';

const token = localStorage.token;
let authenticated = false;

if (token) {
  const decodedToken = jwtDecode(token);

  //  Check tokoen is expire
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
    authenticated = false;
    console.log('Not Working');
  } else {
    axios.defaults.headers.common['Authorization'] = token;
    authenticated = true;
    console.log('Working from home');
  }
}

ReactDOM.render(
  <>
    <MessengerCustomerChat pageId="213594250543184" appId="385456932042021" />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/gellery" component={Gellery} />
        <Route exact path="/about" component={About} />
        <Route exact path="/downloadPDF" component={Download} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/dashboard"
          component={authenticated ? Dashboard : Login}
        />
        <Route
          exact
          path="/uploadphoto"
          component={authenticated ? UploadImage : Login}
        />
        <Route
          exact
          path="/uploadpdf"
          component={authenticated ? UploadDocuments : Login}
        />
        <Route
          exact
          path="/userInfo"
          component={authenticated ? UserInfo : Login}
        />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

reportWebVitals();
