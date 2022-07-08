var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/static', express.static("src" + '/public'));

consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app);

    const server = app.listen(3000,() => {
        const port = server.address().port;
        console.log(`Servidor ativado - porta: ${port}`);
    });

