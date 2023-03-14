/**
 * Table Component
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 */
import React, { useEffect, useState } from "react";
import _ from "lodash";

import { IColumns, ITableProps } from "../../../Interfaces/table.interface";

const Table = (props: ITableProps) => {
  const { columns, data } = props;
  const [sortedData, setSortedData]: any = useState(data);
  const [sortedColumns, setSortedColumns]: any = useState({});

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleComparison = (a: any, b: any, key: string) => {
    const genreA = a[key];
    const genreB = b[key];

    let comparison = 0;
    if (genreA > genreB) {
      comparison = _.get(sortedColumns, [key]) ? -1 : 1;
    } else if (genreA < genreB) {
      comparison = _.get(sortedColumns, [key]) ? 1 : -1;
    }
    return comparison;
  };

  const handleSortingChange = (key: any) => {
    const data = _.get(sortedColumns, [key])
      ? sortedData.sort((a: any, b: any) => handleComparison(a, b, key))
      : sortedData.sort((a: any, b: any) => handleComparison(a, b, key));

    setSortedData(data);
    setSortedColumns({ ...sortedColumns, [key]: !_.get(sortedColumns, [key]) });
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          {_.map(columns, (each: IColumns) => (
            <th
              key={each.key}
              onClick={() => handleSortingChange(each.key)}
              className="table-header"
            >
              {each.title}
            </th>
          ))}
        </tr>
        {_.map(sortedData, (eachData) => (
          <tr key={eachData.id}>
            {_.map(columns, (each: IColumns) => (
              <td key={eachData.id + _.get(eachData, [each.key])}>
                {each.render
                  ? each.render(_.get(eachData, [each.key]), eachData)
                  : _.get(eachData, [each.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
