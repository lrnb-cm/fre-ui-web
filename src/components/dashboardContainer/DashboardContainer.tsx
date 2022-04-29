import React from 'react';
import { styled } from '@mui/material/styles';

export default function dashboard() {
  return <DashboardLayout>here</DashboardLayout>;
}

const DashboardLayout = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
