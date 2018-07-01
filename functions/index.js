const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize((event) => {
    console.log(event);
    return;
});

exports.uploadFile = functions.https.onRequest((request, response) => {
    response.status(200).json({
      message: "File Uploaded" 
    });
});
