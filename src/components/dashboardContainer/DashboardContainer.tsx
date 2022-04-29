import React from 'react';
import { styled } from '@mui/material/styles';
import Stats from './components/stats';
import { withTheme } from '@mui/styles';
import { Box, Stack } from '@mui/material';
import ProductDisplay from './components/ProductDisplay';
import profile_img from '../../asset/img/productImg.svg';

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
      <DashboardGraphReport></DashboardGraphReport>
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
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.typography.pxToRem(36),
}));

const DashboardStatTile = styled(withTheme(Stack))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'space-around',
  paddingLeft: '100px',
  paddingRight: '100px',
  width: '100%',
  marginBottom: theme.typography.pxToRem(29),
}));

const DashboardGraphReport = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  height: theme.typography.pxToRem(255),
  padding: theme.typography.pxToRem(24),
  marginBottom: theme.typography.pxToRem(29),
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
  marginBottom: theme.typography.pxToRem(20),
}));

const DisplayTitle = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: '120%',
  color: theme.palette.text.primary,
}));
const ViewAll = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(12),
  lineHeight: theme.typography.pxToRem(12),
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
