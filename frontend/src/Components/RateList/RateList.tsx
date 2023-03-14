/**
 * Rate List (Mobile view)
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 */
import React from "react";
import { Card } from "antd";
import _ from "lodash";
import { getFormattedPrice } from "../../Utils/helpers";
import { IRateListProps } from "../../Interfaces/ratelist.inteface";

const RateList = ({ rates, onNext, meta }: IRateListProps) => {
  return (
    <React.Fragment>
      <div className="rate-list">
        {_.map(rates, (each) => (
          <Card size="small" className="rate-list-item">
            <div className="list-title">
              <span>{`${each.fromCurrency} -> ${each.toCurrency}`}</span>
              <span
                className={
                  each.type === "Exchanged"
                    ? "dot color-secondary"
                    : "dot color-primary"
                }
              ></span>
            </div>
            <span>
              Amount&nbsp;&nbsp;$
              {getFormattedPrice(each.toAmount, each.toCurrency)}
            </span>
          </Card>
        ))}
      </div>
      <h3 className="load-next" onClick={() => onNext(meta.page + 1)}>
        Next
      </h3>
    </React.Fragment>
  );
};

export default RateList;
