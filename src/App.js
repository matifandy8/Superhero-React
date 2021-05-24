import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./screens/login/Login";
import Search from "./screens/Search/Search";
import Home from "./screens/home/Home";
import HeroDetails from "./components/HeroDetails/HeroDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Navbar />
            <Search />
            <Footer />
          </Route>
          <Route path="/heroDetails/:id">
            <Navbar />
            <HeroDetails />
            <Footer />
          </Route>
          <Route path="/" exact>
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
