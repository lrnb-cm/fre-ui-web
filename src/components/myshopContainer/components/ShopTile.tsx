import React, { useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import telephone from '../../../asset/img/telephone.svg'
import mailbox from '../../../asset/img/mailbox.svg'
import arrowRight from '../../../asset/img/arrow-right.svg'

export default function ShopTile() {
  const data = {
    shops: [
      { name: 'Good Shop', address: '2923 Sycamre Street  ', city: 'Santa Clara CA' },
      { name: 'NiKe Store', address: '2923 Sycamre Street ', city: 'Santa Clara CA' },
      { name: 'Store #361', address: '2923 Sycamre Street ', city: 'Santa Clara CA' },
      { name: 'Nike official Retail', address: '2923 Sycamre Street', city: 'Santa Clara CA' },
      { name: 'Good Shop', address: '2923 Sycamre Street ', city: 'Santa Clara CA' },
      { name: 'All Stars', address: '2923 Sycamre Street ', city: 'Santa Clara CA' }
    ]
  }

  const [fill, setFill] = useState('#3C3C3C')
  return (
    <Grid container spacing={{ xs: 2, md: 2, lg: 4 }}>
      {data.shops.map((element) => (
        <Grid item md={6} lg={3} xs={12}>
          <ReportContactWrapper onMouseEnter={() => setFill('#fff')} onMouseLeave={() => setFill('#3C3C3C')}>
            <ReportContactName className="deschover">{element.name}</ReportContactName>
            <ReportContactAddress className="addresshover">{element.address}</ReportContactAddress>
            <ReportContactCity className="addresshover">{element.city}</ReportContactCity>
            <ReportContactIcons>
              <div>
                <TelIcon src={telephone} alt="mailbox" className="iconhover" />
                <Mailbox src={mailbox} alt="mailbox" className="iconhover" />
              </div>
              <ArrowRight src={arrowRight} alt="arrowRight" className="iconhover" />
            </ReportContactIcons>
          </ReportContactWrapper>
        </Grid>
      ))}
    </Grid>
  )
}

const ReportContactWrapper = styled('div')(({ theme }) => ({
  background: '#FFFFFF',
  border: '1px solid #E6E6E6',
  borderRadius: theme.custom.pxToRem(16),
  padding: theme.custom.pxToRem(24),

  '&:hover': {
    background: '#3758CC'
  },
  '&:hover .deschover': {
    color: '#ffffff'
  },
  '&:hover .addresshover': {
    color: '#ffffff',
    opacity: 0.7
  },
  '&:hover .iconhover ': {
    color: '#FFF !important',
    filter: 'brightness(0) invert(1)'
  }
}))
const ReportContactName = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(24),
  lineHeight: '125%',
  color: '#3C3C3C',
  marginBottom: theme.custom.pxToRem(12)
}))
const ReportContactAddress = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary
}))
const ReportContactCity = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(35)
}))
const ReportContactIcons = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const TelIcon = styled('img')(({ theme }) => ({
  marginRight: theme.custom.pxToRem(20.27),
  cursor: 'pointer'
}))

const ArrowRight = styled('img')(({ theme }) => ({
  cursor: 'pointer'
}))

const Mailbox = styled('img')(({ theme }) => ({
  cursor: 'pointer'
}))
