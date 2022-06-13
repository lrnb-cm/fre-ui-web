import { MY_ENV } from "./statics";

const isProd: boolean = MY_ENV === "production";

const prod = "test-api.freeingreturns.com";
const local = "localhost";

const uri = isProd ? `http://${prod}` : `http://${local}:5009/graphql`;

export default uri;
