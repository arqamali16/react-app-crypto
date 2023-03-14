/**
 * Home Component
 * @author Mohammed Arqam Ali saad <arqam.ali16@gmail.com>
 */
import React, { useEffect, useState } from "react";
import { Form, message, Spin } from "antd";
import _ from "lodash";

import CustomForm from "../../Components/CustomForm";
import CustomTable from "../../Components/CustomTable";

import {
  getPrefix,
  getLatestExchange,
  getFilteredParams,
  showFeedback,
} from "../../Utils/helpers";
import { getColumns } from "../../Constants/columnDef";

import { getRates, addTransaction } from "../../Api/Services/rates";
import { registerSocketEvents } from "../../Api/Services/socket";
import FilterForm from "../../Components/FilterForm";
import RateList from "../../Components/RateList";

import { IMeta, IRate, IResponse } from "../../Interfaces/home.interface";
import Feedback from "../../Components/Feedback";

const columns = getColumns();

message.config({
  top: 0,
  duration: 100000000000000000000,
  maxCount: 1,
  rtl: true,
  prefixCls: "tx-feedback",
});

/**
 * Home Functional component
 * @Component Home component which cover all the element to be viewed
 * @returns JSX.Element
 */
const Home = () => {
  const [rates, setRates] = useState<IRate[]>([]);
  const [liveRates, setLiveRates] = useState<IRate[]>([]);
  const [symbol, setSymbol] = useState<string>("");
  const [meta, setMeta] = useState<IMeta>({ count: 0, limit: 0, page: 0 });
  const [loader, setLoader] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [filterForm] = Form.useForm();

  /**
   * @function
   * Get the live rates and all transacted rates on component monut
   */
  useEffect(() => {
    getAndSetRates();
    registerSocketEvents(setLiveRates, messageApi);
  }, []);

  /**
   * Function to get all the rates and set it as state
   * @function getAndSetRates
   */
  const getAndSetRates = async () => {
    const { rates, meta }: IResponse = await getRates();
    setMeta(meta);
    setRates(rates);
    setLiveRates(rates);
  };

  /**
   * Handle the event to be triggered when transaction is submmitted
   * @function handleSubmit
   */
  const handleSubmit = async () => {
    setLoader(true);
    const values = form.getFieldsValue();
    await addTransaction(values);
    showFeedback();
    getAndSetRates();
    form.resetFields();
    getPrfixSymbol();
    setLoader(false);
  };

  /**
   * Funtion to get the prefix symbol for converted rate based on selection
   * @function getPrfixSymbol
   */
  const getPrfixSymbol = () => {
    const values = form.getFieldsValue();
    const symbol = getPrefix(values.toCurrency);
    setSymbol(symbol);
  };

  /**
   * This function handles the event to be truggered when the values in the transaction form is changed
   * @function handleChange
   */
  const handleChange = () => {
    const values = form.getFieldsValue();
    if (values.fromAmount && values.fromCurrency && values.toCurrency) {
      const latestExchangeRate = getLatestExchange(liveRates, values);
      const roundedRate = _.round(latestExchangeRate * values.fromAmount, 3);
      form.setFieldValue("toAmount", roundedRate);
      getPrfixSymbol();
    }
  };

  /**
   * Funtion to to get all the rates based on the filter params selected
   * @function handleFilterSubmit
   */
  const handleFilterSubmit = async () => {
    setLoader(true);
    const values = filterForm.getFieldsValue();
    const mappedValues = getFilteredParams(values);
    const { rates, meta }: IResponse = await getRates(mappedValues);
    setMeta(meta);
    setRates(rates);
    setLoader(false);
  };

  /**
   * Function to update the records on page selection
   * @function handlePageChange
   * @param page
   */
  const handlePageChange = async (page: number) => {
    setLoader(true);
    const values = filterForm.getFieldsValue();
    const mappedValues = getFilteredParams(values);
    const { rates, meta }: IResponse = await getRates({
      page,
      ...mappedValues,
    });
    setMeta(meta);
    setRates(rates);
    setLoader(false);
  };

  return (
    <Spin spinning={loader}>
      <CustomForm
        form={form}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        symbol={symbol}
      />
      <div className="section-wrapper">
        <h3 className="table-title">History</h3>
        <FilterForm form={filterForm} type={true} />
        <CustomTable
          data={rates}
          columns={columns}
          meta={meta}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="mobile-section-wrapper">
        <h3 className="table-title">History</h3>
        <FilterForm form={filterForm} onSubmit={handleFilterSubmit} />
        <RateList
          rates={rates}
          onNext={handlePageChange}
          meta={meta}
        ></RateList>
      </div>
      {contextHolder}
      <Feedback title="Exchange submitted." />
    </Spin>
  );
};

export default Home;
