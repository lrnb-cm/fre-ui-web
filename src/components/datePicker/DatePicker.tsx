import React, { FC, useState } from 'react';
import { DatePicker } from 'antd';
import { styled } from '@mui/material/styles';
import { MinusOutlined } from '@ant-design/icons';
import moment, { Moment } from 'moment';
import 'antd/dist/antd.css';
import { DateProps } from './types';

const { RangePicker } = DatePicker;

const CustomDatePicker: FC<DateProps> = ({ handleRangeValues }) => {
  const [open, setOpen] = useState(false);
  const [dateValue, setDateValue] = useState<any>([
    moment().startOf('week'),
    moment().endOf('week'),
  ]);
  const onDateChange = (dates: any, dateStrings: [string, string]) => {
    console.log('onDateChange', dates, dateStrings);
    setDateValue(dates);
  };

  const onCalendarChange = (
    dates: any,
    dateStrings: [string, string],
    info: any
  ) => {
    console.log('onCalendarChange', dates, dateStrings, info);
  };

  console.log('dateValue', dateValue);

  const handleRangeApply = () => {
    handleRangeValues(dateValue[0], dateValue[1]);
    setOpen(false);
  };
  const customRangeHandler = (range: string) => {
    switch (range) {
      case 'Today':
        return setDateValue([moment().startOf('day'), moment().endOf('day')]);

      case 'Yesterday':
        return setDateValue([
          moment().subtract(1, 'days').startOf('day'),
          moment().subtract(1, 'days').endOf('day'),
        ]);

      case 'Last7Days':
        return setDateValue([
          moment().subtract(6, 'days').startOf('day'),
          moment().endOf('day'),
        ]);

      case 'LastWeek':
        return setDateValue([
          moment().subtract(1, 'weeks').startOf('week'),
          moment().subtract(1, 'weeks').endOf('week'),
        ]);

      case 'Last2Week':
        return setDateValue([
          moment().subtract(2, 'weeks').startOf('week'),
          moment().subtract(2, 'weeks').endOf('week'),
        ]);

      case 'ThisMonth':
        return setDateValue([
          moment().startOf('month'),
          moment().endOf('month'),
        ]);

      case 'LastMonth':
        return setDateValue([
          moment().subtract(1, 'months').startOf('month'),
          moment().subtract(1, 'months').endOf('month'),
        ]);

      default:
        return 'week';
    }
  };
  const panelRender = (
    originalPanel:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
  ) => {
    return (
      <div style={{ display: 'flex' }}>
        <div>{originalPanel}</div>
        <ExtraPanel>
          <SelectionTile onClick={() => customRangeHandler('Today')}>
            Today
          </SelectionTile>
          <SelectionTile onClick={() => customRangeHandler('Yesterday')}>
            Yesterday
          </SelectionTile>
          <SelectionTile onClick={() => customRangeHandler('Last7Days')}>
            Last 7 Days
          </SelectionTile>
          <SelectionTile onClick={() => customRangeHandler('LastWeek')}>
            Last Week
          </SelectionTile>
          <SelectionTile onClick={() => customRangeHandler('Last2Week')}>
            Last 2 Weeks
          </SelectionTile>
          <SelectionTile onClick={() => customRangeHandler('ThisMonth')}>
            This Month
          </SelectionTile>
          <SelectionTile onClick={() => customRangeHandler('LastMonth')}>
            Last Month
          </SelectionTile>
          <SelectionTile>Custom Range</SelectionTile>
          <ButtonWrapper>
            <ApplyBtn onClick={handleRangeApply}>Apply</ApplyBtn>
            <CancelBtn onClick={() => setOpen(false)}>Cancel</CancelBtn>
          </ButtonWrapper>
        </ExtraPanel>
      </div>
    );
  };
  const footerRender = () => {
    return (
      <FooterWrapper>
        <FooterTile>
          {moment(dateValue[0]).format('ddd, MMM DD YYYY')}
        </FooterTile>
        <FooterTile>
          {moment(dateValue[1]).format('ddd, MMM DD YYYY')}
        </FooterTile>
      </FooterWrapper>
    );
  };
  return (
    <DateWrapper>
      <RangePicker
        renderExtraFooter={footerRender}
        size="small"
        format={'MMM-DD'}
        open={open}
        panelRender={panelRender}
        bordered={false}
        placeholder={['Start', 'End']}
        separator={
          <MinusOutlined style={{ fontSize: '6px', color: '#6c757d' }} />
        }
        onCalendarChange={onCalendarChange}
        onChange={onDateChange}
        onClick={() => setOpen(true)}
        dropdownClassName="calendarPop"
        allowClear={false}
        value={dateValue}
      />
    </DateWrapper>
  );
};

const DateWrapper = styled('div')(({ theme }) => ({
  '& .ant-picker-range-separator': {
    padding: '0 5px !important',
  },
  '& .ant-picker': {
    width: '150px !important',
  },
}));

const ExtraPanel = styled('div')(({ theme }) => ({
  padding: '5px 10px',
  width: '160px',
}));

const SelectionTile = styled('div')(({ theme }) => ({
  border: '1px solid #e4e9ef',
  margin: '5px 0px',
  padding: '5px',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    border: '1px solid #c4cfdc',
  },
}));

const ButtonWrapper = styled('div')(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
}));

const ApplyBtn = styled('div')(({ theme }) => ({
  backgroundColor: '#3758CC',
  padding: '5px 15px',
  borderRadius: '4px',
  cursor: 'pointer',
  color: '#fff',
  '&:hover': {},
}));

const CancelBtn = styled('div')(({ theme }) => ({
  border: '1px solid #e4e9ef',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',

  '&:hover': {
    border: '1px solid #c4cfdc',
  },
}));

const FooterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#F7F7F7',
}));

const FooterTile = styled('div')(({ theme }) => ({
  width: '50%',
  textAlign: 'center',
}));

export default CustomDatePicker;
