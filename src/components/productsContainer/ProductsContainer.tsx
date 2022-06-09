import * as React from 'react'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import Stack from '@mui/material/Stack'
import ProductsTable from './components/ProductsTable'
import ProductsTitle from './components/ProductsTitle'
import SearchBox from './components/SearchBox'

export default function ProductsContainer() {
  return (
    <ProductLayout>
      <ProductsTitle />
      <SearchBox />
      <ProductsTable />
    </ProductLayout>
  )
}

const ProductLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}))
