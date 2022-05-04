import React, { ReactElement, FC } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, Cell } from 'recharts';
import { BarChartType } from '../types';

const BarGraph: FC<BarChartType> = ({ data, width, height }): ReactElement => {
  const colors = ['#EBC052', '#DF5555'];

  const max = React.useMemo(() => {
    return data.reduce(
      (prev, current) => (prev.value > current.value ? prev : current),
      { value: -1 }
    );
  }, [data]);

  console.log('max', max);
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
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.value === max.value ? colors[1] : colors[0]}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default BarGraph;
