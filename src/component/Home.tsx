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
function Home() {
  // Dữ liệu sản phẩm bán chạy (ví dụ)
  const bestSellingProducts = [
    { name: "Sản phẩm 1", image: "https://i.imgur.com/QPxY57r.jpg", price: 100 },
    { name: "Sản phẩm 2", image: "https://i.imgur.com/jYijkUy.jpg", price: 150 },
    // Thêm các sản phẩm khác ở đây
  ];
  return (
    <MainLayout>
      <div className="container m-auto">
        <h1>Hello, world!</h1>
        <p>Do something big boiz :)</p>
        <div className="contain-khungSanPham">
          {bestSellingProducts.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home