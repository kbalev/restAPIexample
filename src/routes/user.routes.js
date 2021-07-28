const { Router } = require('express');
const { createUser, getUsers, getUser, updateUser } = require('../controllers/user.controllers')
const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser)
userRouter.put('/users', updateUser)


module.exports = userRouter;
// do not use {} when importing this into other files.