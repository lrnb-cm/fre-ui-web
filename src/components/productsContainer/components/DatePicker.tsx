import * as React from 'react'
import TextField from '@mui/material/TextField'
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { styled, alpha } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import Divider from '@mui/material/Divider'

export default function DatePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="From"
        endText="To"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue)
        }}
        renderInput={(startProps: any, endProps: any) => (
          <div className="datePickerWrapper">
            <TextField
              {...startProps}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '126px',
                height: '48px',
                justifyContent: 'space-between',
                flexDirection: 'row',
                '& > .MuiOutlinedInput-root > .MuiOutlinedInput-notchedOutline': {
                  border: 'none !important'
                }
              }}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <TextField
              {...endProps}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '126px',
                height: '48px',
                justifyContent: 'space-between',
                flexDirection: 'row',
                '& > .MuiOutlinedInput-root > .MuiOutlinedInput-notchedOutline': {
                  border: 'none !important'
                }
              }}
            />
          </div>
        )}
      />
    </LocalizationProvider>
  )
}
