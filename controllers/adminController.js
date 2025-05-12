const { where } = require('sequelize')
const { User, GPU, CPU, Mouse, Sale } = require('../models/models')


class AdminController {

    async singnUp(req, res) { 
        res.json('ok')
    }


    // наполнение магазинов
    async createGPU(req, res) { 
        const { name, bust, price } = req.body
        const gpu = await GPU.create({ name, bust, price })
        res.json('ok')
    }


    async createCPU(req, res) { 
        const { name, bust, price } = req.body
        const cpu = await CPU.create({ name, bust, price })
        res.json('ok')
    }

    async createMOUSE(req, res) { 
        const { name, bust, price } = req.body
        const mouse = await Mouse.create({ name, bust, price })
        res.json('ok')
    }


    // список твоара в магазине
    async allShop(req, res) { 
        const gpu = await GPU.findAll()
        const cpu = await CPU.findAll()
        const mouse = await Mouse.findAll()
        const user = await User.findAll()

        res.json({
            ShopGPU: gpu,
            ShopCPU: cpu,
            ShopMouse: mouse,
            AllUser: user,
        })
    }


    // удаление товара
    async offGPU(req, res) { 
        const { id } = req.body
        const gpu = await GPU.findOne({ where: { id }})
        gpu.live = '1'
        await gpu.save()
        res.json('ok')
    }


    async offCPU(req, res) { 
        const { id } = req.body
        const cpu = await CPU.findOne({ where: { id }})
        cpu.live = '1'
        await cpu.save()
        res.json('ok')
    }

    async offMOUSE(req, res) { 
        const { id } = req.body
        const mouse = await Mouse.findOne({ where: { id }})
        mouse.live = '1'
        await mouse.save()
        res.json('ok')
    }


    async PlusCoin(req, res) { 
        const { id, sum } = req.body
        const user = await User.findOne({where: { id: id }})
        user.coin = parseFloat(user.coin) + parseInt(sum)
        await user.save()
        return res.json('ok')

    }

    async MinusCoin(req, res) { 
        const { id, sum } = req.body
        const user = await User.findOne({where: { id: id }})
        user.coin = parseFloat(user.coin) - parseInt(sum)
        await user.save()
        return res.json('ok')
    }


    async UserBan(req, res) { 
        const { id } = req.body
        const user = await User.findOne({where: { id: id }})
        user.banAkk = '1'
        await user.save()
        return res.json('ok')

    }

    async UserUnban(req, res) { 
        const { id } = req.body
        const user = await User.findOne({where: { id: id }})
        user.banAkk = '0'
        await user.save()
        return res.json('ok')
    }




    async DeleteRecordsShop(req, res) { 
        try {
            const sale = await Sale.findAll()
            for (let i = 0; i < sale.length; i++) {
                const element = sale[i];
                await element.destroy();
            }
            return res.json('ok')
        } catch (error) {}
    }

    
}

module.exports = new AdminController()
