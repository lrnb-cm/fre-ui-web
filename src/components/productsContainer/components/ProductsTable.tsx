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

function createData(productId: number, productDes: string, poductCode: number, productPrice: number, productDiscount: number) {
  return { productId, productDes, poductCode, productPrice, productDiscount }
}

const rows = [createData(159, 'Frozen yoghurt', 6.0, 24, 4.0), createData(237, 'Ice cream sandwich', 9.0, 37, 4.3), createData(262, 'Eclair', 16.0, 24, 6.0), createData(305, 'Cupcake', 3, 67, 4.3), createData(356, 'Gingerbread', 16.0, 49, 3.9)]

export default function ProductsTable() {
  return (
    <TableContainer component={Paper} style={{ borderRadius: '16px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tableHeaderWraper">
          <TableRow>
            <TableCell>Product ID </TableCell>
            <TableCell>Product UPC Code</TableCell>
            <TableCell>Product Description</TableCell>
            <TableCell>Item Price</TableCell>
            <TableCell>Item Discount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.productId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.productId}
              </TableCell>
              <TableCell>{row.poductCode}</TableCell>
              <TableCell>{row.productDes}</TableCell>
              <TableCell>{row.productPrice}</TableCell>
              <TableCell>{row.productDiscount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination />
    </TableContainer>
  )
}
