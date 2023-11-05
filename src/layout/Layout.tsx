import { Footer } from './Footer';
import { ReactNode } from 'react';
import Navbar from './Navbar';
// import "../style/thuyen/AcountStyle.css";
// import "../style/thuyen/DetailsStyle.css";
// import "../style/thuyen/Font.css";
// import "../style/thuyen/FooterStyle.css";
// import "../style/thuyen/inline.css";
// import "../style/thuyen/LayoutCart.css";
// import "../style/thuyen/LayoutStyle.css";
// import "../style/thuyen/menu.css";
// import "../style/thuyen/mystyle.css";
// import "../style/thuyen/PagedList.css";
// import "../style/thuyen/PageStyle.css";
// import "../style/thuyen/ProductsStyle.css";
// import "../style/thuyen/profile.css";
// import "../style/thuyen/ProViewStyle.css";
// import "../style/thuyen/Site.css";
// import "../style/thuyen/StyleWeb.css";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="h-full max-h-max max-w-full overflow-hidden">
        {children}  
      </main>

      <Footer />
    </div>
  );
};

export { MainLayout };