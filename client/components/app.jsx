import React from 'react';
import Home from './home';
import About from './about';
import Work from './work';
import ProductCopy from './work/product';
import SocialMedia from './work/socialmedia';
import Seo from './work/seo';
import PrintCopy from './work/print';
import Cv from './cv';
import Contact from './contact';
import Nav from './nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work/printcopy">
              <PrintCopy />
            </Route>
            <Route path="/work/productcopy">
              <ProductCopy />
            </Route>
            <Route path="/work/seo">
              <Seo />
            </Route>
            <Route path="/work/socialmedia">
              <SocialMedia />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/cv">
              <Cv />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
