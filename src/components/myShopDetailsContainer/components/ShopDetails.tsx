import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import React from 'react'
import mailbox from '../../../asset/img/mailbox.svg'
import more from '../../../asset/img/more.svg'
import image from '../../../asset/img/shopImage.png'
import telephone from '../../../asset/img/telephone.svg'

export default function ShopDetails() {
   return (
      <ShopDetailsDisplayWrapper container>
         <ShopImageWrapper item xs={12} md={3} order={{ xs: 3, md: 2 }}>
            <ShopImage src={image} alt="shop-image" />
         </ShopImageWrapper>
         <ShopContent item xs={12} md={9} order={{ xs: 2, md: 3 }}>
            <ShopNameWrapper container>
               <ShopName item xs={11} md={8}>
                  Nike Factory Store
               </ShopName>
               <Grid item xs={1} md={4}>
                  <ReportMoreIcon src={more} alt="more-icon" />
               </Grid>
            </ShopNameWrapper>
            <ShopAddress>The Style Outlets Avenida Fonte Da Cova.</ShopAddress>
            <ShopCity>400, 4485-592 Porto, Portugal</ShopCity>
            <ShopId>
               {' '}
               Store ID: <span style={{ color: '#3C3C3C' }}>8453w5e612345</span>
            </ShopId>
            <ShopIcons>
               <TelIcon src={telephone} alt="mailbox" />
               <Mailbox src={mailbox} alt="mailbox" />
            </ShopIcons>
         </ShopContent>
      </ShopDetailsDisplayWrapper>
   )
}

const ShopDetailsDisplayWrapper = styled(withTheme(Grid))(({ theme }) => ({
   background: theme.palette.background.paper,
   borderRadius: '16px',
   display: 'flex',
   flexDirection: 'row',
   padding: theme.custom.pxToRem(24, 24),
   marginBottom: theme.custom.pxToRem(24),
   marginTop: '20px !important',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const ShopImage = styled('img')(({ theme }) => ({
   cursor: 'pointer',
   width: '100%',
   height: 'auto',
}))
const ShopImageWrapper = styled(withTheme(Grid))(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: '0px !important',
   paddingLeft: '0px !important',
   borderRadius: '16px',
   overflow: 'hidden',
   height: '264px',
}))

const ShopContent = styled(withTheme(Grid))(({ theme }) => ({
   display: 'flex',
   alignItems: 'flex-start',
   flexDirection: 'column',
   paddingTop: '0px !important',
   [theme.breakpoints.up('md')]: {
      paddingLeft: '64px',
   },
   [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
   },
}))

const ShopName = styled(withTheme(Grid))(({ theme }) => ({
   fontFamily: theme.typography.fontFamilyBold,
   fontStyle: 'normal',
   fontWeight: theme.typography.fontWeightBold,
   fontSize: theme.custom.pxToRem(24),
   lineHeight: '125%',
   color: '#3C3C3C',
   marginTop: '20px',
   marginBottom: theme.custom.pxToRem(18),
   [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
   },
}))
const ReportMoreIcon = styled('img')(({ theme }) => ({
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   float: 'right',
   [theme.breakpoints.up('xl')]: {
      marginRight: '-10px',
   },
}))

const ShopNameWrapper = styled(withTheme(Grid))(({ theme }) => ({
   fontFamily: theme.typography.fontFamilyBold,
   fontStyle: 'normal',
   fontWeight: theme.typography.fontWeightBold,
   fontSize: theme.custom.pxToRem(24),
   lineHeight: '125%',
   color: '#3C3C3C',
   display: 'flex',
   justifyContent: 'space-between',
}))

const ShopAddress = styled('div')(({ theme }) => ({
   fontFamily: theme.typography.fontFamily,
   fontStyle: 'normal',
   fontWeight: theme.typography.fontWeightRegular,
   fontSize: theme.custom.pxToRem(16),
   lineHeight: '150%',
   color: theme.palette.text.secondary,
}))
const ShopCity = styled('div')(({ theme }) => ({
   fontFamily: theme.typography.fontFamily,
   fontStyle: 'normal',
   fontWeight: theme.typography.fontWeightRegular,
   fontSize: theme.custom.pxToRem(16),
   lineHeight: '150%',
   color: theme.palette.text.secondary,
   marginBottom: theme.custom.pxToRem(18),
}))
const ShopId = styled('div')(({ theme }) => ({
   fontFamily: theme.typography.fontFamily,
   fontStyle: 'normal',
   fontWeight: theme.typography.fontWeightRegular,
   fontSize: theme.custom.pxToRem(16),
   lineHeight: '150%',
   color: theme.palette.text.secondary,
   marginBottom: theme.custom.pxToRem(36.4),
}))

const ShopIcons = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
}))

const TelIcon = styled('img')(({ theme }) => ({
   marginRight: theme.custom.pxToRem(20.27),
   cursor: 'pointer',
   float: 'right',
}))

const Mailbox = styled('img')(({ theme }) => ({
   cursor: 'pointer',
}))
