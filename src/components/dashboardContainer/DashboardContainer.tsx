import React from 'react';
import { styled } from '@mui/material/styles';
import Stats from './components/stats';

export default function dashboard() {
  return (
    <DashboardLayout>
      <DashboardTitle>Dashboard</DashboardTitle>
      <DashboardStatTile>
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
  color: '#3C3C3C',
  marginBottom: '36px',
}));

const DashboardStatTile = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'space-around',
  paddingLeft: '100px',
  paddingRight: '100px',
  width: '100%',
  marginBottom: '29px',
}));

const DashboardGraphReport = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  height: '255px',
  padding: '24px',
  marginBottom: '29px',
}));

const DashboardProductReport = styled('div')(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  width: '100%',
}));

const ProductReportHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const DisplayTitle = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '120%',
  color: theme.palette.text.primary,
}));
const ViewAll = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '12px',
  textAlign: 'right',
  letterSpacing: '-0.01em',
  color: theme.palette.text.secondary,
}));
