import { Router } from 'express'

// controller func
import * as MeetupController from './controller'

const routes = new Router()

// router
routes.post('/meetups', MeetupController.createMeetup)
routes.get('/meetups', MeetupController.getAllMeetups)





export default routes
