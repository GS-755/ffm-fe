import productSample from "../assets/image/product/unsplash-product-sample.jpg";
import { MainLayout } from "../layout/Layout"

function About() {
  return (
    <MainLayout>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-5 mb-5">
            <img className="mt-4 rounded-lg" src={productSample} alt="Food details"></img>
            <div className="mt-4">
              <div className=" mx-3 font-semibold">
                <h3 className="font-bold text-center text-3xl text-orange-500 mb-4">
                  Chào mừng bạn đến với FastFood FC - nơi mang đến cho bạn 
                  trải nghiệm tuyệt vời về ẩm thực gà rán!
                </h3>
                <p className="mb-3">
                  Chúng tôi tự hào là một trang web bán gà rán đáng tin cậy, 
                  được xây dựng bằng công nghệ tiên tiến và sự đam mê về ẩm thực.
                </p>
                <p className="mb-3">
                  Với sự kết hợp giữa React Vite, Drizzle ORM, cơ sở dữ liệu 
                  PlanetScale và Tailwind CSS, FastFood FC cam kết mang đến cho bạn 
                  không chỉ những món gà rán ngon miệng mà còn là một trải nghiệm 
                  mua sắm trực tuyến tuyệt vời. Với giao diện đẹp mắt, tương thích 
                  trên mọi thiết bị và tốc độ tải trang nhanh chóng, chúng tôi 
                  đảm bảo bạn sẽ có trải nghiệm mua hàng trực tuyến trơn tru và thuận tiện.
                </p> 
                <p className="mb-3">
                  Tại FastFood FC, chúng tôi chọn lọc những nguyên liệu tươi ngon và 
                  chất lượng cao nhất để tạo ra những món gà rán tuyệt hảo. Với một 
                  loạt các lựa chọn phong phú như gà rán gốc Kentucky, gà rán sốt cay, 
                  gà rán xốt BBQ và nhiều hơn nữa, chúng tôi cam kết đáp ứng mọi 
                  sở thích ẩm thực của bạn.
                </p> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default About;