import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function SelectButton() {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <Select
      className="selectButtonWrapper"
      value={age}
      label="Age"
      onChange={handleChange}
      sx={{
        p: '4px 6px',
        display: 'flex',
        alignItems: 'center',
        width: '252px',
        height: '48px',
        justifyContent: 'space-between',
        flexDirection: 'row',
        border: '1px solid #E6E6E6',
        borderRadius: '16px'
      }}>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  )
}
