import React from 'react';
import { styled } from '@mui/material/styles';
import Stats from './components/stats';
import { withTheme } from '@mui/styles';
import { Box, Stack } from '@mui/material';
import ProductDisplay from './components/ProductDisplay';
import profile_img from '../../asset/img/productImg.svg';
import BarGraph from './components/BarChart';
import barData from './components/barData';
import ChartSection from './components/ChartSection';

export default function dashboard() {
  return (
    <DashboardLayout>
      <DashboardTitle>Dashboard</DashboardTitle>
      <DashboardStatTile flexDirection="row">
        <Stats title="shops" count={321} />
        <Stats title="customers" count={23391} />
        <Stats title="Total returns" count={1550} />
        <Stats title="received" count={1200} />
        <Stats title="in progress" count={350} />
      </DashboardStatTile>
      <DashboardGraphReport gap={1}>
        <ChartSection barData={barData} total={1824} title="Report Summary" />
        <ChartSection
          barData={barData}
          total={824}
          title="Reporting Customers"
        />
        <ChartSection barData={barData} total={84} title="Total Returns" />
      </DashboardGraphReport>
      <DashboardProductReport>
        <ProductReportHeader>
          <DisplayTitle>Most Reported Products</DisplayTitle>
          <ViewAll>View All</ViewAll>
        </ProductReportHeader>
        <ProductDisplayWrapper flexDirection="row">
          <ProductDisplay
            img={profile_img}
            title="Nike Air Force 1"
            subTitle="Nike"
            price={92.0}
          />
          <ProductDisplay
            img={profile_img}
            title="Playstation 5"
            subTitle="Nike"
            price={320.2}
          />
          <ProductDisplay
            img={profile_img}
            title="Xbox Series X"
            subTitle="Foxmart"
            price={315.23}
          />
          <ProductDisplay
            img={profile_img}
            title="Apple Pro Fridge"
            subTitle="Nike"
            price={1777.7}
          />
        </ProductDisplayWrapper>
      </DashboardProductReport>
    </DashboardLayout>
  );
}

const DashboardLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const DashboardTitle = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.primary,
  marginBottom: theme.custom.pxToRem(36),
}));

const DashboardStatTile = styled(withTheme(Stack))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'space-around',
  paddingLeft: theme.custom.pxToRem(100),
  paddingRight: theme.custom.pxToRem(100),
  width: '100%',
  marginBottom: theme.custom.pxToRem(29),
}));

const DashboardGraphReport = styled(withTheme(Box))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  height: theme.custom.pxToRem(255),
  padding: theme.custom.pxToRem(24),
  marginBottom: theme.custom.pxToRem(29),
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const DashboardProductReport = styled('div')(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  width: '100%',
  flexDirection: 'column',
}));

const ProductReportHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: theme.custom.pxToRem(20),
}));

const DisplayTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(20),
  lineHeight: '120%',
  color: theme.palette.text.primary,
}));
const ViewAll = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(12),
  lineHeight: theme.custom.pxToRem(12),
  textAlign: 'right',
  letterSpacing: '-0.01em',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

const ProductDisplayWrapper = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
