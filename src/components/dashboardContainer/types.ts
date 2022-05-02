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
