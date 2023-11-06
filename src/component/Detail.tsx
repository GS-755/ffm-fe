import { MainLayout } from "../layout/Layout";
import FakeProduct from "../utils/fake-product";


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
        <div className ="container h-screen mx-32 bg-gray-100 w-auto">
            <div className="grid grid-cols-2 gap-5">
                <img className="mt-4 rounded-lg" src="https://images.foody.vn/res/g104/1034432/prof/s640x400/foody-upload-api-foody-mobile-40-200706093715.jpg"></img>
                <div className="mt-4">
                    <div className=" mx-3 font-semibold">
                        <h2 className="bg-[#D9D9D9] my-2 font-semibold text-2xl pl-5 py-1 rounded-lg">{fakeHotProducts.proTitle}</h2>
                        <h2 className="bg-[#D9D9D9] my-2 font-semibold text-2xl pl-5 py-1 rounded-lg">{fakeHotProducts.proPrice}</h2>
                        <h2 className="bg-[#D9D9D9] my-2 font-semibold text-2xl pl-5 py-1 rounded-lg">Mô tả</h2>
                        <h2 className="bg-orange-200 my-2 font-semibold text-center rounded-lg h-28">{fakeHotProducts.proDescription}</h2>
                    </div>
                <button className="bg-yellow-300 p-2 rounded-md ml-28 font-semibold">Thêm vào giỏ hàng</button>
                <button className="bg-yellow-300 p-2 rounded-md ml-28 font-semibold">Mua ngay</button>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Detail