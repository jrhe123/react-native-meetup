import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

// styles
import styles from './styles/HomeScreen'

// Colors
import Colors from '../../../constants/Colors'

// components
import { LoadingScreen } from '../../commons'
import { MyMeetupsList } from './components'

// icons
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// native base
import { Button, Icon } from 'native-base'


// redux
import { connect } from 'react-redux'
// action
import { fetchMyMeetups } from './actions'

// convert to props
// & props function
@connect(
  state => ({
    myMeetups: state.home.myMeetups // state.xxx.yyy
  })
  ,
  {fetchMyMeetups}
)



class HomeScreen extends Component{

  static navigationOptions = ({ navigation }) => {

    return {

      headerStyle: {
        backgroundColor: Colors.redColor,
      },
      headerTitleStyle: {
        color: Colors.whiteColor,
      },
      headerRight: (
          <View>
            <Button
              transparent
              onPress={() => navigation.navigate('CreateMeetup')}>
              <Icon
                name="md-add-circle"
                style={{
                  fontSize: 30,
                  color: Colors.whiteColor
                }}
                />
            </Button>
          </View>
      ),
      tabBarIcon: ({tintColor}) => (
        <FontAwesome
          name="home"
          size={25}
          color={tintColor}
        />
      ),

    }
  }

  async componentDidMount(){
    this.props.fetchMyMeetups()
  }

  render(){
    const {
      myMeetups: {
        isFetched,
        data,
        error,
      }
    } = this.props

    if(!isFetched){
      return <LoadingScreen />
    } else if(error.on){
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      )
    }

    return(
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    )

  }

}

export default HomeScreen
