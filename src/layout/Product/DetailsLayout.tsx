import { BtnBuy } from "../../ui/ButtonBuy";
import { BtnAddToCart } from "../../ui/ButtonToCart";
import { formatCurrency } from "../../utils/format-currency";
import Food from "../../utils/interface/Food";
import React from "react";
import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { QtyPicker } from "../../ui/QtyPicker";
import fakeCart from "../../utils/data/fake-cart-data"

interface ProductViewProps {
  food: Food;
}

const DetailsView: React.FC<ProductViewProps> = ({ food }) => {

  let fakeQty = undefined


    fakeCart.forEach((fakeFood) => {
          // console.log("fakeFood", fakeFood)
      if (food.idFood == fakeFood.id) {
        fakeQty = fakeFood.qty;
      }
    });

    // console.log("fakeQty", fakeQty)
    // console.log("fakeCart", fakeCart)
    // console.log("food", food.idFood)


  return (
    <>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <img className="mt-4 rounded-lg" src={ProductSample} alt="Food details"></img>
        <div className="mt-4">
          <div className=" mx-3 font-semibold">
            <h2 className="my-2 font-semibold text-3xl pl-5 py-1 rounded-lg">{food.name}</h2>
            <h2 className="my-2 font-semibold text-4xl pl-5 py-1 text-danger">Giá: {formatCurrency(food.price)}</h2>
            <h5 className="my-2 font-semibold text-2xl pl-5 py-1">Số lượng: {food.quantity}</h5>
            <h2 className="my-2 font-semibold text-2xl text-center text-uppercase">Mô tả món ăn</h2>
            <div className="bg-orange-100 p-4 rounded-lg">
              <div className="row">
                <p className="mb-1">{food.des}</p>
              </div>
            </div>
            <div className="row mt-3 mb-4 text-center">
              <div className="col-md-4">
                <p>Chọn số lượng: </p>
              </div>
              <div className="col-md-8">
                <QtyPicker maxQty={food.quantity} />
              </div>
            </div>
            <div className="mt-4 pb-4 grid grid-cols-2 gap-3">
              <BtnBuy></BtnBuy>
              <BtnAddToCart food={food} qty={fakeQty}></BtnAddToCart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { DetailsView };