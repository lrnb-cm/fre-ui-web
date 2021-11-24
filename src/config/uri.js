const { NODE_ENV } = process.env

const isProd = 1

const prod = '10.128.0.3'
const local = '192.168.254.55'
// const local = 'localhost'

// const uri = `http://${prod}:5000`
const uri = isProd ?`https://${prod}:9000` : `http://${local}:9000`



export default uri
