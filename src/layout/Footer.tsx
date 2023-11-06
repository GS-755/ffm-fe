const Footer = () => {
  return (
    <>
      <footer id="div-footer" className="container-fluid">
        <div className="col">
          <div className="row">
            <div className="col-md-3">
              <h1 className="text-xl">HỖ TRỢ KHÁCH HÀNG</h1>
              <p>Câu hỏi thường gặp</p>
              <p>Điều khoản dịch vụ</p>
            </div>
            <div className="col-md-3">
              <h1 className="text-xl">CHÍNH SÁCH</h1>
              <p>Chính sách bảo mật</p>
              <p>Chính sách thanh toán</p>
            </div>
            <div className="col-md-3">
              <h1 className="text-xl">LIÊN HỆ</h1>
              <p>Địa chỉ: FFM</p>
              <p>Email:
                <a href="mailto:21dh114236@st.huflit.edu.vn">21dh114236@st.huflit.edu.vn</a>
              </p>
              <p>Số điện thoại:
                <a href="tel:0832476086">083 247 6086</a>
              </p>
            </div>
            <div className="col-md-3">
              <h1 className="text-xl">ĐĂNG KÝ NHẬN TIN</h1>
              <p>Hãy nhập email của bạn vào ô dưới đây để có thể nhận được tin tức mới nhất</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export { Footer };