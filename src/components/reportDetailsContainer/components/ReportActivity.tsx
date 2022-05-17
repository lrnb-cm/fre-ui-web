import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import activityreport from '../../../asset/img/activityreport.svg';
import { theme } from '../../../theme';
const ReportActivity: FC = (): ReactElement => {
  return (
    <ReportActivityWrapper container rowGap={2}>
      <ReportActivityTitle>Activity</ReportActivityTitle>
      <ReportActivityTile item>
        <ReportTileIcon src={activityreport} alt="activityreport" />
        <ReportDesc>Report received. 14 days left to finish report</ReportDesc>
        <ReportTime>15 mins ago</ReportTime>
      </ReportActivityTile>
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

const ReportActivityTile = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.custom.pxToRem(24, 22),
  gap: '16px',
  width: '100%',
  // height: '96px',
  background: '#FFFFFF',
  border: '1px solid #E6E6E6',
  borderRadius: '16px',
}));

const ReportTileIcon = styled('img')(({ theme }) => ({
  // marginRight: theme.custom.pxToRem(20.25),
}));

const ReportDesc = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.primary,
  maxWidth: theme.custom.pxToRem(185),
}));

const ReportTime = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(12),
  lineHeight: '120%',
  color: theme.palette.text.secondary,
}));
