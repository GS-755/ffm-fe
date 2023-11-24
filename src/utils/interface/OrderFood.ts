// export const orderFood = mysqlTable("OrderFood", {
// 	idOrder: int("Id_Order").autoincrement().notNull(),
// 	// you can use { mode: 'date' }, if you want to have Date as type for this column
// 	dayOrder: date("DayOrder", { mode: 'string' }).notNull(),
// 	totalQuantity: int("TotalQuantity").notNull(),
// 	totalPrice: float("TotalPrice").notNull(),
// 	idCustomer: int("Id_Customer").notNull(),
// 	idEmployee: int("Id_Employee").notNull(),
// 	idCoupon: int("Id_Coupon"),
// }
interface OrderFood {
  idOrder: number; 
  dayOrder: Date;
  totalQuantity: number; 
  totalPrice: number; 
  idCustomer: number; 
  idEmployee: number; 
  idCoupon: number;
}

export default OrderFood;