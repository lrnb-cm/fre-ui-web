import { Box, Skeleton } from '@mui/material'
import MUIDataTable, {
   MUIDataTableColumnDef,
   MUIDataTableOptions,
   MUIDataTableProps,
} from 'mui-datatables'
import { useMemo } from 'react'

export type DynamicTableProps = Partial<MUIDataTableProps> & {
   // prettier-ignore
   loading?: boolean;
   // prettier-ignore
   unparsedData?: Record<string, string | number>[];
}

export const DynamicTable = ({
   title = '',
   columns,
   options,
   data,
   loading = false,
   unparsedData,
   ...rest
}: DynamicTableProps) => {
   //Use column definition array if defined in props, otherwise dynamically determine columns from unparsedData
   const actualColumns = useMemo(() => {
      if (loading) return []
      if (columns) return columns

      return unparsedData
         ? Object.keys(unparsedData[0]).reduce<MUIDataTableColumnDef[]>(
              (previous, current, currentIndex) => {
                 previous.push(
                    currentIndex === 0
                       ? {
                            name: current,
                            options: { filterOptions: { fullWidth: true } },
                         }
                       : current
                 )
                 return previous
              },
              []
           )
         : []
   }, [columns, loading, unparsedData])

   //Use options defined in props, otherwise dynamically determine columns from unparsedData
   const actualOptions: MUIDataTableOptions = useMemo(() => {
      if (options) return options

      return {
         customRowRender: loading ? () => <Skeleton /> : undefined,
         download: loading ? false : true,
         filter: loading ? false : true,
         filterType: 'dropdown',
         fixedHeader: true,
         print: loading ? false : true,
         responsive: 'standard',
         rowsPerPage: 10,
         rowsPerPageOptions: [5, 10, 15],
         search: loading ? false : true,
         selectableRows: 'none',
         textLabels: {
            pagination: {
               next: '>',
               previous: '< ',
            },
            body: {
               noMatch: loading
                  ? [...Array(10)].map(() => <Skeleton height={60} />)
                  : 'Sorry, there is no matching data to display',
            },
         },
         viewColumns: loading ? false : true,
      }
   }, [options, loading])

   //Use data defined in props, otherwise dynamically determine data from unparsedData
   const actualData: MUIDataTableProps['data'] = useMemo(() => {
      if (loading) if (data) return data

      return unparsedData
         ? unparsedData.reduce<MUIDataTableProps['data']>(
              (previous, current, currentIndex) => {
                 previous.push(Object.values(current))
                 return previous
              },
              []
           )
         : []
   }, [data, loading, unparsedData])

   return (
      <Box
         style={{
            display: 'table',
            tableLayout: 'fixed',
            width: '100%',
         }}
      >
         <MUIDataTable
            title={title}
            data={actualData}
            columns={actualColumns}
            options={actualOptions}
            {...rest}
         />
      </Box>
   )
}
