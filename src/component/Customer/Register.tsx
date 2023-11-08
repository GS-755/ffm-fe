import { MainLayout } from "../../layout/Layout";
import { useState } from "react";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
  };
  return (
    <MainLayout>
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f0f0" }}>
        <div style={{ background: "#D9D9D9", padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", width: "500px" }}>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Đăng ký tài khoản</h2>
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
  )
}

export default Register;