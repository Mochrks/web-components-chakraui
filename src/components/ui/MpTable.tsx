"use client"

import type React from "react"

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, type TableProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface Column {
  field: string
  headerName: string
  width?: number
  flex?: number
  renderCell?: (row: any) => React.ReactNode
}

interface MpTableProps extends TableProps {
  rows: any[]
  columns: Column[]
  pagination?: boolean
}

export default function MpTable({ rows, columns, pagination = false, ...props }: MpTableProps) {
  return (
    <TableContainer>
      <Table variant="simple" {...props}>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.field} width={column.width} flex={column.flex}>
                {column.headerName}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index}>
              {columns.map((column) => (
                <Td key={column.field}>{column.renderCell ? column.renderCell(row) : row[column.field]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

MpTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
      flex: PropTypes.number,
      renderCell: PropTypes.func,
    }),
  ).isRequired,
  pagination: PropTypes.bool,
}
