'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import config from '../config'

import debug from '../../src/helpers/debug'

import projectsRouter from '../../src/projects/routes'
import postsRouter from '../../src/posts/routes'
import linksRouter from '../../src/links/routes'
import infosRouter from '../../src/infos/routes'

const app = express()

const server = {
    start: () => {

        debug.msg('🎉', `Lancement du projet ${config.app.name} !`)

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: true}))

        server.routes()

    },

    routes: () => {

        debug.msg('🛣', `Initialisation des routes.`)

        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

            next()
        });

        app.get('/', (req, res) => {
            const full_url = config.app.hostname + ':' + config.app.port

            res.status(200).json({
                code: 200,
                message: `${config.app.name} — Bienvenue`,
                version: config.app.version,
                base_url: full_url,
                documentation_urls: `${full_url}/doc`
            })
        })

        app.use('/projects', projectsRouter)
        app.use('/posts', postsRouter)
        app.use('/links', linksRouter)
        app.use('/infos', infosRouter)

        server.listen()

    },

    listen: () => {

        app.listen(config.app.port, err => {
            if (err) throw err

            debug.msg('🚀', `Serveur bien lancé sur le port ${config.app.port}.`)
            debug.msg('🍃', `L'environnement actuel est en ${process.env.NODE_ENV}.`)
        })

        server.errors()

    },

    errors: () => {

        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            var err = new Error('Not Found')
            err.status = 404

            next(err)
        })

        app.use(function (err, req, res, next) {
            res.locals.message = err.message
            res.locals.error = req.app.get('env') === 'development' ? err : {}

            res.status(err.status || 500).json({
                status: err.status || 500,
                message: err.message
            })
        })

    }
}

export default server
