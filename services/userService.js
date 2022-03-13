const axios = require("axios");

const userService = () => {
    console.log("Real User");
    return axios.get(`${process.env.usersURL}`).then(result => {
        return result.data.results
    })
}


module.exports = {
    userService
}