import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { config } from './firebaseConfig';

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export default firebase;
