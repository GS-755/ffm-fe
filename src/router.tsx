import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Customer/Login";
import Register from "./component/Customer/Register";
import { CartMain } from "./layout/Cart/CartLayout";
import { Modal } from "./component/Test/Modal";

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
    path: '/test',
    element: <Modal/>
  }
];

export default routes;