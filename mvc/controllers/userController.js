exports.authUser = function (request, response) {
    console.log(request.body);
}

exports.addUser = function (request, response){
    response.send("Добавление пользователя");
};
exports.getUsers = function(request, response){
    response.send("Список пользователей");
};
