const fs = require("fs");
const path = require('path');

const filePath = path.resolve(__dirname + "/../public/users.json");

exports.authUser = function (request, response) {
    // read user data
    const content = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(content);

    let formUser = request.body.userName ?? '',
        formPass = request.body.userPass ?? '';

    // check if there is a user with the same name and check pass
    let userMatch = false;
    for (let i = 0; i < Object.keys(users).length; i++) {
        if (users[i]['name'].toLowerCase() == formUser.toLowerCase()) {
            userMatch = true;
            console.log('match found!');
            // check pass
            if (users[i]['password'] == formPass) {

                // request.cookie('userToken', users[i]['token'], {signed: true});

                response.json({'status': 'true', 'success_message': '', 'user_token': users[i]['token']});
            } else {
                console.log('wrong pass');
                response.json({'status': 'false', 'error_message': 'Неверный логин или пароль!'});
            }
        }
    }

    if (!userMatch) {
        console.log('match not found!');
        response.send(JSON.stringify({'status': 'false', 'error_message': 'Такого пользователя не существует!'}));
    }



    // console.log(users);
}

exports.addUser = function (request, response){
    response.send("Добавление пользователя");
};
exports.getUsers = function(request, response){
    response.send("Список пользователей");
};
