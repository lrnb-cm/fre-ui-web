import React, { ReactElement, FC } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
import { BarChartType } from '../types';

const BarGraph: FC<BarChartType> = ({ data, width, height }): ReactElement => {
  return (
    <BarChart
      data={data}
      width={width}
      height={height}
      barGap={12}
      barSize={32}
      margin={{
        top: 0,
        right: 0,
        left: -20,
        bottom: 0,
      }}
    >
      <CartesianGrid vertical={false} opacity={0.35} strokeDasharray="4 4" />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickMargin={8}
        // tickCount={5}
        // interval={10}
        // type="number"
        // domain={['auto', 'auto']}
        // ticks={[10, 20, 30]}
        // interval="preserveStart"
      />
      <Bar
        dataKey="value"
        fill="#EBC052"
        radius={[8, 8, 8, 8]}
        animationDuration={500}
        animationEasing="linear"
      />
    </BarChart>
  );
};

export default BarGraph;
