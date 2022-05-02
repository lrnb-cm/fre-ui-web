import React, { FC, ReactElement } from 'react';
import { styled, Theme } from '@mui/material/styles';

const Layout: FC = ({ children }): ReactElement => {
  return (
    <LayoutWrapper>
      <SidebarWrapper>Sidebar</SidebarWrapper>
      <ContentWrapper>
        <HeaderWrapper />
        {children}
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
  padding: theme.custom.pxToRem(16, 100),
  height: 'auto',
  width: `calc(100% - ${theme.custom.sidebar})`,
  boxSizing: 'border-box',
  border: '1px solid violet',
}));

const HeaderWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.custom.pxToRem(36),
  height: theme.custom.pxToRem(50),
  background: theme.palette.background.paper,
  borderRadius: '16px',
  width: '100%',
  // border: '1px solid pink',
}));

export default Layout;
