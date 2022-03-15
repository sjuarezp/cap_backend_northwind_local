const cds = require('@sap/cds')
module.exports = cds.server

if (process.env.NODE_ENV !== 'production') {
  const cds_swagger = require('cds-swagger-ui-express')
  cds.on('bootstrap', app => app.use(cds_swagger()))
} 

const ORIGINS = { 
    'http://192.168.1.7:5500': 1
  }
  cds.on('bootstrap', async (app) => {
    app.use((req, res, next) => {
      const { origin } = req.headers
  
      console.info("req.user");
      console.info(JSON.stringify(req.user));
  
      // standard request
      if (origin ) {
        res.set('access-control-allow-origin', origin);
        res.set('Access-Control-Allow-Headers', 'odata-version,x-csrf-token,content-type,mime-version,odata-maxversion');
      }
      // preflight request
      if (origin  && req.method === 'OPTIONS') {
        //res.set('access-control-allow-origin', origin);
        res.set('access-control-allow-origin', "*");
        res.set('Access-Control-Allow-Headers', 'x-csrf-token,content-type,mime-version,odata-maxversion');
        return res.set('access-control-allow-methods', 'GET,HEAD,PUT,PATCH,POST,DELETE').end()
      }
      next()
    })
  })
