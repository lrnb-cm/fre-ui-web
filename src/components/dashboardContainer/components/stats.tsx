import { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { StatsPropsType } from '../types';
import { withTheme } from '@mui/styles';
import { Box } from '@mui/material';

const Stats: FC<StatsPropsType> = ({ count, title }): ReactElement => {
  return (
    <StatWrapper>
      <StatCount>{count}</StatCount>
      <Statitle>{title}</Statitle>
    </StatWrapper>
  );
};

const StatWrapper = styled(withTheme(Box))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.custom.pxToRem(24),
}));

const StatCount = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(32),
  lineHeight: '125%',
  letterSpacing: '-0.01em',
  color: theme.palette.text.primary,
}));

const Statitle = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  textTransform: 'capitalize',
}));

export default Stats;
