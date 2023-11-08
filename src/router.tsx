import Home from "./component/Home";
import About from "./component/About";
import Cart from "./component/Cart/Cart";
import Login from "./component/Customer/Login";
import Register from "./component/Customer/Register";

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
    element: <Cart />
  },
  {
    path: '/customer/login',
    element: <Login />
  },
  {
    path: '/customer/register',
    element: <Register />
  }
];

export default routes;