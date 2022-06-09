import React, { FC, ReactElement, useState } from 'react';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';
import { ReportActivityTileProps } from '../types';
import { useWindowWidth } from '@react-hook/window-size';

const ReportActivityTile: FC<ReportActivityTileProps> = ({
  icon,
  desc,
  time,
}): ReactElement => {
  const windowWidth = useWindowWidth();

  const Icon = icon;
  const [fill, setFill] = useState('#3C3C3C');

  const props = {
    windowWidth: windowWidth,
  };
  return (
    <ReportActivityTileWrapper
      item
      onMouseEnter={() => setFill('#fff')}
      onMouseLeave={() => setFill('#3C3C3C')}
      {...props}
    >
      <Icon fill={fill} />
      <ReportDesc className="deschover">{desc}</ReportDesc>
      <ReportTime className="timehover">{time}</ReportTime>
    </ReportActivityTileWrapper>
  );
};

export default ReportActivityTile;
const mobileMixin = (windowWidth: number) => ({
  justifyContent: 'space-between',
  width: windowWidth > 568 ? '50%' : '100%',
});

const desktopMixin = (windowWidth: number) => ({
  gap: '16px',
});

const ReportActivityTileWrapper = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'windowWidth',
})((props: any) => {
  const { theme, windowWidth } = props;
  const isMobile = !(windowWidth > 1025);
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.custom.pxToRem(24, 22),
    // width: '100%',
    // height: '96px',
    background: '#FFFFFF',
    border: '1px solid #E6E6E6',
    cursor: 'pointer',
    borderRadius: '16px',

    ...(isMobile && {
      ...mobileMixin(windowWidth),
    }),
    ...(!isMobile && {
      ...desktopMixin(windowWidth),
    }),

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
  };
});

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
