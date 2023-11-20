import { MainLayout } from "../../layout/Layout";
import "../../style/tuan/form.css";

const Register = () => {
  return (
    <MainLayout>
      <div className="main-frame">
        <div className="login-frame">
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h2 className="login-header mt-3">Đăng ký tài khoản</h2>
          </div>
          <form action={import.meta.env.VITE_API_PATH + 'customer/signup'} method="post">
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="name" style={{ display: "block", color: "#333" }}>Tên khách hàng</label>
              <input
                type="text"
                id="name"
                className="form-input"
                name="name"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email" style={{ display: "block", color: "#333" }}>Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                name="email"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="address" style={{ display: "block", color: "#333" }}>Địa chỉ</label>
              <input
                type="text"
                id="address"
                className="form-input"
                name="address"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="password" style={{ display: "block", color: "#333" }}>Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
              />
            </div>

            <input
              type="submit"
              value="Đăng ký"
              className="btn-form hover:bg-orange-500 bg-yellow-500 rounded-3xl mt-4"
            />
          </form>

          <button style={{ width: "100%", padding: "0.5rem", border: "none", background: "transparent", color: "#007bff", cursor: "pointer" }}>
            Tôi đã có tài khoản ?
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;