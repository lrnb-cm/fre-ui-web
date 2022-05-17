import React, { FC, ReactElement, useState } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import { ReportActivityTileProps } from '../types';

const ReportActivityTile: FC<ReportActivityTileProps> = ({
  icon,
  desc,
  time,
}): ReactElement => {
  const Icon = icon;
  const [fill, setFill] = useState('#3C3C3C');
  return (
    <ReportActivityTileWrapper
      item
      onMouseEnter={() => setFill('#fff')}
      onMouseLeave={() => setFill('#3C3C3C')}
    >
      <Icon fill={fill} />
      <ReportDesc className="deschover">{desc}</ReportDesc>
      <ReportTime className="timehover">{time}</ReportTime>
    </ReportActivityTileWrapper>
  );
};

export default ReportActivityTile;

const ReportActivityTileWrapper = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.custom.pxToRem(24, 22),
  gap: '16px',
  width: '100%',
  // height: '96px',
  background: '#FFFFFF',
  border: '1px solid #E6E6E6',
  cursor: 'pointer',
  borderRadius: '16px',
  '&:hover': {
    background: '#3758CC',
  },
  '&:hover .deschover': {
    color: '#ffffff',
  },
  '&:hover .timehover': {
    color: '#ffffff',
    opacity: 0.7,
  },
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
