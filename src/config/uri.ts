import { MY_ENV } from './statics';

const isProd: boolean = MY_ENV === 'development';

const prod = 'dev-api.freeingreturns.com';
const local = 'localhost';

const uri = isProd ? `http://${prod}` : `http://${local}:5000`;

export default uri;
