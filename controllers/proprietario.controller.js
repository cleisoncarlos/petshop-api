import ProprietarioService from "../services/proprietario.service.js";
import AnimalService from '../services/animal.service.js'

async function createProprietario(req, res, next){
    try {
        let proprietario = req.body;        
        if (!proprietario.nome || !proprietario.telefone){
            throw new Error('Todas as informações são obrigatórias !')
        }
        proprietario = await ProprietarioService.createProprietario(proprietario)
           res.send(proprietario)
           logger.info(`POST / proprietario - ${JSON.stringify(proprietario)}`)

    }catch(err) {
        next(err)
    }
}

//=======================================================

async function getProprietarios (req, res, next){
    try {
        res.send(await ProprietarioService.getProprietarios())
        logger.info('GET /proprietario')
} catch (err){
    next(err)
}
}

//=======================================================

async function getProprietario (req, res, next){
    try {       
        res.send(await ProprietarioService.getProprietario(req.params.id))
           logger.info('GET /proprietario')
} catch (err){
    next(err)
}
}

//=======================================================

async function deleteProprietario (req, res, next){
    try {    
         console.info(`Verificando animais associados ao proprietário com ID: ${req.params.id}`);
        
        // Verifica se há animais associados ao proprietário
        const animais = await AnimalService.findByProprietarioId(req.params.id);
        console.info(`Animais encontrados: ${animais.length}`);

        if (animais.length > 0) {
            const error = new Error('Não é possível excluir o proprietário porque existem animais associados a ele.');
            error.status = 400;
            throw error;
        }

        await ProprietarioService.deleteProprietario(req.params.id)      
        res.end()
           logger.info('DELETE /proprietario')
} catch (err){
    next(err)
}
}

//========================================================

async function updateProprietario (req, res, next){
    try {      
                
        let proprietario = req.body;           
        
           // Verifica se o proprietário existe
           const existingProprietario = await ProprietarioService.getProprietario(proprietario.proprietario_id);
           if (!existingProprietario) {
               throw new Error('Proprietário não encontrado!');
           }

// verifica se passou todas as informações
        if (!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone){
            throw new Error('Todas as informações são obrigatórias !')
        }
        proprietario = await ProprietarioService.updateProprietario(proprietario)
           res.send(proprietario)
        logger.info(`PUT / proprietario - ${JSON.stringify(proprietario)}`)
     
} catch (err){
    next(err)
}
}

export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}