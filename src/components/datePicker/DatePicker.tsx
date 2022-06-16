import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { styled } from '@mui/material/styles';
import { MinusOutlined } from '@ant-design/icons';
import { Moment } from 'moment';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

export default function CustomDatePicker() {
  const [open, setOpen] = useState(false);
  const onDateChange = (dates: any, dateStrings: [string, string]) => {
    console.log('onDateChange', dates, dateStrings);
    setOpen(false);
  };

  const onCalendarChange = (
    dates: any,
    dateStrings: [string, string],
    info: any
  ) => {
    console.log('onCalendarChange', dates, dateStrings, info);
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
          <SelectionTile>Today</SelectionTile>
          <SelectionTile>Yesterday</SelectionTile>
          <SelectionTile>Last 7 Days</SelectionTile>
          <SelectionTile>Last Week</SelectionTile>
          <SelectionTile>Last 2 Weeks</SelectionTile>
          <SelectionTile>This Month</SelectionTile>
          <SelectionTile>Last Month</SelectionTile>
          <SelectionTile>Custom Range</SelectionTile>
          <ButtonWrapper>
            <ApplyBtn>Apply</ApplyBtn>
            <CancelBtn>Cancel</CancelBtn>
          </ButtonWrapper>
        </ExtraPanel>
      </div>
    );
  };

  return (
    <DateWrapper>
      <RangePicker
        renderExtraFooter={() => 'extra footer'}
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
        onFocus={() => setOpen(true)}
        dropdownClassName="calendarPop"
      />
    </DateWrapper>
  );
}

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
