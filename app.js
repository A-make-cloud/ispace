const express = require('express')

const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');


const app = express()

//***********************************************DEMARRER npm run start
// 5h00 min

//les différnents types d'erreurs et status pas noté à 4h35

// https://www.youtube.com/watch?v=NRxzvpdduvQ&t=13134s

const port = 4003
//app.js sert ici seulement à démarrer le server http

//route permettant de récupérerles données de la bdd=> method findAll() de sequelize
//on combine favicon à morgan
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

//a permis de remplir la table dans la bdd mysql 
sequelize.initDb();

//Ici nous placerons nos futurs points de terminaisons
require('./src/routes/findAllPokemons')(app)
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokemon')(app)


// ...
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))