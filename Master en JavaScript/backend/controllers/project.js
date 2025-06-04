'use strict'

var Project = require('../models/project');

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
    },

    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save().then((projectStored) => {
            return res.status(200).send({
                message: "proyecto guardado",
                project: projectStored,
            });
        })

            .catch((error) => {
                if (!projectStored)
                    return res.status(404).send({ message: "no se ha podido guardar el proyecto" });

                if (error)
                    return res.status(500).send({ error: "Error al guardar el proyecto" });
            });
    }

};

module.exports = controller;