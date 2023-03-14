/**
 * Filter Form
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 */
import React from "react";
import { Form, Button, Select, DatePicker } from "antd";
import _ from "lodash";

import { types } from "../../Constants/columnDef";
import { IFilterFormProps } from "../../Interfaces/form.interface";

const { Option } = Select;

const FilterForm = ({ form, onSubmit, onChange, type }: IFilterFormProps) => {
  return (
    <div className="filter-form-wrapper">
      <Form
        form={form}
        name="filter"
        layout="inline"
        onFinish={onSubmit}
        onChange={onChange}
        onSelect={onChange}
        initialValues={{ type: "All" }}
      >
        <Form.Item name="from" label="From date" className="form-item">
          <DatePicker />
        </Form.Item>
        <Form.Item name="to" label="To date" className="form-item">
          <DatePicker />
        </Form.Item>
        {type && (
          <Form.Item name="type" label="Currency" className="form-item">
            <Select style={{ width: "100%" }} onChange={onChange}>
              {_.map(types, (each) => (
                <Option
                  key={each.key}
                  value={each.value}
                  className="select-options"
                >
                  {each.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item className="align-button">
          <Button htmlType="submit">Filter</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FilterForm;
