const userServiceByName = () => {
    console.log("Mocked User name")

    return Promise.resolve(
        {
            "title": "Mrs",
            "first": "Jessika",
            "last": "Dietrich"
        }
    )
}

const userService = () => {
    console.log("Mocked Users");
    return Promise.resolve(
        {
            "results": [
            {
            "gender": "female",
            "name": {
            "title": "Mrs",
            "first": "Jessika",
            "last": "Dietrich"
            },
            "location": {
            "street": {
            "number": 978,
            "name": "Marktplatz"
            },
            "city": "Pinneberg",
            "state": "Thüringen",
            "country": "Germany",
            "postcode": 35975,
            "coordinates": {
            "latitude": "-39.5384",
            "longitude": "66.9446"
            },
            "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
            }
            },
            "email": "jessika.dietrich@example.com",
            "login": {
            "uuid": "829119af-4cee-45c1-81b2-a7a0e1738134",
            "username": "blueostrich539",
            "password": "porno",
            "salt": "X45vWeWg",
            "md5": "4bc7b0995753dfe2e12590f91367dbe9",
            "sha1": "47bd1f56325bcd6575dbc499980353b41aba91bf",
            "sha256": "67bcbec50a7b85513408b8df9a88f8e00548e135f100d3b852fe41d41a3c0cf5"
            },
            "dob": {
            "date": "1981-01-01T18:47:07.064Z",
            "age": 41
            },
            "registered": {
            "date": "2002-11-20T23:29:37.302Z",
            "age": 20
            },
            "phone": "0041-5013601",
            "cell": "0178-4608736",
            "id": {
            "name": "",
            "value": null
            },
            "picture": {
            "large": "https://randomuser.me/api/portraits/women/88.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
            },
            "nat": "DE"
            }
            ],
            "info": {
            "seed": "0410fb8077cbfe43",
            "results": 1,
            "page": 1,
            "version": "1.3"
            }
            }
    )
}

module.exports = {
    userService, 
    userServiceByName
}