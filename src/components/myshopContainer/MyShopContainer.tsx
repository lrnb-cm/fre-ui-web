import * as React from 'react'
import { styled } from '@mui/material/styles'
import ShopTitle from './components/ShopTitle'
import ShopTable from './components/ShopTable'

export default function MyShopContainer() {
  return (
    <ShopLayout>
      <ShopTitle />
      <ShopTable />
    </ShopLayout>
  )
}

const ShopLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}))
