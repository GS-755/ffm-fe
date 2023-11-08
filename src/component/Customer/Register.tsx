import { MainLayout } from "../../layout/Layout";
import { useState } from "react";
import "../../style/tuan/form.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
  };
  return (
    <MainLayout>
      <div className="main-frame">
        <div className="login-frame">
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h2 className="login-header mt-3">Đăng ký tài khoản</h2>
          </div>
          <form onSubmit={handleRegister}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email" style={{ display: "block", color: "#333" }}>Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="password" style={{ display: "block", color: "#333" }}>Mật khẩu</label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="confirmPassword" style={{ display: "block", color: "#333" }}>Xác nhận lại mật khẩu</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              style={{ width: "100%", background: "#FFCC66", color: "#fff", padding: "0.5rem", borderRadius: "15px", cursor: "pointer" }}
            >
              Đăng ký
            </button>
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