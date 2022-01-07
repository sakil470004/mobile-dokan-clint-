import './App.css';
import {
  BrowserRouter,
  Switch,
  // Link,
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import BuyGuide from './Pages/BuyGuide/BuyGuide';
import BuyGuideFromExpert from './Pages/BuyGuideFromExpert/BuyGuideFromExpert'
import NavigationTop from './Pages/Shared/NavigationTop/NavigationTop';


// color 1 #FFDA00


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/buyGuide">
            <NavigationTop />
            <BuyGuide />
          </Route>
          <Route path="/buyGuideFromExpert">
            <NavigationTop />
            <BuyGuideFromExpert />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
