import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import ReportBreadCrumb from './components/ReportBreadCrumb';

const ReportDetails: FC = (): ReactElement => {
  return (
    <ReportDetailsLayout>
      <ReportBreadCrumb />
    </ReportDetailsLayout>
  );
};

export default ReportDetails;

const ReportDetailsLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));
