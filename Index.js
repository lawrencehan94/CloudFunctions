const functions = require (‘firebase-functions’);
const admin = require(‘firebase-admin’);
admin.initializeApp();

exports.sendNotification = functions.database.ref('Notifications/{userID}/{notificationID}')
  .onWrite((change, context) => {
  const userID = context.params.userID;
  const notificationID = context.params.notificationID;
  
  // If there's a deletion we exit the function
  if (!change.after.val()) {
    return console.log('Ignore');
  }
  console.log('We have a new notificationID: ', notificationID');
  
  // Get list of device notification tokens
  const getDeviceTokensPromise = admin.database().ref('/
              
})
