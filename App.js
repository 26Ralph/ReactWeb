import logo from './logo.svg';
import './App.css';
import Creed from './creed';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TXT Seals</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
    rel="stylesheet"
  />
  {/*Navbar Section*/}
  <nav className="navbar">
    <div className="navbar__container">
      <a href="/index.html" id="navbar__logo">
        <i className="fa-solid fa-circle-user" /> Ralph
      </a>
      <div className="navbar__toggle" id="mobile-menu">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
      <ul className="navbar__menu">
        {/* <li className="navbar__item">
          <a href="pages/creed.html" className="navbar__links">
            Creed
          </a>
        </li> */}
        <Routes> 
          <Route path="/creed" component={Creed}/>
        </Routes>
        <li className="navbar__item">
          <a href="pages/socials.html" className="navbar__links">
            Socials
          </a>
        </li>
        <li className="navbar__item">
          <a href="pages/projects.html" className="navbar__links">
            Projects
          </a>
        </li>
        <li className="navbar__btn">
          <a href="pages/contactme.html" className="button">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/*Hero Section*/}
  <div className="main">
    <div className="main__container">
      <div className="main__content">
        <h1>Fall 2022</h1>
        <h2>TXT SEALS</h2>
        <p>By Ralph Lopez</p>
        <button className="main__btn">
          <a href="pages/projects.html">Recent Projects</a>
        </button>
      </div>
      <div className="main_img--container">
        <img src="images/thecloud.svg" alt="pic" id="main__img" />
      </div>
    </div>
  </div>
</>

  );
}

export default App;
