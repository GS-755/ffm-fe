const BtnAddToCart = () => {
  return (
    <>
      <button className="bg-orange-300 hover:bg-orange-400 py-2 h-12 px-4 mx-10 rounded inline-flex items-center">
        <div className="text-center text-white font-bold">
          <i className="fa-solid fa-cart-shopping fill-current w-4 h-4 mr-2"></i>
          <span>Thêm giỏ hàng</span>
        </div>
      </button>
    </>
  );
}

export { BtnAddToCart };