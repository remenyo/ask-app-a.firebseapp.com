const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp(functions.config().firebase);
const app = express();
app.use(cors({
  origin: true
}))

// Automatically allow cross-origin requests
app.options('*', cors())

app.post('/', (req, res) => {
  admin.database().ref('weights').once('value', (snapshot) => {
    let weights = snapshot.val()
    let model = req.body.payload.res
    for (let row = 0; row < weights.length; row++) {
      for (let [index, v] of model[row].entries()) {
        weights[row][index] += v
      }
    }
    admin.database().ref('weights').update(weights)
    admin.database().ref('updates').push({
      date: req.body.payload.date,
      chanceIndex: req.body.payload.chanceIndex,
      initialChance: req.body.payload.initialChance,
      endChance: req.body.payload.endChance,
      res: req.body.payload.res,
    })
      .then(res.status(200).send(snapshot.val() + " => " + model + " => " + weights))
      .catch(err => res.status(500).send(err));
  }).catch(err => res.status(500).send(err));
})

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
