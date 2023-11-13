import CartInterface from "../interface/Cart";

class Cart {
  //Attributes
  private cartItems: CartInterface[];

  //Constructor
  public constructor() { this.cartItems = []; }

  //Getters & Setter
  public getItemCount = (): number => { return this.cartItems.length; }
  public getCartItems(): CartInterface[] { return this.cartItems; }
  public setCartItems(cartItems: CartInterface[]): void {
    this.cartItems = cartItems;
  }

  //Method(s)
  public insertItem = (item: CartInterface): void => {
    if (this.existItem(item)) {
      this.cartItems[item.id].qty++;
    }
    else {
      this.cartItems[item.id] = item;
    }
  }
  public deleteItem = (item: CartInterface): boolean => {
    if (this.existItem(item)) {
      this.cartItems = this.cartItems.filter(
        (k: CartInterface) => k.id == item.id
      );

      return true;
    }

    return false;
  }
  public deleteAll = (): void => {
    this.cartItems = [];
  }
  public existItem = (item: CartInterface): boolean => {
    const cartItems: CartInterface[] = this.cartItems.filter(k => k.id === item.id);

    return cartItems.length > 0
      ? true
      : false;
  }
}

export default Cart;