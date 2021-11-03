import './App.css';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator.js';
import Quotes from './components/Quotes.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
       <Navbar />
       <Switch>
            <Route exact path="/">
               <Home />
           </Route>
           <Route path="/calculator">
               <Calculator />
           </Route>
           <Route path="/quote">
               <Quotes />
           </Route>
       </Switch>
    </>
  );
}

export default App;
