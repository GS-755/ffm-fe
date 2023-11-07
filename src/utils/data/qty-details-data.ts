import QtyRange from "../interface/qty-range";
import fakeProducts from "./fake-products-data";

const qtyDetails: QtyRange[] = [
  {
    min: 1,
    max: fakeProducts[0].proQty
  }
];

export default qtyDetails;