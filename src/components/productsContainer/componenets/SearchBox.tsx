import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/styles'
import { Box, Grid, Stack } from '@mui/material'
export default function SearchBox() {
  return (
    <ProductsSearchTile>
      <p>work in progress!!!!</p>
    </ProductsSearchTile>
  )
}

const ProductsSearchTile = styled(withTheme(Grid))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  marginBottom: '25px',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'unset'
  }
}))
