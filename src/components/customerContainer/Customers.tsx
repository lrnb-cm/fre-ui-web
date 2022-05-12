import MUIDataTable from 'mui-datatables';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import '../../scss/table.css';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export default function Customers() {
  const columns = [
    { name: 'Customer Name', options: { filterOptions: { fullWidth: true } } },
    'Customer ID',
    'Status',
    'Test Value',
  ];

  const options: Object = {
    filterType: 'dropdown',
    responsive: 'scrollMaxHeight',
    backgroundColor: '#FF0000',
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 15],
    textLabels: {
      pagination: {
        next: '>',
        previous: '< ',
      },
    },
    //print: false,
    fixedHeader: true,
    selectableRows: 'none',
  };

  const createTheme = {
    components: {
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            background: '#FF0000',
          },
        },
      },
    },
  };
  const data = [
    ['Gabby George', '123456789', 'Active', '100'],
    ['Aiden Lloyd', '123456789', 'Active', '0'],
    ['Jaden Collins', '123456789', 'Active', '5'],
    ['Franky Rees', '123456789', 'Active', '100'],
    ['Aaren Rose', '123456789', 'Active', '0'],
    ['Johnny Jones', '123456789', 'Active', '5'],
    ['Jimmy Johns', '123456789', 'Active', '100'],
    ['Jack Jackson', '123456789', 'Active', '0'],
    ['Joe Jones', '123456789', 'Active', '5'],
    ['Jacky Jackson', '123456789', 'Active', '100'],
    ['Jo Jo', '123456789', 'Active', '0'],
    ['Donna Marie', '123456789', 'Active', '5'],
    ['Jack Jackson', '123456789', 'Active', '100'],
    ['Joe Jones', '123456789', 'Active', '0'],
    ['Jacky Jackson', '123456789', 'Active', '5'],
    ['Jo Jo', '123456789', 'Active', '100'],
    ['Donna Marie', '123456789', 'Active', '5'],
  ];

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme}>
        <CustomerTitle>Customers</CustomerTitle>
        <Grid item xs={2}>
          <MUIDataTable
            title="Customers"
            data={data}
            columns={columns}
            options={options}
          />
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
const CustomerTitle = styled('div')(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: theme.typography.fontFamilyBold,
  fontStyle: 'normal',
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.primary,
  marginBottom: theme.custom.pxToRem(36),
}));
