import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Customer/Login";
import Register from "./component/Customer/Register";
import { CartMain } from "./layout/Cart/CartLayout";
import Details from "./component/Product/Details/Details";
import AdminFood from "./component/Admin/Admin_Product/AdminFood";
import AdminFC from "./component/Admin/Admin_Product/AdminFC";
import FoodDetail from "./component/Admin/Admin_Product/AdminDetailFood";

interface Route {
  path: string;
  element: JSX.Element;
}
const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <CartMain />,
  },
  {
    path: "/customer/login",
    element: <Login />,
  },
  {
    path: "/customer/register",
    element: <Register />,
  },
  {
    path: "details/:id",
    element: <Details />,
  },
  {
    path: "/admin",
    element: <AdminFood />,
  },
  {
    path: "/admin/:id",
    element: <FoodDetail />
  },
  {
    path: "/admin-fc",
    element: <AdminFC />,
  },

];

export default routes;