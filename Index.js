const functions = require (‘firebase-functions’);
const admin = require(‘firebase-admin’);
admin.initializeApp();

exports.sendNotification = functions.database.ref(
