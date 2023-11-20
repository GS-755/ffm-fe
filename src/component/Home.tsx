import { MainLayout } from "../layout/Layout";
import { Hero } from "./Hero/Hero";
import Product from "./Product/ProductHome";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <hr className="mt-5 mb-3"></hr>
      <h1 className="text-center font-bold text-3xl text-uppercase">Sản phẩm bán chạy</h1>
      <hr className="mt-3 mb-3"></hr>
      <section className="section">
        <div className="container-fluid">
          <div className="grid grid-cols-4 gap-3 fs-5">
            
          </div>
        </div>
      </section>
      <hr className="mt-5 mb-3"></hr>
      <h1 className="text-center font-bold text-3xl text-uppercase">Các sản phẩm khác</h1>
      <hr className="mt-3 mb-3"></hr>
      <section className="section">
        <div className="container-fluid">
          <div className="grid grid-cols-4 gap-3 fs-5">
            <Product />
          </div>
        </div>
      </section>
      <hr className="mt-5 mb-5"></hr>
    </MainLayout>
  );
}

export default Home;