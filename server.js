const express = require("express");
require("dotenv").config()

const {todoService, todoServiceById} = require("./services/todoService");
const {userService, userServiceByName} = require("./services/userService")

const app=express();

//for localhost:3000/
app.get("/", (req, res, next)=>{
    res.status(200).send("Service is UP!!")
})

// localhost:3000/todo
app.get("/todo", (req,res,next)=>{
    todoService().then(result=>res.status(200).json(result).
    catch(err=res.status(501).json({
        error: {
            message: err.message,
            status: err.status
        }
    })))
})


// localhost:3000/todo/:id
app.get("/todo/:todoId", (req,res,next)=>{
    const todoId = req.params.todoId;
    todoServiceById(todoId).then(result=>res.status(200).json(result).
    catch(err=res.status(501).json({
        error: {
            message: err.message,
            status: err.status
        }
    })))
})

// localhost:3000/users
app.get("/users", (req,res,next)=>{
    userService().then(result=>res.status(200).json(result).
    catch(err=res.status(501).json({
        error: {
            message: err.message,
            status: err.status
        }
    })))
})
// localhost:3000/users/name
app.get("/users/name", (req,res,next)=>{
    const userKey = req.params.userKey;
    userServiceByName().then(result=>res.status(200).json(result).
    catch(err=res.status(501).json({
        error: {
            message: err.message,
            status: err.status
        }
    })))
})

//Error handle
app.use((req,res,next) =>{
    const error = new Error("NOT FOUND!!");
    error.status= 404;
    next(error);
})
app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error:{
        message:error.message,
        status: error.status,
        method: req.method
        }
    })
})

//Listen on port 3000
app.listen(`${process.env.port}`, ()=> {
    console.log(`Server starting on port ${process.env.port}`)
});