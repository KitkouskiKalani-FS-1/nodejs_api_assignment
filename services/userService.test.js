const {
    userService,
    userServiceByName
} = require("./userService")

jest.mock("./userService.js")

describe("User Service Tests",()=>{
    test("should return results of a user", async() =>{
        const result = await userService();

        expect(result.results[0].gender).toEqual("female");
        expect(result.results[0].phone).toEqual("0041-5013601");
        expect(result.results[0].email).toEqual("jessika.dietrich@example.com");
        expect(result.results[0].location.city).toEqual("Pinneberg");
        expect(result.results[0].picture.medium).toEqual("https://randomuser.me/api/portraits/med/women/88.jpg");
    });

    test("should return a users full name", async() =>{
        const result = await userServiceByName();

        expect(result.title).toEqual("Mrs");
        expect(result.first).toEqual("Jessika");
        expect(result.last).toEqual("Dietrich");
    })
})