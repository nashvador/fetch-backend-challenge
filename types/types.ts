export interface Reciept {
  retailer: string;
  purchaseDate: string;
  purchaseTime: string;
  items: RecieptItem[];
  total: string;
  calculatedPoints?: number;
}

export interface RecieptItem {
  shortDescription: string;
  price: string;
}
