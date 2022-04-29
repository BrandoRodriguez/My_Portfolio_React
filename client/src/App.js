import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Nav from './Components/Nav.jsx'
import Footer from './Section/Footer.jsx';
import Projects from './Pages/Projects.jsx';


function App() {
  return (
    <>
      <div className="background-noise"></div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/project-pokemon">
          <Projects />
        </Route>
      </Switch>
      <Footer />
      {/* <div className='container-vertical-linea'>
        <span class="vertical-linea line1"></span>
        <span class="vertical-linea line2"></span>
        <span class="vertical-linea line3"></span>
        <span class="vertical-linea line4"></span>
        <span class="vertical-linea line5"></span>
      </div> */}
    </>

  );
}

export default App;
