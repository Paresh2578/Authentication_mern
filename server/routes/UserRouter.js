const   express = require("express");
const userController =  require("../controllers/userController.js");

const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/forgetPassword", userController.forgetPassword);
router.get("/resetPassword/:id/:token", userController.verifyResetPasswordToken);
router.post("/resetPassword/:id/:token", userController.resetPassword);



module.exports =  router;