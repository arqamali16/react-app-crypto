import moment from "moment";
import { getFormattedPrice } from "../Utils/helpers";

import BTC from "../Assets/images/BTC.svg";
import ETH from "../Assets/images/ETH.svg";
import USD from "../Assets/images/USD.svg";
import EUR from "../Assets/images/EUR.svg";
import GBP from "../Assets/images/GBP.svg";

import { IColumns } from "../../src/Interfaces/table.interface";
import { IRate } from "../Interfaces/home.interface";

export const getColumns = (): IColumns[] => {
  return [
    {
      title: "Date & Time",
      key: "createdAt",
      render: (value: string | number) =>
        moment(value).format("DD/MM/YYYY hh:mm"),
    },
    {
      title: "Amount from",
      key: "fromAmount",
    },
    {
      title: "Currency from",
      key: "fromCurrency",
    },
    {
      title: "Amount to",
      key: "toAmount",
      render: (value: number, data: IRate) =>
        getFormattedPrice(value, data.toCurrency),
    },
    {
      title: "Currency to",
      key: "toCurrency",
    },
    {
      title: "Type",
      key: "type",
      render: (value: string) => (
        <span
          style={{
            color: value === "Live Price" ? "#5DBE7E" : "#6368DF",
            fontWeight: "900",
          }}
        >
          {value}
        </span>
      ),
    },
  ];
};

export const cryptoOptions = [
  {
    value: "BTC",
    label: "Bitcoin",
    image: BTC,
    key: "BTC",
  },
  {
    value: "ETH",
    image: ETH,
    label: "Ethereum",
    key: "ETH",
  },
];

export const currenyOptions: IOptions[] = [
  {
    value: "USD",
    label: "USD",
    image: USD,
    key: "USD",
  },
  {
    value: "GBP",
    image: GBP,
    label: "GBP",
    key: "GBP",
  },
  {
    value: "EUR",
    image: EUR,
    label: "EUR",
    key: "EUR",
  },
];

export const types: IOptions[] = [
  {
    value: "Live Price",
    label: "Live Price",
    key: "live",
  },
  {
    value: "Exchanged",
    label: "Exchanged",
    key: "exchanged",
  },
  {
    value: "All",
    label: "All",
    key: "all",
  },
];
