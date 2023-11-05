import "../style/thuyen/AcountStyle.css";
import "../style/thuyen/DetailsStyle.css";
import "../style/thuyen/Font.css";
import "../style/thuyen/FooterStyle.css";
import "../style/thuyen/inline.css";
import "../style/thuyen/LayoutCart.css";
import "../style/thuyen/LayoutStyle.css";
import "../style/thuyen/menu.css";
import "../style/thuyen/mystyle.css";
import "../style/thuyen/PagedList.css";
import "../style/thuyen/PageStyle.css";
import "../style/thuyen/ProductsStyle.css";
import "../style/thuyen/profile.css";
import "../style/thuyen/ProViewStyle.css";
import "../style/thuyen/Site.css";
import "../style/thuyen/StyleWeb.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div id="div-top">
                <div className="wrapper">
                    <div className="TenWeb">
                        <a href="#" className="link">
                            <h4 className="brand-name">BookStore PTLN</h4>
                        </a>
                    </div>
                    <div className="text brand-name">
                        <a href="#">Đăng nhập</a> | 
                        <a href="#"> Đăng ký</a>
                    </div>
                </div>
            </div>
            <div id="nav">
                <div className="wrapper">
                    <div className="wrap">
                        <form>
                            <div className="search">
                                <input id="searching" className="searchTerm" type="text" name="searching" placeholder="Tìm Kiếm truyện" />
                                <button type="submit" className="searchButton">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="text brand-name-dark">
                        <a href="#">Giỏ hàng</a>
                        <a href="#" className="cl-browncyan"><i className="fa-solid fa-cart-shopping"></i></a>
                        <span className="badge cart-number">(999)</span>
                    </div>
                </div>
            </div>
            <div id="horizontalmenu">
                <ul className="ml-35rem">
                    <li className="menu-item">
                        <Link to="/">TRANG CHỦ</Link>
                    </li>
                    <li className="menu-item">
                        <a href="#">DANH MỤC</a>
                    </li>
                    <li className="menu-item">
                        <Link to="/about">GIỚI THIỆU</Link>
                    </li>
                    <li className="menu-item">
                        <a href="#div-footer">LIÊN HỆ</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;