import "../style/thuyen/inline.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div id="div-top">
                <div className="wrapper">
                    <div className="TenWeb">
                        <a href="#" className="link font-bold">
                            <h4 className="text brand-name">FastFood FC</h4>
                        </a>
                    </div>
                    <div className="brand-name">
                        <div className="text-white font-bold">
                            <a href="#" className="link">Đăng nhập</a> | 
                            <a href="#" className="link"> Đăng ký</a>
                        </div>
                        <div className="mt-4 text brand-name-dark align-middle font-bold">
                            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                            <Link to="/cart">&emsp;Giỏ hàng</Link>
                            <span className="badge cart-number">(999)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="nav">
                <div className="wrapper">
                    <div className="wrap">
                        <form>
                            <div className="search">
                                <input id="searching" className="searchTerm" type="text" name="searching" placeholder="Tìm kiếm món ăn..." />
                                <button type="submit" className="searchButton">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="horizontalmenu">
                <ul style={{ textAlign: "center" }} className="ml-35rem font-bold">
                    <li className="nav-link">
                        <Link to="/">TRANG CHỦ</Link>
                    </li>
                    <li className="nav-link">
                        <a href="#">DANH MỤC</a>
                    </li>
                    <li className="nav-link">
                        <Link to="/about">GIỚI THIỆU</Link>
                    </li>
                    <li className="nav-link">
                        <a href="#div-footer">LIÊN HỆ</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export { Navbar };