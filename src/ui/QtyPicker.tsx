import { useState } from "react";

interface QtyProps {
  maxQty: number;
}

const QtyPicker: React.FC<QtyProps> = ({ maxQty }) => {
  const [qty, setQty] = useState(1);
  const isValidMin = (): boolean => {
    if (qty <= 1) {
      return false;
    }

    return true;
  }
  const isValidMax = (): boolean => {
    if (qty >= maxQty) {
      return false;
    }

    return true;
  }

  // console.log(qty)

  return (
    <>
      <div className="flex">
        <button className="btn btn-outline-danger" onClick={() => {
          if (isValidMin()) {
            setQty(qty - 1);
          }
        }}> - </button>
        <input
          type="text"
          className="form-control text-center mx-3"
          min={1} max={maxQty} value={qty} readOnly>
        </input>
        <button className="btn btn-outline-success" onClick={() => {
          if (isValidMax()) {
            setQty(qty + 1)
          }
        }}> + </button>
      </div>
    </>
  );
}

export { QtyPicker };