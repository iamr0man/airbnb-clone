const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/user', require('./routes/api/user'))
// app.use('/api/expe', require('./routes/api/expe'))
app.use('/api/home', require('./routes/api/home'))
app.use('/api/pick', require('./routes/api/pick'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`))
