import * as React from 'react'
import { styled } from '@mui/material/styles'
import ShopTitle from './components/ShopTitle'
//import ShopTable from './components/ShopTable'
import ShopTile from './components/ShopTile'

export default function MyShopContainer() {
  return (
    <ShopLayout>
      <ShopTitle />
      <ShopTile />
    </ShopLayout>
  )
}

const ShopLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}))
