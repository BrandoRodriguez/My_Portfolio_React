import Home from './Pages/Home.jsx';
import Nav from './Components/Nav.jsx'
import Footer from './Section/Footer.jsx';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <>
      <div className="background-noise"></div>
      <div className='container-vertical-linea'>
        <span class="vertical-linea line1"></span>
        <span class="vertical-linea line2"></span>
        <span class="vertical-linea line3"></span>
        <span class="vertical-linea line4"></span>
        <span class="vertical-linea line5"></span>
      </div>

      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>

  );
}

export default App;
