import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

// Colors
import Colors from '../../../constants/Colors'

// icons
import { MaterialIcons } from '@expo/vector-icons';


class NotificationsScreen extends Component{

  state = {

  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.redColor,
    },
    headerTitleStyle: {
      color: Colors.whiteColor,
    },
    tabBarIcon: ({tintColor}) => (
      <MaterialIcons
        name="notifications"
        size={25}
        color={tintColor}
      />
    )
  }

  render(){

    return(
      <View>
        <Text>12312312</Text>
      </View>
    )
  }
}

export default NotificationsScreen
