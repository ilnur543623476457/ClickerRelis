require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const { User, TopOneLatereia, UserGamingLatereia, TimerGame, TopOneLatereiaTwo, UserGamingLatereiaTwo } = require('./models/models')


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




const gone = async () => {
    try {
        var arrGamer = []
        var arrGamerCoin = []

        const gamer = await UserGamingLatereia.findAll({ where: { on_of: '0' } })
        for (let i = 0; i < gamer.length; i++) {
            const element = gamer[i];
            arrGamer.push(element.id)
            arrGamerCoin.push(element.coin)
            element.on_of = 1
            await element.save()
        }

        const randomIndex = Math.floor(Math.random() * arrGamer.length);
        const gamer_win = await UserGamingLatereia.findOne({ where: { id: arrGamer[randomIndex] } })
        const summaCoin = arrGamerCoin.reduce((acc, number) => parseInt(acc) + parseInt(number), 0);




        const user = await User.findOne({ where: { userName: gamer_win.name } })
        user.coin = parseFloat(user.coin) + summaCoin
        await user.save()

        const winner = await TopOneLatereia.create({ photoURL: gamer_win.photoURL, name: gamer_win.name, coin: summaCoin })
        return res.json(winner)
    } catch (error) {
        // return console.log(error);
    }
}


const gtwo = async () => {
    try {
        const gamer = await UserGamingLatereiaTwo.findAll({ where: { on_of: '0' } })
        if (gamer.length != 0) {
            if (gamer.length == 1) {
                for (let i = 0; i < gamer.length; i++) {
                    const element = gamer[i];
                    const user = await User.findOne({ where: { userName: element.name } })
                    user.coin = parseFloat(user.coin) + parseFloat(element.coin)
                    await user.save()
                    element.on_of = '1'
                    await element.save()
                    return res.json(element.name)
                }
            } else {
                var SumBot = []
                var SumPeople = []
                for (let i = 0; i < gamer.length; i++) {
                    const element = gamer[i];
                    if (element.comand == 'bot') {
                        SumBot.push(element.coin)
                    } else if (element.comand == 'people') {
                        SumPeople.push(element.coin)
                    }
                }
                const summaCoinBot = SumBot.reduce((acc, number) => parseInt(acc) + parseInt(number), 0);
                const summaCoinPeople = SumPeople.reduce((acc, number) => parseInt(acc) + parseInt(number), 0);

                const cmd = ['bot', 'people']

                const cmdWinner = cmd[Math.floor(Math.random() * cmd.length)]

                var nameWinnerGamer = []
                if (cmdWinner == 'bot') {
                    await TopOneLatereiaTwo.create({ cmd: 'Боты' })

                    const XBot = (summaCoinBot / summaCoinPeople).toFixed(1)
                    const gamerWinner = await UserGamingLatereiaTwo.findAll({ where: { on_of: '0' } })
                    for (let i = 0; i < gamerWinner.length; i++) {
                        const element = gamer[i];
                        if (element.comand == 'bot') {
                            const user = await User.findOne({ where: { userName: element.name } })
                            user.coin = parseInt(element.coin) * parseFloat(XBot) + parseFloat(user.coin)
                            await user.save()
                            nameWinnerGamer.push(element.name)
                        }
                    }
                } else {
                    await TopOneLatereiaTwo.create({ cmd: 'Люди' })

                    const XPeople = (summaCoinPeople / summaCoinBot).toFixed(1)
                    const gamerWinner = await UserGamingLatereiaTwo.findAll({ where: { on_of: '0' } })
                    for (let i = 0; i < gamerWinner.length; i++) {
                        const element = gamer[i];
                        if (element.comand == 'people') {
                            const user = await User.findOne({ where: { userName: element.name } })
                            user.coin = parseInt(element.coin) * parseFloat(XPeople) + parseFloat(user.coin)
                            await user.save()
                            nameWinnerGamer.push(element.name)
                        }
                    }
                }
                nameWinnerGamer = [...new Set(nameWinnerGamer)];

                const gameroff = await UserGamingLatereiaTwo.findAll({ where: { on_of: '0' } })
                for (let i = 0; i < gameroff.length; i++) {
                    const element = gamer[i];
                    element.on_of = '1'
                    await element.save()
                }
                return res.json(nameWinnerGamer)
            }
        }




    } catch (error) {
        // return console.log(error);

    }
}

const timer = async () => {
    const timer = await TimerGame.findOne({ where: { id: 1 } })
    if (timer) {
        let time = 301
        setInterval(async function () {
            const res = --time;
            timer.chet = res
            await timer.save()
            if (!res) {
                time = 301
                try {
                    gone()
                    gtwo()
                } catch (error) {}
            };
        }, 1000)
    } else {
        await TimerGame.create()
    }
}


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        timer()
        app.listen(PORT, () => {
            console.log(`server online -- http://localhost:${PORT}/`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()