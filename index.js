require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')


const PORT = process.env.PORT || 3030

const app = express()

app.use(cors())
app.use(express.json())


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('coin-relis')
})

app.get('/admin-panel', (req, res) => {
    res.render('admin-panel')
})


app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`server online -- http://localhost:${PORT}/`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()