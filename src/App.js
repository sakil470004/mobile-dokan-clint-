import './App.css';
import {
  BrowserRouter,
  Switch,
  // Link,
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

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
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
