import React, { FC, useState, useRef, useEffect } from 'react';
import { DatePicker } from 'antd';
import { styled } from '@mui/material/styles';
import { MinusOutlined } from '@ant-design/icons';
import moment, { Moment } from 'moment';
import calenderIcon from '../../asset/img/Calendar.svg';
import { DateProps } from './types';
import './antd.css';

const { RangePicker } = DatePicker;

const CustomDatePicker: FC<DateProps> = ({ handleRangeValues, bordered }) => {
  const datePickerRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [dateValue, setDateValue] = useState<any>([
    moment().startOf('month'),
    moment().endOf('month'),
  ]);

  const [activeSelect, setActiveSelect] = useState('ThisMonth');

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function checkClickOutsides(event: { target: any }) {
      const current: any = datePickerRef.current;
      if (current && !current?.contains(event.target)) {
        setOpen(false);
        console.log('event.target', event.target);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', checkClickOutsides);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', checkClickOutsides);
    };
  }, []);
  const onDateChange = (dates: any, dateStrings: [string, string]) => {
    // console.log('onDateChange', dates, dateStrings);
    setDateValue(dates);
    setActiveSelect('Custom');
  };

  //   const onCalendarChange = (
  //     dates: any,
  //     dateStrings: [string, string],
  //     info: any
  //   ) => {
  //     console.log('onCalendarChange', dates, dateStrings, info);
  //   };

  const handleRangeApply = () => {
    handleRangeValues(dateValue[0], dateValue[1]);
    setOpen(false);
  };
  const customRangeHandler = (range: string) => {
    switch (range) {
      case 'Today':
        return (() => {
          setActiveSelect('Today');
          setDateValue([moment().startOf('day'), moment().endOf('day')]);
        })();

      case 'Yesterday':
        return (() => {
          setActiveSelect('Yesterday');
          setDateValue([
            moment().subtract(1, 'days').startOf('day'),
            moment().subtract(1, 'days').endOf('day'),
          ]);
        })();

      case 'Last7Days':
        return (() => {
          setActiveSelect('Last7Days');
          setDateValue([
            moment().subtract(6, 'days').startOf('day'),
            moment().endOf('day'),
          ]);
        })();

      case 'LastWeek':
        return (() => {
          setActiveSelect('LastWeek');
          setDateValue([
            moment().subtract(1, 'weeks').startOf('week'),
            moment().subtract(1, 'weeks').endOf('week'),
          ]);
        })();

      case 'Last2Week':
        return (() => {
          setActiveSelect('Last2Week');
          setDateValue([
            moment().subtract(2, 'weeks').startOf('week'),
            moment().subtract(2, 'weeks').endOf('week'),
          ]);
        })();

      case 'ThisMonth':
        return (() => {
          setActiveSelect('ThisMonth');
          setDateValue([moment().startOf('month'), moment().endOf('month')]);
        })();

      case 'LastMonth':
        return (() => {
          setActiveSelect('LastMonth');
          setDateValue([
            moment().subtract(1, 'months').startOf('month'),
            moment().subtract(1, 'months').endOf('month'),
          ]);
        })();

      default:
        return (() => {
          setActiveSelect('ThisMonth');
          setDateValue([moment().startOf('month'), moment().endOf('month')]);
        })();
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
      <div style={{ display: 'flex' }} ref={datePickerRef}>
        <div>{originalPanel}</div>
        <ExtraPanel className="panel-calendar">
          <SelectionTile
            style={{
              border:
                activeSelect === 'Today'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
            onClick={() => customRangeHandler('Today')}
          >
            Today
          </SelectionTile>
          <SelectionTile
            style={{
              border:
                activeSelect === 'Yesterday'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
            onClick={() => customRangeHandler('Yesterday')}
          >
            Yesterday
          </SelectionTile>
          <SelectionTile
            style={{
              border:
                activeSelect === 'Last7Days'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
            onClick={() => customRangeHandler('Last7Days')}
          >
            Last 7 Days
          </SelectionTile>
          <SelectionTile
            style={{
              border:
                activeSelect === 'LastWeek'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
            onClick={() => customRangeHandler('LastWeek')}
          >
            Last Week
          </SelectionTile>
          <SelectionTile
            style={{
              border:
                activeSelect === 'Last2Week'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
            onClick={() => customRangeHandler('Last2Week')}
          >
            Last 2 Weeks
          </SelectionTile>
          <SelectionTile
            style={{
              border:
                activeSelect === 'ThisMonth'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
            onClick={() => customRangeHandler('ThisMonth')}
          >
            This Month
          </SelectionTile>
          <SelectionTile
            style={{
              border:
                activeSelect === 'LastMonth'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
            onClick={() => customRangeHandler('LastMonth')}
          >
            Last Month
          </SelectionTile>
          <SelectionTile
            style={{
              border:
                activeSelect === 'Custom'
                  ? '2px solid #3758CC'
                  : '1px solid #e4e9ef',
            }}
          >
            Custom Range
          </SelectionTile>
          <ButtonWrapper>
            <ApplyBtn onClick={handleRangeApply} className="panel-calendar-btn">
              Apply
            </ApplyBtn>
            <CancelBtn
              onClick={() => setOpen(false)}
              className="panel-calendar-btn"
            >
              Cancel
            </CancelBtn>
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
        format={'MMM DD, YYYY'}
        open={open}
        panelRender={panelRender}
        bordered={bordered}
        placeholder={['Start', 'End']}
        separator={
          <MinusOutlined style={{ fontSize: '12px', color: '#3C3C3C' }} />
        }
        // onCalendarChange={onCalendarChange}
        onChange={onDateChange}
        onClick={() => setOpen(true)}
        dropdownClassName="calendarPop"
        allowClear={false}
        value={dateValue}
        suffixIcon={<CalendarIcon src={calenderIcon} alt="calendar-icon" />}
      />
    </DateWrapper>
  );
};

const DateWrapper = styled('div')(({ theme }) => ({
  '& .ant-picker-range-separator': {
    padding: '0 5px !important',
    paddingBottom: '2px !important',
    color: '#3C3C3C !important',
    [theme.breakpoints.down('md')]: {
      display: 'none !important',
    },
  },
  '& .ant-picker-suffix': {
    cursor: 'pointer',
    pointerEvents: 'visible',
  },
  '& .ant-picker': {
    width: '240px !important',
    [theme.breakpoints.down('md')]: {
      width: '20px !important',
    },
  },
  '& .ant-picker-input': {
    [theme.breakpoints.down('md')]: {
      display: 'none !important',
    },
  },
  '& .ant-picker-input > input': {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#3C3C3C',
  },

  marginRight: theme.custom.pxToRem(51),
  [theme.breakpoints.down('md')]: {
    marginRight: theme.custom.pxToRem(21),
  },
}));

const ExtraPanel = styled('div')(({ theme }) => ({
  padding: '5px 10px',
  width: '160px',
}));

const CalendarIcon = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  marginLeft: '10px',
}));
const SelectionTile = styled('div')(({ theme }) => ({
  border: '2px solid #e4e9ef',
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
