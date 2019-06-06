import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './css/style.css';
import Home from './js/home';
import Latest from './js/latest';


class App extends Component {
  constructor(props) {
    super(props);

    this.showMenu = this.showMenu.bind(this);
    var header = document.getElementsByClassName('header');
    var menuHeader = document.getElementsByClassName('menu__header');

  }

  showMenu() {
    var menuIconElement = document.querySelector('.header__icon');
    var menuElement = document.querySelector('.menu');
    var menuOverlayElement = document.querySelector('.menu__overlay');

    menuElement.style.transform = "translateX(0)";
    menuElement.classList.add('menu--show');
    menuOverlayElement.classList.add('menu__overlay--show');
  }

  hideMenu() {
    var menuIconElement = document.querySelector('.header__icon');
    var menuElement = document.querySelector('.menu');
    var menuOverlayElement = document.querySelector('.menu__overlay');

    menuElement.style.transform = "translateX(-110%)";
    menuElement.classList.remove('menu--show');
    menuOverlayElement.classList.remove('menu__overlay--show');

  }

  render() {

    return (
      <div className="App">
        <div className="app app__layout">
          <header>
            <div className="header__icon" onClick={this.showMenu}>
              <svg className="menu__icon no--select" width="24px" height="24px" viewBox="0 0 48 48" fill="#fff">
                <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"></path>
              </svg>
            </div>

            <div className="header__title no--select">PWA - Home</div>

          </header>

          <div className="menu">
            <div className="menu__header"></div>
            <ul className="menu__list">
              <li><Link to={'/'} onClick={this.hideMenu}>Home</Link></li>
              <li><Link to={'/latest'} onClick={this.hideMenu}>Latest</Link></li>
            </ul>
          </div>

          <div className="menu__overlay"></div>

          <div className="app__content">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/latest" component={Latest} />

            </Switch>



          </div>
        </div>
      </div>
    );
  }
}

export default App;
