import { MainLayout } from "../layout/Layout";
function Product({ name, image, price }: { name: string, image: string, price: number }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
import "../style/App.css";
import { MainLayout } from "../layout/Layout";
import { Hero } from "./Hero";
import { Product } from "./Product/Product";
import { HotProduct } from "./Product/HotProduct";

function Home() {
  // Dữ liệu sản phẩm bán chạy (ví dụ)
  const bestSellingProducts = [
    { name: "Sản phẩm 1", image: "https://i.imgur.com/QPxY57r.jpg", price: 100 },
    { name: "Sản phẩm 2", image: "https://i.imgur.com/jYijkUy.jpg", price: 150 },
    // Thêm các sản phẩm khác ở đây
  ];
  return (
    <MainLayout>
      <Hero></Hero>
      <hr className="mt-5 mb-3"></hr>
      <h1 className="text-center font-bold text-4xl text-uppercase">Sản phẩm bán chạy</h1>
      <hr className="mt-3 mb-3"></hr>
      <section className="section">
        <div className="container-fluid">
          <div className="grid grid-cols-4 gap-3 fs-5">
            <HotProduct></HotProduct>
          </div>
        </div>
      </section>
      <hr className="mt-5 mb-3"></hr>
      <h1 className="text-center font-bold text-4xl text-uppercase">Các sản phẩm khác</h1>
      <hr className="mt-3 mb-3"></hr>
      <section className="section">
        <div className="container-fluid">
          <div className="grid grid-cols-4 gap-3 fs-5">
            <Product></Product>
          </div>
        </div>
      </section>
      <hr className="mt-5 mb-5"></hr>
    </MainLayout>
  );
}

export default Home