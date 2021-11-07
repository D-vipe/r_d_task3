exports.index = function (request, response) {
    // response.send("Главная страница");
    response.render('main_screen', {
        title: 'Home',
        text1: 'test text'
    });
};
exports.about = function (request, response) {
    response.send("О сайте");
};
