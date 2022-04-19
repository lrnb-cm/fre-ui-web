import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";



const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
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
		rowsPerPage:[10],
      rowsPerPageOptions:[1,3,5,6,10,15],
      jumpToPage: true,
      textLabels:{
        pagination: {
          next: "Next >",
          previous: "< Previous",
          rowsPerPage: "Total items Per Page",
          displayRows: "OF"
        }
      },
      onChangePage (currentPage: any) {
        console.log({currentPage});
      },
      onChangeRowsPerPage (numberOfRows: any) {
        console.log({numberOfRows});
      }
	}

  const data = [
    ["Gabby George", "123456789", "completed","500"],
    [ "Aiden Lloyd","123456789","cancelled", "600"],
    ["Jaden Collins", "123456789", "completed","200"],
    ["Franky Rees", "123456789", "completed","700"],
    ["Aaren Rose", "123456789","cancelled", "100"],
    ["Johnny Jones", "123456789","cancelled", "500"],
    ["Jimmy Johns", "123456789", "completed","600"],
    ["Jack Jackson", "123456789","completed", "700"],
    ["Joe Jones", "123456789","cancelled", "200"],
    ["Jacky Jackson", "123456789","cancelled", "200"],
    ["Jo Jo", "123456789", "cancelled","300"],
    ["Donna Marie", "123456789","cancelled", "100"]
  ];
	
	/*const theme = createTheme({
			// Name of the component
			components: { MUIDataTableBodyCell: { styleOverrides:{ root: { backgroundColor: "#FF0000" } } } }
		
	});*/
	
	

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
			<div style={{display: 'table', tableLayout:'fixed', width:'100%'}}>
        <MUIDataTable
          title={"Customers list"}
          data={data}
          columns={columns}
          options={options}
        />
				</div>
      </ThemeProvider>
    </CacheProvider>
  );
}


