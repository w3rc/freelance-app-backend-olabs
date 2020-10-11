import * as functions from 'firebase-functions';

import appUsers from './routes/users';
import appProducts from './routes/products';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const users = functions.https.onRequest(appUsers);
export const products = functions.https.onRequest(appProducts);
