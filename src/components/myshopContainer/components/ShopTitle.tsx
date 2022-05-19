import * as React from 'react'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded'

export default function ShopTitle() {
  return (
    <ShopDisplayContent container>
      <Title>My Shops</Title>
      <ShopLeftContent>
        <IconButton>
          <GridViewRoundedIcon sx={{ margin: '10px', color: '#969696' }} />
        </IconButton>
        <IconButton sx={{ color: '#3C3C3C' }}>
          <ViewStreamRoundedIcon />
        </IconButton>
      </ShopLeftContent>
    </ShopDisplayContent>
  )
}
const ShopDisplayContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: '25px'
}))
const ShopLeftContent = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(0)
}))

const Title = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  color: theme.palette.text.primary
}))
