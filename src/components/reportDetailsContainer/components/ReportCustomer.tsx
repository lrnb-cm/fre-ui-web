import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import ReportDetailTile from './ReportDetailTile';

const ReportCustomer: FC = (): ReactElement => {
  return (
    <ReportCustomerWrapper>
      <ReportCustomerTitle>Customer</ReportCustomerTitle>
      <CustomerDetails container spacing={{ xs: 2, lg: 0 }}>
        <ReportDetailTile
          itemsPerRow={{ xs: 12, sm: 6, lg: 2 }}
          title="Customer name"
          info="Bessie Cooper"
        />
        <ReportDetailTile
          itemsPerRow={{ xs: 12, sm: 6, lg: 2 }}
          title="Customer ID"
          info="2939940319HT"
        />
        <ReportDetailTile
          itemsPerRow={{ xs: 12, sm: 6, lg: 3 }}
          title="Email"
          info="bessie.cooper@gmail.com"
        />
        <ReportDetailTile
          itemsPerRow={{ xs: 12, sm: 6, lg: 3 }}
          title="Phone mumber"
          info="+1 321 387  657 839"
        />
      </CustomerDetails>
    </ReportCustomerWrapper>
  );
};

export default ReportCustomer;

const ReportCustomerWrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));
const ReportCustomerTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(20),
  lineHeight: '120%',
  color: theme.palette.text.primary,
  marginBottom: theme.custom.pxToRem(24),
}));
const CustomerDetails = styled(withTheme(Grid))(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));
