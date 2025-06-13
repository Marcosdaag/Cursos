'use strict'

var Project = require('../models/project');

var controller = {
    // Funcion home
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home por get'
        });
    },

    // Funcion test
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el test por post'
        });
    },

    // Funcion para guardar
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
                    return res.status(500).send({ error: "Error al guardar el proyecto en la base de datos" });
            });
    },

    // Funcion getProject
    getProject: async function (req, res) {
        var projectId = req.params.id;

        if (projectId == null) return res.status(404).send({ message: "El proyecto no existe" }); // Verificar este if

        try {
            const project = await Project.findById(projectId);
            if (!project) return res.status(404).send({ message: "El proyecto no existe" });
            return res.status(200).send({ project });
        } catch (err) {
            return res.status(500).send({ message: "Error al devolver los datos del proyecto" });
        }
    }

};

module.exports = controller;