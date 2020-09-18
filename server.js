const express = require('express')
const cors = require('cors')
const {register, home, pick } = require('./routes/index')
const connectDB = require('./config/db')

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/register', register)
app.use('/api/home', home)
app.use('/api/pick', pick)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`))
