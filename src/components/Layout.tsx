import React, { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Theme } from '@mui/material/styles';
import Header from './headerContainer/Header';
import Sidebar from './sidebarContainer/Sidebar';
import { useReactiveVar } from '@apollo/client';
import { sidebarVar } from './sidebarContainer/state/sidebarState';

const Layout: FC = (): ReactElement => {
  const state = useReactiveVar(sidebarVar);
  const props = {
    open: state.open,
  };
  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentWrapper {...props}>
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

const ContentWrapper = styled('main', {
  shouldForwardProp: (props) => props !== 'open',
})((props: any) => {
  // console.log(props);
  const { theme, open } = props;
  return {
    height: 'auto',
    // width: `calc(100% - ${theme.custom.sidebar.open})`,
    width: '100%',
    boxSizing: 'border-box',
    // border: '1px solid violet',
    padding: theme.custom.pxToRem(16, open ? 16 : 40),
    [theme.breakpoints.up('lg')]: {
      padding: theme.custom.pxToRem(16, open ? 50 : 100),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.custom.pxToRem(16),
    },
  };
});

export default Layout;
