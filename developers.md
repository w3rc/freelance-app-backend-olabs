# Root URL -> https://us-central1-open-labs-44022.cloudfunctions.net

# Routes ->
[USERS](#USERS)

[PRODUCTS](#PRODUCTS)


## USERS

### /users/signup -> SignupUser

    ENUMS
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

    PAYLOAD
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

### /users/login -> LoginUser

    PAYLOAD
        email: string;
        password: string;

### /users/getUserByCategories -> Get User By Categories
    QUERY
        category:string,
    RESPONSE
        allProducts: Array<User>


## PRODUCTS

### /products/getAllProducts -> Get All Products

    RESPONSE
        allProducts: Array<Product>

### /products/getProductsByCategory -> Get Products By Category

    QUERY
        category:string,

    RESPONSE
        allProducts: Array<Product>

### /products/addProduct -> Add a Product

    BEARER TOKEN REQUIRED
    PAYLOAD
        productName: string;
        productAspectRatio: string;
        category: string;
        thumbnail: string;
        prizeinRupees: number;
        addedDate: string;