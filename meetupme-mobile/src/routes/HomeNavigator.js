import { TabNavigator } from 'react-navigation'

// components
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens'

// colors
import Colors from '../../constants/Colors'


export default TabNavigator({

  Home: {
    screen: HomeScreen
  },
  Notifications: {
    screen: NotificationsScreen
  },
  Profile: {
    screen: ProfileScreen
  },

}, {
  swipeEnabled: false,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,
    IndicatorStyle: {
      backgroundColor: Colors.redColor
    },
    style: {
      backgroundColor: Colors.whiteColor
    }
  },
})
