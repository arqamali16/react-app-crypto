import { IMeta, IRate } from "./home.interface";

export interface IRateListProps {
  rates: IRate[];
  onNext: (page: number) => void;
  meta: IMeta;
}
