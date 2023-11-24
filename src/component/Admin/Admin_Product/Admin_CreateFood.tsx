import { useState } from "react";
import useFetch from "../../../utils/data/food/food-fetch";

const Admin_CreateFood = (): JSX.Element => {
  // const [food, setFood] = useState({
  //   name: "",
  //   des: "",
  //   price: 0,
  //   quantity: 0,
  //   idFC: "",
  //   idMaterial: "",
  //   image: null,
  // });

  // const handleFood = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFood((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const createFood = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const data = useFetch(import.meta.env.VITE_API_PATH + "/food");
  //   console.log(data);
  // };

  return (
    <>
      <form action={import.meta.env.VITE_API_PATH + "/food"} method="post">
        <div className="p-5 w-full">
          <h2 className="font-bold mb-3">Tạo món ăn</h2>

          <div>
            <label htmlFor="name">Tên món ăn</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="des">Mô tả món ăn</label>
            <input type="text" name="des" />
          </div>
          <div>
            <label htmlFor="price">Đơn giá</label>
            <input type="text" name="price" />
          </div>
          <div>
            <label htmlFor="quantity">Số lượng món ăn</label>
            <input type="text" name="quantity" />
          </div>
          <div>
            <label htmlFor="idFc">Id Thể loại</label>
            <input type="text" name="idFc" />
          </div>
          <div>
            <label htmlFor="idMaterial">Id Nguyên liệu</label>
            <input type="text" name="idMaterial" />
          </div>
          <div>
            <label htmlFor="image">Hình ảnh</label>
            <input type="file" accept="image/*" name="image" />
          </div>

          <button type="submit">Tạo món ăn</button>
        </div>
      </form>
    </>
  );
};

export { Admin_CreateFood };
