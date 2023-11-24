import About from "./component/About";
import FoodDetail from "./component/Admin/Admin_Product/AdminDetailFood";
import AdminFC from "./component/Admin/Admin_Product/AdminFC";
import AdminFood from "./component/Admin/Admin_Product/AdminFood";
import { Admin_CreateFood } from "./component/Admin/Admin_Product/Admin_CreateFood";
import Login from "./component/Customer/Login";
import Register from "./component/Customer/Register";
import Home from "./component/Home";
import { FoodByCate } from "./component/Product/Category/FoodByCate";
import Details from "./component/Product/Details/Details";
import ProductAll from "./component/Product/ProductAll";
import { CartMain } from "./layout/Cart/CartLayout";

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
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/product/:id",
    element: <FoodByCate />,
  },
  {
    path: "/product",
    element: <ProductAll />,
  },
  {
    path: "/admin",
    element: <AdminFood />,
  },
  {
    path: "/admin/:id",
    element: <FoodDetail />,
  },
  {
    path: "/admin-fc",
    element: <AdminFC />,
  },
  {
    path: "/admin/create",
    element: <Admin_CreateFood />,
  },
];

export default routes;
