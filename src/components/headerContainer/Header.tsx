import React, { FC, ReactElement } from 'react';
import { styled, Theme } from '@mui/material/styles';
import GlobalSearch from './GlobalSearch';

const Header: FC = (): ReactElement => {
  return (
    <HeaderWrapper>
      <GlobalSearch />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.custom.pxToRem(36),
  height: theme.custom.pxToRem(50),
  background: theme.palette.background.paper,
  borderRadius: '16px',
  width: '100%',
  //   overflow: 'hidden',
  // border: '1px solid pink',
}));

export default Header;
