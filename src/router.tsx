import Home from "./component/Home";
import Detail from "./component/Detail";
import About from "./component/About";
import Cart from "./component/Cart";

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
    path: '/detail',
    element: <Detail/>,
  },
  {
    path: '/about',
    element: <About />,
  }, 
  {
    path: '/cart',
    element: <Cart />
  }
];

export default routes;