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
      <MenuItem value={1}>Shop-1</MenuItem>
      <MenuItem value={2}>Shop-2</MenuItem>
      <MenuItem value={3}>Shop-3</MenuItem>
    </Select>
  )
}
