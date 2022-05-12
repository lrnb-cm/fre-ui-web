import React, { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Theme } from '@mui/material/styles';
import Header from './headerContainer/Header';
const Layout: FC = (): ReactElement => {
  return (
    <LayoutWrapper>
      <SidebarWrapper>Sidebar</SidebarWrapper>
      <ContentWrapper>
        <Header />
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
  maxWidth: '100vw',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  boxSizing: 'border-box',
  // border: '1px solid red',
}));

const SidebarWrapper = styled('div')(({ theme }: { theme: Theme }) => {
  return {
    minWidth: theme.custom.sidebar,
    minHeight: '100%',
    border: '1px solid blue',
  };
});

const ContentWrapper = styled('div')(({ theme }) => ({
  height: 'auto',
  width: `calc(100% - ${theme.custom.sidebar})`,
  boxSizing: 'border-box',
  border: '1px solid violet',
  padding: theme.custom.pxToRem(16, 40),
  [theme.breakpoints.up('lg')]: {
    padding: theme.custom.pxToRem(16, 100),
  },
}));

export default Layout;
