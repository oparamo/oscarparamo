var controllers = require('../controllers').home;

module.exports =  [
    {
        method: 'GET',
        path: '/',
        handler: controllers.get
    },
    {
        method: 'POST',
        path: '/',
        handler: function (request, reply) {
            reply('Hello POST!');
        }
    }
];
