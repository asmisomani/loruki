import Nav from './comp/Nav'
import Home from './pages/Home'
import Features from './pages/Features'
import Docs from './pages/Docs'
import Footer from './comp/Footer'
import {Route,Switch,Redirect} from 'react-router-dom'
function App() {
  return (
    <div>
      <Nav/>
      <Switch>
      <Route path="/home" >
        <Redirect to="/" exact/>
      </Route>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route path='/features'>
      <Features/>
      </Route>
      <Route path="/docs">
      <Docs/>
      </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
