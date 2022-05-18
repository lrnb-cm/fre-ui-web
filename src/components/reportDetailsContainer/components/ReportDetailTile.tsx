import React, { FC, ReactElement } from 'react';
import { ReportDetailTileProps } from '../types';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';

const ReportDetailTile: FC<ReportDetailTileProps> = ({
  title,
  info,
  icon,
  itemsPerRow,
}): ReactElement => {
  return (
    <ReportDetailTileWrapper item {...itemsPerRow}>
      <ReportTileTitle>{title}</ReportTileTitle>
      <ReportTileInfo>
        {icon && <ReportInfoIcon></ReportInfoIcon>}
        <ReportInfoDesc>{info}</ReportInfoDesc>
      </ReportTileInfo>
    </ReportDetailTileWrapper>
  );
};

export default ReportDetailTile;

const ReportDetailTileWrapper = styled(withTheme(Grid))(() => ({
  display: 'flex',
  alignItems: 'start',
  width: '100%',
  flexDirection: 'column',
}));

const ReportTileTitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(12),
  lineHeight: '120%',
  color: theme.palette.text.secondary,
  marginBottom: theme.custom.pxToRem(6),
}));
const ReportTileInfo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const ReportInfoIcon = styled('span')(({ theme }) => ({
  width: theme.custom.pxToRem(8),
  height: theme.custom.pxToRem(8),
  borderRadius: '50%',
  background: '#41B189',
  marginRight: theme.custom.pxToRem(8),
}));
const ReportInfoDesc = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '150%',
  color: theme.palette.text.primary,
}));
