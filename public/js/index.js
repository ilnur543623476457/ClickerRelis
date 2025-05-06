const tg = window.Telegram.WebApp;
const user_id = '65486436' // tg.initDataUnsafe.user.id
const photo_user = 'https://pic.rutubelist.ru/video/60/c2/60c2017b68e2740f666d0c57f22ec259.png' // tg.initDataUnsafe.user.photo_url
const ApiEndpointsUser = 'http://localhost:3030/api/user'






window.addEventListener('load', () => {
    ApiSignIn()
    TopUser()
    // clickOffline() // сохраненеи монет нафармленных в офлайн режиме
})

// ___________  работа с монетами _______________ 


// кнопка новый коин

$('.screen-one-click-coin').on('click', () => {
    // console.log('gnjivfd');
    $('.screen-one-click-coin').animate({ backgroundSize: "230px" }, 50)
    $('.screen-one-click-coin').animate({ backgroundSize: "235px" }, 50)
    ApiClickCoin()
})



// кликер при закрытом приложение

const clickOffline = () => {
    const now = new Date();
    var tim = now.toTimeString().split(' ')[0].split(':')
    const lastTime = localStorage.getItem('lastTime');

    let firstDate = lastTime
    let secondDate = `${tim[0]}:${tim[1]}`

    let getDate = (string) => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
    let different = (getDate(secondDate) - getDate(firstDate));

    let hours = Math.floor((different % 86400000) / 3600000);
    let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
    let secOver = ((hours * 60 * 60) + (minutes * 60))
    if (secOver <= 259200) {
        // api
        // TimeFarmCoin(secOver)
    } else {
        var sec = secOver - (secOver - 259200)
        // api
        // TimeFarmCoin(sec)
    }
}

window.onbeforeunload = function () {
    const now = new Date();
    var tim = now.toTimeString().split(' ')[0].split(':')
    localStorage.setItem('lastTime', `${tim[0]}:${tim[1]}`);
};




// регистрация аккаунта

$('.next').on('click', () => {
    var name = document.getElementById('st-name').value
    ApiRegistr(name)
})



// анимация на страте

lottie.loadAnimation({
    container: document.querySelector('.screen-hello-block-anim'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/animation/hello.json'
})



// копирование реф кода 

$('#rfc-user').on('click', (e) => {
    var code = $('#rfc-user').text()
    $('#rfc-user').css('color', '#4cf34a')
    setTimeout(() => {
        $('#rfc-user').css('color', 'white')
    }, 1000);
    navigator.clipboard.writeText(code);
})


// сохраннеие кода


$('#save-code').on('click', () => {
    var code = $('#ref-code-user').val()
    RefCode(code)
})





// продать купить / рефералы

$('.screen-account-sel-buy-referal_blocl-wer').on('click', (e) => {
    var gameID = e.target.id
    // console.log(gameID);
    if (gameID == 'sel-buy') {
        $('.screen-account').css('display', 'none')
        $('.screen-sel').css('display', 'block')
    } else {
        $('.screen-account').css('display', 'none')
        $('.screen-referal').css('display', 'block')
        lottie.loadAnimation({
            container: document.querySelector('.screen-referal-gif'),
            render: 'svg',
            loop: false,
            autoplay: true,
            path: './assets/animation/gift.json'
        })
    }
})



// продать 

$('.screen-sel-btn-transfer-btn').on('click', (e) => {

    $('.screen-sel-btn-sel').animate({ opacity: '0' }, 300)
    setTimeout(() => {
        $('.screen-sel-btn-sel').css('display', 'none')
    }, 300);
    $('.screen-sel-btn-transfer').animate({ width: '300' }, 300)
    setTimeout(() => {
        $('.screen-sel-btn-transfer').animate({ height: '255' }, 300)
        setTimeout(() => {
            $('.screen-sel-btn-transfer_block').css('display', 'block')

            setTimeout(() => {
                $('.screen-sel-btn-transfer_block').animate({ opacity: '1' }, 300)
            }, 100);
        }, 350);
    }, 100);
})


$('#screen-sel-btn-transfer-block-off').on('click', () => {
    $('.screen-sel-btn-transfer_block').animate({ opacity: '0' }, 300)
    setTimeout(() => {
        $('.screen-sel-btn-transfer_block').css('display', 'none')
        $('.screen-sel-btn-transfer').animate({ height: '20' }, 300)
        $('.screen-sel-btn-transfer').animate({ width: '235' }, 300)
        setTimeout(() => {
            $('.screen-sel-btn-sel').css('display', 'block')
            $('.screen-sel-btn-sel').animate({ opacity: '1' }, 300)
        }, 350);
    }, 300);
})


// перевести 

$('.screen-sel-btn-sel-btn').on('click', (e) => {
    $('.screen-sel-btn-sel').animate({ width: '300' }, 300)
    $('.screen-sel-btn-sel').css('background-image', 'none')
    $('.screen-sel-btn-sel').animate({ height: '188' }, 300)
    setTimeout(() => {
        $('.screen-sel-sel-block').animate({ top: '140' }, 300)
        $('.screen-sel-btn-sel-block').css('display', 'block')
        $('.screen-sel-btn-sel-block').animate({ opacity: '1' }, 300)
    }, 300);
})


$('#screen-sel-btn-sel-block-off').on('click', () => {
    $('.screen-sel-btn-sel-block').animate({ opacity: '0' }, 300)
    setTimeout(() => {
        $('.screen-sel-btn-sel-block').css('display', 'none')
        $('.screen-sel-btn-sel').animate({ height: '50' }, 300)
        $('.screen-sel-btn-sel').css('background-image', 'url(/assets/img/transfer-icon.svg)')
        $('.screen-sel-btn-sel').animate({ width: '50' }, 300)
        $('.screen-sel-sel-block').animate({ top: '0' }, 300)

    }, 200);
})




// игры

$('.screen-account-game-center-g-overlock').on('click', (e) => {
    var gameID = e.target.id
    if (gameID == 'game-one') {
        $('.screen-account').css('display', 'none')
        $('.screen-lat-one').css('display', 'block')
    } else {
        $('.screen-account').css('display', 'none')
        $('.screen-lat-two').css('display', 'block')
    }
})


$('.screen-lat-one-off').on('click', (e) => {
    var gameID = e.target.id
    if (gameID == 'game-one-off') {
        $('.screen-lat-one').css('display', 'none')
        $('.screen-account').css('display', 'block')
    } else if (gameID == 'screen-referal-off') {
        $('.screen-referal').css('display', 'none')
        $('.screen-account').css('display', 'block')
        $('.screen-referal-gif').empty()

    } else if (gameID == 'game-two-off') {
        $('.screen-lat-two').css('display', 'none')
        $('.screen-account').css('display', 'block')

    } else if (gameID == 'screen-sel-off') {
        $('.screen-sel').css('display', 'none')
        $('.screen-account').css('display', 'block')
    }
})


// магазин

$('.screen-shop-options-sh').on('click', (e) => {
    var gameID = e.target.classList[1]
    if (gameID == 'gpu') {
        $('.gpu').css('filter', 'contrast(0.3)')
        $('.cpu').css('filter', 'contrast(1)')
        $('.mouse').css('filter', 'contrast(1)')
        $('#gpu').css('display', 'block')
        $('#cpu').css('display', 'none')
        $('#mouse').css('display', 'none')
    } else if (gameID == 'cpu') {
        $('.gpu').css('filter', 'contrast(1)')
        $('.cpu').css('filter', 'contrast(0.3)')
        $('.mouse').css('filter', 'contrast(1)')
        $('#gpu').css('display', 'none')
        $('#cpu').css('display', 'block')
        $('#mouse').css('display', 'none')
    } else if (gameID == 'mouse') {
        $('.gpu').css('filter', 'contrast(1)')
        $('.cpu').css('filter', 'contrast(1)')
        $('.mouse').css('filter', 'contrast(0.3)')
        $('#gpu').css('display', 'nonoe')
        $('#cpu').css('display', 'none')
        $('#mouse').css('display', 'block')
    }
})




// навигационное меню

$('.navigation-bar-btn').on('click', (e) => {
    var touchID = e.target.id
    if (touchID == 'account-page') {
        $('#shop-page').css('filter', 'contrast(1)')
        $('#account-page').css('filter', 'contrast(0.3)')
        $('.screen-referal').css('display', 'none')
        $('.screen-referal-gif').empty()
        $('.screen-sel').css('display', 'none')
        $('.screen-lat-one').css('display', 'none')
        $('.screen-lat-two').css('display', 'none')
        $('.screen-main').css('display', 'none')
        $('.screen-shop').css('display', 'none')
        $('.screen-account').css('display', 'block')

    } else if (touchID == 'home-page') {
        $('#shop-page').css('filter', 'contrast(1)')
        $('#account-page').css('filter', 'contrast(1)')
        $('.screen-referal').css('display', 'none')
        $('.screen-referal-gif').empty()
        $('.screen-sel').css('display', 'none')
        $('.screen-lat-one').css('display', 'none')
        $('.screen-lat-two').css('display', 'none')
        $('.screen-main').css('display', 'block')
        $('.screen-shop').css('display', 'none')
        $('.screen-account').css('display', 'none')
    } else {
        $('#account-page').css('filter', 'contrast(1)')
        $('#shop-page').css('filter', 'contrast(0.3)')
        $('.screen-referal').css('display', 'none')
        $('.screen-referal-gif').empty()
        $('.screen-sel').css('display', 'none')
        $('.screen-lat-one').css('display', 'none')
        $('.screen-lat-two').css('display', 'none')
        $('.screen-main').css('display', 'none')
        $('.screen-shop').css('display', 'block')
        $('.screen-account').css('display', 'none')
    }
})



// купить / магазин


const shopGPU = (e) => {
    if (e.target.id.length == 3) {
        shopApi(e.target.id)
    }
}

document.getElementById('gpu').addEventListener('click', shopGPU)

const shopCPU = (e) => {
    if (e.target.id.length == 3) {
        shopApi(e.target.id)
    }
}

document.getElementById('cpu').addEventListener('click', shopCPU)

const shopMouse = (e) => {
    if (e.target.id.length == 3) {
        shopApi(e.target.id)
    }
}

document.getElementById('mouse').addEventListener('click', shopMouse)



// top

$('.screen-account-top-user-sort-block-s').on('click', (e) => {
    const id = e.target.classList[1]
    if (`top-${id}` == `top-coin`) {
        $('#top-coin').css('display', 'block')
        $('#top-click').css('display', 'none')
    } else {
        $('#top-coin').css('display', 'none')
        $('#top-click').css('display', 'block')
    }

})


// Перевести / продать экраны

$('.screen-sel-sel-block-sel-transfe-st').on('click', (e) => {
    var SHID = e.target.classList[1].split('-')[1]
    if (SHID == 'sel') {
        $('.st-transfe').css('border-bottom', '2px solid transparent')
        $('.st-sel').css('border-bottom', '2px solid #f07e2d')
        $(`.sssb-transfe`).css('display', 'block')
        $(`.sssb-sel`).css('display', 'none')

    } else if (SHID == 'transfe') {
        $('.st-sel').css('border-bottom', '2px solid transparent')
        $('.st-transfe').css('border-bottom', '2px solid #f07e2d')
        $(`.sssb-sel`).css('display', 'block')
        $(`.sssb-transfe`).css('display', 'none')
    }
})



// заявка на продажу

$('.sub').on('click', (e) => {
    var id = e.target.id
    if (id == 'sub-btn-prod') {
        const one_value = document.getElementById('sum-prod').value
        const two_value = document.getElementById('rub-prod').value
        sel_trns(id, one_value, two_value)

        document.getElementById('sum-prod').value = ''
        document.getElementById('rub-prod').value = ''
    } else {
        const one_value = document.getElementById('name-perev').value
        const two_value = document.getElementById('sum-perev').value
        if ($('.screen-account-info-user-check').text() < 1) {
            $('#sub-btn-perevod').css('background', 'red')
            $('#sub-btn-perevod').css('color', 'white')
            $('#sub-btn-perevod').text('Недостаточно KostroCoin')
        } else {
            sel_trns(id, one_value, two_value)

        }

        document.getElementById('name-perev').value = ''
        document.getElementById('sum-perev').value = ''
    }

})


const openUrl = (e) => {
    if (e.target.id != '') {
        window.open(e.target.id)

    }
}


document.querySelector('.sssb-sel').addEventListener('click', openUrl)



// игры


// 1 game
$('.screen-lat-one-btn').on('click', () => {
    console.log($('#cs1').val());
    if ($('#cs1').val() >= 10) {
        NewGamerOneSub($('#cs1').val())
    }
})


$('.screen-lat-one-menu-slo').on('click', (e) => {
    var screen = e.target.classList[1]
    if (screen == 'slo-winer') {
        $('.slo-game').css('border-bottom', '2px solid transparent')
        $('.slo-winer').css('border-bottom', '2px solid #f07e2d')
        $('.screen-lat-one-top-block').css('display', 'block')
    } else {
        $('.slo-winer').css('border-bottom', '2px solid transparent')
        $('.slo-game').css('border-bottom', '2px solid #f07e2d')
        $('.screen-lat-one-top-block').css('display', 'none')

    }
})


// 1 game
$('.screen-lat-two-btn').on('click', (e) => {
    var cmd = e.target.id
    if ($('#cs2').val() >= 10) {
        if (cmd == 'people-cmd') {
            console.log($('#cs2').val());
            console.log(cmd.split('-')[0]);
            NewGamerTwoSub($('#cs2').val(), cmd.split('-')[0])
        } else {
            console.log($('#cs2').val());
            console.log(cmd.split('-')[0]);
            NewGamerTwoSub($('#cs2').val(), cmd.split('-')[0])
        }
    }
})


// $('.screen-lat-one-menu-slo').on('click', (e) => {
//     var screen = e.target.classList[1]
//     if (screen == 'slo-winer') {
//         $('.slo-game').css('border-bottom', '2px solid transparent')
//         $('.slo-winer').css('border-bottom', '2px solid #f07e2d')
//         $('.screen-lat-one-top-block').css('display', 'block')
//     } else {
//         $('.slo-winer').css('border-bottom', '2px solid transparent')
//         $('.slo-game').css('border-bottom', '2px solid #f07e2d')
//         $('.screen-lat-one-top-block').css('display', 'none')

//     }
// })





// _____________________________API__________________________________




// вход в сиситему

const ApiSignIn = () => {
    axios.post(`${ApiEndpointsUser}/user-sigin`, {
        id_user: user_id,
    }).then((response) => {
        if (response.data == 'User is not founded') {
            $('.screen-hello').css('display', 'block')
        } else if (response.data == 'User ban') {
            $('.screen-ban').css('display', 'block')
            checban()
        }
         else {
            clickOnline(screen_load(response))
            TopUser()
            buy_sel_trns()
            timer()
            GameOneSub()
            GameTwoSub()
            GetAllGamerOne()
            GetAllGamertwo()
            TopGameOne()
            TopGametwo()
        }
    })
}


const checban = () => {
    setInterval(() => {
        var a = $('.screen-ban').css('display')
        if (a == 'none') {
            $('.screen-ban').css('display', 'block')
        }
    }, 1000);
}

// игры
const GameOneSub = () => {
    axios.get(`${ApiEndpointsUser}/user-gamer-lat-one`).then((response) => {
        document.querySelector('.screen-lat-one-people').innerHTML +=
            '<div class="screen-lat-one-people_gamer">' +
            '<img class="screen-lat-one-people_gamer-img" src="' + response.data.photoURL + '"></img>' +
            '<div class="screen-lat-one-people_gamer-name">' + response.data.name + '</div>' +
            '<div class="screen-lat-one-people_gamer-stavca">' +
            '<div class="screen-lat-one-people_gamer-stavca-sum">Поставил ' + response.data.coin + '</div>' +
            '<div class="screen-lat-one-people_gamer-stavca-coin"></div>' +
            '</div>' +
            '</div>';
        allGaners()
        GameOneSub()
    })
}

const NewGamerOneSub = (coin) => {
    axios.post(`${ApiEndpointsUser}/user-new-gamer-lat-one`, {
        id_user: user_id,
        coin: coin
    })
}

const GetAllGamerOne = () => {
    axios.get(`${ApiEndpointsUser}/user-all-gamer-lat-one`,).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            document.querySelector('.screen-lat-one-people').innerHTML +=
                '<div class="screen-lat-one-people_gamer">' +
                '<img class="screen-lat-one-people_gamer-img" src="'+ element.photoURL +'"></img>' +
                '<div class="screen-lat-one-people_gamer-name">'+ element.name +'</div>' +
                '<div class="screen-lat-one-people_gamer-stavca">' +
                '<div class="screen-lat-one-people_gamer-stavca-sum">Поставил '+ element.coin +'</div>' +
                '<div class="screen-lat-one-people_gamer-stavca-coin"></div>' +
                '</div>' +
                '</div>';
        }
        allGaners()
    })
}

const allGaners = () => {
    var arrSum = []
    const win_lat_one = document.querySelector('.screen-lat-one-people')
    const gamer = win_lat_one.querySelectorAll('.screen-lat-one-people_gamer')
    for (let i = 0; i < gamer.length; i++) {
        const element = gamer[i];
        var sum = element.querySelector('.screen-lat-one-people_gamer-stavca-sum').innerText.split(' ')[1]
        arrSum.push(sum)        
    }
    $('#pep_one').text(`${arrSum.length} чел`)
    const summaCoin = arrSum.reduce((acc, number) => parseInt(acc) + parseInt(number), 0);
    $('#stavca_one').text(summaCoin)

}





// вторая игра

const GameTwoSub = () => {
    axios.get(`${ApiEndpointsUser}/user-gamer-lat-two`).then((response) => {
        if (response.data.comand == "people") {
            document.querySelector('.screen-lat-two-gamer-people').innerHTML +=
                '<div class="screen-lat-two-gamer-card">' +
                '<img class="screen-lat-two-gamer-card-img" src="'+ response.data.photoURL +'" ></img>' +
                '<div class="screen-lat-two-gamer-card-sum">' +
                '<div class="screen-lat-two-gamer-card-sum-s">'+ response.data.coin +'</div>' +
                '<div class="screen-lat-two-gamer-card-coin-s"></div>' +
                '</div>' +
                '</div>';
        } else {
            document.querySelector('.screen-lat-two-gamer-bot').innerHTML +=
                '<div class="screen-lat-two-gamer-card">' +
                '<img class="screen-lat-two-gamer-card-img" src="'+ response.data.photoURL +'"></img>' +
                '<div class="screen-lat-two-gamer-card-sum">' +
                '<div class="screen-lat-two-gamer-card-sum-s">'+ response.data.coin +'</div>' +
                '<div class="screen-lat-two-gamer-card-coin-s"></div>' +
                '</div>' +
                '</div>';
        }


        allGanersTwo()
        GameTwoSub()
    })
}

const NewGamerTwoSub = (coin, cmd) => {
    axios.post(`${ApiEndpointsUser}/user-new-gamer-lat-two`, {
        id_user: user_id,
        coin: coin,
        cmd: cmd
    })
}


const GetAllGamertwo = () => {
    axios.get(`${ApiEndpointsUser}/user-all-gamer-lat-two`,).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            if (element.comand == "people") {
                document.querySelector('.screen-lat-two-gamer-people').innerHTML +=
                    '<div class="screen-lat-two-gamer-card">' +
                    '<img class="screen-lat-two-gamer-card-img" src="'+ element.photoURL +'" ></img>' +
                    '<div class="screen-lat-two-gamer-card-sum">' +
                    '<div class="screen-lat-two-gamer-card-sum-s">'+ element.coin +'</div>' +
                    '<div id="pep-s" class="screen-lat-two-gamer-card-coin-s"></div>' +
                    '</div>' +
                    '</div>';
            } else {
                document.querySelector('.screen-lat-two-gamer-bot').innerHTML +=
                    '<div class="screen-lat-two-gamer-card">' +
                    '<img class="screen-lat-two-gamer-card-img" src="'+ element.photoURL +'"></img>' +
                    '<div class="screen-lat-two-gamer-card-sum">' +
                    '<div id="bot-s" class="screen-lat-two-gamer-card-sum-s">'+ element.coin +'</div>' +
                    '<div class="screen-lat-two-gamer-card-coin-s"></div>' +
                    '</div>' +
                    '</div>';
            }
        }
        allGanersTwo()
    })
}


const allGanersTwo = () => {
    const win_lat_two = document.querySelector('.screen-lat-two-gamer')

    const win_lat_two_g1 = win_lat_two.querySelector('.screen-lat-two-gamer-bot')
    const gb = win_lat_two_g1.querySelectorAll('.screen-lat-two-gamer-card')

    const win_lat_two_g2 = win_lat_two.querySelector('.screen-lat-two-gamer-people')
    const gp = win_lat_two_g2.querySelectorAll('.screen-lat-two-gamer-card')

    var arrBotCoin = []
    for (let i = 0; i < gb.length; i++) {
        const element = gb[i];
        var coinSum = element.querySelector('.screen-lat-two-gamer-card-sum-s').innerText
        arrBotCoin.push(coinSum)
    }
    const summaCoinBot = arrBotCoin.reduce((acc, number) => parseInt(acc) + parseInt(number), 0);
    $('#slChel').text(summaCoinBot)

    var arrPeopleCoin = []
    for (let i = 0; i < gp.length; i++) {
        const element = gp[i];
        var coinSum = element.querySelector('.screen-lat-two-gamer-card-sum-s').innerText
        arrPeopleCoin.push(coinSum)
    }
    const summaCoinPeople = arrPeopleCoin.reduce((acc, number) => parseInt(acc) + parseInt(number), 0);
    $('#slBot').text(summaCoinPeople)

    $('#userUch').text(`${arrBotCoin.length + arrPeopleCoin.length} чел`)
    $('#obch_stavca_two').text(summaCoinBot + summaCoinPeople)
}


// регистрация

const ApiRegistr = (name) => {
    axios.post(`${ApiEndpointsUser}/user-reg`, {
        id_user: user_id,
        photoURL: photo_user,
        userName: name
    }).then((response) => {
        if (response.data == 'Введите ник') {
            $('.next').css('background-color', 'red')
            $('.next').css('color', 'white')
            $('.next').text(response.data)
        } else if (response.data == 'Ник занят') {
            $('.next').css('background-color', 'red')
            $('.next').css('color', 'white')
            $('.next').text(response.data)
        } else if (response.data.message == 'Успешно') {
            $('.next').css('background-color', 'rgb(0, 231, 0)')
            $('.next').css('color', 'black')
            $('.next').text(response.data.message)
            $('.screen-hello').animate({ opacity: '0' }, 300)
            setTimeout(() => {
                $('.screen-hello').css('display', 'none')
                screen_load(response)
            }, 300);
        }
    })
}



const ApiClickCoin = () => {
    axios.post(`${ApiEndpointsUser}/user-new-click`, {
        id_user: user_id,
    }).then((response) => {
        screen_load(response)
    })
}



// вывод данных пользователя

const screen_load = (response) => {
    $('.screen-one-sum-coin-amount').text(parseFloat(response.data.user.coin).toFixed(10)) // коин главный экран
    $('.screen-account-info-user-check').text(parseFloat(response.data.user.coin).toFixed(10)) // коин аккаунт экран
    $('.screen-account-info-user-name').text(response.data.user.userName) // имя аккаунт экран
    $('#rfc-user').text(response.data.user.meRefCode) // реф код
    $('#amount-click').text(parseFloat(response.data.user.mouse).toFixed(10)) // клики
    $('#amount-miner').text(parseFloat(response.data.user.cpu).toFixed(10)) // майнинг
    $('.screen-account-info-user-photo').prop('src', response.data.user.photoURL) // фото ссылка

    $('#ref-code-user').val(response.data.user.ToRefCode)
    $('#ref-code-user').prop('disabled', true);
    $('#save-code').css('color', '#00ff00');
    $('#save-code').text('Код сохранен');
    try {


        for (let i = 0; i < response.data.userGPU.length; i++) {
            const element = response.data.userGPU[i];
            document.getElementById('gpu').innerHTML +=
                '<div class="screen-shop-container-card">' +
                '<div class="screen-shop-container-card-name">Видеокарта ' + element.name + '</div>' +
                '<div class="screen-shop-container-card-check">' + element.sum + '</div>' +
                '<div class="screen-shop-container-card-block-info">' +
                '<div class="screen-shop-container-card-bust">Буст: <span>' + parseFloat(element.bust).toFixed(10) + '</span></div>' +
                '<div class="screen-shop-container-card-price">Цена: <span>' + parseFloat(element.price).toFixed(10) + '</span></div>' +
                '<div id="g-' + element.id + '" class="screen-shop-container-card-block-info-add"></div>' +
                '</div>' +
                '</div>';
        }

        for (let i = 0; i < response.data.userCPU.length; i++) {
            const element = response.data.userCPU[i];
            document.getElementById('cpu').innerHTML +=
                '<div class="screen-shop-container-card">' +
                '<div class="screen-shop-container-card-name">Видеокарта ' + element.name + '</div>' +
                '<div class="screen-shop-container-card-check">' + element.sum + '</div>' +
                '<div class="screen-shop-container-card-block-info">' +
                '<div class="screen-shop-container-card-bust">Буст: <span>' + parseFloat(element.bust).toFixed(10) + '</span></div>' +
                '<div class="screen-shop-container-card-price">Цена: <span>' + parseFloat(element.price).toFixed(10) + '</span></div>' +
                '<div id="c-' + element.id + '" class="screen-shop-container-card-block-info-add"></div>' +
                '</div>' +
                '</div>';
        }

        for (let i = 0; i < response.data.userMouse.length; i++) {
            const element = response.data.userMouse[i];
            document.getElementById('mouse').innerHTML +=
                '<div class="screen-shop-container-card">' +
                '<div class="screen-shop-container-card-name">Видеокарта ' + element.name + '</div>' +
                '<div class="screen-shop-container-card-check">' + element.sum + '</div>' +
                '<div class="screen-shop-container-card-block-info">' +
                '<div class="screen-shop-container-card-bust">Буст: <span>' + parseFloat(element.bust).toFixed(10) + '</span></div>' +
                '<div class="screen-shop-container-card-price">Цена: <span>' + parseFloat(element.price).toFixed(10) + '</span></div>' +
                '<div id="m-' + element.id + '" class="screen-shop-container-card-block-info-add"></div>' +
                '</div>' +
                '</div>';
        }
    } catch (error) { }
    return response.data.user.gpu
}



// онлайн кликер

const clickOnline = (gpu) => {
    if (gpu >= 0.0000000001) {
        setInterval(() => {
            axios.post(`${ApiEndpointsUser}/user-new-click-online`, {
                id_user: user_id,
            }).then((response) => {
                screen_load(response)
            })
        }, 1000);
    }
}


// shopAPI

const shopApi = (id) => {
    const id_1 = id.split('-')[0]
    const id_2 = id.split('-')[1]
    if (id_1 == 'g') {
        axios.post(`${ApiEndpointsUser}/user-shop-gpu`, {
            id_user: user_id,
            id_shop: id_2
        }).then((response) => {
            $('.screen-shop-container-card').remove()
            screen_load(response)
        })
    } else if (id_1 == 'c') {
        axios.post(`${ApiEndpointsUser}/user-shop-cpu`, {
            id_user: user_id,
            id_shop: id_2
        }).then((response) => {
            $('.screen-shop-container-card').remove()
            screen_load(response)
        })
    } else if (id_1 == 'm') {
        axios.post(`${ApiEndpointsUser}/user-shop-mouse`, {
            id_user: user_id,
            id_shop: id_2
        }).then((response) => {
            $('.screen-shop-container-card').remove()
            screen_load(response)
        })
    }
}


// top

const TopUser = () => {
    $('.screen-account-top-user-block-us-t').remove()
    axios.get(`${ApiEndpointsUser}/user-top`, {}).then((response) => {
        topclick(response)
        topcoin(response)
    })
}


const topclick = (response) => {
    var mouse = []
    for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];
        mouse.push(parseFloat(element.mouse).toFixed(10))
    }
    mouse.sort((a, b) => {
        return parseFloat(b) - parseFloat(a);
    });
    for (let cl = 0; cl < mouse.length; cl++) {
        const ms = mouse[cl];
        for (let ucl = 0; ucl < response.data.length; ucl++) {
            const uclick = response.data[ucl];
            if (ms == parseFloat(uclick.mouse).toFixed(10)) {
                var id = cl + 1
                document.getElementById('top-click').innerHTML +=
                    '<div class="screen-account-top-user-block-us-t">' +
                    '<div class="screen-account-top-user-block-us-t-num">' + id + '</div>' +
                    '<div class="screen-account-top-user-block-us-t-block-ov">' +
                    '<img class="screen-account-top-user-block-us-t-img" src="' + uclick.photoURL + '"></img>' +
                    '<div class="screen-account-top-user-block-us-t-name-user">' + uclick.userName + '</div>' +
                    '<div class="screen-account-top-user-block-us-t-coin-user">' +
                    '<div class="screen-account-top-user-block-us-t-coin-user-chet">' + parseFloat(uclick.mouse).toFixed(10) + '</div>' +
                    '<div class="screen-account-top-user-block-us-t-coin-user-icon"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
        }
    }
}

const topcoin = (response) => {
    var coin = []
    for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];
        coin.push(parseFloat(element.coin).toFixed(10))
    }
    coin.sort((a, b) => {
        return parseFloat(b) - parseFloat(a);
    });
    for (let c = 0; c < coin.length; c++) {
        const coinArr = coin[c];
        for (let uc = 0; uc < response.data.length; uc++) {
            const userCoin = response.data[uc];
            if (coinArr == parseFloat(userCoin.coin).toFixed(10)) {
                var id = c + 1
                document.getElementById('top-coin').innerHTML +=
                    '<div class="screen-account-top-user-block-us-t">' +
                    '<div class="screen-account-top-user-block-us-t-num">' + id + '</div>' +
                    '<div class="screen-account-top-user-block-us-t-block-ov">' +
                    '<img class="screen-account-top-user-block-us-t-img" src="' + userCoin.photoURL + '"></img>' +
                    '<div class="screen-account-top-user-block-us-t-name-user">' + userCoin.userName + '</div>' +
                    '<div class="screen-account-top-user-block-us-t-coin-user">' +
                    '<div class="screen-account-top-user-block-us-t-coin-user-chet">' + parseFloat(userCoin.coin).toFixed(10) + '</div>' +
                    '<div class="screen-account-top-user-block-us-t-coin-user-icon"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
        }
    }
}


// реф код

const RefCode = (code) => {
    axios.post(`${ApiEndpointsUser}/user-ref`, {
        id_user: user_id,
        ref_code: code
    }).then((response) => {
        if (response.data == 'no code') {
            $('#ref-code-user').css('background', 'red')
        } else {
            $('#ref-code-user').prop('disabled', true);
            $('#save-code').css('color', '#00ff00');
            $('#save-code').text('Код сохранен');
        }
    })
}

const sel_trns = (id, one_value, two_value) => {
    if (id == 'sub-btn-prod') {
        console.log(one_value, two_value);
        axios.post(`${ApiEndpointsUser}/user-sel`, {
            id_user: user_id,
            sum: one_value,
            curs: two_value
        }).then((response) => {
            if (response.data == 'Ввдеите данные') {
                $('#sub-btn-prod').css('background', 'red')
                $('#sub-btn-prod').css('color', 'white')
                $('#sub-btn-prod').text(response.data)
            } else {
                $('#sub-btn-prod').css('background', 'rgb(0, 231, 0)')
                $('#sub-btn-prod').css('color', 'black')
                $('#sub-btn-prod').text(response.data)
                buy_sel_trns()

                setTimeout(() => {
                    $('#sub-btn-prod').text('Создать')
                }, 1000);
            }
        })
    } else {
        axios.post(`${ApiEndpointsUser}/user-trns`, {
            id_user: user_id,
            nameUs2: one_value,
            sum: two_value
        }).then((response) => {
            if (response.data == 'Ввдеите данные') {
                $('#sub-btn-perevod').css('background', 'red')
                $('#sub-btn-perevod').css('color', 'white')
                $('#sub-btn-perevod').text(response.data)

            } else if (response.data == 'Пользователя нет') {
                $('#sub-btn-perevod').css('background', 'red')
                $('#sub-btn-perevod').css('color', 'white')
                $('#sub-btn-perevod').text(response.data)
            } else {
                $('#sub-btn-perevod').css('background', 'rgb(0, 231, 0)')
                $('#sub-btn-perevod').css('color', 'black')
                $('#sub-btn-perevod').text(response.data)
                buy_sel_trns()

                setTimeout(() => {
                    $('#sub-btn-perevod').text('Отправить')
                }, 1000);
            }
        })

    }
}



// получить все прожаи и переводы

const buy_sel_trns = () => {
    $('.screen-sel-sel-block-sssb-card').remove()
    axios.get(`${ApiEndpointsUser}/user-get-sel-tr`).then((response) => {
        for (let sell = 0; sell < response.data.sell.length; sell++) {
            const element = response.data.sell[sell];
            document.querySelector('.sssb-sel').innerHTML +=
                '<div class="screen-sel-sel-block-sssb-card">' +
                '<img id="tg://user?id=' + element.userIdMe + '" src="https://images.icon-icons.com/4054/PNG/512/sell_sale_sign_store_market_item_sold_tag_icon_257967.png">' +
                '<div class="screen-sel-sel-block-sssb-card-nic">' + element.userNameMe + '</div>' +
                '<div class="screen-sel-sel-block-sssb-card-money-curs">' +
                '<div class="screen-sel-sel-block-sssb-card-money-curs-mc">' + element.sum + ' KostroCoin / ' + element.curs + ' руб</div>' +
                '</div>' +
                '</div>';
        }


        for (let trn = 0; trn < response.data.transfer.length; trn++) {
            const element = response.data.transfer[trn];
            if (element.nameUs2 == $('.screen-account-info-user-name').text()) {
                document.querySelector('.sssb-transfe').innerHTML +=
                    '<div class="screen-sel-sel-block-sssb-card">' +
                    '<img src="https://images.icon-icons.com/2313/PNG/512/transfer_man_employee_user_avatar_arrow_refresh_icon_141997.png">' +
                    '<div class="screen-sel-sel-block-sssb-card-nic">' + element.nameUs1 + '</div>' +
                    '<div class="screen-sel-sel-block-sssb-card-money-curs">' +
                    '<div class="screen-sel-sel-block-sssb-card-money-curs-mc">+ ' + element.sum + ' KostroCoin</div>' +
                    '</div>' +
                    '</div>';
            } else if (element.nameUs1 == $('.screen-account-info-user-name').text()) {
                document.querySelector('.sssb-transfe').innerHTML +=
                    '<div class="screen-sel-sel-block-sssb-card">' +
                    '<img src="https://images.icon-icons.com/2313/PNG/512/transfer_man_employee_user_avatar_arrow_refresh_icon_141997.png">' +
                    '<div class="screen-sel-sel-block-sssb-card-nic">' + element.nameUs2 + '</div>' +
                    '<div class="screen-sel-sel-block-sssb-card-money-curs">' +
                    '<div class="screen-sel-sel-block-sssb-card-money-curs-mc">- ' + element.sum + ' KostroCoin</div>' +
                    '</div>' +
                    '</div>';
            }

        }
    })
}



const timer = () => {
    axios.get(`${ApiEndpointsUser}/user-timer`).then((response) => {
        let time = response.data - 1
        setInterval(async function () {
            const res = --time;
            $('#g1').text(`${res} сек`)
            $('#g2').text(`${res} сек`)
            if (!res) {
                time = 300
                OverGameOne()
                OverGameTwo()
                TopGameOne()
                TopGametwo()
            };
        }, 1000)

    })
}

const OverGameOne = () => {
    axios.post(`${ApiEndpointsUser}/user-game-over-one`, {}).then((res) => {
        $('.screen-lat-one-people_gamer').remove()
        if (res.data.name == $('.screen-account-info-user-name').text()) {
            $('.win-anim').css('display', 'block')
            lottie.loadAnimation({
                container: document.querySelector('.one'),
                render: 'svg',
                loop: false,
                autoplay: true,
                path: './assets/animation/AnWinner.json'
            })
            setTimeout(() => {
                $('.one').empty() 
                $('.one').css('display', 'none')
                $('#pep_one').text(`0 чел`)
                $('#stavca_one').text(0)
            }, 2000);
        }
    })
}



const TopGameOne = () => {
    axios.get(`${ApiEndpointsUser}/user-top-user-go`).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
            document.querySelector('.screen-lat-one-top-block').innerHTML +=
                '<div class="screen-sel-sel-block-sssb-card">' +
                '<img src="'+ element.photoURL +'">' +
                '<div class="screen-sel-sel-block-sssb-card-nic">' + element.name + '</div>' +
                '<div class="screen-sel-sel-block-sssb-card-money-curs">' +
                '<div class="screen-sel-sel-block-sssb-card-money-curs-mc">Выиграл ' + element.coin + '</div>' +
                '</div>' +
                '</div>';
        }
    })
}


const OverGameTwo = () => {
    axios.get(`${ApiEndpointsUser}/user-game-over-two`).then((res) => {
        $('.screen-lat-two-gamer-card').remove()
        for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
            if (element == $('.screen-account-info-user-name').text()) {
                $('.win-anim').css('display', 'block')
                lottie.loadAnimation({
                    container: document.querySelector('.two'),
                    render: 'svg',
                    loop: false,
                    autoplay: true,
                    path: './assets/animation/AnWinner.json'
                })
                setTimeout(() => {
                    $('.two').empty() 
                    $('.two').css('display', 'none')
                    $('#slChel').text(0)
                    $('#slBot').text(0)
                    $('#userUch').text(`0 чел`)
                    $('#obch_stavca_two').text(0)
                }, 2000);
            }
        }
    })
}



const TopGametwo = () => {
    $('.screen-sel-sel-block-sssb-card').remove()
    axios.get(`${ApiEndpointsUser}/user-top-user-gt`).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
            if (element.cmd == 'Люди') {
                document.querySelector('.top-one').innerHTML +=
                    '<div class="screen-sel-sel-block-sssb-card">' +
                    '<img src="/assets/img/cmd-user-icon.svg">' +
                    '<div class="screen-sel-sel-block-sssb-card-nic nt">Выиграли ' + element.cmd + '</div>' +
                    '</div>';
            } else {
                document.querySelector('.top-one').innerHTML +=
                    '<div class="screen-sel-sel-block-sssb-card">' +
                    '<img src="/assets/img/cmd-bot-icon.svg">' +
                    '<div class="screen-sel-sel-block-sssb-card-nic nt">Выиграли ' + element.cmd + '</div>' +
                    '</div>';
            }
        }
    })
}


