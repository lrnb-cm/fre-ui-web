import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import ReportActivityTile from './ReportActivityTile';
import ActivityReportIcon from '../../../asset/icons/activityReport';
import ActivityReportPlayIcon from '../../../asset/icons/activityReportPlay';

const ReportActivity: FC = (): ReactElement => {
  return (
    <ReportActivityWrapper container rowGap={2}>
      <ReportActivityTitle>Activity</ReportActivityTitle>

      <ReportActivityTile
        icon={ActivityReportIcon}
        desc="Report received. 14 days left to finish report"
        time="15 mins ago"
      />

      <ReportActivityTile
        icon={ActivityReportPlayIcon}
        desc="Status changed to In progress"
        time="2 days ago"
      />
    </ReportActivityWrapper>
  );
};

export default ReportActivity;

const ReportActivityWrapper = styled(withTheme(Grid))(() => ({
  display: 'flex',
  flexDirection: 'column',
  // width: '100%',
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
