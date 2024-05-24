import express from 'express'
import cors from 'cors'
import winston from 'winston'


import proprietariosRouter from './routes/proprietario.router.js'
import animaisRouter from './routes/animal.router.js'



const {combine, timestamp, label, printf } = winston.format
const myFormat = printf(({level, message, label, timestamp})=> {
    return `${timestamp} [${label}] ${level}: ${message}`
})

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new(winston.transports.Console)(),
        new (winston.transports.File)({filename: 'logs/logs.log' })
    ],
    format: combine(
        label({label: 'petshop-api'}),
        timestamp(),
        myFormat
    )
})


const app = express()
app.use(express.json())
app.use(cors())


// rotas=========================
app.use('/proprietario', proprietariosRouter)
app.use('/animal', animaisRouter)



// middleware de erros para salvar no logger
app.use((err, req, res, next) => {
    logger.error(`Erro: ${req.method} ${err.baseUrl} - ${err.message}`)
    res.status(400).send({error: err.message})
})



app.listen(3000, () => {
   // console.log('rodando na porta 3000!')
   logger.info('API Started!')
})