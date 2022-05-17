import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import more from '../../../asset/img/more.svg';
const ReportInfo: FC = (): ReactElement => {
  return (
    <ReportInfoWrapper container>
      <ReportInfoHeader>
        <ReportInfoTitle>Report #43627</ReportInfoTitle>
        <ReportMoreIcon src={more} alt="more" />
      </ReportInfoHeader>

      <ReportInfoDetails container>
        <ReportInfoDetailsLeft item xs={8}>
          <ReportDetails container>
            <
          </ReportDetails>
          <ReportDetailsDescription container>
            <ReportDescriptionTitle>Return Description</ReportDescriptionTitle>
            <ReportDescriptionInfo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rutrum sem non nunc tincidunt dignissim. Maecenas consectetur erat
              eu purus pharetra, ullamcorper consequat risus faucibus. Aenean ac
              mi facilisis, molestie tortor et, fermentum lacus.
            </ReportDescriptionInfo>
          </ReportDetailsDescription>
        </ReportInfoDetailsLeft>
        <ReportInfoDetailsRight item xs={4}></ReportInfoDetailsRight>
      </ReportInfoDetails>
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

const ReportInfoHeader = styled(withTheme(Grid))(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
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

const ReportInfoDetails = styled(withTheme(Grid))(() => ({}));

const ReportInfoDetailsLeft = styled(withTheme(Grid))(() => ({}));

const ReportInfoDetailsRight = styled(withTheme(Grid))(() => ({}));
const ReportDetails = styled(withTheme(Grid))(() => ({}));
const ReportDetailsDescription = styled(withTheme(Grid))(() => ({}));
const ReportDescriptionTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(12),
  lineHeight: '120%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(6),
}));
const ReportDescriptionInfo = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '150%',
  color: theme.palette.text.primary,
}));
