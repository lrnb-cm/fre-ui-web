import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
//import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function ShopTile() {
  const data = {
    shops: [
      { name: 'Good Shop', address: '2923 Sycamre Street Santa Clara CA ' },
      { name: 2, address: 16500 },
      { name: 3, address: 14250 },
      { name: 4, address: 19000 }
    ]
  }
  return (
    <Grid container spacing={2}>
      {data.shops.map((element) => (
        <Grid item xs={8} sm={3} md={3} sx={{ borderRadius: '16px', background: 'white', width: '288px', height: '202px ' }}>
          <Item>{element.name}</Item>
          <Address>{element.address}</Address>
          <IconsDisplayContent>
            <IconsRightContent>
              <PhoneIcon />
              <EmailIcon />
            </IconsRightContent>
            <IconsLeftContent>
              <ArrowForwardIcon />
            </IconsLeftContent>
          </IconsDisplayContent>
        </Grid>
      ))}
    </Grid>
  )
}

const Item = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '125%',
  padding: theme.spacing(1)
}))

const ShopDisplayContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: '25px'
}))

const Address = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  padding: theme.spacing(1),
  //textAlign: 'center',
  color: theme.palette.text.secondary
}))

const IconsDisplayContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: '25px'
}))
const IconsRightContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(1)
}))

const IconsLeftContent = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  color: theme.palette.text.primary
}))
