import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Box, Grid, Stack } from '@mui/material';
import BarGraph from './BarChart';
import { FC, ReactElement } from 'react';
import { ChartSectionProps } from '../types';
import TotalSection from './TotalSection';

const ChartSection: FC<ChartSectionProps> = ({
  barData,
  total,
  title,
}): ReactElement => {
  return (
    <ChartSectionWrapper item xs={12} sm={6} md={4}>
      <ChartStats>
        <TotalSection title={title} total={total} />
        <div>Week</div>
      </ChartStats>
      <BarGraph width={322} height={137} data={barData} />
    </ChartSectionWrapper>
  );
};

const ChartSectionWrapper = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  //   justifyContent: 'space-between',
  // flexDirection: 'column',
  height: '100%',
}));
const ChartStats = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: theme.custom.pxToRem(25),
}));
export default ChartSection;
