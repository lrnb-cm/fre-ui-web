import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Pagination from './Pagination'
import '../../../scss/table.css'

function createData(storeId: number, region: string, district: string, address: string, phone: number) {
  return { storeId, region, district, address, phone }
}

const rows = [createData(159, 'New England', 'Texas', '6220 reading rd', 1234567890), createData(237, 'Mid-Atlantic', 'New York', '6220 reading rd', 1234567890), createData(262, 'Southern Region', 'Ohio', '6220 reading rd', 1234567890), createData(305, 'Mid-West', 'Kansas', '6220 reading rd', 1234567890), createData(356, 'South-West', 'Florida', '6220 reading rd', 1234567890)]

export default function ShopTable() {
  return (
    <TableContainer component={Paper} style={{ borderRadius: '16px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tableHeaderWraper">
          <TableRow>
            <TableCell> Store ID </TableCell>
            <TableCell>Region</TableCell>
            <TableCell>District</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.storeId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.storeId}
              </TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.district}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination />
    </TableContainer>
  )
}
