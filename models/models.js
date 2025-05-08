const sequelize = require("../db");
const {DataTypes, HasOne} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_user: {type: DataTypes.INTEGER, unique: true},
    userName: {type: DataTypes.TEXT},
    photoURL: {type: DataTypes.TEXT},
    coin: {type: DataTypes.TEXT, defaultValue: "0.0000000000"},
    gpu: {type: DataTypes.TEXT, defaultValue: "0.0000000000"},
    cpu: {type: DataTypes.TEXT, defaultValue: "0.0000000000"},
    mouse: {type: DataTypes.TEXT, defaultValue: "0.0000000001"},
    meRefCode: {type: DataTypes.TEXT},
    ToRefCode: {type: DataTypes.TEXT},
    banAkk: {type: DataTypes.INTEGER, defaultValue: "0"},
});

const Translation = sequelize.define('translation', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nameUs1: {type: DataTypes.TEXT},
    nameUs2: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT},
});


const Sale = sequelize.define('sale', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userIdMe: {type: DataTypes.TEXT},
    userNameMe: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT},
    curs: {type: DataTypes.TEXT},
});


const GPU = sequelize.define('gpu', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    bust: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT, defaultValue: "0"},
    live: {type: DataTypes.TEXT, defaultValue: "0"}   
});

const CPU = sequelize.define('cpu', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    bust: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT, defaultValue: "0"},
    live: {type: DataTypes.TEXT, defaultValue: "0"}   
});

const Mouse = sequelize.define('mouse', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    bust: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT, defaultValue: "0"},  
    live: {type: DataTypes.TEXT, defaultValue: "0"}
});




const GPUUser = sequelize.define('gpuUser', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    bust: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT, defaultValue: "0"},
    userId: {type: DataTypes.INTEGER},
});

const CPUUser = sequelize.define('cpuUser', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    bust: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT, defaultValue: "0"},
    userId: {type: DataTypes.INTEGER},
});

const MouseUser = sequelize.define('mouseUser', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    bust: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    sum: {type: DataTypes.TEXT, defaultValue: "0"},
    userId: {type: DataTypes.INTEGER}, 
});


const TopOneLatereia = sequelize.define('topOneLatereia', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photoURL: {type: DataTypes.TEXT},
    name: {type: DataTypes.TEXT},
    coin: {type: DataTypes.TEXT}
});


const UserGamingLatereia = sequelize.define('userGamingLatereia', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    photoURL: {type: DataTypes.TEXT},
    coin: {type: DataTypes.TEXT},
    on_of: {type: DataTypes.TEXT},
});


const TimerGame = sequelize.define('timerGame', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    chet: {type: DataTypes.TEXT, defaultValue: "0"},
});



const TopOneLatereiaTwo = sequelize.define('topOneLatereiaTwo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cmd: {type: DataTypes.TEXT},
});


const UserGamingLatereiaTwo = sequelize.define('userGamingLatereiaTwo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    photoURL: {type: DataTypes.TEXT},
    coin: {type: DataTypes.TEXT},
    comand: {type: DataTypes.TEXT},
    on_of: {type: DataTypes.TEXT},
});



module.exports = {
    User,
    Translation,
    Sale,
    GPU,
    CPU,
    Mouse,
    GPUUser,
    CPUUser,
    MouseUser,
    TopOneLatereia,
    UserGamingLatereia,
    TimerGame,
    TopOneLatereiaTwo,
    UserGamingLatereiaTwo
}


