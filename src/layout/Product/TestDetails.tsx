import { BtnBuy } from "../../ui/ButtonBuy";
import { BtnAddToCart } from "../../ui/ButtonToCart";
import { formatCurrency } from "../../utils/format-currency";
import fakeProducts from "../../utils/data/fake-products-data";
import { MainLayout } from "../Layout";

interface GetId {
  id: number;
}
const Detail = ({ id }: GetId) => {
  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-2 gap-5">
          <img className="mt-4 rounded-lg" src="https://images.foody.vn/res/g104/1034432/prof/s640x400/foody-upload-api-foody-mobile-40-200706093715.jpg" alt="Food details"></img>
          <div className="mt-4">
            <div className=" mx-3 font-semibold">
              <h2 className="my-2 font-semibold text-3xl pl-5 py-1 rounded-lg">{fakeProducts[id].proTitle}</h2>
              <h2 className="my-2 font-semibold text-4xl pl-5 py-1 text-danger">{formatCurrency(fakeProducts[id].proPrice)}</h2>
              <h2 className="my-2 font-semibold text-2xl text-center text-uppercase">Mô tả món ăn</h2>
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="row">
                  <p className="mb-1">{fakeProducts[id].proDescription}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo alias, libero reiciendis voluptates cumque qui reprehenderit
                    repellat rerum maiores aliquid at nesciunt modi blanditiis.
                    Architecto facere error odio earum similique.
                  </p>
                </div>
              </div>
              <div className="row mt-3 mb-4 text-center">

              </div>
              <div className="mt-4 pb-4 grid grid-cols-2 gap-3">
                <BtnBuy></BtnBuy>
                <BtnAddToCart></BtnAddToCart>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export { Detail };