const { User, Translation, Sale, GPU, CPU, Mouse, GPUUser, CPUUser, MouseUser, TopOneLatereia, UserGamingLatereia, TimerGame, TopOneLatereiaTwo, UserGamingLatereiaTwo } = require('../models/models')

const event = require('events')
const emitter = new event.EventEmitter()



class UserController {

    async SignIn(req, res) { // вход в систему
        try {
            const { id_user } = req.body
            const user = await User.findOne({ where: { id_user } })
            if (user != null) {
                if (user.banAkk == '1') {
                return res.json('User ban')
                    
                } else {
                    const userGPU = await GPUUser.findAll({ where: { userId: user.id } })
                    const userCPU = await CPUUser.findAll({ where: { userId: user.id } })
                    const userMouse = await MouseUser.findAll({ where: { userId: user.id } })
        
                    return res.json({
                        user: user,
                        userGPU: userGPU,
                        userCPU: userCPU,
                        userMouse: userMouse
                    })
                }
            } else {
                return res.json('User is not founded')
            } 
        } catch (error) {}
    }



    async Registration(req, res) { // Регистрация аккаунта
        try {
            const { id_user, photoURL, userName } = req.body
            if (userName == '') {
                return res.json('Введите ник')
            } else {
                const user = await User.findAll()
                if (Object.keys(user).length == 0) {
                    const user = await User.create({ id_user: id_user, userName: userName, photoURL: photoURL, meRefCode: id_user })
                    const AllGpu = await GPU.findAll()
                    for (let i = 0; i < AllGpu.length; i++) {
                        const element = AllGpu[i];
                        if (element.live == '0') {
                            await GPUUser.create({ name: element.name, bust: element.bust, price: element.price, sum: element.sum, userId: user.id })

                        }
                    }
                    const AllCpu = await CPU.findAll()
                    for (let i = 0; i < AllCpu.length; i++) {
                        const element = AllCpu[i];
                        if (element.live == '0') {
                            await CPUUser.create({ name: element.name, bust: element.bust, price: element.price, sum: element.sum, userId: user.id })

                        }
                    }

                    const AllMouse = await Mouse.findAll()
                    for (let i = 0; i < AllMouse.length; i++) {
                        const element = AllMouse[i];
                        if (element.live == '0') {
                            await MouseUser.create({ name: element.name, bust: element.bust, price: element.price, sum: element.sum, userId: user.id })

                        }
                    }
                    const userGPU = await GPUUser.findAll({ where: { userId: user.id } })
                    const userCPU = await CPUUser.findAll({ where: { userId: user.id } })
                    const userMouse = await MouseUser.findAll({ where: { userId: user.id } })

                    return res.json({
                        message: 'Успешно',
                        user: user,
                        userGPU: userGPU,
                        userCPU: userCPU,
                        userMouse: userMouse
                    })
                } else {
                    for (let i = 0; i < user.length; i++) {
                        const element = user[i].userName;
                        if (element == userName) {
                            return res.json('Ник занят')
                        } else {
                            const user = await User.create({ id_user: id_user, userName: userName, photoURL: photoURL, meRefCode: id_user })
                            const AllGpu = await GPU.findAll()
                            for (let i = 0; i < AllGpu.length; i++) {
                                const element = AllGpu[i];
                                if (element.live == '0') {
                                    await GPUUser.create({ name: element.name, bust: element.bust, price: element.price, sum: element.sum, userId: user.id })

                                }
                            }
                            const AllCpu = await CPU.findAll()
                            for (let i = 0; i < AllCpu.length; i++) {
                                const element = AllCpu[i];
                                if (element.live == '0') {
                                    await CPUUser.create({ name: element.name, bust: element.bust, price: element.price, sum: element.sum, userId: user.id })

                                }
                            }

                            const AllMouse = await Mouse.findAll()
                            for (let i = 0; i < AllMouse.length; i++) {
                                const element = AllMouse[i];
                                if (element.live == '0') {
                                    await MouseUser.create({ name: element.name, bust: element.bust, price: element.price, sum: element.sum, userId: user.id })

                                }
                            }
                            const userGPU = await GPUUser.findAll({ where: { userId: user.id } })
                            const userCPU = await CPUUser.findAll({ where: { userId: user.id } })
                            const userMouse = await MouseUser.findAll({ where: { userId: user.id } })

                            return res.json({
                                message: 'Успешно',
                                user: user,
                                userGPU: userGPU,
                                userCPU: userCPU,
                                userMouse: userMouse
                            })
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }



    async ClickCoin(req, res) { // кликер ручной
        try {
            const { id_user } = req.body
            const user = await User.findOne({ where: { id_user } })
            const newCoin = parseFloat(user.coin) + parseFloat(user.mouse)
            user.coin = newCoin
            await user.save()
            return res.json({
                user: user
            })
        } catch (error) {}

    }


    async ClickCoinOnline(req, res) { // кликер онлайн
        try {
            const { id_user } = req.body
            const user = await User.findOne({ where: { id_user } })
            const newCoin = parseFloat(user.coin) + parseFloat(user.gpu)
            user.coin = newCoin
            await user.save()
            return res.json({
                user: user
            })
        } catch (error) {}
    }

    async ClickCoinOffline(req, res) { // кликер офлайн
        try {
            const { id_user, sec } = req.body
            const user = await User.findOne({ where: { id_user } })
            user.coin = parseFloat(user.cpu) * parseInt(sec) + parseFloat(user.coin)
            await user.save()
            return res.json('ok')
        } catch (error) {}
    }


    async ShopGPU(req, res) { // магазин видеокарт
        try {
            const { id_user, id_shop } = req.body
            const user = await User.findOne({ where: { id_user } })
            const gpu = await GPUUser.findOne({ where: { id: id_shop, userId: user.id } })
            const coin = parseFloat(user.coin).toFixed(10) - parseFloat(gpu.price).toFixed(10)
            if (coin >= 0) {
                user.coin = parseFloat(user.coin).toFixed(10) - parseFloat(gpu.price).toFixed(10)
                user.gpu = parseFloat(user.gpu) + parseFloat(gpu.bust)
                await user.save()
                gpu.price = parseFloat(gpu.price).toFixed(10) * 1.5
                gpu.sum = parseFloat(gpu.sum) + 1
                await gpu.save()
    
    
    
                const userGPU = await GPUUser.findAll({ where: { userId: user.id } })
                const userCPU = await CPUUser.findAll({ where: { userId: user.id } })
                const userMouse = await MouseUser.findAll({ where: { userId: user.id } })
    
                return res.json({
                    user: user,
                    userGPU: userGPU,
                    userCPU: userCPU,
                    userMouse: userMouse
                })
            }
        } catch (error) {}
    }



    async ShopCPU(req, res) { // магазин процесерров
        try {
            const { id_user, id_shop } = req.body
            const user = await User.findOne({ where: { id_user } })
            const cpu = await CPUUser.findOne({ where: { id: id_shop, userId: user.id } })
            const coin = parseFloat(user.coin).toFixed(10) - parseFloat(cpu.price).toFixed(10)
            if (coin >= 0) {
                user.coin = parseFloat(user.coin).toFixed(10) - parseFloat(cpu.price).toFixed(10)
                user.cpu = parseFloat(user.cpu) + parseFloat(cpu.bust)
                await user.save()
                cpu.price = parseFloat(cpu.price).toFixed(10) * 1.5
                cpu.sum = parseFloat(cpu.sum) + 1
                await cpu.save()
    
                const userGPU = await GPUUser.findAll({ where: { userId: user.id } })
                const userCPU = await CPUUser.findAll({ where: { userId: user.id } })
                const userMouse = await MouseUser.findAll({ where: { userId: user.id } })
    
                return res.json({
                    user: user,
                    userGPU: userGPU,
                    userCPU: userCPU,
                    userMouse: userMouse
                })
            }
        } catch (error) {}

    }

    async ShopMouse(req, res) { // магазин процесерров
        try {
            const { id_user, id_shop } = req.body
            const user = await User.findOne({ where: { id_user } })
            const mouse = await MouseUser.findOne({ where: { id: id_shop, userId: user.id } })
            const coin = parseFloat(user.coin).toFixed(10) - parseFloat(mouse.price).toFixed(10)
            if (coin >= 0) {
                user.coin = parseFloat(user.coin).toFixed(10) - parseFloat(mouse.price).toFixed(10)
                user.mouse = parseFloat(user.mouse) + parseFloat(mouse.bust)
                await user.save()
                mouse.price = parseFloat(mouse.price).toFixed(10) * 1.5
                mouse.sum = parseFloat(mouse.sum) + 1
                await mouse.save()
    
                const userGPU = await GPUUser.findAll({ where: { userId: user.id } })
                const userCPU = await CPUUser.findAll({ where: { userId: user.id } })
                const userMouse = await MouseUser.findAll({ where: { userId: user.id } })
    
                return res.json({
                    user: user,
                    userGPU: userGPU,
                    userCPU: userCPU,
                    userMouse: userMouse
                })
            }
        } catch (error) {}
    }


    async TopUser(req, res) { // топ юзеров
        try {
            const user = await User.findAll()
            return res.json(user)
        } catch (error) {}

    }


    async UserReferal(req, res) { // рефералы
        try {
            const { id_user, ref_code } = req.body
            const user = await User.findOne({ where: { id_user } })
            if (ref_code == '') {
                return res.json('no code')
            } else {
                if (user.meRefCode == ref_code) {
                    return res.json('нельзя использовать свой код')
                } else {
                    user.ToRefCode = ref_code
                    await user.save()
                    return res.json(user)
                }
            }
        } catch (error) {}
    }


    async UserSell(req, res) { // продажа монет
        try {
            const { id_user, sum, curs } = req.body
            if (sum == '' || curs == '') {
                return res.json('Ввдеите данные')
            } else {
                const user = await User.findOne({ where: { id_user } })
                await Sale.create({ userIdMe: id_user, userNameMe: user.userName, sum, curs })
                return res.json('успешно')
            }
        } catch (error) {}
    }

    async UserTransfer(req, res) { // топ юзеров
        try {
            const { id_user, nameUs2, sum } = req.body
            if (nameUs2 == '' || sum == '') {
                return res.json('Ввдеите данные')
            } else {
                const user_two = await User.findOne({ where: { userName: nameUs2 } })
                if (user_two == null) {
                    return res.json('Пользователя нет')
                } else {
                    const user_one = await User.findOne({ where: { id_user } })
                    user_one.coin = parseFloat(user_one.coin).toFixed(10) - parseFloat(sum)
                    await user_one.save()
                    user_two.coin = parseFloat(user_two.coin) + parseInt(sum)
                    await user_two.save()
    
    
                    await Translation.create({ nameUs1: user_one.userName, nameUs2: user_two.userName, sum: sum })
                    return res.json('успешно')
                }
            }
        } catch (error) {}
    }


    async GetSelTransfer(req, res) {
        try {
            const Sell = await Sale.findAll()
            const Transfer = await Translation.findAll()
    
            return res.json({
                sell: Sell,
                transfer: Transfer
            })
        } catch (error) {}
    }




    async GetGamerLatOne(req, res) {
        emitter.once('NewGamer', (gamer) => {
            return res.json(gamer)
        })
    }

    async NewGamerLatOne(req, res) {
        const { id_user, coin } = req.body
        const user = await User.findOne({ where: { id_user } })
        const chet = parseFloat(user.coin) - parseInt(coin)
        if (chet >= 0) {
            user.coin = chet
            await user.save()
            const gamer = await UserGamingLatereia.create({ name: user.userName, photoURL: user.photoURL, coin: coin, on_of: '0' })
            emitter.emit('NewGamer', gamer)
            return res.status(200)
        }
    }


    async AllGamerLatOne(req, res) {
        const gamer = await UserGamingLatereia.findAll({ where: { on_of: '0' } })
        return res.json(gamer)
    }


    async GameOverOne(req, res) {
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
            return res.json('no')
        }

    }


    async GetTopGameOne(req, res) {
        try {
            const winner = await TopOneLatereia.findAll()
            return res.json(winner)
        } catch (error) {
            return res.json('no')
        }
    }



    // ____________________________________

    async GetGamerLatTwo(req, res) {
        emitter.once('NewGamerTwo', (gamer) => {
            return res.json(gamer)
        })
    }

    async NewGamerLatTwo(req, res) {
        const { id_user, coin, cmd } = req.body
        const user = await User.findOne({ where: { id_user } })
        const chet = parseFloat(user.coin) - parseInt(coin)
        if (chet >= 0) {
            user.coin = chet
            await user.save()
            const gamer = await UserGamingLatereiaTwo.create({ name: user.userName, photoURL: user.photoURL, coin: coin, comand: cmd, on_of: '0' })
            emitter.emit('NewGamerTwo', gamer)
            return res.status(200)
        }
    }

    async AllGamerLatTwo(req, res) {
        const gamer = await UserGamingLatereiaTwo.findAll({ where: { on_of: '0' } })
        return res.json(gamer)
    }



    async GameOverTwo(req, res) {
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
            return res.json(error)
        }
    }


    async GetTopGameTwo(req, res) {
        try {
            const winner = await TopOneLatereiaTwo.findAll()
            return res.json(winner)
        } catch (error) {
            return res.json('no')
        }
    }



    async GetTimer(req, res) {
        const timer = await TimerGame.findOne({ where: { id: 1 } })
        return res.json(timer.chet)
    }



    async CreateTimer(req, res) {
        const timer = await TimerGame.findOne({ where: { id: 1 } })
        if (timer) {
            let time = 301
            setInterval(async function () {
                const res = --time;
                timer.chet = res
                await timer.save()
                if (!res) {
                    time = 301
                };
            }, 1000)
        } else {
            await TimerGame.create()
        }
    }

}







module.exports = new UserController()