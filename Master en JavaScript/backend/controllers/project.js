'use strict'

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home por get'
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el test por post'
        });
    }

};

module.exports = controller;