import { MainLayout } from "../../layout/Layout";
import { BtnBuy } from "../../ui/ButtonBuy";
import { BtnAddToCart } from "../../ui/ButtonToCart";
import { formatCurrency } from "../../utils/format-currency";
import { QuantityPicker } from "react-qty-picker";
import { useNavigate } from "react-router-dom";
import qtyDetails from "../../utils/data/qty-details-data";
import "../style/App.css";
import FakeProduct from "../../utils/interface/fake-product";

function DetailsView(fakeProduct: FakeProduct) {
    const navigate = useNavigate();
    const handleClick = (product: FakeProduct) => {
        navigate(`/detail/${product.proId}`);
    }
    return (
        <MainLayout>
            <section className="section">
                <div className="container pt-3 pb-3 mx-32 w-auto shadow-lg rounded-xl">
                    <div className="grid grid-cols-2 gap-5">
                        <img className="mt-4 rounded-lg" src="https://images.foody.vn/res/g104/1034432/prof/s640x400/foody-upload-api-foody-mobile-40-200706093715.jpg"></img>
                        <div className="mt-4">
                            {products.map(p => (
                                <Product
                                    product={p}
                                    onClick={() => handleClick(p)}
                                />
                            ))}
                            <div className=" mx-3 font-semibold">
                                <h2 className="my-2 font-semibold text-3xl pl-5 py-1 rounded-lg">{fakeProduct.proTitle}</h2>
                                <h2 className="my-2 font-semibold text-4xl pl-5 py-1 text-danger">{formatCurrency(fakeProduct.proPrice)}</h2>
                                <h2 className="my-2 font-semibold text-2xl text-center text-uppercase">Mô tả món ăn</h2>
                                <div className="bg-orange-100 p-4 rounded-lg">
                                    <div className="row">
                                        <p className="mb-1">{fakeProduct.proDescription}</p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Illo alias, libero reiciendis voluptates cumque qui reprehenderit
                                            repellat rerum maiores aliquid at nesciunt modi blanditiis.
                                            Architecto facere error odio earum similique.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-4 text-center">
                                    {qtyDetails.map((data) => (
                                        <>
                                            <div className="grid grid-cols-3 align-middle">
                                                <p className="mt-3">Chọn số lượng</p>
                                                <QuantityPicker smooth min={data.min} max={data.max} />
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <div className="mt-4 pb-4 grid grid-cols-2 gap-3">
                                    <BtnBuy></BtnBuy>
                                    <BtnAddToCart></BtnAddToCart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default DetailsView;