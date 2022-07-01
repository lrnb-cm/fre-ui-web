import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import arrowBack from '../../../asset/img/arrowBack.svg'
import cursorPlay from '../../../asset/img/cursorPlay.svg'

export default function ShopBreadCrumb() {
  const navigate = useNavigate()
  return (
    <BreadCrumbWrapper container>
      <Grid item onClick={() => navigate(-1)}>
        <BackIcon src={arrowBack} alt="back-icon" />
      </Grid>
      <Grid item onClick={() => navigate("/dashboard/myshops")}>
        <ShopTitle>My shops</ShopTitle>
      </Grid>
      <Grid item>
        <CursorPlayIcon src={cursorPlay} alt="arrowback-icon" />
      </Grid>
      <Grid item>
        <ShopName>Nike Factory Store</ShopName>
      </Grid>
    </BreadCrumbWrapper>
  )
}

const BreadCrumbWrapper = styled(withTheme(Grid))(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center'
}))
const BackIcon = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.custom.pxToRem(34.75)
}))

const CursorPlayIcon = styled('img')(({ theme }) => ({
  marginRight: theme.custom.pxToRem(15.5)
}))
const ShopTitle = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '140%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary,
  marginRight: theme.custom.pxToRem(15.5)
}))

const ShopName = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '140%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary
}))
