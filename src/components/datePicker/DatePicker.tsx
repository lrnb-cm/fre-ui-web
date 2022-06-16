import React from 'react';
import { DatePicker } from 'antd';
import { styled } from '@mui/material/styles';
import { MinusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

export default function CustomDatePicker() {
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
        <span>extra me</span>
      </div>
    );
  };

  return (
    <DateWrapper>
      <RangePicker
        renderExtraFooter={() => 'extra footer'}
        size="small"
        format={'MM/DD'}
        // open={false}
        panelRender={panelRender}
        bordered={false}
        placeholder={['Start', 'End']}
        separator={
          <MinusOutlined style={{ fontSize: '6px', color: '#6c757d' }} />
        }
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
