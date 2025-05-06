

const ApiEndpointsAdmin = 'http://localhost:3030/api/admin/'


$('.brb').on('click', (e) => {
    var login = document.getElementById(`l1`).value
    var password = document.getElementById(`l2`).value
    axios.post(`${ApiEndpointsAdmin}/sign-up`, {
        login: login,
        password: password,
    }).then((response) => {
        if (response.data == "Не верный логин или пароль") {
            $('.brb').css('background-color', 'red')
            $('.brb').text(response.data)
        } else {
            $('.brb').css('background-color', 'green')
            $('.brb').text('Успешно')
            $('.block-registr').animate({opacity: '0'}, 200)
            setTimeout(() => {
                $('.block-registr').css('display', 'none')
            }, 200);
            allShop()
        }
    })
})


// переключатель между окнами

var btn_menu = [
    "sa-add-remove-money",
    "sa-ban-unban",
    "sa-trach",
    "sa-shop"
]
$('.screen-admin-sa').on('click', (e) => {
    for (let i = 0; i < btn_menu.length; i++) {
        const element = btn_menu[i];
        if (element != e.target.classList[1]) {
            $(`#${element}`).css('display', 'none')
        } else {
            $(`#${element}`).css('display', 'block')
        }
    }
})


// переключатель между созданием магазиа

var btn_menu_shop = [
    "s-gpu",
    "s-cpu",
    "s-mouse",
]
$('.screen-admin-main-block-shop-obsh-ds-fd').on('click', (e) => {
    for (let i = 0; i < btn_menu_shop.length; i++) {
        const element = btn_menu_shop[i];
        if (element != e.target.classList[1]) {
            $(`#${element}`).css('display', 'none')
        } else {
            $(`#${element}`).css('display', 'block')
        }
    }
})



// Заполнение магазинов

$('.screen-admin-main-block-block-new-block-sub').on('click', (e) => {
    var id_btn = e.target.id
    if (id_btn == 'f-gpu') {
        var link = `${ApiEndpointsAdmin}/create-gpu`
        data_input(id_btn, link)
    } else if (id_btn == 'f-cpu') {
        var link = `${ApiEndpointsAdmin}/create-cpu`
        data_input(id_btn, link)
    } else if (id_btn == 'f-mouse') {
        var link = `${ApiEndpointsAdmin}/create-mouse`
        data_input(id_btn, link)
    }
})

const data_input = (id_btn, link) => {
    var id = id_btn.split('-')[1]
    var name = document.getElementById(`s-${id}-name`).value
    var bust = document.getElementById(`s-${id}-bust`).value
    var price = document.getElementById(`s-${id}-price`).value
    axios.post(link, {
        name: name,
        bust: bust,
        price: price
    }).then((response) => {
        if (response.data == 'ok') {
            allShop()
        }
    })
}


const allShop = () => {
    $('.screen-admin-main-block-block-new_card').remove()

    $('.screen-admin-main-block-money-block-user').remove()
    $(".screen-admin-main-block-money-block-user-ban").remove()
    axios.get(`${ApiEndpointsAdmin}/all-shop`).then((response) => {
        console.log(response);
        for (let i = 0; i < response.data.ShopCPU.length; i++) {
            const element = response.data.ShopCPU[i];
            if (element.live == '0') {
                document.querySelector('.d').innerHTML +=
                '<div class="screen-admin-main-block-block-new_card">' +
                '<div class="screen-admin-main-block-block-new_card-txt txt-c">'+ element.name +'</div>' +
                '<div class="screen-admin-main-block-block-new_card-txt">'+ element.bust +'</div>' +
                '<div class="screen-admin-main-block-block-new_card-txt">'+ element.price +'</div>' +
                '<div id="'+ element.id +'" class="screen-admin-main-block-block-new_card-txt-off"></div>' +
                '</div>';
            }

        }

        for (let i = 0; i < response.data.ShopGPU.length; i++) {
            const element = response.data.ShopGPU[i];
            if (element.live == '0') {
                document.querySelector('.s').innerHTML +=
                    '<div class="screen-admin-main-block-block-new_card">' +
                    '<div class="screen-admin-main-block-block-new_card-txt txt-c">'+ element.name +'</div>' +
                    '<div class="screen-admin-main-block-block-new_card-txt">'+ element.bust +'</div>' +
                    '<div class="screen-admin-main-block-block-new_card-txt">'+ element.price +'</div>' +
                    '<div id="'+ element.id +'" class="screen-admin-main-block-block-new_card-txt-off"></div>' +
                    '</div>';
            }
        }

        for (let i = 0; i < response.data.ShopMouse.length; i++) {
            const element = response.data.ShopMouse[i];
            if (element.live == '0') {
                document.querySelector('.v').innerHTML +=
                    '<div class="screen-admin-main-block-block-new_card">' +
                    '<div class="screen-admin-main-block-block-new_card-txt txt-c">'+ element.name +'</div>' +
                    '<div class="screen-admin-main-block-block-new_card-txt">'+ element.bust +'</div>' +
                    '<div class="screen-admin-main-block-block-new_card-txt">'+ element.price +'</div>' +
                    '<div id="'+ element.id +'" class="screen-admin-main-block-block-new_card-txt-off"></div>' +
                    '</div>';
            }
        }



        for (let i = 0; i < response.data.AllUser.length; i++) {
            const element = response.data.AllUser[i];
            document.querySelector('.screen-admin-main-block-money-block').innerHTML +=
                '<div class="screen-admin-main-block-money-block-user">' +
                '<img id="u'+ element.id +'" class="screen-admin-main-block-money-block-user-img i'+ element.id +'" src="'+ element.photoURL +'"></img>' +
                '<div class="screen-admin-main-block-money-block-user-name">'+ element.userName  +'</div>' +
                '<div class="screen-admin-main-block-money-block-user-money">'+ parseFloat(element.coin).toFixed(10)  +'</div>' +
                '</div>';
        }


        for (let i = 0; i < response.data.AllUser.length; i++) {
            const element = response.data.AllUser[i];
            document.querySelector('.screen-admin-main-block-ban-block').innerHTML +=
                '<div class="screen-admin-main-block-money-block-user-ban">' +
                '<img id="u'+ element.id +'" class="screen-admin-main-block-money-block-user-img k'+ element.id +'" src="'+ element.photoURL +'"></img>' +
                '<div class="screen-admin-main-block-money-block-user-name">'+ element.userName  +'</div>' +
                '<div class="screen-admin-main-block-money-block-user-money">'+ parseFloat(element.coin).toFixed(10)  +'</div>' +
                '</div>';
        }
    })
}



function offGPU(e) {
    if (e.target.id) {
        axios.post(`${ApiEndpointsAdmin}/off-gpu`, { id: e.target.id }).then((response) => {
            if (response.data == 'ok') {
                allShop()
            }
        })
    }
}


document.querySelector('.s').addEventListener('click', offGPU)


function offCPU(e) {
    if (e.target.id) {
        axios.post(`${ApiEndpointsAdmin}/off-cpu`, { id: e.target.id }).then((response) => {
            if (response.data == 'ok') {
                allShop()
            }
        })
    }
}


document.querySelector('.d').addEventListener('click', offCPU)


function offMouse(e) {
    if (e.target.id) {
        axios.post(`${ApiEndpointsAdmin}/off-mouse`, { id: e.target.id }).then((response) => {
            if (response.data == 'ok') {
                allShop()
            }
        })
    }
}


document.querySelector('.v').addEventListener('click', offMouse)




// поиск для выдать и забрать 

document.getElementById('s-nic-one').addEventListener('input', (ev) => {

    const value = ev.target.value
    const elasticItems = document.querySelectorAll('.screen-admin-main-block-money-block-user')
    const searchRegExp = new RegExp(value, 'gi')

    if (value === '') {
        elasticItems.forEach((el) => {
            el.classList.remove('hide')
        })
        return
    }

    elasticItems.forEach((el) => {
        const innerCard = el.querySelector('.screen-admin-main-block-money-block-user-name')
        const elementText = innerCard.textContent
        const isContainsSearchRequest = searchRegExp.test(elementText)
        if (!isContainsSearchRequest) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })
})


function DO(e) {
    if (e.target.id) {
        var id = e.target.id.replace('u', '')
        $('.screen-admin-main-block-money-block-user-img').css('border', 'none')
        $(`.${e.target.classList[1]}`).css('border', '2px solid red')
        console.log(id);
        localStorage.setItem('id', id)


        // axios.post(`${ApiEndpointsAdmin}/off-mouse`, { id: e.target.id }).then((response) => {
        //     if (response.data == 'ok') {
        //         allShop()
        //     }
        // })
    }
}

document.querySelector('.screen-admin-main-block-money-block').addEventListener('click', DO)




$('.screen-admin-main-block-money-block-res-btn').on('click', (e) => {
    if (e.target.innerText == 'Выдать') {
        var coin = document.getElementById('in-1').value
        console.log('Выдать', localStorage.getItem('id'), coin);
        axios.post(`${ApiEndpointsAdmin}/coin-plus`, { 
            id: localStorage.getItem('id'),
            sum: coin
        }).then((response) => {
            if (response.data == 'ok') {
                allShop()
            }
        })
    } else if (e.target.innerText == 'Забрать'){
        var coin = document.getElementById('in-1').value
        console.log('забрать', localStorage.getItem('id'), coin);
        axios.post(`${ApiEndpointsAdmin}/coin-minus`, { 
            id: localStorage.getItem('id'),
            sum: coin
        }).then((response) => {
            if (response.data == 'ok') {
                allShop()
            }
        })
    } else if (e.target.innerText == 'Забанить') {
        console.log('Забанить', localStorage.getItem('id'));
        axios.post(`${ApiEndpointsAdmin}/user-ban`, { 
            id: localStorage.getItem('id'),
        }).then((response) => {
            if (response.data == 'ok') {
                allShop()
            }
        })
    } else if (e.target.innerText == 'Разбанить') {
        console.log('Разбанить', localStorage.getItem('id'));
        axios.post(`${ApiEndpointsAdmin}/user-unban`, { 
            id: localStorage.getItem('id'),
        }).then((response) => {
            if (response.data == 'ok') {
                allShop()
            }
        })
    }
})




// поиск для бан / разбан

document.getElementById('s-nic-two').addEventListener('input', ev => {
    const value = ev.target.value
    const elasticItems = document.querySelectorAll('.screen-admin-main-block-money-block-user-ban')
    const searchRegExp = new RegExp(value, 'gi')

    if (value === '') {
        elasticItems.forEach((el) => {
            el.classList.remove('hide')
        })
        return
    }

    elasticItems.forEach((el) => {
        const innerCard = el.querySelector('.screen-admin-main-block-money-block-user-name')
        const elementText = innerCard.textContent
        const isContainsSearchRequest = searchRegExp.test(elementText)
        if (!isContainsSearchRequest) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })
})


function DB(e) {
    if (e.target.id) {
        var id = e.target.id.replace('u', '')
        $('.screen-admin-main-block-money-block-user-img').css('border', 'none')
        $(`.${e.target.classList[1]}`).css('border', '2px solid red')
        console.log(id);
        localStorage.setItem('id', id)
    }
}



document.querySelector('.screen-admin-main-block-ban-block').addEventListener('click', DB)





$('#move-trach').on('click', () => {
    axios.get(`${ApiEndpointsAdmin}/sh-delete`).then((response) => {
        if (response.data == "ok") {
            $('#move-trach').css('background', 'green')
            $('#move-trach').text('Успешно')
            setTimeout(() => {
                $('#move-trach').css('background', '#de7b00')
                $('#move-trach').text('Отчистка поля заявок на продажу монет')
            }, 2000);
        }
    })
})