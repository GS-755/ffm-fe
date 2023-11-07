import Home from "./component/Home";
import About from "./component/About";
import Details from "./component/Product/Details/Details";
import { CartMain } from "./layout/Cart/CartLayout";

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
    path: '/details/:id',
    element: <Details />
  }
];

export default routes;