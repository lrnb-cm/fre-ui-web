import { DynamicTableProps } from '../table/DynamicTable'

export const getMockData = (): Promise<DynamicTableProps['unparsedData']> =>
   new Promise((resolve) =>
      setTimeout(
         () =>
            resolve([
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
            ]),
         1500
      )
   )
