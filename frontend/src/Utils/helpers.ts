import _ from "lodash";
import moment from "moment";
import { IRate } from "../Interfaces/home.interface";

const currencySymbolMappings = {
  USD: "$",
  GBP: "£",
  EUR: "€",
};

export const getFormattedPrice = (price: number, currency: string) => {
  const formattedString = _.round(price, 2).toLocaleString();
  return `${_.get(currencySymbolMappings, [currency])} ${formattedString}`;
};

export const getPrefix = (toCurrency: string) => {
  return _.get(currencySymbolMappings, [toCurrency], "");
};

export const getLatestExchange = (liveRates: IRate[], currentValues: IRate) => {
  const conversions = _.filter(
    liveRates,
    (each) =>
      currentValues.fromCurrency === each.fromCurrency &&
      currentValues.toCurrency === each.toCurrency
  );

  const sorted = _.sortBy(conversions, ["createdAt"]);
  const latestPrice = _.get(sorted, [0, "toAmount"], 0);

  return latestPrice;
};

export const getFilteredParams = (values: any) => {
  return _.mapValues(values, (value, key) => {
    if (key === "type" && value !== "All") return value;
    if ((key === "to" || key === "from") && value) return value.format();
  });
};

export const showFeedback = () => {
  const feedbacks = document.querySelectorAll("#customFeedbackWrapper");

  feedbacks.forEach((box: any) => {
    box.style.display = "flex";
  });

  setInterval(() => {
    feedbacks.forEach((box: any) => {
      box.style.display = "none";
    });
  }, 3000);
};
