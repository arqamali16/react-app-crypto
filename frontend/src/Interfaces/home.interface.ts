export interface IRate {
  id: string;
  fromCurrency: string;
  fromAmount: string;
  toCurrency: string;
  toAmount: number;
  type: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export interface IMeta {
  count: number;
  limit: number;
  page: number;
}

export interface IResponse {
  rates: IRate[];
  meta: IMeta;
}
