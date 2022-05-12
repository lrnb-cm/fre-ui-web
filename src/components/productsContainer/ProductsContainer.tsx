import * as React from 'react'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import Stack from '@mui/material/Stack'
import ProductsTable from './componenets/ProductsTable'
import GlobalSearch from './componenets/GlobalSearch'
import ProductsTitle from './componenets/ProductsTitle'
import SearchBox from './componenets/SearchBox'

export default function ProductsContainer() {
  return (
    <ProductLayout>
      <GlobalSearch />
      <ProductsTitle />
      <SearchBox />
      <ProductsTable />
    </ProductLayout>
  )
}

const ProductLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '25px'
}))
