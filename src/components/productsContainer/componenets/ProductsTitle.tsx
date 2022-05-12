import * as React from 'react'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Box, Grid, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'
import AddIcon from '@mui/icons-material/Add'
import TuneIcon from '@mui/icons-material/Tune'
export default function ProductsTitle() {
  return (
    <ProductDisplayContent>
      <ProductTitle>Products</ProductTitle>
      <ProductLeftContent>
        <Export>
          <IconButton>
            <SystemUpdateAltIcon />
          </IconButton>
        </Export>
        <ExportButtonLabel>Export</ExportButtonLabel>
        <IconButton>
          <AddIcon />
        </IconButton>
        <AddButtonLabel>Add New Report </AddButtonLabel>
        <IconButton>
          <TuneIcon />
        </IconButton>
      </ProductLeftContent>
    </ProductDisplayContent>
  )
}
const ProductDisplayContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginTop: '25px'
}))

const ProductLeftContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row'
}))

const ProductTitle = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  color: theme.palette.text.primary,
  marginBottom: '25px',
  marginTop: '25px'
}))

const Export = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row'
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
  fontFamily: 'Intro Bold',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'left'
}))
