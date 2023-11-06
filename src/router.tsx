import Home from "./component/Home";
import Detail from "./component/Detail";
import About from "./component/About";

interface Route {
  path: string;
  element: JSX.Element;
}

const routes: Route[] = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/detail',
    element: <Detail/>,
  },
  {
    path: '/about',
    element: <About/>,
  }
];

export default routes;