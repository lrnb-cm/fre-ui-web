import MUIDataTable from "mui-datatables";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "../../scss/table.css"

const muiCache = createCache({
  "key": "mui",
	"prepend": true
});

export default function Customers() {
  
  const columns = [
    { name: "Customer Name", options: { filterOptions: { fullWidth: true } } },
    "Customer ID",
    "Status",
		"Test Value"
  ];
  
	const options: Object = {
		filterType: 'dropdown',
		responsive: "scrollMaxHeight",
    backgroundColor: "#FF0000",
		rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 15],
    //print: false,
    fixedHeader: true,
    selectableRows: 'none',
  }
 
  
const createTheme = ({
  components: {
    MUIDataTableBodyCell: {
      styleOverrides:{
        root: {
          background: "#FF0000"
        }
      }
    }
  }
})


  
  

  const data = [
    ["Gabby George", "123456789", "Active","100"],
    [ "Aiden Lloyd","123456789","Active", "0"],
    ["Jaden Collins", "123456789", "Active","5"],
    ["Franky Rees", "123456789", "Active","100"],
    ["Aaren Rose", "123456789","Active", "0"],
    ["Johnny Jones", "123456789","Active", "5"],
    ["Jimmy Johns", "123456789", "Active","100"],
    ["Jack Jackson", "123456789","Active", "0"],
    ["Joe Jones", "123456789","Active", "5"],
    ["Jacky Jackson", "123456789","Active", "100"],
    ["Jo Jo", "123456789", "Active","0"],
    ["Donna Marie", "123456789","Active", "5"],
    ["Jack Jackson", "123456789","Active", "100"],
    ["Joe Jones", "123456789","Active", "0"],
    ["Jacky Jackson", "123456789","Active", "5"],
    ["Jo Jo", "123456789", "Active","100"],
    ["Donna Marie", "123456789","Active", "5"]
  ];

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme} >
			<div style={{display: 'table', tableLayout:'fixed', width: '80%' , height:'100%', marginLeft: '12%', marginTop: '2%'}}>
        <MUIDataTable
          title={<p style={{fontWeight: 'bold', fontSize: '24px', textAlign: 'left'}}>Customers</p>}
          data={data}
          columns={columns}
          options={options}
         
        />
				</div>
      </ThemeProvider>
    </CacheProvider>
  );
}


