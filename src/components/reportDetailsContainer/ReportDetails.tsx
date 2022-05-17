import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import ReportBreadCrumb from './components/ReportBreadCrumb';
import ReportInfo from './components/ReportInfo';
import ReportActivity from './components/ReportActivity';

const ReportDetails: FC = (): ReactElement => {
  return (
    <ReportDetailsLayout>
      <ReportBreadCrumb />
      <Grid
        container
        direction="row"
        spacing={{ xs: 3 }}
        sx={{
          marginTop: '20px !important',
        }}
      >
        <Grid item xs={8}>
          <ReportInfo />
        </Grid>
        <Grid item xs={4}>
          <ReportActivity />
        </Grid>
      </Grid>
    </ReportDetailsLayout>
  );
};

export default ReportDetails;

const ReportDetailsLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));
