const axios = require("axios");

const userService = () => {
    console.log("Real User");
    return axios.get(`${process.env.usersURL}`).then(result => {
        return result.data
    })
}

const userServiceByName = () => {
    console.log("Real User by Key");
    return axios.get(`${process.env.usersURL}`).then(result => {
        return result.data.results[0].name
    })
}

module.exports = {
    userService,
    userServiceByName
}