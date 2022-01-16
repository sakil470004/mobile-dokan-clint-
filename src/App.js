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
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AllProduct from './Pages/AllProduct/AllProduct';
import ShowProductDetails from './Pages/ShowProductDetails/ShowProductDetails';
import PrivateRoute from './Pages/Login/Firebase/PrivateRoute'
import Dashboard from './Pages/Dashboard/DashBoard';
import Register from './Pages/Login/Login/Register';



// color 1 #FFDA00


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/allProduct">
              <AllProduct />
            </Route>
            <PrivateRoute path="/products/:productId">
              <ShowProductDetails />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
