const Router = require('express')
const router = new Router()
const AdminController = require('../controllers/adminController')
const authAdmin = require('../middleware/authAdminMiddleware')


router.post('/sign-up', authAdmin, AdminController.singnUp);



// создание магазин
router.post('/create-gpu', AdminController.createGPU);
router.post('/create-cpu', AdminController.createCPU);
router.post('/create-mouse', AdminController.createMOUSE);

router.get('/all-shop', AdminController.allShop);


router.post('/off-gpu', AdminController.offGPU);
router.post('/off-cpu', AdminController.offCPU);
router.post('/off-mouse', AdminController.offMOUSE);



// user


router.post('/coin-plus', AdminController.PlusCoin);
router.post('/coin-minus', AdminController.MinusCoin);

router.post('/user-ban', AdminController.UserBan);
router.post('/user-unban', AdminController.UserUnban);



router.get('/sh-delete', AdminController.DeleteRecordsShop);




module.exports = router
