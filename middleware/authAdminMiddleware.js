module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try{
        const { login, password } = req.body
        if (login != 'Tusami' || password != 'q2AgkC}g:Ot$J[H2^,2Hq%1@=') {
            return res.json('Не верный логин или пароль')
        } else {
            next()
        }
    } catch (e) {
        res.status(401).json({message: 'Пользователь не авторизован'})
    }
};