import BoardTable from "@/components/Board/BoardTable";
import TableList from "@/components/table/TableList";
import React from "react";

const page = () => {
  const title = "공지사항";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
