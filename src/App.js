import './App.css';
// import AppContainer from './components/AppContainer';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator.js';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navbar from './components/Navbar';

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
