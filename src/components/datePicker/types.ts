import { Moment } from 'moment';

export type DateProps = {
  handleRangeValues: (startDate: Moment, endDate: Moment) => void;
};
