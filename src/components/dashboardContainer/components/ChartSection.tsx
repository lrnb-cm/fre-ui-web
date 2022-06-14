import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { Box, Grid, Stack } from '@mui/material';
import BarGraph from './BarChart';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { ChartSectionProps } from '../types';
import TotalSection from './TotalSection';
import { useWindowWidth } from '@react-hook/window-size';

const ChartSection: FC<ChartSectionProps> = ({
  barData,
  total,
  title,
}): ReactElement => {
  const windowWidth = useWindowWidth();
  const open: boolean = (sessionStorage.getItem('drawer') === 'true');
  const chartRef = useRef(null);
  const current: any = chartRef.current;
  const [chartHeight, setChartHeight] = useState(250);
  const [chartWidth, setChartWidth] = useState(current?.offsetWidth || 0);

  useEffect(() => {
    const newChartWidth = current?.offsetWidth || 0;
    // console.log('newChartWidth', newChartWidth);
    const contentWidth = !open ? windowWidth : windowWidth - 50;
    const newChartHeight = Math.floor(
      newChartWidth / (contentWidth > 768 ? 3 : windowWidth > 568 ? 2.5 : 1.4)
    );
    // console.log('newChartHeight', newChartHeight);

    setChartHeight(newChartHeight);
    setChartWidth(newChartWidth);
  }, [windowWidth, current]);

  return (
    <ChartSectionWrapper item xs={12} sm={6} md={6} lg={4} ref={chartRef}>
      <ChartStats>
        <TotalSection title={title} total={total} />
        <div>Week</div>
      </ChartStats>
      <BarGraph
        // width={322}
        width={chartWidth}
        height={chartHeight}
        data={barData}
      />
    </ChartSectionWrapper>
  );
};

const ChartSectionWrapper = styled(withTheme(Grid))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  //   justifyContent: 'space-between',
  flexDirection: 'column',
  height: '100%',
  padding: '10px',
}));
const ChartStats = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: theme.custom.pxToRem(25),
}));
export default ChartSection;
