const express =  require("express");

const connect = require("./configs/db")

const app = express();

const userController = require("./controllers/users.controllers");

app.use("/users", userController)


app.listen(2244, async()=>{
    await connect()
    console.log("listening on port 2244");
})