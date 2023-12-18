const router = require ('express').Router(); // express router is used to define endpoints for HTTP methods 

const controller = require('../controller/controller') // controllers are required for routes to work

//

router.post("/createUser", controller.createUser)              // POST ROUTE

router.get("/readUser", controller.readUser)                   // GET ROUTE

router.put("/updateUser", controller.updateUser)               // PUT ROUTES

router.put("/updatePassword", controller.updatePassword)

router.delete("/deleteUser", controller.deleteUser)            // DELETE ROUTE




module.exports = router; //router is exported to use on index file as soon as server starts