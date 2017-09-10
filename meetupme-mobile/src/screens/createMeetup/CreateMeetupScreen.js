import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

// libraries
import { Button, Icon } from 'native-base'

// Colors
import Colors from '../../../constants/Colors'


class CreateMeetupScreen extends Component{

  static navigationOptions = ({navigation}) => {

    return {
      title: 'Create a new Meetup',
      headerStyle: {
        backgroundColor: Colors.redColor
      },
      headerTitleStyle: {
        color: Colors.whiteColor,
      },
      headerLeft: (
        <View>
          <Button
            transparent
            onPress={() => navigation.goBack()}>
            <Icon
              name="md-close"
              style={{
                fontSize: 30,
                color: Colors.whiteColor
              }}
              />
          </Button>
        </View>
      )
    }

  }

  render(){

    return(
      <View>
        <Text>asdasd</Text>
      </View>
    )
  }
}

export default CreateMeetupScreen
