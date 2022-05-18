import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid, Tab, Tabs } from '@mui/material';
import ReportBreadCrumb from './components/ReportBreadCrumb';
import ReportInfo from './components/ReportInfo';
import ReportActivity from './components/ReportActivity';
import { useWindowWidth } from '@react-hook/window-size';

const ReportDetails: FC = (): ReactElement => {
  const [value, setValue] = React.useState(0);
  const windowWidth = useWindowWidth();

  const handleChange = (_: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <ReportDetailsLayout>
      <ReportBreadCrumb />
      {windowWidth > 1024 ? (
        <Grid
          container
          direction="row"
          spacing={{ xs: 3, md: 2 }}
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
      ) : (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              marginTop: '20px !important',
              marginBottom: '16px !important',
              display: 'flex',
            }}
          >
            <Tab label="Report" />
            <Tab label="Activity" />
          </Tabs>
          {value === 0 && <ReportInfo />}
          {value === 1 && <ReportActivity />}
        </>
      )}
    </ReportDetailsLayout>
  );
};

export default ReportDetails;

const ReportDetailsLayout = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));
