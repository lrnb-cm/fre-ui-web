import React, { FC, ReactElement } from 'react'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Grid, Stack } from '@mui/material'
import ShopImage from '../../../asset/img/shopImage.svg'
import telephone from '../../../asset/img/telephone.svg'
import mailbox from '../../../asset/img/mailbox.svg'
import more from '../../../asset/img/more.svg'

export default function ShopDetails() {
  return (
    <ShopDetailsDisplayWrapper>
      <ShopLeftContent container>
        <ShopImageIcon src={ShopImage} alt="shop-image" />
        <ShopContent>
          <StoreName> Nike Factory Store</StoreName>
          <StoreAddress>The Style Outlets Avenida Fonte Da Cova.</StoreAddress>
          <StoreCity>400, 4485-592 Porto, Portugal</StoreCity>
          <StoreId>
            {' '}
            Store ID: <span style={{ color: '#3C3C3C' }}>8453w5e612345</span>
          </StoreId>
          <StoreIcons>
            <TelIcon src={telephone} alt="mailbox" />
            <Mailbox src={mailbox} alt="mailbox" />
          </StoreIcons>
        </ShopContent>
      </ShopLeftContent>
    </ShopDetailsDisplayWrapper>
  )
}

const ShopDetailsDisplayWrapper = styled(withTheme(Grid))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.custom.pxToRem(24),
  marginTop: theme.custom.pxToRem(24),
  width: '100%',
  flexDirection: 'row'
  //padding: theme.custom.pxToRem(12, 18)
}))

const ShopLeftContent = styled(withTheme(Grid))(({ theme }) => ({
  //background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(24),
  padding: theme.custom.pxToRem(24, 18)
}))

const ShopContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  //marginLeft: theme.custom.pxToRem(12),
  marginBottom: theme.custom.pxToRem(24)
}))

const ShopImageIcon = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.custom.pxToRem(52),
  width: theme.typography.pxToRem(320),
  height: theme.typography.pxToRem(220)
}))

const StoreName = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(24),
  lineHeight: '125%',
  color: '#3C3C3C'
  //marginBottom: theme.custom.pxToRem(12)
}))
const StoreAddress = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary
}))
const StoreCity = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(12)
}))
const StoreId = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(35)
}))

const StoreIcons = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const TelIcon = styled('img')(({ theme }) => ({
  marginRight: theme.custom.pxToRem(20.27),
  cursor: 'pointer',
  float: 'right'
}))

const Mailbox = styled('img')(({ theme }) => ({
  cursor: 'pointer'
}))

const ReportMoreIcon = styled('img')(({ theme }) => ({
  cursor: 'pointer'
}))

const ShopRightContent = styled('div')(({ theme }) => ({
  //alignItems: 'flex-start'
  //flexDirection: 'row',
  //marginRight: theme.custom.pxToRem(0),
  //marginLeft: '18.5rem'
  //marginBottom: '14rem'
  display: 'flex',
  //alignItems: 'center',
  flexDirection: 'row'
}))
