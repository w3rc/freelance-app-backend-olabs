# Root URL -> https://us-central1-open-labs-44022.cloudfunctions.net

# API Endpoints

## USERS

### /users/signup -> SignupUser

    firstName: string,
    lastName: string,
    avatar: string | null,
    createdAt: ISOString,
    email: string,
    gender: 'Male'|'Female'|'Non-binary'|undefined,
    country: string,
    area: string,
    phoneNumber: double,

### /users/login -> LoginUser

    email: string,
    password: string,
