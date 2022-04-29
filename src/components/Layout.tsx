import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';

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
  // width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
}));

const SidebarWrapper = styled('div')(({ theme }) => ({
  width: '72px',
  height: '100vh',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  padding: '16px 140px',
  height: 'auto',
  width: '100%',
}));

const HeaderWrapper = styled('div')(({ theme }) => ({
  marginBottom: '36px',
  height: '50px',
  background: theme.palette.background.paper,
  borderRadius: '16px',
  width: '100%',
}));

export default Layout;
