import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

// Colors
import Colors from '../../../constants/Colors'

// icons
import { MaterialIcons } from '@expo/vector-icons';


class ProfileScreen extends Component{

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
        name="account-circle"
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

export default ProfileScreen
