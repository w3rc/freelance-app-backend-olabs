import firebase, { firestore } from '../utils/firebase';

enum Category {
	normal= 'Normal',
	handDrawn = 'Hand Drawn',
	digitalArt = 'Digital Art',
	monochrome = 'MonoChrome'
}
enum Gender {
	male = 'Male',
	female = 'Female',
	nonBinary = 'Non-Binary',
	none = 'Prefer-not-say'
}

interface NewUser {
	firstName: string;
	lastName: string;
	name: string;
	avatar: string;
	createdAt: string;
	email: string;
	gender: Gender,
	country: string,
	area: string;
	notificationCount: number;
	phoneNumber: number;
	categories: Array<Category>
}


export const signupUser = async (req: any, res: any) => {
	console.log(req.body);
	const newUser:NewUser = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		name: `${req.body.firstName} + ${req.body.lastName}`,
        avatar: req.body.imageUrl,
        createdAt: new Date().toISOString(),
		email: req.body.email,
		gender: req.body.gender,
		country: req.body.country,
		area: req.body.area,
		notificationCount: 0,
		phoneNumber: req.body.phoneNumber,
		categories: req.body.categories
	};

    let userId: string | undefined;

	try {
		const doc = await firestore.doc(`users/${newUser.email}`).get();
		if (doc.exists) {
			return res
				.status(400)
				.json({ error: `User with email ${newUser.email} already exists` });
		}
		// } else {
		// 	const user = await firebase
		// 		.auth()
		// 		.createUserWithEmailAndPassword(newUser.email, req.body.password);
		//     userId = user?.user?.uid;
		// }

		const current_user = firebase.auth().currentUser;
		const isVerified = current_user?.emailVerified;

		current_user
			?.sendEmailVerification()
			.then(() => res.status(200).json('Email sent'));

		const userCredentials = {
			...newUser,
			userId,
		};

		await firestore.doc(`users/${newUser.email}`).set(userCredentials);
		return res.status(201).json({
			isVerified,
			message: `User created successfully`,
		});
	} catch (e) {
		return res.status(400).json({ error: 'Something went wrong', message: e });
	}
};

export const loginUser = async (req: any, res: any) => {
	const user = {
		email: req.body.email,
		password: req.body.password,
	};
	console.log(req.auth);

	try {
		// const signIn = await firebase
		// 	.auth()
		// 	.signInWithEmailAndPassword(user.email, user.password);

		const current_user = firebase.auth().currentUser;
		const isVerified = current_user?.emailVerified;

		// refreshToken = signIn?.user?.refreshToken;
		// const token = await signIn?.user?.getIdToken();
		const data = await firestore.doc(`users/${user.email}`).get();
		return res.status(200).json({
			// token: token,
			// refreshToken,
			isVerified,
			user: {
				firstName: data?.data()?.firstName,
				lastName: data?.data()?.lastName,
				email: data?.data()?.email,
				imageUrl: data?.data()?.imageUrl,
				createdAt: data?.data()?.createdAt,
				gender: data?.data()?.gender,
				country: data?.data()?.country,
				area: data?.data()?.area,
			},
		});
	} catch (e) {
		if (e.code === 'auth/wrong-password') {
			res.status(400).json({ Error: 'Wrong credentials. Please try again' });
		} else {
			res.status(400).json({ error: e });
		}
	}
};


