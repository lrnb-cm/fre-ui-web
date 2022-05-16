import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';

const ReportInfo: FC = (): ReactElement => {
  return <ReportInfoWrapper container>ReportInfoWrapper</ReportInfoWrapper>;
};

export default ReportInfo;

const ReportInfoWrapper = styled(withTheme(Grid))(() => ({
  background: '#FFFFFF',
  borderRadius: '16px',
}));
