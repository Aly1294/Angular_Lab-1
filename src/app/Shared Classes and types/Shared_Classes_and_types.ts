export interface Iproduct {
    id: number,
    name: string,
    quantity: number,
    price: number,
    img: string,
  }

  export interface Icategory {
    id: number,
    name: string,
  }

  export enum DiscountOffers  {
    no_discount,
    ten_percentage=10,
    fifteen_ten_percentage=15,
  }