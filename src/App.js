import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NotFound from "./components/NotFound";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import "./app.css";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/users"} component={UserList} />
          <Route path={"/user/edit/:id"} component={User} />
          <Route path={"/newUser"} component={NewUser} />
          <Route path={"/products"} component={ProductList} />
          <Route path={"/product/edit/:productId"} component={Product} />
          <Route path={"/newProduct"} component={NewProduct} />
          <Route path={"/not-found"} component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
