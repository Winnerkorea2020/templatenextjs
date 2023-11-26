import TableList from "@/components/table/TableList";

const page = () => {
  const title = "커뮤니티 자유게시판";
  return (
    <div className="h-full bg-white">
      <TableList title={title} />
    </div>
  );
};

export default page;
