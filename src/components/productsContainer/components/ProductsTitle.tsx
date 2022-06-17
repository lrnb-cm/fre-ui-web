import * as React from 'react'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Box, Grid, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload'
import AddIcon from '@mui/icons-material/Add'
import TuneIcon from '@mui/icons-material/Tune'
export default function ProductsTitle() {
  return (
    <ProductDisplayContent container>
      <ProductTitle>Products</ProductTitle>
      <ProductLeftContent>
        <ExportTile>
          <IconButton>
            <SimCardDownloadIcon />
          </IconButton>
          <ExportButtonLabel>Export</ExportButtonLabel>
        </ExportTile>
        <ReportTile>
          <IconButton>
            <AddIcon style={{ backgroundColor: '#FFFFFF', borderRadius: '50%' }} />
          </IconButton>
          <AddButtonLabel>Add New Report </AddButtonLabel>
        </ReportTile>
        <IconTile>
          <IconButton>
            <TuneIcon />
          </IconButton>
        </IconTile>
      </ProductLeftContent>
    </ProductDisplayContent>
  )
}
const ProductDisplayContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: '25px'
}))

const ProductLeftContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(0)
}))

const ProductTitle = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  color: theme.palette.text.primary
}))

const ExportButtonLabel = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: 'Intro Bold',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'left'
}))

const AddButtonLabel = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  color: '#FFFFFF',
  fontFamily: 'Intro Bold',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'left'
}))

const ExportTile = styled('div')(({ theme }) => ({
  padding: theme.custom.pxToRem(6, 12),
  background: theme.palette.background.paper,
  borderRadius: theme.custom.pxToRem(16),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(16),
  border: '1px',
  borderColor: ' #E6E6E6',
  borderStyle: 'solid'
}))

const ReportTile = styled('div')(({ theme }) => ({
  padding: theme.custom.pxToRem(6, 12),
  background: '#3758CC',
  borderRadius: theme.custom.pxToRem(16),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(16),
  border: '1px',
  borderColor: ' #E6E6E6',
  borderStyle: 'solid'
}))

const IconTile = styled('div')(({ theme }) => ({
  padding: theme.custom.pxToRem(6, 12),
  background: '#EEEEEE',
  borderRadius: theme.custom.pxToRem(16),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  border: '1px',
  borderColor: ' #E6E6E6',
  borderStyle: 'solid'
}))
