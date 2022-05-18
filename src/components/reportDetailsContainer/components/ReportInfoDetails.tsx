import React, { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import telephone from '../../../asset/img/telephone.svg';
import mailbox from '../../../asset/img/mailbox.svg';
import arrowRight from '../../../asset/img/arrow-right.svg';
import ReportDetailTile from './ReportDetailTile';

const ReportInfoDetails: FC = (): ReactElement => {
  return (
    <Grid container columnSpacing={2}>
      <ReportInfoDetailsLeft item xs={7}>
        <ReportDetails container spacing={{ xs: 2, lg: 0 }}>
          <ReportDetailTile
            itemsPerRow={{ xs: 6, lg: 4 }}
            title="Date of Report"
            info="15.09.2021"
          />
          <ReportDetailTile
            itemsPerRow={{ xs: 6, lg: 4 }}
            title="Type"
            info="Return"
          />
          <ReportDetailTile
            itemsPerRow={{ xs: 6, lg: 4 }}
            title="Status"
            info="In Progress"
            icon
          />
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
      <ReportInfoDetailsRight item xs={5}>
        <ReportContactWrapper>
          <ReportContactName>Good Shop</ReportContactName>
          <ReportContactAddress>
            2923 Sycamore Street Santa Clara, CA
          </ReportContactAddress>
          <ReportContactIcons>
            <div>
              <TelIcon src={telephone} alt="telephone" />
              <Mailbox src={mailbox} alt="mailbox" />
            </div>
            <ArrowRight src={arrowRight} alt="arrowRight" />
          </ReportContactIcons>
        </ReportContactWrapper>
      </ReportInfoDetailsRight>
    </Grid>
  );
};

export default ReportInfoDetails;

const ReportInfoDetailsLeft = styled(withTheme(Grid))(() => ({}));
const ReportInfoDetailsRight = styled(withTheme(Grid))(() => ({}));
const ReportDetails = styled(withTheme(Grid))(({ theme }) => ({
  marginBottom: theme.custom.pxToRem(32),
}));
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

const ReportContactWrapper = styled('div')(({ theme }) => ({
  background: '#FFFFFF',
  border: '1px solid #E6E6E6',
  borderRadius: theme.custom.pxToRem(16),
  padding: theme.custom.pxToRem(24),
}));
const ReportContactName = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.custom.pxToRem(24),
  lineHeight: '125%',
  color: '#3C3C3C',
  marginBottom: theme.custom.pxToRem(12),
}));
const ReportContactAddress = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(35),
}));
const ReportContactIcons = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const TelIcon = styled('img')(({ theme }) => ({
  marginRight: theme.custom.pxToRem(20.27),
  cursor: 'pointer',
}));

const ArrowRight = styled('img')(({ theme }) => ({
  cursor: 'pointer',
}));

const Mailbox = styled('img')(({ theme }) => ({
  cursor: 'pointer',
}));
