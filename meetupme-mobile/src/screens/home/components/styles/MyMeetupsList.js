import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({

  root: {
    flex: 1
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat'
  },
  contentContainer: {
    flex: 1
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: 6,
    backgroundColor: `$redColor`
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  meetupCardTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: 6,
    left: 6,
    fontFamily: 'montserrat'
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight'
  },

})

export default styles
