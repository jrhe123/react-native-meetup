import React from 'react';
import { AppLoading } from 'expo'


// libraries
import EStyleSheet from 'react-native-extended-stylesheet'

// colors
import Colors from './constants/Colors'

// font
import { cachedFonts } from './helpers'

// Route
import Root from './src/Root'

// Redux
import { Provider } from 'react-redux'
import store from './src/redux/store'


EStyleSheet.build(Colors)


export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  componentDidMount(){
    this._loadAssetsAsync()
  }

  async _loadAssetsAsync(){
    const fontAssets = cachedFonts([
      {
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
      },
      {
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Light.ttf')
      },
      {
        montserratMed: require('./assets/fonts/Montserrat-Medium.ttf')
      }
    ])

    await Promise.all(fontAssets)
    this.setState({
      fontLoaded: true
    })
  }

  render(){

    if(!this.state.fontLoaded){
      return <AppLoading />;
    }

    return(
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
