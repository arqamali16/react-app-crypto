import { type } from "os";
import { IMeta, IRate } from "./home.interface";

export interface IColumns {
  title: string;
  key: string;
  render?: (value: any, data: IRate) => string | number | JSX.Element;
}

export interface ITableProps {
  columns: IColumns[];
  data: IRate[];
}

export interface ICustomTableProps {
  columns: IColumns[];
  data: IRate[];
  meta: IMeta;
  onPageChange: (page: number) => void;
}
