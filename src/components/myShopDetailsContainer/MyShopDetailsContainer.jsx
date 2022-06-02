import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Grid } from '@mui/material'
import ShopBreadCrumb from './components/ShopBreadCrumb'
import ShopDetails from './components/ShopDetails'
import ProductDisplay from '../dashboardContainer/components/ProductDisplay'
import ShopDetailsTable from './components/ShopDetailsTable'
import profile_img from '../../asset/img/productImg.svg'
export default function MyShopDetailsContainer() {
  return (
    <ShopDetailsLayout>
      <ShopBreadCrumb />
      <ShopDetails />
      <DisplayTitle>Most Reported Products</DisplayTitle>
      <ProductReportWrapper container spacing={{ xs: 2, lg: 1 }}>
        <ProductDisplay img={profile_img} title="Nike Air Force 1" subTitle="Nike" price={92.0} />
        <ProductDisplay img={profile_img} title="Playstation 5" subTitle="Nike" price={320.2} />
        <ProductDisplay img={profile_img} title="Xbox Series X" subTitle="Foxmart" price={315.23} />
      </ProductReportWrapper>
      <ShopDetailsTable />
    </ShopDetailsLayout>
  )
}

const ShopDetailsLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}))

const ProductReportWrapper = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.custom.pxToRem(36)
  //justifyContent: 'space-between'
}))

const DisplayTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(20),
  lineHeight: '120%',
  color: theme.palette.text.primary,
  marginBottom: theme.custom.pxToRem(12)
}))
