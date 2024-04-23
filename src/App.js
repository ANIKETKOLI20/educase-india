import { BrowserRouter,Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home'
import SignUp from './components/SignUp';
import User from './components/User';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/signup" component={SignUp}/>
        <Route exact path= "/user" component={User}/>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
