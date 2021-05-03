const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.disable('X-Powered-by-Express')


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server statted at port ${PORT}`));

// routes
const HomeRoutes = require('./routes/HomeRoutes')
const AdminRoutes = require('./routes/AdminRoutes')

app.use(HomeRoutes)
app.use('/admin', AdminRoutes)