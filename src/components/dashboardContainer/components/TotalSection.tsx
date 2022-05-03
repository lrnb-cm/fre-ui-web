import { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { TotalSectionType } from '../types';
import { withTheme } from '@mui/styles';
import { Box } from '@mui/material';

const TotalSection: FC<TotalSectionType> = ({ total, title }): ReactElement => {
  return (
    <TotalSectionWrapper>
      <TotalSectionitle>{title}</TotalSectionitle>
      <TotalSectionCount>{total}</TotalSectionCount>
    </TotalSectionWrapper>
  );
};

const TotalSectionWrapper = styled(withTheme(Box))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const TotalSectionCount = styled('span')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.custom.pxToRem(24),
  lineHeight: '125%',
  color: theme.palette.text.primary,
}));

const TotalSectionitle = styled('span')(({ theme }) => ({
  fontFamily: 'Intro Book',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.custom.pxToRem(16),
  lineHeight: '150%',
  color: theme.palette.text.secondary,
  textTransform: 'capitalize',
}));

export default TotalSection;
