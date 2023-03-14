import { FormInstance } from "antd/es/form";
import { SyntheticEvent } from "react";

export interface ICustomFormProps {
  form: FormInstance<any>;
  handleSubmit: (values: SyntheticEvent<HTMLFormElement, Event>) => void;
  handleChange: (values: SyntheticEvent<HTMLFormElement, Event>) => void;
  symbol: string;
}

export interface IFilterFormProps {
  type?: boolean;
  form: FormInstance<any>;
  onSubmit?: (values: SyntheticEvent<HTMLFormElement, Event>) => void;
  onChange?: (values: SyntheticEvent<HTMLFormElement, Event>) => void;
}

export interface IFilterParams {
  from: string;
  to: string;
  type: string;
}
