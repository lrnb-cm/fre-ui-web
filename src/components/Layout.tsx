import React, { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Theme } from '@mui/material/styles';
import Header from './headerContainer/Header';
import Sidebar from './sidebarContainer/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const Layout: FC = (): ReactElement => {
  const open: boolean = useSelector((state: RootState) => state.UI.openSideBar);

  const props = {
    open: open,
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
  console.log(props);
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
  };
});

export default Layout;
