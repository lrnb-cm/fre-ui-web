import { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { StatsPropsType } from '../types';

const Stats: FC<StatsPropsType> = ({ count, title }): ReactElement => {
  return (
    <StatWrapper>
      <StatCount>{count}</StatCount>
      <Statitle>{title}</Statitle>
    </StatWrapper>
  );
};

const StatWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '24px',
}));

const StatCount = styled('span')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '32px',
  lineHeight: '125%',
  letterSpacing: '-0.01em',
  color: '#3C3C3C',
}));

const Statitle = styled('span')(({ theme }) => ({
  fontFamily: 'Intro Book',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '150%',
  color: '#969696',
  textTransform: 'capitalize',
}));

export default Stats;
