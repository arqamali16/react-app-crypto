/**
 * Transaction Form
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 */

import React from "react";
import { Form, Button, Select, InputNumber } from "antd";
import _ from "lodash";

import { cryptoOptions, currenyOptions } from "../../Constants/columnDef";
import { ICustomFormProps } from "../../Interfaces/form.interface";

const { Option } = Select;

const CustomForm = ({
  form,
  handleSubmit,
  handleChange,
  symbol,
}: ICustomFormProps) => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Exchange</h2>
      <Form
        form={form}
        name="exchange"
        layout="inline"
        onFinish={handleSubmit}
        onChange={handleChange}
        onSelect={handleChange}
      >
        <Form.Item name="fromCurrency" label="Currency" className="form-item">
          <Select style={{ width: "100%" }} onChange={handleChange}>
            {_.map(cryptoOptions, (each) => (
              <Option
                key={each.key}
                value={each.value}
                className="select-options"
              >
                <img src={each.image} alt=""></img>
                <span>{each.label}</span>
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="fromAmount" label="Amount" className="form-item">
          <InputNumber style={{ width: "100%" }} min={1} />
        </Form.Item>
        <div className="equal-sign-wrapper">
          <span className="equal-sign"> = </span>
        </div>
        <Form.Item name="toCurrency" label="Currency" className="form-item">
          <Select style={{ width: "100%" }} onChange={handleChange}>
            {_.map(currenyOptions, (each) => (
              <Option
                key={each.key}
                value={each.value}
                className="select-options"
              >
                <img src={each.image} alt=""></img>
                <span>{each.label}</span>
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="toAmount" label="Amount" className="form-item">
          <InputNumber
            style={{ width: "100%" }}
            disabled={true}
            prefix={symbol}
          />
        </Form.Item>
        <Form.Item className="align-button">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Exchange
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomForm;
