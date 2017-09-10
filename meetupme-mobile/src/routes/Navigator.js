import { StackNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'


// component
import {
  CreateMeetupScreen
} from '../screens'


export default StackNavigator({

  Home: {screen: HomeNavigator},
  CreateMeetup: {screen: CreateMeetupScreen},

}, {
  model: 'modal'
})
