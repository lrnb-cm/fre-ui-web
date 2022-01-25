import { MY_ENV } from './statics';

const isProd: boolean = MY_ENV === 'production'

const prod = 'test-api.freeingreturns.com'
const local = 'localhost'

const uri = isProd ?`https://${prod}` : `http://${local}:5000`

export default uri
