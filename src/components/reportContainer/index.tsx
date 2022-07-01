import AddIcon from '@mui/icons-material/Add'
import { Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DynamicTable, DynamicTableProps } from '../table/DynamicTable'
import { getMockData } from './getMockData'

export const ReportContainer = () => {
   const [loading, setLoading] = useState(true)
   const [mockData, setMockData] = useState<DynamicTableProps['unparsedData']>(
      []
   )

   useEffect(() => {
      getMockData().then((mockData) => {
         setMockData(mockData)
         setLoading(false)
      })
   }, [])

   return (
      <Grid container direction="column" spacing={3}>
         <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
         >
            <Grid item>
               <Typography variant="h3">Reports</Typography>
            </Grid>
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
         <Grid item>
            <DynamicTable unparsedData={mockData} loading={loading} />
         </Grid>
      </Grid>
   )
}
