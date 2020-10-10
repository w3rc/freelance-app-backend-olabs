import express = require('express');
import { getUser, signupUser } from '../handlers/userHandler';
const app = express();

const cors = require('cors');
import { corsOptions } from '../utils/cors';
app.use(cors(corsOptions));

app.post('/signup', signupUser);
app.post('/login', getUser);

export default app;
