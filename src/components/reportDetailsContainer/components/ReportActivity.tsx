import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';

const ReportActivity: FC = (): ReactElement => {
  return (
    <ReportActivityWrapper container rowGap={2}>
      <ReportActivityTitle>Activity</ReportActivityTitle>
      <ReportActivityTile item>details</ReportActivityTile>
      <ReportActivityTile item>details</ReportActivityTile>
    </ReportActivityWrapper>
  );
};

export default ReportActivity;

const ReportActivityWrapper = styled(withTheme(Grid))(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const ReportActivityTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '140%',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
}));

const ReportActivityTile = styled(withTheme(Grid))(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '24px',
  gap: '24px',
  width: '100%',
  height: '96px',
  background: '#FFFFFF',
  border: '1px solid #E6E6E6',
  borderRadius: '16px',
}));
