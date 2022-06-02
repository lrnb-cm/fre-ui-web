import React, { FC, ReactElement } from 'react'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Grid, Stack } from '@mui/material'
import ShopImage from '../../../asset/img/shopImage.png'
import telephone from '../../../asset/img/telephone.svg'
import mailbox from '../../../asset/img/mailbox.svg'
import more from '../../../asset/img/more.svg'

export default function ShopDetails() {
  return (
    <ShopDetailsDisplayWrapper container spacing={{ xs: 2, md: 2, lg: 0 }}>
      <ShopImageWrapper item xs={4} lg={2}>
        <ShopImageIcon src={ShopImage} alt="shop-image" />
      </ShopImageWrapper>

      <ShopContent item xs={8} lg={9}>
        <StoreNameWrapper container>
          <StoreName item xs={8}>
            {' '}
            Nike Factory Store
          </StoreName>
          <Grid item xs={4}>
            <ReportMoreIcon src={more} alt="more-icon" />
          </Grid>
        </StoreNameWrapper>

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
    </ShopDetailsDisplayWrapper>
  )
}

const ShopDetailsDisplayWrapper = styled(withTheme(Grid))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'row',
  //marginRight: theme.custom.pxToRem(24),
  padding: theme.custom.pxToRem(24, 24),
  marginBottom: theme.custom.pxToRem(24),
  marginTop: '20px !important'
  /*[theme.breakpoints.down('lg')]: {
    padding: '12px'
  }*/
}))

const ShopLeftContent = styled(withTheme(Grid))(({ theme }) => ({
  //background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(24),
  padding: theme.custom.pxToRem(24, 18)
}))

const ShopContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  paddingTop: '0px !important',
  //marginLeft: theme.custom.pxToRem(12),
  //marginBottom: theme.custom.pxToRem(24),
  [theme.breakpoints.up('lg')]: {
    marginLeft: '64px'
  }
}))

const ShopImageIcon = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.custom.pxToRem(52),
  //width: theme.typography.pxToRem(320),
  width: '100%',
  height: '100%'
}))
const ShopImageWrapper = styled(withTheme(Grid))(({ theme }) => ({
  paddingTop: '0px !important',
  paddingLeft: '0px !important',
  borderRadius: '16px',
  overflow: 'hidden',
  height: '264px'
}))

const StoreName = styled(withTheme(Grid))(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(24),
  lineHeight: '125%',
  color: '#3C3C3C',
  marginTop: '20px',

  marginBottom: theme.custom.pxToRem(18)
}))
const StoreNameWrapper = styled(withTheme(Grid))(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(24),
  lineHeight: '125%',
  color: '#3C3C3C',
  display: 'flex',
  justifyContent: 'space-between'

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
  marginBottom: theme.custom.pxToRem(18)
}))
const StoreId = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(36.4)
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
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  float: 'right'
}))

const ShopRightContent = styled(withTheme(Grid))(({ theme }) => ({
  flexDirection: 'row',
  marginLeft: '55.5rem',
  marginBottom: '14rem',
  //alignItems: 'center',
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.custom.pxToRem(0)
}))
