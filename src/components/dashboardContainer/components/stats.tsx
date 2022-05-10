import { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { StatsPropsType } from '../types';
import { withTheme } from '@mui/styles';
import { Grid } from '@mui/material';

const Stats: FC<StatsPropsType> = ({ count, title }): ReactElement => {
  return (
    <StatWrapper xs={6} sm={6} md={4} lg={2}>
      <StatCount>{count}</StatCount>
      <Statitle>{title}</Statitle>
    </StatWrapper>
  );
};

const StatWrapper = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.custom.pxToRem(24),
  alignItems: 'center',
  justifyContent: 'center',
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
