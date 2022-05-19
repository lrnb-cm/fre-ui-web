import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid, Divider } from '@mui/material';
import more from '../../../asset/img/more.svg';
import ReportInfoDetails from './ReportInfoDetails';
import ReportCustomer from './ReportCustomer';
import ReportProduct from './ReportProduct';

const ReportInfo: FC = (): ReactElement => {
  return (
    <ReportInfoWrapper container>
      <ReportInfoHeader>
        <ReportInfoTitle>Report #43627</ReportInfoTitle>
        <ReportMoreIcon src={more} alt="more" />
      </ReportInfoHeader>

      <ReportInfoDetails />

      <Divider
        variant="middle"
        sx={{ width: '100%', margin: '32px 0px', borderColor: '#E6E6E6' }}
      />
      <ReportCustomer />
      <Divider
        variant="middle"
        sx={{ width: '100%', margin: '32px 0px', borderColor: '#E6E6E6' }}
      />
      <ReportProduct />
    </ReportInfoWrapper>
  );
};

export default ReportInfo;

const ReportInfoWrapper = styled(withTheme(Grid))(() => ({
  background: '#FFFFFF',
  borderRadius: '16px',
  width: '100%',
  padding: '24px',
}));

const ReportInfoHeader = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: theme.custom.pxToRem(32),
}));
const ReportMoreIcon = styled('img')(() => ({
  cursor: 'pointer',
}));

const ReportInfoTitle = styled(withTheme(Grid))(() => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '125%',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '-0.01em',
  color: '#3C3C3C',
}));
