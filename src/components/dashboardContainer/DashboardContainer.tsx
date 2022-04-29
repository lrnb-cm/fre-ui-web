import React from 'react';
import { styled } from '@mui/material/styles';

export default function dashboard() {
  return (
    <DashboardLayout>
      <DashboardTitle>Dashboard</DashboardTitle>
    </DashboardLayout>
  );
}

const DashboardLayout = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const DashboardTitle = styled('div')(({ theme }) => ({
  // fontFamily: "Intro Bold",
  // fontStyle: "normal",
  // fontWeight: 400,
  // fontSize: "32px",
  // lineHeight: "125%",
  // display: "flex",
  // alignItems: "center",
  // letterSpacing: "-0.01em",
  // color: "#3C3C3C"
  ...theme.typography.h3,
}));
