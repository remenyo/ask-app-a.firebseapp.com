const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp(functions.config().firebase);
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.post = (req, res) => {
  admin.database().ref().once('value', (snapshot) => {
    const qList = snapshot.val().qList
    const model = req.body.payload.res
    for (const [index, val] of model.res.entries()) {
      qList[index].w = val.map((num, idx) => { return num + qList[index].w[idx] })
    }
    res.status(200).send(qList)
    // admin.database().ref('qlist').set(qList).then(res.status(200).json(qList)).catch(err => res.status(500).send(err));
  }).catch(err => res.status(500).send(err));
}

exports.updateweights = functions.region('europe-west1').https.onRequest(app);
//   //  catch (error) {
//   //   console.log('Error detecting sentiment or saving message', error.message);
//   //   res.sendStatus(500);
//   // }
// });

// exports.api = (req, res) => {
//   // Set CORS headers for preflight requests
//   // Allows GETs from any origin with the Content-Type header
//   // and caches preflight response for 3600s

//   res.set('Access-Control-Allow-Origin', '*');

//   if (req.method === 'OPTIONS') {
//     // Send response to OPTIONS requests
//     res.set('Access-Control-Allow-Methods', 'POST');
//     res.set('Access-Control-Allow-Headers', 'Content-Type');
//     res.set('Access-Control-Max-Age', '3600');
//     res.status(204).send('');
//   } else {
//     // Set CORS headers for the main request
//     res.set('Access-Control-Allow-Origin', 'https://ask-app-a.firebaseapp.com');
//     admin.database().ref().once('value', (snapshot) => {
//       const qList = snapshot.val().qList
//       const model = req.body.payload
//       for (const [index, val] of model.res.entries()) {
//         qList[index].w = val.map((num, idx) => { return num + qList[index].w[idx] })
//       }
//       admin.database().ref('qlist').set(qList).then(res.status(200).json(qList)).catch(err => res.status(500).send(err));
//     }).catch(err => res.status(500).send(err));
//   }
// };

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
