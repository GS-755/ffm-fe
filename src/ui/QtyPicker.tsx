import QuantityPicker from "react-qty-picker";
import qtyDetails from "../utils/data/qty-details-data";

const QtyPicker = () => {
  return (
    <>
      {qtyDetails.map((data) => (
        <>
          <div className="grid grid-cols-3 align-middle">
            <p className="mt-3">Chọn số lượng</p>
            <QuantityPicker smooth min={data.min} max={data.max} />
          </div>
        </>
      ))}
    </>
  );
}

export { QtyPicker };