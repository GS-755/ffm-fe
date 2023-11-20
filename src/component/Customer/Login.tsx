import { MainLayout } from "../../layout/Layout";
import { useState } from "react";
import "../../style/tuan/form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-3">
        <div></div>
        <div className="main-frame">
          <div className="login-frame">
            <h2 className="login-header mt-3">Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email" style={{ display: "block", color: "#333" }}>Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="password" style={{ display: "block", color: "#333" }}>Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                style={{ width: "100%", background: "#FFCC66", color: "#fff", padding: "0.5rem", borderRadius: "15px", cursor: "pointer" }}
              >
                Đăng nhập
              </button>
              <button style={{ width: "100%", padding: "0.5rem", border: "none", background: "transparent", color: "#007bff", cursor: "pointer" }}>
                Bạn muốn đăng ký tài khoản?
              </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </MainLayout>
  )
}

export default Login;