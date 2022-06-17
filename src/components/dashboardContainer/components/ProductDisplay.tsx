import { FC, ReactElement } from 'react'
import { styled } from '@mui/material/styles'
import { ProductDisplayType } from '../types'
import { withTheme } from '@mui/styles'
import { Box, Grid, Stack } from '@mui/material'
import MuiAvatar from '@mui/material/Avatar'

const ProductDisplay: FC<ProductDisplayType> = ({ img, title, subTitle, price }): ReactElement => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <ProductDisplayContent>
        <ProductLeftContent>
          <Avatar src={img} />
          <ProductContent direction="row">
            <ProductTitle>{title}</ProductTitle>
            <ProductSubTitle>{subTitle}</ProductSubTitle>
          </ProductContent>
        </ProductLeftContent>

        <ProductPrice>${price.toFixed(2)}</ProductPrice>
      </ProductDisplayContent>
    </Grid>
  )
}

const ProductDisplayContent = styled('div')(({ theme }) => ({
  padding: theme.custom.pxToRem(12, 24),
  background: theme.palette.background.paper,
  borderRadius: theme.custom.pxToRem(16),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row'
}))

const ProductLeftContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginRight: theme.custom.pxToRem(18)
}))

const Avatar = styled(withTheme(MuiAvatar))(({ theme }) => ({
  width: theme.typography.pxToRem(32),
  height: theme.typography.pxToRem(32)
}))

const ProductContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  marginLeft: theme.custom.pxToRem(16)
}))

const ProductTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '150%',
  color: theme.palette.text.primary
}))
const ProductSubTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(12),
  lineHeight: '120%',
  color: theme.palette.text.secondary
}))

const ProductPrice = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '140%',
  //   textAlign: 'right',
  color: theme.palette.text.primary
}))

export default ProductDisplay
