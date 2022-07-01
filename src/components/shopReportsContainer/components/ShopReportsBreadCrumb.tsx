import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import arrowBack from '../../../asset/img/arrowBack.svg'
import cursorPlay from '../../../asset/img/cursorPlay.svg'

export default function ShopReportsBreadCrumb() {
  const navigate = useNavigate()
  return (
    <BreadCrumbWrapper container>
      <Grid item onClick={() => navigate(-1)}>
        <BackIcon src={arrowBack} alt="back-icon" />
      </Grid>
      <Grid item onClick={() => navigate("/dashboard/myshops")}>
        <BreadCrumbSegment>My shops</BreadCrumbSegment>
      </Grid>
      <Grid item>
        <CursorPlayIcon src={cursorPlay} alt="arrowback-icon" />
      </Grid>
      {/* Todo: make url and name dynamic during API integration */}
      <Grid item onClick={() => navigate("/dashboard/myshops/details")}>
        <BreadCrumbSegment>Good Shop</BreadCrumbSegment>
      </Grid>
      <Grid item>
        <CursorPlayIcon src={cursorPlay} alt="arrowback-icon" />
      </Grid>
      <Grid item>
        <ShopName>All Reports</ShopName>
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
const BreadCrumbSegment = styled('button')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '140%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary,
  marginRight: theme.custom.pxToRem(15.5),
  border: 'none',
  background: theme.palette.background.default
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
