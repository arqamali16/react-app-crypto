import _ from "lodash";
import { IRate, IResponse } from "../../Interfaces/home.interface";
import axiosClient from "../client";

const addTransaction = async (exchangeDetails: IRate) => {
  try {
    const body = { ...exchangeDetails, type: "Exchanged" };
    await axiosClient.post("/rates", body);
  } catch (err) {
    console.log("Error in adding transaction!", err);
  }
};

const getRates = async (queryParams?: object): Promise<IResponse> => {
  try {
    const { data } = await axiosClient.get("/rates", {
      params: queryParams,
    });
    return { rates: _.get(data, "data", []), meta: _.get(data, "meta", {}) };
  } catch (err) {
    console.log("Error in getting rates!", err);
    return { rates: [], meta: { count: 0, limit: 0, page: 0 } };
  }
};

export { addTransaction, getRates };
