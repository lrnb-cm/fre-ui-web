import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Pagination from '../../myshopContainer/components/Pagination'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Grid } from '@mui/material'
import '../../../scss/table.css'

function createData(storeId: number, region: string, district: string, address: string, phone: number) {
  return { storeId, region, district, address, phone }
}

const rows = [createData(159, 'New England', 'Texas', '6220 reading rd', 1234567890), createData(237, 'Mid-Atlantic', 'New York', '6220 reading rd', 1234567890), createData(262, 'Southern Region', 'Ohio', '6220 reading rd', 1234567890), createData(305, 'Mid-West', 'Kansas', '6220 reading rd', 1234567890), createData(356, 'South-West', 'Florida', '6220 reading rd', 1234567890)]

export default function ShopDetailsTable() {
  return (
    <TableContainer component={Paper} style={{ borderRadius: '16px' }}>
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        <ProductReportHeader>
          <DisplayTitle>Recent Reports</DisplayTitle>
          <ViewAll>View All</ViewAll>
        </ProductReportHeader>
      </Typography>
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

const ProductReportHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: theme.custom.pxToRem(20),
  padding: theme.custom.pxToRem(12, 18)
}))

const DisplayTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(20),
  lineHeight: '120%',
  color: theme.palette.text.primary
}))
const ViewAll = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(12),
  lineHeight: theme.custom.pxToRem(12),
  textAlign: 'right',
  letterSpacing: '-0.01em',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
}))
