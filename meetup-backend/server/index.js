import express from 'express'

// mongodb
import dbConfig from './config/db'
// middleware
import middlewaresConfig from './config/middlewares'
// routes
import { MeetupRoutes, GroupRoutes } from './modules'


// express server
const app = express()
// mongodb
dbConfig()
// middleware
middlewaresConfig(app)
// routes
app.use('/api', [MeetupRoutes, GroupRoutes])


const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
  if(err){
    console.log('err: ' + err);
  } else {
    console.log(`App listen to port: ${PORT}`)
  }
});
