import AddIcon from '@mui/icons-material/Add'
import { Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getMockData } from '../../utils/getMockData'
import { DynamicTable, DynamicTableProps } from '../table/DynamicTable'
import ShopReportsBreadCrumb from './components/ShopReportsBreadCrumb'


const ShopReportsContainer = () => {
   const [loading, setLoading] = useState(true)
   const [mockData, setMockData] = useState<DynamicTableProps['unparsedData']>(
      []
   )

   useEffect(() => {
      getMockData([
         {
            'Report ID': '62b5338897932eb77bccaada',
            'Customer Name': 'Banks Floyd',
            'Customer ID': '475-543850',
            'Product Name': 'ex anim',
            'Report Type': 'cupidatat',
            Status: 'blue',
            'Days To Finish': 3,
         },
         {
            'Report ID': '62b53388120972e4da99cf85',
            'Customer Name': 'Whitney Coffey',
            'Customer ID': '818-137607',
            'Product Name': 'minim dolore',
            'Report Type': 'quis',
            Status: 'brown',
            'Days To Finish': 9,
         },
         {
            'Report ID': '62b53388d2009841aa7db26b',
            'Customer Name': 'Rochelle Horne',
            'Customer ID': '590-634513',
            'Product Name': 'non excepteur',
            'Report Type': 'incididunt',
            Status: 'brown',
            'Days To Finish': 3,
         },
         {
            'Report ID': '62b53388ed9c414b7aa2d16b',
            'Customer Name': 'Lela Lyons',
            'Customer ID': '161-832333',
            'Product Name': 'quis aute',
            'Report Type': 'culpa',
            Status: 'brown',
            'Days To Finish': 9,
         },
         {
            'Report ID': '62b53388680b61a82aec13b8',
            'Customer Name': 'Gay Gill',
            'Customer ID': '881-783718',
            'Product Name': 'velit id',
            'Report Type': 'in',
            Status: 'green',
            'Days To Finish': 4,
         },
         {
            'Report ID': '62b53388093806adad0dcdd8',
            'Customer Name': 'Loraine Vang',
            'Customer ID': '160-655385',
            'Product Name': 'esse enim',
            'Report Type': 'proident',
            Status: 'brown',
            'Days To Finish': 2,
         },
         {
            'Report ID': '62b533882c4af69f6e544ca0',
            'Customer Name': 'Carney Good',
            'Customer ID': '849-339604',
            'Product Name': 'commodo aute',
            'Report Type': 'nulla',
            Status: 'brown',
            'Days To Finish': 8,
         },
      ]).then((mockData) => {
         setMockData(mockData)
         setLoading(false)
      })
   }, [])

   return (
      <>
         <Grid container direction="column" spacing={3}>
            <Grid container item direction="row" justifyContent="space-between">
               <Grid item>
                  <ShopReportsBreadCrumb />
               </Grid>
               <Grid item>
                  <Grid item>
                     <Button
                        variant="contained"
                        color="primary"
                        startIcon={
                           <AddIcon
                              sx={{
                                 backgroundColor: 'background.paper',
                                 borderRadius: 3,
                                 color: 'primary.main',
                              }}
                           />
                        }
                        sx={{
                           borderRadius: 16,
                           paddingX: 2,
                           paddingY: 1,
                        }}
                     >
                        <Typography
                           variant="h6"
                           color="inherit"
                           textTransform="none"
                           mx={{ marginLeft: 6 }}
                        >
                           Add New Report
                        </Typography>
                     </Button>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item>
               <DynamicTable unparsedData={mockData} loading={loading} />
            </Grid>
         </Grid>
      </>
   )
}

export default ShopReportsContainer
