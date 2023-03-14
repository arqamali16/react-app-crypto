/**
 * Cutom Table with Pagination
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 */
import { Pagination } from "antd";
import Table from "../Common/Table";

import { ICustomTableProps } from "../../Interfaces/table.interface";

const CustomTable = ({
  columns,
  data,
  meta,
  onPageChange,
}: ICustomTableProps) => {
  const { page, count, limit } = meta;
  return (
    <div className="table-wrapper">
      <Table columns={columns} data={data} />
      {page > 0 && (
        <Pagination
          defaultPageSize={limit}
          current={page}
          total={count}
          onChange={onPageChange}
        />
      )}
    </div>
  );
};

export default CustomTable;
