exports.index = function (request, response) {
    // response.send("Главная страница");
    response.render('main_screen', {
        title: 'Auth',
        text1: 'test text'
    });
};
exports.about = function (request, response) {
    response.send("О сайте");
};
