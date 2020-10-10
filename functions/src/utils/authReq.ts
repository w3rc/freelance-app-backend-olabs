import { auth } from 'firebase-admin';
import { firestore } from './firebase';

const authReq = async (req: any, res: any, next: any) => {
	let idToken;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer ')
	) {
		idToken = req.headers.authorization.split('Bearer ')[1];
	} else {
		res
			.status(300)
			.json({ error: 'User unauthorized. Please login and try again...' });
	}

	try {
		const response = await auth().verifyIdToken(idToken);
		req.user = response;
		const data = await firestore
			.collection('users')
			.where('userId', '==', req.user.uid)
			.limit(1)
			.get();

		req.user.uid = data.docs[0].data().userId;
		req.user.firstName = data.docs[0].data().firstName;
		req.user.lastName = data.docs[0].data().lastName;
		req.user.name = req.user.firstName + req.user.lastName;
		req.user.image = data.docs[0].data().imageUrl;
		req.user.email = data.docs[0].data().email;
		return next();
	} catch (e) {
		res.status(400).json({ e });
	}
};

export default authReq;
