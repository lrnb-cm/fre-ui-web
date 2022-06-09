import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import arrowBack from '../../../asset/img/arrowBack.svg';
import cursorPlay from '../../../asset/img/cursorPlay.svg';

const ReportBreadCrumb: FC = (): ReactElement => {
  return (
    <BreadCrumbWrapper container>
      <Grid item>
        <BackIcon src={arrowBack} alt="back-icon" />
      </Grid>
      <Grid item>
        <ReportTitle>Reports</ReportTitle>
      </Grid>
      <Grid item>
        <CursorPlayIcon src={cursorPlay} alt="arrowback-icon" />
      </Grid>
      <Grid item>
        <ReportNumber>Report #43627</ReportNumber>
      </Grid>
    </BreadCrumbWrapper>
  );
};

export default ReportBreadCrumb;

const BreadCrumbWrapper = styled(withTheme(Grid))(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
}));
const BackIcon = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.custom.pxToRem(34.75),
}));

const CursorPlayIcon = styled('img')(({ theme }) => ({
  marginRight: theme.custom.pxToRem(15.5),
}));
const ReportTitle = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '140%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary,
  marginRight: theme.custom.pxToRem(15.5),
}));

const ReportNumber = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '140%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));
