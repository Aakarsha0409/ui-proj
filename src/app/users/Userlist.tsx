"use client";
import React from "react";
import { CELL_TYPES, ColumnBuilder } from "@/fwk/oTable";
import { OTable } from "@/fwk/oTable";
import { useRouter } from "next/navigation";
import { Avatar } from "@mui/material";


const Columns = [
    ColumnBuilder()
    .id("username")
    .name("Username")
    .width(200)
    .component((data) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar>{data.row.original.username.charAt(0)}</Avatar>
        <span style={{ marginLeft: "0.5rem" }}>{data.value}</span>
      </div>
    ))
    .build(),
  ColumnBuilder().id("password").name("Password").width(200).build(),
  ColumnBuilder().id("name").name("Name").width(200).build(),
  ColumnBuilder().id("role").name("Role").width(200).build(),
];

export default function Userlist() {
  const [data, setData] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    fetch("/api/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const openIntegration = (row: TSAny) => {
    router.push(`/user/${row._id}`);
  };

  return (
    <OTable
      isFullWidthTable
      stickyHeader
      columns={Columns}
      data={data}
      onRowClick={openIntegration}
    />
  );
}
