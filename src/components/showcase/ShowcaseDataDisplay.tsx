import { MpCard, MpTable, MpBadge } from "../"
import React from "react"

const ShowcaseDataDisplay = () => {
  const tableRows = [
    { id: 1, name: "Alice Johnson", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", role: "User", status: "Active" },
    { id: 3, name: "Charlie Brown", role: "Editor", status: "Inactive" },
    { id: 4, name: "Diana Prince", role: "User", status: "Active" },
  ]

  const tableColumns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (row: any) => (
        <MpBadge colorScheme={row.status === "Active" ? "green" : "gray"}>{row.status}</MpBadge>
      ),
    },
  ]

  return (
    <MpCard title="Data Table">
      <MpTable rows={tableRows} columns={tableColumns} />
    </MpCard>
  )
}
export default ShowcaseDataDisplay
