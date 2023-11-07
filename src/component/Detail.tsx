import { MainLayout } from "../layout/Layout";
import { BtnBuy } from "../ui/ButtonBuy";
import { BtnAddToCart } from "../ui/ButtonToCart";
import FakeProduct from "../utils/fake-product";
import { formatCurrency } from "../utils/format-currency";


function Detail() {
    const fakeHotProducts: FakeProduct = 
        {
          proId: 1,
          proTitle: "Khoai tây chiên",
          proDescription: "Mô tả #1",
          proPrice: 27000
        }
  return (
    <MainLayout>
        <div className ="container h-screen mx-32 w-auto">
            <div className="grid grid-cols-2 gap-5">
                <img className="mt-4 rounded-lg" src="https://images.foody.vn/res/g104/1034432/prof/s640x400/foody-upload-api-foody-mobile-40-200706093715.jpg"></img>
                <div className="mt-4">
                    <div className=" mx-3 font-semibold">
                        <h2 className="my-2 font-semibold text-3xl pl-5 py-1 rounded-lg">{fakeHotProducts.proTitle}</h2>
                        <h2 className="my-2 font-semibold text-4xl pl-5 py-1 text-danger">{formatCurrency(fakeHotProducts.proPrice)}</h2>
                        <h2 className="my-2 font-semibold text-2xl text-center text-uppercase">Mô tả món ăn</h2>
                        <div className="bg-orange-100 p-4 rounded-lg">
                            <div className="row">
                                <p className="mb-1">{fakeHotProducts.proDescription}</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Illo alias, libero reiciendis voluptates cumque qui reprehenderit 
                                    repellat rerum maiores aliquid at nesciunt modi blanditiis. 
                                    Architecto facere error odio earum similique.
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <BtnBuy></BtnBuy>
                            <BtnAddToCart></BtnAddToCart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Detail