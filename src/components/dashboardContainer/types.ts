import { Moment } from 'moment';

export type StatsPropsType = {
  count: number;
  title: string;
};

export type ProductDisplayType = {
  img: string;
  title: string;
  subTitle: string;
  price: number;
};

export type BarChartType = {
  data: {
    date: string;
    value: number;
  }[];
  height: number;
  width: number;
};

export type ChartSectionProps = {
  barData: {
    date: string;
    value: number;
  }[];
  total: number;
  title: string;
  handleRangeValues: (startDate: Moment, endDate: Moment) => void;
};

export type TotalSectionType = {
  total: number;
  title: string;
};
