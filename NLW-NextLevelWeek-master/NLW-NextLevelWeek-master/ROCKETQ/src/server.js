const express = require('express')
const route = require('./route')
const path = require('path')

//Esse abre e fecha parêntesis abaixo inicia o express
const server = express()

//Quem vai ser o responsável por nossa view engine vai ser o nosso ejs
server.set('view engine', 'ejs')

server.use(express.static("public"))



// Path pega o caminho da pasta que está o projeto, join = juntar, dirname pega o nome da pasta que o 
// arquivo está, ou seja , dirname==src/. Enfim, é a mesma coisa que escrever o caminho relativo 
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))


server.use(route)

//listen é uma funcionalidade que existe dentro do express
server.listen(3000, () => console.log("Rodando"))

// Para evitar ficar escrevendo comandos repetidos no terminal, vá em package.json e define eles lá 
// obs: Para rodar, não será mais node e sim npm


