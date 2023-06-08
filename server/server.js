//don't forget to add .env with the secret code

const express =require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const DB="Trip";

const cookieParser = require('cookie-parser');

require('dotenv').config();

require('./config/mongoose.config')(DB);

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));                          
app.use(express.json(),express.urlencoded({ extended: true }));

require('./routes/user.routes')(app);
require('./routes/trip.routes')(app);

app.listen(PORT, () => {
    console.log(PORT, `Listening at Port ${PORT}`)
})


