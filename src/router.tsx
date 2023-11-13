import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Customer/Login";
import Register from "./component/Customer/Register";
import Details from "./component/Product/Details/Details";
import { CartMain } from "./layout/Cart/CartLayout";
import Product from "./component/Product/Product";
import { FoodByCate } from "./component/Product/Category/FoodByCate";

interface Route {
  path: string;
  element: JSX.Element;
}
const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  }, 
  {
    path: '/cart',
    element: <CartMain />
  },
  {
    path: '/customer/login',
    element: <Login />
  },
  {
    path: '/customer/register',
    element: <Register />
  },
  {
    path: '/details/:id',
    element: <Details />
  },
  {
    path: '/test/:id',
    element: <FoodByCate />
  },  
  {
    path: '/product',
    element: <Product />
  },
  {
    path: '/product/:id',
    element: <Product />
  }
];

export default routes;