import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from "./components/footer/Footer";
import Register from "./pages/login/Register";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const cartItems = useSelector((state) => state.cart.itemsList)

  return (
    <div className="App">
      {isLoggedIn && (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/account" component={Account} />
          </Switch>
          <Footer />
        </Router>

      )}
      {!isLoggedIn && <Login/> }

    </div>
  );
}

export default App;
