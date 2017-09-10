import mongoose from 'mongoose'

export default () => {

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/meetupME')
  mongoose.connection
    .once('open', () => console.log('Mongodb connected'))
    .on('error', err => console.error('Mongodb connection err: ' + err))
}
