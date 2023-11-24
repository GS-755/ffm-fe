import About from "./component/About";
import FoodDetail from "./component/Admin/Admin_Product/AdminDetailFood";
import AdminFC from "./component/Admin/Admin_Product/AdminFC";
import AdminFood from "./component/Admin/Admin_Product/AdminFood";
import { Admin_CreateFood } from "./component/Admin/Admin_Product/Admin_CreateFood";
import Login from "./component/Customer/Login";
import Register from "./component/Customer/Register";
import Details from "./component/Product/Details/Details";
import { CartMain } from "./layout/Cart/CartLayout";
import { FoodByCate } from "./component/Product/Category/FoodByCate";
import ProductAll from "./component/Product/ProductAll";
import { PaymentStatus } from "./layout/VNPay/VNPayStatus";
import Home from "./component/Home";

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
    path: "/payment/paymentstatus",
    element: <PaymentStatus />
  },
  {
    path: "/admin/create",
    element: <Admin_CreateFood />,
  },
];

export default routes;
