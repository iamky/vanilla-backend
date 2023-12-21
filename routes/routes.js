const router = require ('express').Router();
const controller = require('../controller/controller');
router.post("/createUser", controller.createUser)        
router.get("/readUser", controller.readUser)            
router.put("/updateUser", controller.updateUser)           
router.put("/updatePassword", controller.updatePassword)
router.delete("/deleteUser", controller.deleteUser)
module.exports = router;