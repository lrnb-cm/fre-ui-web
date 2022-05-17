import { styled, alpha } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Box, Grid, IconButton, Paper, Stack } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { theme } from '../../../theme'
import SelectButton from './SelectButton'
import DatePicker from './DatePicker'
export default function SearchBox() {
  return (
    <ProductDisplayWrapper container>
      <SearchContent>
        <SearchTitle>Date Picker</SearchTitle>
        <DatePicker />
      </SearchContent>
      <SearchContent>
        <SearchTitle>Customer Name</SearchTitle>
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '252px',
            height: '48px',
            borderRadius: '16px',
            justifyContent: 'space-between',
            flexDirection: 'row',
            border: '1px solid #E6E6E6'
          }}>
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search google maps' }} />
        </Paper>
      </SearchContent>
      <SearchContent>
        <SearchTitle>Product Name</SearchTitle>
        <Paper
          component="form"
          sx={{
            p: '4px 6px',
            display: 'flex',
            alignItems: 'center',
            width: '252px',
            height: '48px',
            borderRadius: '16px',
            justifyContent: 'space-between',
            flexDirection: 'row',
            border: '1px',
            borderColor: ' #E6E6E6',
            borderStyle: 'solid'
          }}>
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search google maps' }} />
        </Paper>
      </SearchContent>
      <SearchContent>
        <SearchTitle>By Shope</SearchTitle>
        <SelectButton />
      </SearchContent>
      <SearchContent>
        <SearchTitle>Clear filters</SearchTitle>
      </SearchContent>
    </ProductDisplayWrapper>
  )
}
const ProductDisplayWrapper = styled(withTheme(Grid))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '25px',
  padding: theme.custom.pxToRem(18, 24),
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'unset'
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.custom.pxToRem(100),
    paddingRight: theme.custom.pxToRem(100)
  }
}))

const SearchTitle = styled('div')(({ theme }) => ({
  fontFamily: 'Intro Bold',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: theme.custom.pxToRem(14),
  lineHeight: '150%',
  color: theme.palette.text.primary
  //padding: theme.custom.pxToRem(24)
}))

const SearchContent = styled(withTheme(Stack))(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  marginLeft: theme.custom.pxToRem(16)
}))
