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
  padding: theme.typography.pxToRem(24),
}));

const StatCount = styled('span')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(32),
  lineHeight: '125%',
  letterSpacing: '-0.01em',
  color: theme.palette.text.primary,
}));

const Statitle = styled('span')(({ theme }) => ({
  fontFamily: 'Intro Book',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(14),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  textTransform: 'capitalize',
}));

export default Stats;
