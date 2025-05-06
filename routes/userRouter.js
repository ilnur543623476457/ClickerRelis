const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')

router.post('/user-sigin', UserController.SignIn);
router.post('/user-reg', UserController.Registration);


// coin

router.post('/user-new-click', UserController.ClickCoin);
router.post('/user-new-click-online', UserController.ClickCoinOnline);



// shop

router.post('/user-shop-gpu', UserController.ShopGPU);
router.post('/user-shop-cpu', UserController.ShopCPU);
router.post('/user-shop-mouse', UserController.ShopMouse);



// referal

router.post('/user-ref', UserController.UserReferal);


// sell - trans


router.post('/user-sel', UserController.UserSell);
router.post('/user-trns', UserController.UserTransfer);
router.get('/user-get-sel-tr', UserController.GetSelTransfer);







// game

router.get('/user-timer', UserController.GetTimer);


// one game
router.get('/user-gamer-lat-one', UserController.GetGamerLatOne);
router.post('/user-new-gamer-lat-one', UserController.NewGamerLatOne);
router.get('/user-all-gamer-lat-one', UserController.AllGamerLatOne);
router.post('/user-game-over-one', UserController.GameOverOne);
router.get('/user-top-user-go', UserController.GetTopGameOne);

// two game
router.get('/user-gamer-lat-two', UserController.GetGamerLatTwo);
router.post('/user-new-gamer-lat-two', UserController.NewGamerLatTwo);
router.get('/user-all-gamer-lat-two', UserController.AllGamerLatTwo);
router.get('/user-game-over-two', UserController.GameOverTwo);
router.get('/user-top-user-gt', UserController.GetTopGameTwo);





// top

router.get('/user-top', UserController.TopUser);


// timer

router.post('/user-timer-create', UserController.CreateTimer);




// router.post('/registrationChek', UserController.Registration_Chek);
// router.post('/newCoinClick', UserController.NewCoinClick);
// router.post('/NewCoinClickFarm', UserController.NewCoinClickFarm);
// router.post('/NewCoinClickFarmAFK', UserController.NewCoinClickFarmAFK);


// router.post('/NewVideoCard', UserController.NewVideoCard);
// router.post('/NewProccesor', UserController.NewProccesor);
// router.post('/NewMouse', UserController.NewMouse);


// router.post('/bustMS', UserController.bustMS);
// router.post('/bustVC', UserController.bustVC);
// router.post('/bustPR', UserController.bustPR);


// router.post('/RefCodeUser', UserController.RefCodeUser);
// router.post('/RefUser', UserController.RefUser);


// router.post('/SellUser', UserController.SellUser);
// router.post('/AllSellUser', UserController.AllSellUser);


// router.post('/WithdrawCoinUser', UserController.WithdrawCoinUser);
// router.post('/AllWithdrawCoinUser', UserController.AllWithdrawCoinUser);


// router.post('/AllUser', UserController.AllUser);



// router.post('/AllVideoCard', UserController.AllVideoCard);
// router.post('/AllProccesor', UserController.AllProccesor);
// router.post('/AllMouse', UserController.AllMouse);
// router.get('/AllTop', UserController.AllTop);



// router.post('/NewGamerLat', UserController.NewGamerLat);
// router.get('/AllGamersLat', UserController.AllGamersLat);


// router.post('/WithAllGamerVse', UserController.WithAllGamerVse);
// router.post('/WithAllGamerVseOff', UserController.WithAllGamerVseOff);


// router.post('/TopGamer', UserController.TopGamer);
// router.post('/AllRTopLat', UserController.AllRTopLat);


// router.post('/DobCoin', UserController.DobCoin);
// router.post('/DelCoin', UserController.DelCoin);

// router.post('/BanAkk', UserController.BanAkk);




// router.post('/NewGamerLatTwo', UserController.NewGamerLatTwo);
// router.get('/AllGamersLatTwo', UserController.AllGamersLatTwo);

// router.post('/WithAllGamerVseTwo', UserController.WithAllGamerVseTwo);

// router.post('/GetWinUser', UserController.GetWinUser);
// router.post('/GetWinUserAllOff', UserController.GetWinUserAllOff);


// router.post('/AllTopGamerTwoGame', UserController.AllTopGamerTwoGame);





// router.post('/time', UserController.TimeGameOne); // запуск таймера внутри сервера
// router.post('/create-time', UserController.CreateTimeGameOne); // создание бд для таймера





module.exports = router