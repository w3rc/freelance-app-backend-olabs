# Root URL -> https://us-central1-open-labs-44022.cloudfunctions.net

# API Endpoints

## USERS

### /users/signup -> SignupUser

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

    Category {
	    'Normal',
	    'Hand Drawn',
	    'Digital Art',
	    'MonoChrome'
    }

    Gender {
        'Male',
        'Female',
        'Non-Binary',
        'Prefer-not-say'
    }

### /users/login -> LoginUser

    email: string,
    password: string,
